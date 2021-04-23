import React from "react";

const List = ({ data = [], onClick, renderItem }) => {
  return (
    <ul className="list">
      {data.map((item, index) => (
        <li key={item.id} onClick={() => onClick(item.keyword)}>
          {renderItem(item, index)}
        </li>
      ))}
    </ul>
  );
};

export default List;
