import React, { useState } from 'react';

interface PostFilterProps {
  onFilterChange: (query: string) => void;
}

const PostFilter: React.FC<PostFilterProps> = ({ onFilterChange }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    onFilterChange(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Поиск по id поста..."
      value={searchQuery}
      onChange={handleInputChange}
    />
  );
};

export default PostFilter;