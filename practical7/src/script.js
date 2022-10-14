console.log('Hello world!');
const card = document.querySelectorAll('.card');

card.forEach((card) => {
  card.addEventListener('click', '.card-body', () => {
    card.classList.toggle('d-none');
  });
});