// TODO
const element = (
  <>
    <header>
      <h2 className="container">검색</h2>
    </header>
    <div className="container">
      <form>
        <input type="text" placeholder="검색어를 입력하세요" autoFocus />
        <button type="reset" className="btn-reset"></button>
      </form>
    </div>
  </>
);

// TODO
ReactDOM.render(element, document.querySelector("#app"));
