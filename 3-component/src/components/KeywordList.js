import React from "react";
import store from "../Store.js";
import { List } from "./List.js";

export default class KeywordList extends List {
  componentDidMount() {
    const data = store.getKeywordList();
    this.setState({ data });
  }

  renderItem(item, index) {
    return (
      <>
        <span className="number">{index + 1}</span>
        <span>{item.keyword}</span>
      </>
    );
  }
}
