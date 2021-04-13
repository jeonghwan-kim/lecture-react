import Controller from "./Controller.js";
import Store from "./store.js";
import storage from "./storage.js";

document.addEventListener("DOMContentLoaded", main);

function main() {
  const store = new Store(storage);

  const views = {
    // TODO
  };

  new Controller(store, views);
}
