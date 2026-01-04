// ==================== DATA ====================
const mineralsData = {
    metalicos: [
        { name: 'Ferro', hint: 'Contém substâncias metálicas.' },
        { name: 'Cobre', hint: 'Excelente condutor elétrico.' },
        { name: 'Estanho', hint: 'Usado em soldas e ligas.' },
        { name: 'Tungsténio', hint: 'Metal muito resistente.' },
        { name: 'Volfrâmio', hint: 'Metal muito resistente.' },
        { name: 'Lítio', hint: 'Essencial para baterias.' },
        { name: 'Ouro', hint: 'Metal precioso amarelo.' },
        { name: 'Prata', hint: 'Metal precioso brilhante.' }
    ],
    energeticos: [
        { name: 'Carvão', hint: 'Usado como fonte de energia fóssil.' },
        { name: 'Urânio', hint: 'Energia nuclear.' },
        { name: 'Gás Natural', hint: 'Combustível gasoso.' },
        { name: 'Petróleo', hint: 'O \'ouro negro\' energético.' }
    ],
    industriais: [
        { name: 'Calcário', hint: 'Para construção e obras públicas.' },
        { name: 'Margas', hint: 'Usado na indústria do cimento.' },
        { name: 'Areias', hint: 'Essencial para construção civil.' },
        { name: 'Argilas', hint: 'Para cerâmica e construção.' },
        { name: 'Pedras', hint: 'Matéria prima de construção.' },
        { name: 'Britas', hint: 'Agregado para construção.' },
        { name: 'Gesso', hint: 'Usado em acabamentos de construção.' }
    ],
    ornamentais: [
        { name: 'Mármore', hint: 'Usado em estátuas e bancadas.' },
        { name: 'Granito', hint: 'Rocha dura para ornamentação.' },
        { name: 'Ardósia', hint: 'Usada em telhados e pavimentos.' },
        { name: 'Xisto', hint: 'Usado em aldeias históricas e decoração.' }
    ],
    nao_metalicos: [
        { name: 'Sal-gema', hint: 'Mineral não metálico, tempero.' },
        { name: 'Quartzo', hint: 'Mineral muito comum na crosta.' },
        { name: 'Caulino', hint: 'Argila branca pura.' },
        { name: 'Feldspato', hint: 'Mineral constituinte de rochas.' },
        { name: 'Talco', hint: 'O mineral mais macio da escala de Mohs.' }
    ]
};

