
const BookList = ()=>{
  let dataFromStorage=JSON.parse(localStorage.getItem('books'))
  let dataCopy =[...dataFromStorage]
  const list = document.querySelector(".main__list-item");
  console.log(dataFromStorage, 'data z storage')
  let Items=dataCopy.map((item)=>{
    return`
      <div class="book">
        <div class="book__title">
          <span>${item.title}</span>
        </div>
        <div class="book__author">
          <span>${item.author}</span>
        </div>
        <div class="book__priority">
          <span>${item.priority}</span>
        </div>
        <div class="book__cateogry">
        <span>${item.category}</span>
        </div>
      </div>
    `
  }).join('')
  list.innerHTML= Items
  console.log(Items)
}
export default BookList;
