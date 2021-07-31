previews = document.querySelectorAll('.preview');
playBtn = document.querySelector('#play-btn');
resultBox = document.querySelector('#result-box');
popularShowsContainer = document.querySelector('#popular-shows-container');
topRatedShowsContainer = document.querySelector('#top-rated-shows-container');
moviesContainer = document.querySelector('#movies-container');

const popularShowNames = ["Goblin", "Strong Woman Do Bong Soon", "Descendants of the Sun", "W",
"Weightlifting Fairy Kim Bok Joo", "Boys Over Flowers", "My Love from the Star", "The Heirs",
"What's Wrong with Secretary Kim", "Pinocchio", "Healer", "While You Were Sleeping"];
const popularShowImages = [
    "https://i.mydramalist.com/JkD8Xf.jpg",
    "https://i.mydramalist.com/XZqYJc.jpg",
    "https://i.mydramalist.com/vN26Zc.jpg",
    "https://i.mydramalist.com/jWJLwc.jpg",
    "https://i.mydramalist.com/D2X7Dc.jpg",
    "https://i.mydramalist.com/rNzZmc.jpg",
    "https://i.mydramalist.com/d0dQAc.jpg",
    "https://i.mydramalist.com/qWb15c.jpg",
    "https://i.mydramalist.com/jr3Dzc.jpg",
    "https://i.mydramalist.com/1zDn5_4c.jpg",
    "https://i.mydramalist.com/lBOo4c.jpg",
    "https://i.mydramalist.com/X4Qxqc.jpg"
];

const topRatedShowNames = ["Move to Heaven", "Hospital Playlist", "Flower of Evil", "Nirvana in Fire",
    "My Mister", "The Untamed"];
const topRatedShowImages = [
    "https://i.mydramalist.com/ZNgDj_4c.jpg",
    "https://i.mydramalist.com/RXXL6_4c.jpg",
    "https://i.mydramalist.com/WAEAp_4c.jpg",
    "https://i.mydramalist.com/kV54dc.jpg",
    "https://i.mydramalist.com/6o4K0c.jpg",
    "https://i.mydramalist.com/qOrz5c.jpg"
];

const movieNames = ["Miracle in Cell No. 7", "Parasite", "Hope", "A Taxi Driver",
    "Train to Busan", "Silenced"];
const movieImages = [
    "https://i.mydramalist.com/anZd8c.jpg",
    "https://i.mydramalist.com/Z17zWc.jpg",
    "https://i.mydramalist.com/PxeOyc.jpg",
    "https://i.mydramalist.com/YomjAc.jpg",
    "https://i.mydramalist.com/xklBrc.jpg",
    "https://i.mydramalist.com/LwJ0yc.jpg"
];

playBtn.addEventListener('click', () => {
    const previews = document.querySelectorAll('.preview');

    selectRandomPreview(previews);
});

const selectRandomPreview = (previews) => {
    const random = Math.floor((Math.random() * previews.length));
    resultBox.innerHTML = previews[random].innerHTML;
}

for(var i = 0; i < popularShowNames.length; i++) {
    var preview = document.createElement('a');
    var image = document.createElement('img');
    var text = document.createTextNode(popularShowNames[i]);
    image.src = popularShowImages[i];

    preview.appendChild(image);
    preview.appendChild(text);
    popularShowsContainer.appendChild(preview);
}

function populateContainer(names, images, container) {
    container.innerHTML = "";
    for(var i = 0; i < names.length; i++) {
        var preview = document.createElement('a');
        var image = document.createElement('img');
        var text = document.createTextNode(names[i]);
        image.src = images[i];

        preview.appendChild(image);
        preview.appendChild(text);
        container.appendChild(preview);
    }
}

populateContainer(popularShowNames, popularShowImages, popularShowsContainer);
populateContainer(topRatedShowNames, topRatedShowImages, topRatedShowsContainer);
populateContainer(movieNames, movieImages, moviesContainer);


