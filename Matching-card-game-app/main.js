let cardsArray = [
    {    'name': 'CSS',    'img': 'https://github.com/robgmerrill/img/blob/master/css3-logo.png?raw=true',  },
    {    'name': 'HTML',    'img': 'https://github.com/robgmerrill/img/blob/master/html5-logo.png?raw=true',  },
    {    'name': 'jQuery',    'img': 'https://github.com/robgmerrill/img/blob/master/jquery-logo.png?raw=true',  },
    {    'name': 'JS',    'img': 'https://github.com/robgmerrill/img/blob/master/js-logo.png?raw=true',  },
    {    'name': 'Node',    'img': 'https://github.com/robgmerrill/img/blob/master/nodejs-logo.png?raw=true',  },
    {    'name': 'Photo Shop',    'img': 'https://github.com/robgmerrill/img/blob/master/photoshop-logo.png?raw=true',  },
    {    'name': 'PHP',    'img': 'https://github.com/robgmerrill/img/blob/master/php-logo_1.png?raw=true',  },
    {    'name': 'Python',    'img': 'https://github.com/robgmerrill/img/blob/master/python-logo.png?raw=true',  },
    {    'name': 'Ruby',    'img': 'https://github.com/robgmerrill/img/blob/master/rails-logo.png?raw=true',  },
    {    'name': 'Sass',    'img': 'https://github.com/robgmerrill/img/blob/master/sass-logo.png?raw=true',  },
    {    'name': 'Sublime',    'img': 'https://github.com/robgmerrill/img/blob/master/sublime-logo.png?raw=true',  },
    {    'name': 'Wordpress',    'img': 'https://github.com/robgmerrill/img/blob/master/wordpress-logo.png?raw=true',  },
];

let gameGrid = cardsArray.concat(cardsArray);
let game = document.getElementById('game-board');
let grid = document.createElement('section');

gameGrid.sort(function () {
    return 0.5 - Math.random();
})

grid.setAttribute('class', 'grid');

game.appendChild(grid);

gameGrid.forEach(elem => {
    let card = document.createElement('div');
    card.classList.add('card');
    card.dataset.name = elem.name;
    card.style.backgroundImage = `url(${elem.img})`;
    grid.appendChild(card);
});

let firstGuess = '';
let secondGuess = '';

let count = 0;
let previousTarget = null;

let match = function () {
    let selected = document.querySelectorAll('.selected');

    selected.forEach(elem => {
        elem.classList.add('match');
    });
}

grid.addEventListener('click', function(event) {
    let clicked = event.target;

    if (clicked.nodeName === 'SECTION' || clicked === previousTarget) {
        return;
    }

    if (count < 2) {
        count ++;
        if (count === 1) {
            firstGuess = clicked.dataset.name;
            clicked.classList.add('selected');
        } else {
            secondGuess = clicked.dataset.name;
            clicked.classList.add('selected');
        }

        if (firstGuess != '' && secondGuess != '') {

            if (firstGuess === secondGuess ) {
                match();
            }
        }
        previousTarget = clicked;
    }
});
