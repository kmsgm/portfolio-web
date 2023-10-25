import React, { useState, useEffect } from "react";
import SwiperCore, { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { ProjectsDataProps } from "./model";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import { projectsImages } from "./images";

function ProjectItem({
  title,
  period,
  description,
  stack,
  image_tag,
}: ProjectsDataProps) {
  SwiperCore.use([Pagination, Navigation]);

  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const filteredProject = projectsImages.find(
      (project) => project.tag === image_tag
    );
    const resultImages = filteredProject ? filteredProject.images : [];

    setImages(resultImages);
  }, [image_tag]);

  return (
    <div className="project__card grid">
      {images && images.length > 1 ? (
        <Swiper
          pagination={{
            type: "fraction",
          }}
          navigation
          className="project__imgs"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt="" className="project__img" />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="project__imgs">
          {images?.map((image, index) => (
            <img key={index} src={image} alt="" className="project__img" />
          ))}
          {images?.length === 0 && <p>No images available</p>}
        </div>
      )}
      <div className="project__content">
        <h3 className="project__title">{title}</h3>
        <span className="project__period">{period}</span>
        <p className="project__description">{description}</p>
        <div className="project__stacks-data">
          <i className="bx bx-badge-check about__icon" />
          <h3 className="project__stack-name">{stack}</h3>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
