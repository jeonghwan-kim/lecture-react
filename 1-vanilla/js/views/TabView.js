import { delegate, qs, qsAll } from "../helpers.js";
import View from "./View.js";

const tag = "[TabView]";

export const TabType = {
  KEYWORD: "KEYWORD",
  HISTORY: "HISTORY",
};

const TabLabel = {
  [TabType.KEYWORD]: "추천 검색어",
  [TabType.HISTORY]: "최근 검색어",
};

export default class TabView extends View {
  constructor() {
    console.log(tag, "constructor");

    super(qs("#tab-view"));

    this.template = new Template();
    this.bindEvents();
  }

  bindEvents() {
    delegate(this.element, "click", "li", (event) => this.handleClick(event));
  }

  handleClick(event) {
    console.log(tag, "handleClick", event.target.dataset.tab);

    const value = event.target.dataset.tab;
    this.emit("@change", { value });
  }

  show(selectedTab) {
    this.element.innerHTML = this.template.getTabList();
    qsAll("li", this.element).forEach((li) => {
      li.className = li.dataset.tab == selectedTab ? "active" : "";
    });

    super.show();
  }
}

class Template {
  getTabList() {
    return `
      <ul class="tabs">
        ${Object.values(TabType)
          .map((tabType) => ({ tabType, tabLabel: TabLabel[tabType] }))
          .map(this._getTab)
          .join("")}
      </ul>
    `;
  }

  _getTab({ tabType, tabLabel }) {
    return `
      <li data-tab="${tabType}">${tabLabel}</li>
     `;
  }
}
