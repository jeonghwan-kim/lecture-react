const tag = "[Controller]";

export default class Controller {
  constructor(store, { searchFormView }) {
    console.log(tag, "constructor");

    this.store = store;

    this.searchFormView = searchFormView;

    // TODO
  }
}
