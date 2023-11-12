import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import { api } from "../../api/api";
import { ReactComponent as CIcon } from "../../assets/skills/c.svg";
import { ReactComponent as CSSIcon } from "../../assets/skills/css.svg";
import { ReactComponent as HtmlIcon } from "../../assets/skills/html.svg";
import { ReactComponent as JSIcon } from "../../assets/skills/javascript.svg";
import { ReactComponent as PythonIcon } from "../../assets/skills/python.svg";
import { ReactComponent as ReactIcon } from "../../assets/skills/react.svg";
import { ReactComponent as TSIcon } from "../../assets/skills/typescript.svg";
import { HomeProps } from "../../interface/interface";
import { TranslationProps } from "../../interface/interface";

import KOR from "../../translate/kor.json";

const Icons = [
  <PythonIcon />,
  <CIcon />,
  <HtmlIcon />,
  <CSSIcon />,
  <JSIcon />,
  <TSIcon />,
  <ReactIcon />,
];

function Info({ language }: TranslationProps) {
  const [homeData, setHomeData] = useState<HomeProps>();

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const data = await api.getHomeData();
        setHomeData(data);
      } catch (error: any) {
        toast.error(`Home: ${error.message}`);
      }
    };

    fetchHomeData();
  }, []);

  return (
    <div>
      {homeData ? (
        <div className="home__data">
          <h1 className="home__title">
            {language === "KOR" ? KOR.Home.title : homeData.title}
          </h1>
          <h3 className="home__subtitle">
            {language === "KOR" ? KOR.Home.subtitle : homeData.subtitle}
          </h3>
          <p className="home__description">
            {language === "KOR" ? KOR.Home.description : homeData.description}
          </p>
          <div className="home__skills grid">
            <h3>Skills</h3>
            <ul className="skill__list">
              {Icons.map((Icon, index) => (
                <li key={index} className="skill-icon">
                  {Icon}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
      <Toaster />
    </div>
  );
}

export default Info;
