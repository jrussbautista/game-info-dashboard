export type Game = {
  id: string;
  slug: string;
  name: string;
  released: string;
  background_image: string;
  rating: string;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}
