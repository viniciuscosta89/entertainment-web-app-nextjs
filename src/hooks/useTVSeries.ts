import { useQuery } from '@tanstack/react-query';
import { Data } from '@type/data.types';
import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';

const fetchTVSeries = async (): Promise<Data> => {
  const response = await axios.get(`${BASE_URL}/tv/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`);

  return response.data;
};

export const useTVSeries = () => {
  const { data, isLoading } = useQuery({ queryKey: ['tv series'], queryFn: () => fetchTVSeries() });

  return { data, isLoading };
};
