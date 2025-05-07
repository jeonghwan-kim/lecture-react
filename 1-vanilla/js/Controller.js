const tag = "[Controller]";

export default class Controller {
  constructor(store, { searchFormView }) {
    this.store = store;

    this.searchFormView = searchFormView;
  }
}
