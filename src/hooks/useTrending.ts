import { useQuery } from '@tanstack/react-query';
import { Data } from '@type/data.types';
import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';

const fetchTrending = async (timeWindow: string): Promise<Data> => {
  const response = await axios.get(
    `${BASE_URL}/trending/all/${timeWindow}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
  );

  return response.data;
};

export const useTrending = (timeWindow: string) => {
  const { data, isLoading } = useQuery(['trending', timeWindow], () => fetchTrending(timeWindow), {
    enabled: !!timeWindow,
  });

  return { data, isLoading };
};
