const navOpenBtn = document.querySelector('.fa-bars');
const navCloseBtn = document.querySelector('.fa-times');
const navbar = document.querySelector('.navbar');
const nav = document.querySelector('.navbar ul');
const header = document.getElementById('header');
const heroes = document.querySelectorAll('.hero-bg');

let heroHovered = false;

// https://javascript.plainenglish.io/how-to-retrieve-the-position-of-an-html-element-relative-to-the-browser-window-1398d1e994e0
const getOffset = (el) => {
    const rect = el.getBoundingClientRect();
    return rect.bottom + window.scrollY;
}

function swapHero() {
    setTimeout(() => {
        if (!heroHovered) {
            let currentHero;

            heroes.forEach((hero, idx) => {
                if (hero.classList.contains('show')) {
                    hero.classList.remove('show');
                    currentHero = idx;
                };
            });
    
            if (currentHero >= heroes.length - 1) {
                currentHero = 0;
            } else {
                currentHero += 1;
            };
    
            heroes[currentHero].classList.add('show');
        }

        swapHero();
    }, 5000);
}

function configNavFixed() {
    if (nav.getBoundingClientRect().top < 0) {
        nav.classList.add('fixed');
    } else if (scrollY < getOffset(header) - nav.offsetHeight) {
        nav.classList.remove('fixed');
    }
}

function addListeners() {
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 800) {
            navbar.classList.remove('show');
            configNavFixed();
        };
    });
    
    window.addEventListener('scroll', () => {
        if (window.innerWidth >= 800) {
            configNavFixed();
        };
    });
    
    navOpenBtn.addEventListener('click', () => {
        navbar.classList.add('show');
    });
    
    navCloseBtn.addEventListener('click', () => {
        navbar.classList.remove('show');
    });

    heroes.forEach(hero => {
        hero.addEventListener('mouseover', () => {
            heroHovered = true;
        });
        hero.addEventListener('mouseleave', () => {
            heroHovered = false;
        });
    })
}

function initScript() {
    addListeners();
    swapHero();
}

initScript();