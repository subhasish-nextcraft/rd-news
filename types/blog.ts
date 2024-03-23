export type Author = {
  name: string;
  image: string;
  bio?: string;
  _id?: number | string;
  _ref?: number | string;
};

export type Blog = {
  _id: number;
  title: string;
  slug?: any;
  metadata?: string;
  body?: string;
  mainImage?: any;
  author?: Author;
  tags?: string[];
  publishedAt?: string;
};

export interface ICategory {
  id: number;
  attributes: ICategoryAttribute;
}

export interface ICategoryAttribute {
  Title: string;
  Slug: string;
}

export interface IPagination {
  page:number;
  pageSize: number;
  pageCount: number;
  totalCount: number;
}

export interface IResourseMeta {
  pagination: IPagination;
}

export interface ICollectionResponse<T> {
  data: T;
  meta: IResourseMeta;
}
