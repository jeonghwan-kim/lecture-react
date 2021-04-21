import { createPastDate } from "./helpers.js";

const storage = {
  keywordData: [
    { id: 1, keyword: "샐러드" },
    { id: 2, keyword: "커리" },
    { id: 3, keyword: "햄버거" },
  ],

  historyData: [
    { id: 1, keyword: "검색기록1", date: createPastDate(3) },
    { id: 2, keyword: "검색기록2", date: createPastDate(2) },
    { id: 3, keyword: "검색기록3", date: createPastDate(1) },
  ],

  productData: [
    {
      id: 1,
      name: "비건 샐러드",
      imageUrl:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    },
    {
      id: 2,
      name: "레드 커리",
      imageUrl:
        "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fGZvb2R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=60",
    },
    {
      id: 3,
      name: "수제 햄버거",
      imageUrl:
        "https://images.unsplash.com/photo-1550317138-10000687a72b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    },
    {
      id: 4,
      name: "햄버거와 감자튀김",
      imageUrl:
        "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    },
    {
      id: 5,
      name: "토마토 샐러드",
      imageUrl:
        "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    },
    {
      id: 6,
      name: "아스파라거스 샐러드",
      imageUrl:
        "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=60",
    },
  ],
};

export default storage;
