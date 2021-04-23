import React from "react";
import Header from "./components/Header.js";

export default class App extends React.Component {
  render() {
    return (
      <>
        <Header title="검색" />
        <div className="container">
          <SearchForm />
        </div>
      </>
    );
  }
}
