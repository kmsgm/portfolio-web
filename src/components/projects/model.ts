type Image = {
  id: number;
  url: string;
};

export interface ProjectsDataProps {
  id: number;
  images: Image[];
  title: string;
  period: string;
  description: string;
  stack: string[];
  category: string;
}

export interface ProjectsNavProps {
  name: string;
}
