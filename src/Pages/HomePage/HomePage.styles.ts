import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;

export const DataList = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  justify-content: space-around;
`;

export const PostLink = styled(Link)`
  font-size: 1.5rem;
  margin: 1rem 0;
  width: 40%;
  text-decoration: none;
  color: blue;
  border: 1px solid black;
  border-radius: 10px;
  text-align: center;
  min-height: 120px;
  padding: 10px;
  &:hover {
    text-decoration: underline;
  }
`;