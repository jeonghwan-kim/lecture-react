import Controller from "./Controller.js";
import Store from "./store.js";
import storage from "./storage.js";

const tag = "[main]";
document.addEventListener("DOMContentLoaded", main);

function main() {
  console.log(tag, "main");
  const store = new Store(storage);

  const views = {
    // TODO
  };

  new Controller(store, views);
}
