import { ProjectsDataProps } from "./model";

export const projectData: ProjectsDataProps[] = [
  {
    id: 0,
    title: "FriendliAI Internship",
    period: "2023.09 - 2023.12",
    description:
      "- Led the conceptualization, proof of concept, and design development of model serving for generative AI engine \n\n - Created a Generative AI web service using React.js and TypeScript",
    stack: "React, TypeScript, Eslint, Prettier, husky, Amplitude, Sentry",
    category: "Web",
    image_tag: "fai",
  },
  {
    id: 1,
    title: "CourseAdvisor - Driving Course Sharing Platform",
    period: "2022.09 - 2022.12",
    description:
      "Conceptualized and implemented a map system by integrating T-map routes API and the KakaoMap library \n\n - Engaged in proactive problem-solving discussions during each sprint as part of the agile development process \n\n - Improved code reliability and quality over 80% through implementation of test cases with Jest and SonarCloud",
    stack:
      "React, TypeScript, Eslint, Prettier, Jest, SonarCloud, Tmap API, KakaoMap",
    link: "https://github.com/swsnu/swppfall2022-team12",
    linkName: "CourseAdvisor GitHub",
    category: "Web",
    image_tag: "drive",
  },
  {
    id: 2,
    title: "Evaluation of Cardinality Estimation in DBMS",
    period: "2022.03 - 2022.06",
    description:
      "- Partnered with SAP Labs Korea to evaluate a data-driven cardinality estimation strategy using machine learning \n\n - Maintained clear and proactive communication, delivering regular updates and progress reports to the company \n\n- Identified project challenges and set strategies through discussion, ensuring the project stayed on track",
    stack: "Python, Pytorch, SQL, Machine Learning, Data Analysis",
    category: "ML",
    image_tag: "flat",
  },
  {
    id: 3,
    title: "SAP Labs Korea Internship",
    period: "2022.01 - 2022.02",
    description:
      "- Catalyzed the expansion of the SAP HANA Cloud load simulator, optimizing its scalability for diverse use case \n\n - Engineered custom resources using the Kubernetes Python API, amplifying the simulator's versatility \n\n - Orchestrated monitoring via Grafana, ensuring the precise allocation of custom resources for optimal performance",
    stack:
      "Kubernetes, Grafana, Python, SAP HANA Cloud, Load Simulator, DevOps",
    category: "Cloud",
    image_tag: "sap",
  },
  {
    id: 4,
    title: "StackOverflow Clone Coding",
    period: "2021.08 - 2022.02",
    description:
      "- Student Management Website Development, Stackoverflow Clone Coding \n\n - Learn overall web programming knowledge, including React, JavaScript, TypeScript, CSS, SCSS, and more, and the process of collaborating as a developer.",
    stack: "React, Node.js, MongoDB, AWS",
    link: "https://github.com/wafflestudio19-5/team1-web?tab=readme-ov-file",
    linkName: "StackOverflow Clone Coding GitHub",
    category: "Web",
    image_tag: "waffle",
  },
  {
    id: 5,
    title: "Multilingual Mixed OCR with Reinforcement Learning",
    period: "2021.07 - 2021.08",
    description:
      "- The Text Recognition Data Generator (TRDG) is an open source tool designed to generate text image samples used to train OCR models. \n\n- Modified to generate text data in multiple languages based on data examples from the paper <Multilingual Mixed OCR with Reinforcement Learning>. \n\n- Achieving high accuracy for multilingual text containing Korean, Japanese, Chinese, and English is a major challenge, as existing OCR systems perform differently for each language.",
    stack: "Python, PyTorch, OCR, Reinforcement Learning, Data Augmentation",
    category: "ML",
    image_tag: "ocr",
  },
  {
    id: 6,
    title: "Web/App Startup Camp",
    period: "2021.01 - 2021.01",
    description: "Project Description",
    stack: "Sprint, Agile, Scrum, Design Thinking, Lean Startup",
    category: "Design",
    image_tag: "sprint",
  },
];
