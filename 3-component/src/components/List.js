import React from "react";

export class List extends React.Component {
  constructor() {
    super();

    this.state = {
      data: [],
    };
  }

  renderItem(item, index) {
    throw "renderItem()을 구현하세요";
  }

  render() {
    const { onClick } = this.props;
    const { data } = this.state;

    return (
      <ul className="list">
        {data.map((item, index) => (
          <li key={item.id} onClick={() => onClick(item.keyword)}>
            {this.renderItem(item, index)}
          </li>
        ))}
      </ul>
    );
  }
}
