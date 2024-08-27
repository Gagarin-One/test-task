import React, { useState, useCallback } from 'react';
import Pagination from '../../Components/Pagination/Pagination';
import { usePosts } from '../../hooks/usePosts';
import PostFilter from '../../Components/PostFilter/PostFilter';
import { useSearchPosts } from '../../hooks/useSearchPosts';
import { AppContainer, DataList, PostLink } from './HomePage.styles';
const ROWS_PER_PAGE = 10;


const HomePage: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const [filterQuery, setFilterQuery] = useState<string>('');

  const { data: filteredPostsData } = useSearchPosts(filterQuery);
  const { data: postsData, isLoading: isPostsLoading, isError: isPostsFailed } = usePosts(page);


  const getTotalPageCount = (rowCount: number): number => Math.ceil(rowCount / ROWS_PER_PAGE);


  const handleNextPageClick = useCallback(() => {
    if (postsData && page < Math.ceil(postsData.totalCount / 10)) {
      setPage((prev) => prev + 1);
    }
  }, [postsData, page]);

  const handlePrevPageClick = useCallback(() => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  }, [page]);

  const handleFilterChange = (query: string) => {
    setFilterQuery(query);
    setPage(1); // Сбрасываем страницу при изменении фильтра
  };

  //Определяем, какие посты отображать в зависимости от наличия фильтра.
  const postsToDisplay = filterQuery ? filteredPostsData : postsData?.posts;

  return (
    <AppContainer>
      <PostFilter onFilterChange={handleFilterChange} />

      {isPostsLoading && <p>Loading...</p>}
      {filteredPostsData && <p>страница в режиме поиска, введите Id поста</p>}
      {postsToDisplay && (
        <DataList>
          {postsToDisplay.map((item) => (
            <PostLink key={item.id} to={`/post/${item.id}`}>
              {item.title}
            </PostLink>
          ))}
        </DataList>
      )}
      {isPostsFailed && <h1>Не удалость загрузить статьи</h1>}
      {postsData && !filteredPostsData && (
        <Pagination
          onNextPageClick={handleNextPageClick}
          onPrevPageClick={handlePrevPageClick}
          disable={{
            left: page === 1,
            right: page === getTotalPageCount(postsData.totalCount),
          }}
          nav={{ current: page, total: getTotalPageCount(postsData.totalCount) }}
        />
      )}
    </AppContainer>
  );
}

export default HomePage;
