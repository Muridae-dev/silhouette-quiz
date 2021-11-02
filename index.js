// import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js';
// import {
//   getFirestore,
//   collection,
//   addDoc,
//   doc,
//   deleteDoc,
//   getDocs,
// } from 'https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js';

// //Add your own config content
// const firebaseConfig = {
//   apiKey: 'AIzaSyARqljuS5yf86OHAp8H1u9q0j6I6m1Scss',
//   authDomain: 'quiz-01-2c676.firebaseapp.com',
//   projectId: 'quiz-01-2c676',
//   storageBucket: 'quiz-01-2c676.appspot.com',
//   messagingSenderId: '180059847819',
//   appId: '1:180059847819:web:768ec49d4e155787f9688e',
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

//Add to firebase
// async function addAnswer(){
//   var clickedItem = document.getElementById("01");
//   if()
//     try {
//       const docRef = await addDoc(collection(db, "01"), {
//         name: name,
//       });
//       displayNamesInList("listOfNames");
//     } catch (e) {
//       console.error("Error adding document: ", e);
//     }
// }

// function readInput(id) {
//   if (!document.getElementById(id) && !document.getElementById(id).value)
//     return null;

//   return document.getElementById(id).value;
// }

const imageCards = document.getElementById('cards');
const question = document.getElementById('question');
const quizTitle = document.getElementById('quiz-title');
const popup = document.getElementById('popup');

let currentQuestion = 0;
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
    question: 'Who has a name which is a type of topping you put in ramen?',
    correctId: '03',
  },
  {
    question: '?',
    correctId: '04',
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
    const cardsContainer = document.getElementById('cardsContainer');
    quizTitle.innerHTML = 'SOUND QUIZ';
    cardsContainer.innerHTML = '';
    popup.classList.remove('active');
    if (currentQuestion <= 1) {
      console.log('btn clicked');

      question.innerHTML = 'What animal is it?';
      const sound = document.getElementById('sound');
      sound.innerHTML = `<audio><source src="data</audio>`;
    }
  });
}
