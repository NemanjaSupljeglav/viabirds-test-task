export interface INavLink extends ITheme {
  path: { title: string };
}

export interface IMovie {
  id: string;
  poster_path: string;
  original_title: string;
  name: string;
  overview: string;
  backdrop_path: string;
  vote_average: number;
}
