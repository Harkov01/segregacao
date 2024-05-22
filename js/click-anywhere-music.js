const overlay = document.getElementById('overlay');
overlay.addEventListener('click', function () {
   const audio = document.getElementById('background-music');
   audio.play();

   this.classList.add('fade-out');

   setTimeout(() => {
      overlay.remove();
   }, 1000);
});