const quizQuestions = [
    {
        question: 'Qual a definição de recursos metálicos?',
        options: [
            'Apresentam substâncias metálicas na sua constituição',
            'São utilizados na ornamentação',
            'Destinam-se à construção civil',
            'Podem ser utilizados como fonte de energia'
        ],
        correct: 0
    },
    {
        question: 'Qual destes é um recurso energético?',
        options: ['Granito', 'Mármore', 'Carvão', 'Ferro'],
        correct: 2
    },
    {
        question: 'O que são rochas ornamentais?',
        options: [
            'Rochas com substâncias metálicas',
            'Rochas utilizadas na ornamentação de edifícios e ruas',
            'Rochas para transformação industrial',
            'Rochas que são fonte de energia'
        ],
        correct: 1
    },
    {
        question: 'Qual destes é um mineral metálico?',
        options: ['Calcário', 'Gesso', 'Ouro', 'Mármore'],
        correct: 2
    },
    {
        question: 'As rochas industriais destinam-se a:',
        options: [
            'Ornamentação de edifícios',
            'Transformação industrial e construção civil',
            'Produção de energia',
            'Apenas decoração'
        ],
        correct: 1
    },
    {
        question: 'Qual destes NÃO é um recurso metálico?',
        options: ['Ferro', 'Cobre', 'Granito', 'Lítio'],
        correct: 2
    },
    {
        question: 'O que caracteriza os recursos não metálicos?',
        options: [
            'Contêm substâncias metálicas',
            'São constituídos por substâncias não metálicas',
            'São sempre fonte de energia',
            'São sempre ornamentais'
        ],
        correct: 1
    },
    {
        question: 'Qual destes é uma rocha ornamental?',
        options: ['Carvão', 'Petróleo', 'Ardósia', 'Sal-gema'],
        correct: 2
    },
    {
        question: 'O tungsténio (volfrâmio) é:',
        options: [
            'Um recurso energético',
            'Uma rocha ornamental',
            'Um recurso metálico',
            'Uma rocha industrial'
        ],
        correct: 2
    },
    {
        question: 'Qual destes é usado na construção civil?',
        options: ['Urânio', 'Prata', 'Britas', 'Ouro'],
        correct: 2
    },
    {
        question: 'O gás natural é classificado como:',
        options: [
            'Recurso metálico',
            'Recurso energético',
            'Rocha ornamental',
            'Rocha industrial'
        ],
        correct: 1
    },
    {
        question: 'Qual destes pares é de recursos metálicos?',
        options: [
            'Ferro e Cobre',
            'Granito e Mármore',
            'Carvão e Petróleo',
            'Calcário e Gesso'
        ],
        correct: 0
    },
    {
        question: 'Os mármores são utilizados para:',
        options: [
            'Produção de energia',
            'Transformação industrial',
            'Ornamentação',
            'Extração de metais'
        ],
        correct: 2
    },
    {
        question: 'Qual destes é uma rocha industrial?',
        options: ['Xisto', 'Argila', 'Urânio', 'Prata'],
        correct: 1
    },
    {
        question: 'O petróleo é classificado como:',
        options: [
            'Recurso metálico',
            'Rocha ornamental',
            'Recurso energético',
            'Rocha industrial'
        ],
        correct: 2
    }
];

// ==================== GAME STATE ====================
let gameState = {
    currentMode: null,
    score: 0,
    totalScore: parseInt(localStorage.getItem('totalScore')) || 0,
    gamesPlayed: parseInt(localStorage.getItem('gamesPlayed')) || 0,
    currentQuestion: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
    minerals: [],
    timer: null,
    timeRemaining: 60,
    combo: 0,
    multiplier: 1,
    hintShown: false
};

// ==================== SCREEN MANAGEMENT ====================
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

// ==================== FEEDBACK POPUP ====================
function showFeedback(isCorrect) {
    const popup = document.getElementById('feedback-popup');
    const icon = popup.querySelector('.feedback-icon');
    const text = popup.querySelector('.feedback-text');

    popup.classList.remove('correct', 'wrong');

    if (isCorrect) {
        popup.classList.add('correct');
        icon.textContent = '✓';
        text.textContent = 'Correto!';
    } else {
        popup.classList.add('wrong');
        icon.textContent = '✗';
        text.textContent = 'Incorreto!';
    }

    popup.classList.add('show');

    setTimeout(() => {
        popup.classList.remove('show');
    }, 1500);
}

// ==================== UTILS ====================
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

function getAllMinerals() {
    const all = [];
    Object.keys(mineralsData).forEach(category => {
        mineralsData[category].forEach(mineral => {
            all.push({
                name: mineral.name,
                hint: mineral.hint,
                category: category
            });
        });
    });
    return shuffleArray(all);
}

function updateTotalStats() {
    document.getElementById('total-score').textContent = gameState.totalScore;
    document.getElementById('games-played').textContent = gameState.gamesPlayed;
    localStorage.setItem('totalScore', gameState.totalScore);
    localStorage.setItem('gamesPlayed', gameState.gamesPlayed);
}

// ==================== CLASSIFICATION MODE ====================
function startClassificationMode() {
    gameState.currentMode = 'classification';
    gameState.score = 0;
    gameState.currentQuestion = 0;
    gameState.correctAnswers = 0;
    gameState.wrongAnswers = 0;
    gameState.minerals = getAllMinerals().slice(0, 25);

    showScreen('classification-screen');
    updateClassificationUI();
    loadNextMineral();
}

