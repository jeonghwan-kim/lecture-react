import React from "react";
import Header from "./components/Header.js";
import SearchForm from "./components/SearchForm.js";

export default class App extends React.Component {
  search() {
    // TODO
  }

  render() {
    return (
      <>
        <Header title="검색" />
        <div className="container">
          {/* TODO */}
          <SearchForm />
        </div>
      </>
    );
  }
}
