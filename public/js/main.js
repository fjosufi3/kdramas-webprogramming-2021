previews = document.querySelectorAll('.preview');
playBtn = document.querySelector('#play-btn');
resultBox = document.querySelector('#result-box');

playBtn.addEventListener('click', () => {
    const previews = document.querySelectorAll('.preview');

    selectRandomPreview(previews);
});

const selectRandomPreview = (previews) => {
    const random = Math.floor((Math.random() * previews.length));
    resultBox.innerHTML = previews[random].innerHTML;
}