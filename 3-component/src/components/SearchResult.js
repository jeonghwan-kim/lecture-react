import React from "react";

const SearchResult = ({ data = [] }) => {
  if (data.length <= 0) {
    return <div className="empty-box">검색 결과가 없습니다</div>;
  }

  return (
    <ul className="result">
      {data.map(({ id, name, imageUrl }) => (
        <li key={id}>
          <img src={imageUrl} />
          <p>{name}</p>
        </li>
      ))}
    </ul>
  );
};

export default SearchResult;
