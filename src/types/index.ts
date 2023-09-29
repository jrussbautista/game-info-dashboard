export type Genre = {
  id: string;
  name: string;
};

export type Game = {
  id: string;
  slug: string;
  name: string;
  released: string;
  background_image: string;
  genres: Genre[];
};
