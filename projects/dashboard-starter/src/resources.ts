export type ArticleResource = {
  id: number;
  title: string;
  author: string;
  formattedDate: string;
  summary: string;
  url: string;
  image: string;
};

export type LinkResource = {
  title: string;
  url: string;
};

export type InfoResource = {
  id: number;
  title: string;
  content: string;
  links: LinkResource[];
};
