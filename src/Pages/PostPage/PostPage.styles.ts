import styled from 'styled-components';

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  width: 100vw;
`;

export const PostTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  width: 400px;
`;

export const PostContent = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  width: 400px;
`;

export const LoadingMessage = styled.p`
  font-size: 1.5rem;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 1.5rem;
`;