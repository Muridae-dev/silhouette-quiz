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
    img: './images/Yukimaru.png',
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
    question: '?',
    correctId: '04',
  },
];

const animalSound = [
  {
    src: 'data/Elephant-trumpeting.wav',
    animal: 'Elephant',
    img: './images/Elephant.png',
  },
  {
    src: 'data/Goat.wav',
    animal: 'Goat',
    img: './images/Goat.png',
  },
  {
    src: 'data/Leopard-growl.wav',
    animal: 'Leopard',
    img: './images/Leopard.png',
  },
  {
    src: 'data/Pig-squeal.wav',
    animal: 'Pig',
    img: './images/Pig.png',
  },
  {
    src: 'data/Tiger-growl.wav',
    animal: 'Tiger',
    img: './images/Tiger.png',
  },
];

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

function createCards(imgArray) {
  for (let i = 0; i < imgArray.length; i++) {
    imageCards.innerHTML += `<div class="cards"><img class="imgBtn" id="0${
      i + 1
    }" src="${imgArray[i].img}" onclick="onClick(this.id)" /></div>`;
  }
}

createCards(silhouetteImg);

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

function next() {
  const nextBtn = document.getElementById('nextBtn');
  nextBtn.addEventListener('click', () => {
    const cards = document.getElementById('cards');
    quizTitle.innerHTML = 'SOUND QUIZ';
    cards.innerHTML = '';
    popup.classList.remove('active');
    if ((currentQuestion = 1)) {
      console.log('btn clicked');

      question.innerHTML = 'What animal is it?';
      const sound = document.getElementById('sound');
      sound.innerHTML = `<audio controls><source src="${
        animalSound[random(animalSound)].src
      }" type="audio/wav"></audio>`;
      createCards(animalSound);
    }
  });
}
