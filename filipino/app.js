(function () {
  'use strict';

  var stories = [
    {
      title: 'Sa Hardin', icon: '🌻', level: '5 sentences',
      text: 'May maliit na hardin sa likod ng bahay. May dilaw na bulaklak at berdeng dahon. May ibon sa puno. Tahimik ang hardin. Masaya ang bata.',
      english: 'There is a small garden behind the house. There is a yellow flower and a green leaf. There is a bird in the tree. The garden is quiet. The child is happy.',
      help: ['maliit', 'hardin', 'likod', 'bahay', 'dilaw', 'bulaklak', 'berdeng', 'dahon', 'ibon', 'puno', 'tahimik', 'masaya', 'bata']
    },
    {
      title: 'Ang Almusal', icon: '🍳', level: '5 sentences',
      text: 'Nasa kusina ang pamilya. May kanin, itlog, at mangga sa mesa. May gatas sa baso. Kumain ang bata. Masarap ang almusal.',
      english: 'The family is in the kitchen. There are rice, eggs, and mango on the table. There is milk in the glass. The child ate. Breakfast is delicious.',
      help: ['kusina', 'pamilya', 'kanin', 'itlog', 'mangga', 'mesa', 'gatas', 'baso', 'kumain', 'bata', 'almusal']
    },
    {
      title: 'Ulan sa Labas', icon: '☔', level: '5 sentences',
      text: 'Madilim ang langit. May ulan at kulog sa labas. Nasa loob ng bahay ang bata. May payong sa tabi ng pinto. Bukas, sisikat ang araw.',
      english: 'The sky is dark. There is rain and thunder outside. The child is inside the house. There is an umbrella beside the door. Tomorrow, the sun will shine.',
      help: ['madilim', 'langit', 'ulan', 'kulog', 'labas', 'loob', 'bahay', 'bata', 'payong', 'tabi', 'pinto', 'bukas', 'araw']
    },
    {
      title: 'Sa Paaralan', icon: '✏️', level: '5 sentences',
      text: 'Pumasok ang estudyante sa silid-aralan. May libro at lapis sa mesa. Sumulat siya sa kuwaderno. Gumuhit siya ng asul na ibon. Maganda ang larawan.',
      english: 'The student entered the classroom. There is a book and pencil on the table. She wrote in the notebook. She drew a blue bird. The picture is beautiful.',
      help: ['pumasok', 'estudyante', 'silid-aralan', 'libro', 'lapis', 'mesa', 'sumulat', 'siya', 'kuwaderno', 'gumuhit', 'asul', 'ibon', 'maganda', 'larawan']
    }
  ];

  var vocabulary = [];
  var currentSentence = 0;
  var wordLimit = 40;

  function normalize(value) {
    return String(value || '').toLocaleLowerCase().replace(/[.,!?;:“”'’]/g, '').trim();
  }

  function parseTsv(text) {
    var lines = text.replace(/^\uFEFF/, '').split(/\r?\n/);
    var rows = [];
    var i;
    for (i = 1; i < lines.length; i += 1) {
      if (!lines[i].trim()) { continue; }
      var cells = lines[i].split('\t');
      if (cells.length >= 5) {
        rows.push({
          marker: cells[0],
          word: cells[1],
          sentence: cells[2],
          sentenceEnglish: cells[3],
          meaning: cells.slice(4).join(' ')
        });
      }
    }
    return rows;
  }

  function lookup(word) {
    var clean = normalize(word).replace(/ng$/, '');
    var exact = null;
    var i;
    for (i = 0; i < vocabulary.length; i += 1) {
      if (normalize(vocabulary[i].word) === normalize(word)) { return vocabulary[i]; }
      if (!exact && normalize(vocabulary[i].word) === clean) { exact = vocabulary[i]; }
    }
    return exact;
  }

  function storyHtml(story, index) {
    var tokens = story.text.split(/(\s+)/);
    var text = tokens.map(function (token) {
      var clean = normalize(token);
      var base = clean.replace(/ng$/, '');
      if (story.help.indexOf(clean) !== -1 || story.help.indexOf(base) !== -1) {
        return '<button class="help-word" type="button" data-word="' + clean + '">' + token + '</button>';
      }
      return token;
    }).join('');
    return '<article class="story-card">' +
      '<div class="story-banner"><span class="story-icon" aria-hidden="true">' + story.icon + '</span><div><h3>' + story.title + '</h3><span class="story-level">' + story.level + '</span></div></div>' +
      '<div class="story-body"><p class="story-text">' + text + '</p>' +
      '<div class="story-actions"><button class="round-button speak-story" type="button" data-index="' + index + '">🔊 Listen</button>' +
      '<button class="soft-button translate-story" type="button" data-index="' + index + '">Show English</button></div>' +
      '<p class="translation" id="translation-' + index + '" hidden>' + story.english + '</p></div></article>';
  }

  function renderStories() {
    document.getElementById('story-list').innerHTML = stories.map(storyHtml).join('');
  }

  function showWord(word) {
    var item = lookup(word);
    document.getElementById('popover-word').textContent = item ? item.word : word;
    document.getElementById('popover-meaning').textContent = item ? item.meaning : 'Tap Words to look this up.';
    document.getElementById('word-popover').hidden = false;
  }

  function speak(text) {
    if (!window.speechSynthesis || !window.SpeechSynthesisUtterance) {
      window.alert('Speech is not available in this browser.');
      return;
    }
    window.speechSynthesis.cancel();
    var utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'fil-PH';
    utterance.rate = 0.82;
    window.speechSynthesis.speak(utterance);
  }

  function pickSentence() {
    if (!vocabulary.length) { return; }
    if (vocabulary.length > 1) {
      var next = currentSentence;
      while (next === currentSentence) { next = Math.floor(Math.random() * vocabulary.length); }
      currentSentence = next;
    }
    var item = vocabulary[currentSentence];
    document.getElementById('practice-sentence').textContent = item.sentence;
    document.getElementById('practice-english').textContent = item.sentenceEnglish;
    document.getElementById('practice-english').hidden = true;
    document.getElementById('show-sentence').textContent = 'Show English';
    document.getElementById('practice-word').textContent = item.word;
    document.getElementById('practice-meaning').textContent = item.meaning;
  }

  function filteredWords() {
    var query = normalize(document.getElementById('word-search').value);
    if (!query) { return vocabulary; }
    return vocabulary.filter(function (item) {
      return normalize(item.word).indexOf(query) !== -1 || normalize(item.meaning).indexOf(query) !== -1;
    });
  }

  function renderWords() {
    var matches = filteredWords();
    var visible = matches.slice(0, wordLimit);
    document.getElementById('word-result-count').textContent = matches.length + (matches.length === 1 ? ' word' : ' words');
    document.getElementById('word-list').innerHTML = visible.map(function (item) {
      return '<div class="word-card"><strong>' + item.word + '</strong><span>' + item.meaning + '</span></div>';
    }).join('');
    document.getElementById('more-words').hidden = visible.length >= matches.length;
  }

  function loadVocabulary() {
    var request = new XMLHttpRequest();
    request.open('GET', 'vocab.tsv', true);
    request.onreadystatechange = function () {
      if (request.readyState !== 4) { return; }
      if (request.status >= 200 && request.status < 300) {
        vocabulary = parseTsv(request.responseText);
        document.getElementById('sentence-count').textContent = vocabulary.length;
        currentSentence = Math.floor(Math.random() * vocabulary.length);
        pickSentence();
        renderWords();
      } else {
        document.getElementById('practice-sentence').textContent = 'The vocabulary list could not be loaded.';
        document.getElementById('word-result-count').textContent = 'Vocabulary unavailable';
      }
    };
    request.send();
  }

  document.addEventListener('click', function (event) {
    var target = event.target;
    var tab = target.closest ? target.closest('.tab') : null;
    if (tab) {
      var viewName = tab.getAttribute('data-view');
      Array.prototype.forEach.call(document.querySelectorAll('.tab'), function (item) {
        var active = item === tab;
        item.classList.toggle('active', active);
        item.setAttribute('aria-selected', active ? 'true' : 'false');
      });
      Array.prototype.forEach.call(document.querySelectorAll('.view'), function (view) {
        var active = view.id === viewName;
        view.hidden = !active;
        view.classList.toggle('active', active);
      });
    }
    if (target.classList.contains('help-word')) { showWord(target.getAttribute('data-word')); }
    if (target.classList.contains('translate-story')) {
      var translation = document.getElementById('translation-' + target.getAttribute('data-index'));
      translation.hidden = !translation.hidden;
      target.textContent = translation.hidden ? 'Show English' : 'Hide English';
    }
    if (target.classList.contains('speak-story')) { speak(stories[Number(target.getAttribute('data-index'))].text); }
  });

  document.getElementById('close-popover').addEventListener('click', function () {
    document.getElementById('word-popover').hidden = true;
  });
  document.getElementById('show-sentence').addEventListener('click', function () {
    var english = document.getElementById('practice-english');
    english.hidden = !english.hidden;
    this.textContent = english.hidden ? 'Show English' : 'Hide English';
  });
  document.getElementById('next-sentence').addEventListener('click', pickSentence);
  document.getElementById('speak-sentence').addEventListener('click', function () {
    speak(document.getElementById('practice-sentence').textContent);
  });
  document.getElementById('word-search').addEventListener('input', function () {
    wordLimit = 40;
    renderWords();
  });
  document.getElementById('more-words').addEventListener('click', function () {
    wordLimit += 40;
    renderWords();
  });

  renderStories();
  loadVocabulary();
}());