function updateClassificationUI() {
    document.getElementById('classification-score').textContent = gameState.score;
    document.getElementById('current-question').textContent = gameState.currentQuestion;
    document.getElementById('total-questions').textContent = gameState.minerals.length;

    const progress = (gameState.currentQuestion / gameState.minerals.length) * 100;
    document.getElementById('classification-progress').style.width = progress + '%';
}

function loadNextMineral() {
    if (gameState.currentQuestion >= gameState.minerals.length) {
        endGame();
        return;
    }

    const mineral = gameState.minerals[gameState.currentQuestion];
    const mineralCard = document.querySelector('.mineral-card .mineral-name');
    mineralCard.textContent = mineral.name;

    // Reset hint
    gameState.hintShown = false;
    const hintDisplay = document.getElementById('hint-display');
    if (hintDisplay) {
        hintDisplay.style.display = 'none';
        hintDisplay.textContent = '';
    }

    // Reset drag state
    const card = document.querySelector('.mineral-card');
    card.classList.remove('dragging');
}

function showHint() {
    const mineral = gameState.minerals[gameState.currentQuestion];
    const hintDisplay = document.getElementById('hint-display');

    if (hintDisplay && !gameState.hintShown) {
        hintDisplay.textContent = '💡 ' + mineral.hint;
        hintDisplay.style.display = 'block';
        gameState.hintShown = true;
    }
}

function checkClassification(selectedCategory) {
    const mineral = gameState.minerals[gameState.currentQuestion];
    const isCorrect = selectedCategory === mineral.category;

    if (isCorrect) {
        gameState.correctAnswers++;
        gameState.score += 10;
        showFeedback(true);
    } else {
        gameState.wrongAnswers++;
        showFeedback(false);
    }

    gameState.currentQuestion++;

    setTimeout(() => {
        updateClassificationUI();
        loadNextMineral();
    }, 1600);
}

// Drag and Drop
function initDragAndDrop() {
    const mineralCard = document.querySelector('.mineral-card');
    const dropZones = document.querySelectorAll('.category-zone');
    const hintBtn = document.getElementById('hint-btn');

    // Hint button
    if (hintBtn) {
        hintBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            showHint();
        });
    }

    let touchStartX, touchStartY;

    // Mouse events
    mineralCard.addEventListener('mousedown', (e) => {
        mineralCard.classList.add('dragging');
    });

    document.addEventListener('mouseup', () => {
        mineralCard.classList.remove('dragging');
    });

    // Touch events
    mineralCard.addEventListener('touchstart', (e) => {
        mineralCard.classList.add('dragging');
        const touch = e.touches[0];
        touchStartX = touch.clientX;
        touchStartY = touch.clientY;
    });

    mineralCard.addEventListener('touchend', (e) => {
        mineralCard.classList.remove('dragging');
        const touch = e.changedTouches[0];
        const element = document.elementFromPoint(touch.clientX, touch.clientY);
        const zone = element.closest('.category-zone');
        if (zone) {
            const category = zone.dataset.category;
            checkClassification(category);
        }
    });

    dropZones.forEach(zone => {
        zone.addEventListener('dragover', (e) => {
            e.preventDefault();
            zone.classList.add('drag-over');
        });

        zone.addEventListener('dragleave', () => {
            zone.classList.remove('drag-over');
        });

        zone.addEventListener('drop', (e) => {
            e.preventDefault();
            zone.classList.remove('drag-over');
            const category = zone.dataset.category;
            checkClassification(category);
        });

        // Click alternative
        zone.addEventListener('click', () => {
            const category = zone.dataset.category;
            checkClassification(category);
        });
    });

    mineralCard.setAttribute('draggable', 'true');
}

// ==================== QUIZ MODE ====================
function startQuizMode() {
    gameState.currentMode = 'quiz';
    gameState.score = 0;
    gameState.currentQuestion = 0;
    gameState.correctAnswers = 0;
    gameState.wrongAnswers = 0;
    gameState.minerals = shuffleArray(quizQuestions).slice(0, 15);

    showScreen('quiz-screen');
    loadQuizQuestion();
}

