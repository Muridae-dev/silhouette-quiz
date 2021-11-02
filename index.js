import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js';
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  deleteDoc,
  getDocs,
} from 'https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js';

//Add your own config content
const firebaseConfig = {
  apiKey: 'AIzaSyARqljuS5yf86OHAp8H1u9q0j6I6m1Scss',
  authDomain: 'quiz-01-2c676.firebaseapp.com',
  projectId: 'quiz-01-2c676',
  storageBucket: 'quiz-01-2c676.appspot.com',
  messagingSenderId: '180059847819',
  appId: '1:180059847819:web:768ec49d4e155787f9688e',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const imageCards = document.getElementById('cards');
const question = document.getElementById('question');

let score = 0;

const silhouetteImg = [
  {
    id: '01',
    source: './images/Luke.png',
  },
  {
    id: '02',
    source: './images/Ichigo.png',
  },
  {
    id: '03',
    source: './images/Naruto.png',
  },
  {
    id: '04',
    source: './images/Yukimaru.png',
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
    question: 'Who has a name which a type of topping you put in ramen?',
    correctId: '03',
  },
];

function random(array) {
  let index = Math.floor(Math.random() * array.length);
  return index;
}

let randomIndex = random(questionAndAnswer);
console.log(randomIndex);

question.innerHTML = questionAndAnswer[randomIndex].question;

function createCards(img) {
  for (let i = 0; i < silhouetteImg.length; i++) {
    img.innerHTML += `<img class="imgBtn" id="0${i + 1}" src="${
      silhouetteImg[i].source
    }" onclick="onClick(this.id)" />`;
  }
}

createCards(imageCards);

//add EventListener for clicking a card
function onClick(clicked_id) {
  if (clicked_id === questionAndAnswer[randomIndex].correctId) {
    console.log(clicked_id);
    score++;
  }
}

//compare if the clicked item is correct answer

//save it in variable if it is correct answer

//
