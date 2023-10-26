import { ProjectsDataProps } from "./model";

export const localProjectsData: ProjectsDataProps[] = [
  {
    id: 1,
    category: "Web",
    title: "FriendliAI Internship",
    period: "2022.09 ~ 2022.12",
    description:
      "Led the development of a generative AI model serving system and created     a monitoring service with Prometheus and Grafana for visualizing metrics.      Improved efficiency and cost-effectiveness by implementing GitHub Actions with a self-hosted runner for Nx-cloud-ci.",
    stack: "React, TypeScript, Kubernetes, GitHub Actions, Prometheus, Grafana",
    image_tag: "fai",
  },
  {
    id: 2,
    category: "Cloud",
    title: "SAP Labs Korea Internship",
    period: "2022.01 ~ 2022.02",
    description:
      "Extensions and experiments of HANA Cloud load generation simulation tool for        evaluating the scalability and resiliency of microservices in HANA Cloud environment in Cloud Data team.",
    stack: "Python, Kubernetes, Grafana",
    image_tag: "sap",
  },
  {
    id: 3,
    category: "Web",
    title: "CourseAdvisor - Diriving Course Sharing Platform",
    period: "2022.09 ~ 2022.12",
    description:
      "Designed and developed a web application for a drive course sharing platform, combining KakaoMap and Tmap APIs.     The application allowed users to create and view driving courses, leading to positive feedback during demonstrations.",
    stack: "React, TypeScript, Jest, SonarCloud, Django",
    image_tag: "drive",
  },
  {
    id: 4,
    category: "ML",
    title: "Evaluation of Cardinality Estimation in DBSM",
    period: "2022.03 ~ 2022.06",
    description:
      "Assessed advanced data-driven learning algorithms to enhance cardinality estimation in a database system. We introduced FLAT, a method using     factorize-sum-split-product networks to model attribute correlations efficiently. Learned about DBMS internals, query optimizer roles, and implemented a multi-table algorithm.",
    stack: "Pytorch, Python",
    image_tag: "flat",
  },
  {
    id: 5,
    category: "ML",
    title: "Multi-Language OCR Data Generation",
    period: "2021.07 ~ 2021.08",
    description:
      "The Text Recognition Data Generator (TRDG) is an open-source tool designed     for creating text image samples used in OCR model training. It has been modified      to generate text data in multiple languages, building upon data examples from the paper <Multilingual Mixed OCR with Reinforcement Learning> The primary challenge addressed is achieving high accuracy for multilingual texts containing Korean, Japanese, Chinese, and English characters, as existing OCR systems perform differently across these languages.",
    stack: "Pytorch, Python, Google Colab",
    image_tag: "ocr",
  },
  {
    id: 6,
    category: "Design",
    title: "Web/App Design Startup Camp",
    period: "2020.01 ~ 2020.01",
    description:
      "Planned an app, LinkU, with a unique approach to address issues in existing dating apps. LinkU focuses on fostering deeper connections through bonding and mission-based activities, aiming to lead to more serious relationships and friendships. User interviews helped confirm the app's low-pressure entry, hobby-based matching, and engaging conversation features. Learned importance of defining problems clearly, offering solutions along with criticism, and working effectively in short sprints.",
    stack: "Sprints",
    image_tag: "sprint",
  },
];
