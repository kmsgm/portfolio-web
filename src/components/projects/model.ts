export interface ProjectsDataProps {
  id: number;
  title: string;
  period: string;
  description: string;
  stack: string;
  link?: string;
  linkName?: string;
  category?: string;
  image_tag: string;
}

export interface ProjectsNavProps {
  name: string;
}

export interface ProjectsImagesProps {
  tag: string;
  images: string[];
}
