const imageCards = document.getElementById('cards');
const question = document.getElementById('question');

const silhouetteImg = [
  {
    id: '01',
    src: './images/Luke.png',
  },
  {
    id: '02',
    src: './images/Ichigo.png',
  },
  {
    id: '03',
    src: './images/Naruto.png',
  },
  {
    id: '04',
    src: './images/Yukimaru.png',
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
    question: 'Who has a name which a type of topping you put in ramen',
    correctId: '03',
  },
];

function createCards(img) {
  for (let i = 0; i < 5; i++) {
    img.innerHTML += `<img class="imgBtn" src="${silhouetteImg[i].src}" />`;
  }
}

createCards(imageCards);

question.innerHTML =
  questionAndAnswer[
    Math.floor(Math.random() * questionAndAnswer.length)
  ].question;
console.log(question);

//add EventListener for clicking a card

//compare if the clicked item is correct answer

//save it in variable if it is correct answer

//
