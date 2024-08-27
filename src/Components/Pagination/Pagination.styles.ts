import styled from 'styled-components';

export const Paginator = styled.div`
  display: flex;
  align-items: center;
`;

export const ArrowButton = styled.button<{ disabled: boolean }>`
  background: none;
  border: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  font-size: 24px;
  margin: 0 10px;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

  &:focus {
    outline: none;
  }
`;

export const NavigationText = styled.span`
  font-size: 16px;
`;