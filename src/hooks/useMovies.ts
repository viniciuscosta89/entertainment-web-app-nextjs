import { useQuery } from '@tanstack/react-query';
import { Data } from '@type/data.types';
import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';

const fetchMovies = async (): Promise<Data> => {
  const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`);

  return response.data;
};

export const useMovies = () => {
  const { data, isLoading } = useQuery(['movies'], () => fetchMovies());

  return { data, isLoading };
};
