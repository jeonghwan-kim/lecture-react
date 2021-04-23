import React from "react";
import store from "../Store.js";
import List from "./List.js";

export default class KeywordList extends React.Component {
  constructor() {
    super();

    this.state = {
      keywordList: [],
    };
  }

  componentDidMount() {
    const keywordList = store.getKeywordList();
    this.setState({ keywordList });
  }

  render() {
    const { onClick } = this.props;
    const { keywordList } = this.state;

    return <List hasIndex data={keywordList} onClick={onClick} />;
  }
}
