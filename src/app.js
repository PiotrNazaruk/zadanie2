import BookList from "./bookList";

const App = (function () {
  let newItems = [];
  let books = [];
  const domElements = {
    form: document.querySelector("#form"),
    titleInput: document.querySelector("#title"),
    authorInput: document.querySelector("#author"),
    categoryInput: document.querySelector("#category"),
    popup: document.querySelector(".popup"),
  };
  const data = {
    title: "",
    author: "",
    priority: 0,
    category: "",
    itemFromStorage: [],
  };
  function saveInLocalStorage(items) {
    books.push({ ...items });
    localStorage.setItem("books", JSON.stringify(books));
    console.log(JSON.parse(localStorage.getItem("books")));
  }
  const inputHandlers = () => {
    let checkedValue = null;
    let inputElements = document.querySelectorAll(".priority");
    for (let i = 0; inputElements[i]; ++i) {
      if (inputElements[i].checked) {
        checkedValue = inputElements[i].value;
        break;
      }
    }
    let { titleInput, authorInput, categoryInput, popup ,form} =
      domElements;
    data.author = authorInput.value;
    data.category = categoryInput.value;
    data.priority = checkedValue;
    data.title = titleInput.value;
    if (
      data.title.length < 1 ||
      data.author.length < 3 ||
      data.priority < 1 ||
      data.category.length < 0
    ) {
      popup.classList.add("show");
      return;
    } else {
      let items = data;
      popup.classList.remove("show");
      saveInLocalStorage(items);
      BookList();

    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    inputHandlers(e);
    form.reset()
  };
  const formSubmit = () => {
    const { form } = domElements;
    form.addEventListener("submit", function (e) {
      submitHandler(e);
    });
  };
  const init = () => {
    formSubmit();
    BookList();
  };
  return {
    init: init,
  };
})();
App.init();
