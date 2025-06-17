// Balloons
const balloonColors = ['pink', 'white'];
for (let i = 0; i < 20; i++) {
  const balloon = document.createElement('div');
  balloon.classList.add('balloon');
  balloon.style.left = Math.random() * 100 + 'vw';
  balloon.style.animationDuration = (6 + Math.random() * 5) + 's';
  balloon.style.backgroundColor = balloonColors[i % balloonColors.length];
  document.querySelector('.balloon-container').appendChild(balloon);
}

// Hearts
for (let i = 0; i < 15; i++) {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (4 + Math.random() * 6) + 's';
  document.querySelector('.heart-container').appendChild(heart);
}
