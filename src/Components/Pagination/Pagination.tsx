import React from 'react';
import { ArrowButton, Paginator, NavigationText } from './Pagination.styles';


type PaginationProps = {
  onNextPageClick: () => void;
  onPrevPageClick: () => void;
  disable: {
    left: boolean;
    right: boolean;
  };
  nav?: {
    current: number;
    total: number;
  };
};



const Pagination = (props: PaginationProps) => {
  const { nav = null, disable, onNextPageClick, onPrevPageClick } = props;

  const handleNextPageClick = () => {
    onNextPageClick();
  };

  const handlePrevPageClick = () => {
    onPrevPageClick();
  };

  return (
    <Paginator>
      <ArrowButton
        type="button"
        onClick={handlePrevPageClick}
        disabled={disable.left}
      >
        {'<'}
      </ArrowButton>
      {nav && (
        <NavigationText>
          {nav.current} / {nav.total}
        </NavigationText>
      )}
      <ArrowButton
        type="button"
        onClick={handleNextPageClick}
        disabled={disable.right}
      >
        {'>'}
      </ArrowButton>
    </Paginator>
  );
};

export default React.memo(Pagination);