function loadQuizQuestion() {
    if (gameState.currentQuestion >= gameState.minerals.length) {
        endGame();
        return;
    }

    const question = gameState.minerals[gameState.currentQuestion];

    document.getElementById('quiz-current').textContent = gameState.currentQuestion + 1;
    document.getElementById('quiz-total').textContent = gameState.minerals.length;
    document.getElementById('quiz-question').textContent = question.question;
    document.getElementById('quiz-score').textContent = gameState.score;

    const progress = ((gameState.currentQuestion + 1) / gameState.minerals.length) * 100;
    document.getElementById('quiz-progress').style.width = progress + '%';

    const optionsContainer = document.getElementById('quiz-options');
    optionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'quiz-option';
        button.textContent = option;
        button.addEventListener('click', () => selectQuizAnswer(index));
        optionsContainer.appendChild(button);
    });
}

function selectQuizAnswer(selectedIndex) {
    const question = gameState.minerals[gameState.currentQuestion];
    const options = document.querySelectorAll('.quiz-option');
    const isCorrect = selectedIndex === question.correct;

    // Disable all options
    options.forEach(opt => opt.classList.add('disabled'));

    // Mark correct and wrong
    options[selectedIndex].classList.add(isCorrect ? 'correct' : 'wrong');
    if (!isCorrect) {
        options[question.correct].classList.add('correct');
    }

    if (isCorrect) {
        gameState.correctAnswers++;
        gameState.score += 10;
    } else {
        gameState.wrongAnswers++;
    }

    gameState.currentQuestion++;

    setTimeout(() => {
        loadQuizQuestion();
    }, 2000);
}

// ==================== SPEED MODE ====================
function startSpeedMode() {
    gameState.currentMode = 'speed';
    gameState.score = 0;
    gameState.correctAnswers = 0;
    gameState.wrongAnswers = 0;
    gameState.timeRemaining = 60;
    gameState.combo = 0;
    gameState.multiplier = 1;
    gameState.minerals = getAllMinerals();
    gameState.currentQuestion = 0;

    showScreen('speed-screen');
    loadSpeedMineral();
    startTimer();
}

function startTimer() {
    const timerElement = document.querySelector('.timer-value');

    gameState.timer = setInterval(() => {
        gameState.timeRemaining--;
        timerElement.textContent = gameState.timeRemaining;

        if (gameState.timeRemaining <= 10) {
            timerElement.style.color = 'var(--error)';
        }

        if (gameState.timeRemaining <= 0) {
            clearInterval(gameState.timer);
            endGame();
        }
    }, 1000);
}

function loadSpeedMineral() {
    if (gameState.currentQuestion >= gameState.minerals.length) {
        gameState.minerals = shuffleArray(gameState.minerals);
        gameState.currentQuestion = 0;
    }

    const mineral = gameState.minerals[gameState.currentQuestion];
    document.querySelector('.mineral-name-big').textContent = mineral.name;
}

function checkSpeedAnswer(selectedCategory) {
    const mineral = gameState.minerals[gameState.currentQuestion];
    const isCorrect = selectedCategory === mineral.category;

    if (isCorrect) {
        gameState.correctAnswers++;
        gameState.combo++;

        // Update multiplier based on combo
        if (gameState.combo >= 10) {
            gameState.multiplier = 3;
        } else if (gameState.combo >= 5) {
            gameState.multiplier = 2;
        } else {
            gameState.multiplier = 1;
        }

        gameState.score += 5 * gameState.multiplier;
        showFeedback(true);
    } else {
        gameState.wrongAnswers++;
        gameState.combo = 0;
        gameState.multiplier = 1;
        showFeedback(false);
    }

    updateSpeedUI();
    gameState.currentQuestion++;
    loadSpeedMineral();
}

function updateSpeedUI() {
    document.getElementById('speed-score').textContent = gameState.score;
    document.querySelector('.combo-value').textContent = gameState.combo;
    document.querySelector('.combo-multiplier').textContent = '×' + gameState.multiplier;
}

