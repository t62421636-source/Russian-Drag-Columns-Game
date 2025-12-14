// ===== СЛОВА ДЛЯ УПРАЖНЕНИЯ =====
const words = [
  // ОН
  { word: 'го́род', gender: 'masc' },
  { word: 'стол', gender: 'masc' },
  { word: 'сын', gender: 'masc' },
  { word: 'брат', gender: 'masc' },
  { word: 'уро́к', gender: 'masc' },
  { word: 'шкаф', gender: 'masc' },
  { word: 'каранда́ш', gender: 'masc' },
  { word: 'нож', gender: 'masc' },
  { word: 'шарф', gender: 'masc' },

  // ОНА
  { word: 'су́мка', gender: 'fem' },
  { word: 'страна́', gender: 'fem' },
  { word: 'ры́ба', gender: 'fem' },
  { word: 'ма́ма', gender: 'fem' },
  { word: 'бу́ква', gender: 'fem' },
  { word: 'шко́ла', gender: 'fem' },
  { word: 'ло́жка', gender: 'fem' },
  { word: 'ко́мната', gender: 'fem' },

  // ОНО
  { word: 'окно́', gender: 'neut' },
  { word: 'молоко́', gender: 'neut' },
  { word: 'сло́во', gender: 'neut' },
  { word: 'за́втра', gender: 'neut' }
];

// ===== ПЕРЕМЕШИВАНИЕ =====
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

// ===== СОЗДАНИЕ СЛОВ =====
const game = document.querySelector('.game');
const columns = document.querySelector('.columns');

const wordPool = document.createElement('div');
wordPool.className = 'word-pool';
game.appendChild(wordPool);

shuffle(words);

let draggedWord = null;

words.forEach(item => {
  const div = document.createElement('div');
  div.className = 'word';
  div.textContent = item.word;
  div.draggable = true;
  div.dataset.gender = item.gender;

  div.addEventListener('dragstart', () => {
    draggedWord = div;
  });

  wordPool.appendChild(div);
});

// ===== НАСТРОЙКА КОЛОНОК =====
['masc', 'fem', 'neut'].forEach(gender => {
  const column = document.getElementById(gender);

  column.addEventListener('dragover', e => {
    e.preventDefault();
  });

  column.addEventListener('drop', () => {
    if (!draggedWord) return;

    if (draggedWord.dataset.gender === gender) {
      draggedWord.classList.add('correct');
      column.appendChild(draggedWord);
      draggedWord = null;
    }
  });
});
