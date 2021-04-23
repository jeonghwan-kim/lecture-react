import React from "react";
import { formatRelativeDate } from "../helpers.js";

const List = ({
  data = [],
  hasIndex = false,
  hasDate = false,
  onClick,
  onRemove,
}) => {
  const handleClickRemove = (event, keyword) => {
    event.stopPropagation();
    onRemove(keyword);
  };

  return (
    <ul className="list">
      {data.map(({ id, keyword, date }, index) => (
        <li key={id} onClick={() => onClick(keyword)}>
          {hasIndex && <span className="number">{index + 1}</span>}
          <span>{keyword}</span>
          {hasDate && <span className="date">{formatRelativeDate(date)}</span>}
          {!!onRemove && (
            <button
              className="btn-remove"
              onClick={(event) => handleClickRemove(event, keyword)}
            />
          )}
        </li>
      ))}
    </ul>
  );
};

export default List;
