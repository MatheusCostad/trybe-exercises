const io = window.io();

const likeIcon = document.getElementById('likeIcon');
likeIcon.addEventListener('click', ({ target }) => {
  switch (target.className) {
    case 'far fa-heart':
      io.emit('likePost', currentLikes.innerText);
      target.className = 'fas fa-heart';
      break;
    default:
      io.emit('dislikePost', currentLikes.innerText);
      target.className = 'far fa-heart';
      break;
  }
});

const starIcon = document.getElementById('starIcon');
starIcon.addEventListener('click', ({ target }) => {
  switch (target.className) {
    case 'far fa-star':
      io.emit('starPost', currentStars.innerText);
      target.className = 'fas fa-star';
      break;
    default:
      io.emit('distarPost', currentStars.innerText);
      target.className = 'far fa-star';
      break;
  }
});

const currentLikes = document.getElementById('currentLikes');
io.on('updateLikes', (numb) => {
  currentLikes.innerText = numb;
});

const currentStars = document.getElementById('currentStars');
io.on('updateStars', (numb) => {
  currentStars.innerText = numb;
});