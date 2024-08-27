import React from 'react'
import { useParams } from 'react-router-dom';
import { usePost } from '../../hooks/usePost';
import { ErrorMessage, LoadingMessage, PostContainer, PostContent, PostTitle } from './PostPage.styles';



const PostPage: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const { data: post, isLoading, isError, error } = usePost(Number(postId));

  if (isLoading) {
    return <LoadingMessage>Загрузка...</LoadingMessage>;
  }

  if (isError) {
    return (
      <ErrorMessage>{error instanceof Error ? error.message : 'Неизвестная ошибка'}</ErrorMessage>
    );
  }

  if (!post) {
    return <ErrorMessage>Пост не найден.</ErrorMessage>;
  }

  return (
    <PostContainer>
      <PostTitle>{post.title}</PostTitle>
      <PostContent>{post.body}</PostContent>
    </PostContainer>
  );
};

export default PostPage;
