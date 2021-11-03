const imageCards = document.getElementById('cardsContainer');
const question = document.getElementById('question');
const quizTitle = document.getElementById('quiz-title');
const popup = document.getElementById('popup');

let currentQuestion = 0;
let score = 0;

const silhouetteImg = [
  {
    id: '01',
    img: './images/Luke.png',
  },
  {
    id: '02',
    img: './images/Ichigo.png',
  },
  {
    id: '03',
    img: './images/Naruto.png',
  },
  {
    id: '04',
    img: './images/Levi.png',
  },
];

const questionAndAnswer = [
  {
    question: 'Which guy is from Death Note?',
    correctId: '01',
  },
  {
    question: 'Who is a Shinigami who has a sword named Zangetsu?',
    correctId: '02',
  },
  {
    question: 'Who has a name which is a type of topping you put in ramen?',
    correctId: '03',
  },
  {
    question: 'Who fights against titans?',
    correctId: '04',
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

// Give random index number of array
function random(array) {
  let index = Math.floor(Math.random() * array.length);
  return index;
}

let randomIndex = random(questionAndAnswer);
console.log(randomIndex);

question.innerHTML = questionAndAnswer[randomIndex].question;

// function createCards(img) {
//   for (let i = 0; i < silhouetteImg.length; i++) {
//     imageCards.innerHTML += `<img class="imgBtn" id="0${i + 1}" src="${
//       silhouetteImg[i].img
//     }" onclick="onClick(this.id)" />`;
//   }
// }
// createCards(imageCards);

// shows imgs
function createCards(imgArray) {
  for (let i = 0; i < imgArray.length; i++) {
    imageCards.innerHTML += `<img class="imgBtn" id="0${i + 1}" src="${
      imgArray[i].img
    }" />`;
  }
}

createCards(silhouetteImg);

let imgBtn = document.querySelectorAll('.imgBtn');
console.log(imgBtn);
imgBtn.forEach((e) => e.addEventListener('click', onClick));

//add EventListener for clicking a card
function onClick(clicked_id) {
  let popupContent = document.getElementById('content');
  if (clicked_id === questionAndAnswer[randomIndex].correctId) {
    popupContent.innerHTML = 'Correct Answer!';
    popupToggle();
    console.log(clicked_id);
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

const nextBtn = document.getElementById('nextBtn');
nextBtn.addEventListener('click', next);

function next() {
  const nextBtn = document.getElementById('nextBtn');
  nextBtn.addEventListener('click', () => {
    quizTitle.innerHTML = 'SOUND QUIZ';
    imageCards.innerHTML = '';
    popup.classList.remove('active');
    if ((currentQuestion = 1)) {
      console.log('btn clicked');

      question.innerHTML = 'Which Ghibli movie is this song from?';
      const sound = document.getElementById('sound');
      sound.innerHTML = `<audio controls><source src="${
        ghibliSound[random(ghibliSound)].src
      }" type="audio/wav"></audio>`;
      createCards(ghibliSound);
    }
  });
}
