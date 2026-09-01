document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('heart');
  const textStr = " I LOVE U ";
  const totalPoints = 100;
  let charIndex = 0;

  for (let i = 0; i < totalPoints; i++) {
    const t = (i / totalPoints) * Math.PI * 2;
    const x = 16 * Math.pow(Math.sin(t), 3);
    const y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));

    const posX = 240 + x * 13;
    const posY = 200 + y * 13;

    const span = document.createElement('span');
    span.className = 'heart-text';
    span.innerText = textStr.substring(charIndex % textStr.length) + textStr.substring(0, charIndex % textStr.length);
    charIndex += 4;

    span.style.left = `${posX}px`;
    span.style.top = `${posY}px`;
    span.style.animationDelay = `${i * 0.03}s`;

    container.appendChild(span);
  }

  const audio = document.getElementById('audioPlayer');
  const playBtn = document.getElementById('spotifyPlayBtn');
  const btnIcon = document.getElementById('btnIcon');
  const albumArt = document.getElementById('albumArt');

  playBtn.addEventListener('click', () => {
    if (audio.paused) {
      audio.play().then(() => {
        btnIcon.innerText = "❚❚";
        albumArt.classList.add('playing');
      }).catch(err => {
        console.error(err);
      });
    } else {
      audio.pause();
      btnIcon.innerText = "▶";
      albumArt.classList.remove('playing');
    }
  });
});