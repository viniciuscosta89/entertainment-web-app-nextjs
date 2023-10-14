import { useInfiniteQuery } from '@tanstack/react-query';
import { Data } from '@type/data.types';
import type { MediaSearchType } from '@type/media.types';
import axios from 'axios';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

const BASE_URL = 'https://api.themoviedb.org/3';

function searchType(type: MediaSearchType) {
  const mediaTypes = {
    movie: 'movie',
    multi: 'multi',
    tv: 'tv',
  };

  return mediaTypes[type];
}

const fetchSearch = async ({
  searchParam = '',
  pageParam = 1,
  mediaType = 'multi',
}: {
  searchParam?: string;
  pageParam?: number;
  mediaType?: MediaSearchType;
}): Promise<Data> => {
  const response = await axios.get(
    `${BASE_URL}/search/${searchType(mediaType)}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
    {
      params: {
        query: searchParam,
        include_adult: false,
        language: 'en-US',
        page: pageParam,
      },
    },
  );

  return response.data;
};

export const useSearch = (pageParam?: number, searchParam?: string, mediaType?: MediaSearchType) => {
  const { data, isLoading, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status } = useInfiniteQuery(
    ['search', searchParam, pageParam, mediaType],
    ({ pageParam = 1 }) => fetchSearch({ pageParam, searchParam, mediaType }),
    {
      keepPreviousData: true,
      getNextPageParam: lastPage => {
        return lastPage.page < lastPage.total_pages // Here I'm assuming you have access to the total number of pages
          ? lastPage.page + 1
          : undefined; // If there is not a next page, getNextPageParam will return undefined and the hasNextPage boolean will be set to 'false'
      },
    },
  );

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (searchParam) {
      router.push(`?query=${searchParam}`, {
        scroll: false,
      });
    } else {
      router.push(pathname);
    }
  }, [data, router]);

  return { data, isLoading, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status };
};
