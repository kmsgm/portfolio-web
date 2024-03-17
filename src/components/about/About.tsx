import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import "./About.css";
// import { api } from "../../api/api";
import { ReactComponent as FileDownloadIcon } from "../../assets/file-download-alt.svg";
import { AboutProps } from "../../interface/interface";
import WordCloud from "./chart/WordCloud";
import { TranslationProps } from "../../interface/interface";

import KOR from "../../translate/kor.json";

const resumeLink =
  "https://drive.google.com/file/d/1HpJvuz3wG3S9geXldWjzLhtf3tooZ3sX/view?usp=sharing";

function About({ language }: TranslationProps) {
  const [aboutData, setAboutData] = useState<AboutProps>();

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const description =
          "I am a person who enjoys challenges and seeks growth in various fields. I studied computer science and psychology at university and gained international experience through an exchange at Lund University. Through internships and team projects, I learned problem-solving and effective communication skills. I believe that working as a team, communicating and solving problems together rather than individually, is the environment where you can truly grow.";
        setAboutData({ description });
        // const data = await api.getAboutData();
        // setAboutData(data);
      } catch (error: any) {
        toast.error(`About: ${error.message}`);
      }
    };

    fetchAboutData();
  }, []);

  return (
    <section className="about section" id="about">
      <h2 className="section__title">About me</h2>
      <span className="section__subtitle">My introduction</span>
      <div className="about__container container grid">
        <div className="about__chart">
          <WordCloud width={400} height={400} />
        </div>
        <div className="about__data">
          <p
            className={
              language === "KOR"
                ? "kor_about__description"
                : "about__description"
            }
          >
            {language === "KOR"
              ? KOR.About.description
              : aboutData?.description}
          </p>
          <button
            className="button button--flex"
            onClick={() => window.open(resumeLink, "_blank")}
          >
            Download Resume
            <FileDownloadIcon className="download-icon" />
          </button>
        </div>
      </div>
      <Toaster />
    </section>
  );
}

export default About;