// Initialize speed buttons
function initSpeedButtons() {
    const buttons = document.querySelectorAll('.speed-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;
            checkSpeedAnswer(category);
        });
    });
}

// ==================== END GAME ====================
function endGame() {
    if (gameState.timer) {
        clearInterval(gameState.timer);
    }

    // Update total stats
    gameState.totalScore += gameState.score;
    gameState.gamesPlayed++;
    updateTotalStats();

    // Calculate accuracy
    const total = gameState.correctAnswers + gameState.wrongAnswers;
    const accuracy = total > 0 ? Math.round((gameState.correctAnswers / total) * 100) : 0;

    // Set results
    document.getElementById('final-score').textContent = gameState.score + ' pontos';
    document.getElementById('correct-answers').textContent = gameState.correctAnswers;
    document.getElementById('wrong-answers').textContent = gameState.wrongAnswers;
    document.getElementById('accuracy').textContent = accuracy + '%';

    // Set message and icon based on performance
    const resultsIcon = document.getElementById('results-icon');
    const resultsTitle = document.getElementById('results-title');
    const resultsMessage = document.getElementById('results-message');

    if (accuracy >= 90) {
        resultsIcon.textContent = '🏆';
        resultsTitle.textContent = 'Excelente!';
        resultsMessage.textContent = 'Dominas os recursos minerais na perfeição!';
    } else if (accuracy >= 70) {
        resultsIcon.textContent = '⭐';
        resultsTitle.textContent = 'Muito Bem!';
        resultsMessage.textContent = 'Tens um bom conhecimento sobre recursos minerais!';
    } else if (accuracy >= 50) {
        resultsIcon.textContent = '👍';
        resultsTitle.textContent = 'Bom Trabalho!';
        resultsMessage.textContent = 'Continua a estudar para melhorar ainda mais!';
    } else {
        resultsIcon.textContent = '📚';
        resultsTitle.textContent = 'Continua a Aprender!';
        resultsMessage.textContent = 'Revê a matéria e tenta novamente!';
    }

    showScreen('results-screen');
}

// ==================== EVENT LISTENERS ====================
document.addEventListener('DOMContentLoaded', () => {
    // Update initial stats
    updateTotalStats();

    // Mode selection
    document.querySelectorAll('.mode-card').forEach(card => {
        card.addEventListener('click', () => {
            const mode = card.dataset.mode;
            if (mode === 'classification') {
                startClassificationMode();
            } else if (mode === 'quiz') {
                startQuizMode();
            } else if (mode === 'speed') {
                startSpeedMode();
            }
        });
    });

    // Back buttons
    document.getElementById('back-classification').addEventListener('click', () => {
        showScreen('welcome-screen');
    });

    document.getElementById('back-quiz').addEventListener('click', () => {
        showScreen('welcome-screen');
    });

    document.getElementById('back-speed').addEventListener('click', () => {
        if (gameState.timer) {
            clearInterval(gameState.timer);
        }
        showScreen('welcome-screen');
    });

    // Results buttons
    document.getElementById('play-again').addEventListener('click', () => {
        if (gameState.currentMode === 'classification') {
            startClassificationMode();
        } else if (gameState.currentMode === 'quiz') {
            startQuizMode();
        } else if (gameState.currentMode === 'speed') {
            startSpeedMode();
        }
    });

    document.getElementById('back-home').addEventListener('click', () => {
        showScreen('welcome-screen');
    });

    // Initialize drag and drop
    initDragAndDrop();

    // Initialize speed buttons
    initSpeedButtons();

    // Create particles
    createParticles();
});

// ==================== PARTICLES ====================
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 4 + 2 + 'px';
        particle.style.height = particle.style.width;
        particle.style.borderRadius = '50%';
        particle.style.background = `hsla(${Math.random() * 360}, 70%, 60%, 0.3)`;
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `particleFloat ${Math.random() * 10 + 10}s infinite alternate`;
        particle.style.animationDelay = Math.random() * 5 + 's';
        particlesContainer.appendChild(particle);
    }
}
