export interface HomeProps {
  title: string;
  subtitle: string;
  description: string;
}

export interface AboutProps {
  description: string;
  image?: any;
}

export interface TranslationProps {
  language: string;
  handleOnClick?: () => void;
}
