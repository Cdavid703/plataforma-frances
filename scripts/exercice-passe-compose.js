// --------------------- Configuración Inicial ---------------------
const questionsData = [ /* aquí va el array de preguntas exacto que ya tienes */ ];

const $ = s => document.querySelector(s);
const quizEl = $('#quiz');
const progressBar = $('#progress-bar');
const qIndexEl = $('#q-index');
const resultsEl = $('#results');
const timerEl = $('#timer');

let state = {
  order: [...Array(questionsData.length).keys()],
  answers: {},
  checked: {},
  current: 0,
  instant: true,
  timerOn: false,
  dark: false,
  endsAt: null,
};

const STORAGE_KEY = 'fr_grammar_quiz_v2';
const save = () => localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
const load = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if(!raw) return;
    const incoming = JSON.parse(raw);
    state = { ...state, ...incoming };
  } catch {}
};
load();
