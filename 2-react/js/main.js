import { formatRelativeDate } from "./js/helpers.js";
import store from "./js/Store.js";

const TabType = {
  KEYWORD: "KEYWORD",
  HISTORY: "HISTORY",
};

const TabLabel = {
  [TabType.KEYWORD]: "추천 검색어",
  [TabType.HISTORY]: "최근 검색어",
};

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      searchKeyword: "",
      searchResult: [],
      submitted: false,
      selectedTab: TabType.KEYWORD,
      keywordList: [],
      historyList: [],
    };
  }

  componentDidMount() {
    const keywordList = store.getKeywordList();
    const historyList = store.getHistoryList();

    this.setState({
      keywordList,
      historyList,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.search(this.state.searchKeyword);
  }

  search(searchKeyword) {
    const searchResult = store.search(searchKeyword);
    const historyList = store.getHistoryList();

    this.setState({
      searchKeyword,
      searchResult,
      historyList,
      submitted: true,
    });
  }

  handleReset() {
    this.setState({
      searchKeyword: "",
      searchResult: [],
      submitted: false,
    });
  }

  handleChangeInput(event) {
    const searchKeyword = event.target.value;

    if (searchKeyword.length <= 0 && this.state.submitted) {
      return this.handleReset();
    }

    this.setState({ searchKeyword });
  }

  handleClickRemoveHistory(event, keyword) {
    event.stopPropagation();

    store.removeHistory(keyword);
    const historyList = store.getHistoryList();
    this.setState({ historyList });
  }

  render() {
    const searchForm = (
      <form
        onSubmit={(event) => this.handleSubmit(event)}
        onReset={() => this.handleReset()}
      >
        <input
          type="text"
          placeholder="검색어를 입력하세요"
          autoFocus
          value={this.state.searchKeyword}
          onChange={(event) => this.handleChangeInput(event)}
        />
        {this.state.searchKeyword.length > 0 && (
          <button type="reset" className="btn-reset"></button>
        )}
      </form>
    );

    const searchResult =
      this.state.searchResult.length > 0 ? (
        <ul className="result">
          {this.state.searchResult.map(({ id, imageUrl, name }) => (
            <li key={id}>
              <img src={imageUrl} />
              <p>{name}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div className="empty-box">검색 결과가 없습니다</div>
      );

    const keywordList = (
      <ul className="list">
        {this.state.keywordList.map(({ id, keyword }, index) => (
          <li key={id} onClick={() => this.search(keyword)}>
            <span className="number">{index + 1}</span>
            <span>{keyword}</span>
          </li>
        ))}
      </ul>
    );

    const historyList = (
      <ul className="list">
        {this.state.historyList.map(({ id, keyword, date }) => (
          <li key={id} onClick={() => this.search(keyword)}>
            <span>{keyword}</span>
            <span className="date">{formatRelativeDate(date)}</span>
            <button
              className="btn-remove"
              onClick={(event) => this.handleClickRemoveHistory(event, keyword)}
            />
          </li>
        ))}
      </ul>
    );

    const tabs = (
      <>
        <ul className="tabs">
          {Object.values(TabType).map((tabType) => (
            <li
              key={tabType}
              className={this.state.selectedTab === tabType ? "active" : ""}
              onClick={() => this.setState({ selectedTab: tabType })}
            >
              {TabLabel[tabType]}
            </li>
          ))}
        </ul>
        {this.state.selectedTab === TabType.KEYWORD && keywordList}
        {this.state.selectedTab === TabType.HISTORY && historyList}
      </>
    );

    return (
      <>
        <header>
          <h2 className="container">검색</h2>
        </header>
        <div className="container">
          {searchForm}
          <div className="content">
            {this.state.submitted ? searchResult : tabs}
          </div>
        </div>
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#app"));
