let counter = 0;

function increment() {
  counter++;
}

function decrement() {
  counter--;
}

function get() {
  return counter;
}

const inc = document.getElementById("increment");
const input = document.getElementById("input");
const dec = document.getElementById("decrement");

inc.addEventListener("click", () => {
  increment();
  input.value = get();
});

dec.addEventListener("click", () => {
  if (input.value > 0) {
    decrement();
  }
  input.value = get();
});

// short image change
const changeImage = document.querySelectorAll('.short-img img')

const imgContainer = document.querySelector('.img-container');

window.addEventListener('DOMContentLoaded', () =>{
  changeImage[0].parentElement.classList.add('active');

});
changeImage.forEach((image) => {
  image.addEventListener('click', () => {
    imgContainer.querySelector('img').src = image.src;
  })
})

