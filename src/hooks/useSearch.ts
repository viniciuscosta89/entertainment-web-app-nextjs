import { useInfiniteQuery, keepPreviousData } from '@tanstack/react-query';
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
        include_adult: true,
        language: 'en-US',
        page: pageParam,
      },
    },
  );

  return response.data;
};

export const useSearch = (pageParam?: number, searchParam?: string, mediaType?: MediaSearchType) => {
  const { data, isLoading, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status } = useInfiniteQuery({
    queryKey: ['search', searchParam, pageParam, mediaType],
    queryFn: () => fetchSearch({ searchParam, pageParam, mediaType }),
    placeholderData: keepPreviousData,
    initialPageParam: pageParam,
    getNextPageParam: lastPage => {
      return lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined;
    },
  });

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
