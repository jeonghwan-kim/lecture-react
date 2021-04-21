import store from "./js/Store.js";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      searchKeyword: "",
      searchResult: [],
      // TODO
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.search(this.state.searchKeyword);
  }

  search(searchKeyword) {
    const searchResult = store.search(searchKeyword);
    this.setState({
      searchResult,
      // TODO
    });
  }

  handleReset() {
    console.log("TODO: handleResset");
    this.setState({ searchKeyword: "" });
  }

  handleChangeInput(event) {
    const searchKeyword = event.target.value;
    this.setState({ searchKeyword });
  }

  render() {
    // TODO
    return (
      <>
        <header>
          <h2 className="container">검색</h2>
        </header>
        <div className="container">
          <form
            onSubmit={(event) => this.handleSubmit(event)}
            onReset={() => this.handleReset()}
          >
            <input
              type="text"
              placeholder="검색어를 입력하세요"
              autoFocus
              value={this.state.query}
              onChange={(event) => this.handleChangeInput(event)}
            />
            {this.state.searchKeyword.length > 0 && (
              <button type="reset" className="btn-reset"></button>
            )}
          </form>
          <div className="content">
            {this.state.searchResult.length > 0 ? (
              <ul className="result">
                {this.state.searchResult.map(({ id, imageUrl, name }) => (
                  <li>
                    <img src={imageUrl} />
                    <p>{name}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="empty-box">검색 결과가 없습니다</div>
            )}
          </div>
        </div>
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#app"));
