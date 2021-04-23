import React from "react";

export default class SearchForm extends React.Component {
  constructor() {
    super();

    this.state = { searchKeyword: "" };
  }

  handleSubmit() {
    // TODO
  }

  handleChangeInput(event) {
    const searchKeyword = event.target.value;
    this.setState({ searchKeyword });
  }

  render() {
    const { searchKeyword } = this.state;

    return (
      // TODO
      <form>
        <input
          type="text"
          placeholder="검색어를 입력하세요"
          autoFocus
          value={searchKeyword}
          onChange={(event) => this.handleChangeInput(event)}
        />
        {searchKeyword.length > 0 && (
          <button type="reset" className="btn-reset" />
        )}
      </form>
    );
  }
}
