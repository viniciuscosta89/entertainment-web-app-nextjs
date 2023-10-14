export interface Data {
  page: number;
  results: DataItem[];
  total_pages: number;
  total_results: number;
  nextPage: any;
}

export interface DataItem {
  adult: boolean;
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  media_type: 'movie' | 'tv';
  name: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
