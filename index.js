const imageCards = document.getElementById('cardsContainer');
const question = document.getElementById('question');
const clickImage = document.getElementById('clickImage');
const quizTitle = document.getElementById('quiz-title');
const popup = document.getElementById('popup');
//const body = document.getElementsByTagName('body');

let currentQuestion = 0;
let score = 0;

const silhouetteImg = [
  {
    id: '01',
    img: './images/Luke.png',
    question: 'Which guy is from Death Note?',
  },
  {
    id: '02',
    img: './images/Ichigo.png',
    question: 'Who is a Shinigami who has a sword named Zangetsu?',
  },
  {
    id: '03',
    img: './images/Naruto.png',
    question: 'Who has a name which is a type of topping you put in ramen?',
  },
  {
    id: '04',
    img: './images/Levi.png',
    question: 'Who fights against titans?',
  },
];

const ghibliSound = [
  {
    src: 'data/hauru.mp3',
    movie: 'Hawl',
    img: './images/hauru.png',
  },
  {
    src: 'data/kurenainobuta.mp3',
    movie: 'Porco Rosso',
    img: './images/kurenainobuta.png',
  },
  {
    src: 'data/laputa.mp3',
    movie: 'Castle in the Sky',
    img: './images/laputa.png',
  },
  {
    src: 'data/majo.mp3',
    movie: 'Kikis Delivery Service',
    img: './images/majo.png',
  },
  {
    src: 'data/nausicaa.mp3',
    movie: 'Nausicaa of the Valley of the Wind',
    img: './images/nausicaa.png',
  },
  {
    src: 'data/sentochihiro.mp3',
    movie: 'Spirited Away',
    img: './images/sentochihiro.png',
  },
  {
    src: 'data/totoro.mp3',
    movie: 'My Neighbor Totoro',
    img: './images/totoro.png',
  },
];

document.body.style.backgroundColor = '#000';

// Give random index number of array
function random(array) {
  let index = Math.floor(Math.random() * array.length);
  return index;
}

let randomIndex = random(silhouetteImg);
console.log(randomIndex);

question.innerHTML = silhouetteImg[randomIndex].question;

// shows imgs
function createCards(imgArray) {
  for (let i = 0; i < imgArray.length; i++) {
    imageCards.innerHTML += `<img class="imgBtn" id="${i}" src="${imgArray[i].img}" />`;
  }
  addEventListener();
}

createCards(silhouetteImg);

// add EventListener to imgBtn class
function addEventListener() {
  let imgBtn = document.querySelectorAll('.imgBtn');
  console.log(imgBtn);
  imgBtn.forEach((e) => e.addEventListener('click', onClick));
}
//add EventListener for clicking a card
function onClick(evt) {
  let popupContent = document.getElementById('content');
  console.log('target is ', parseInt(evt.target.id));
  console.log('randomIndex is ', randomIndex);
  question.innerHTML = '';
  if (parseInt(evt.target.id) === randomIndex) {
    popupContent.innerHTML = 'Correct Answer!';
    popupToggle();
    score++;
    console.log('score is ', score);
  } else {
    popupToggle();
    popupContent.innerHTML = 'Wrong Answer!';
  }
  currentQuestion++;
  console.log('currentQ is ', currentQuestion);
}

//compare if the clicked item is correct answer

//save it in variable if it is correct answer

//

// display popup to go to the next question
function popupToggle() {
  popup.classList.toggle('active');
}

// next button generator
const nextBtn = document.getElementById('nextBtn');
nextBtn.addEventListener('click', next);

//popup comes up and goes to the next question
function next() {
  const nextBtn = document.getElementById('nextBtn');
  nextBtn.addEventListener('click', () => {
    quizTitle.innerHTML = 'Ghibli Intro QUIZ';
    imageCards.innerHTML = '';
    popup.classList.remove('active');
    if ((currentQuestion = 1)) {
      console.log('btn clicked');

      question.innerHTML = 'Which Ghibli movie is this song from?';
      const sound = document.getElementById('sound');
      randomIndex = random(ghibliSound);
      console.log('ghibli random is ', randomIndex);
      //sound.innerHTML = `<img src = "./images/playBtn.png" onclick="playAudio('./${ghibliSound[randomIndex].src}')">`;
      sound.innerHTML = `<audio controls><source src="${ghibliSound[randomIndex].src}" type="audio/wav"></audio>`;
      createCards(ghibliSound);
      addEventListener();
    }
  });
}

// function playAudio(url) {
//   new Audio(url).play();
//   console.log('clicked play');
// }
