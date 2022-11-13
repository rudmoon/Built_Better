// Header영역 slideShow

const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slideShow');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
const container = document.querySelector('.slide-show--container');
let currentIndex = 0;
const slideCount = slide.length;

function makeClone() {
    for(let i=0; i<slideCount; i++) {
        let nextClone = slide[i].cloneNode(true);
        nextClone.classList.add('nextClone');
        slides.appendChild(nextClone);
    }   
    for(let i=slideCount-1; i>=0; i--) {
        let prevClone = slide[i].cloneNode(true);
        prevClone.classList.add('prevClone');
        slides.prepend(prevClone);
    }
    setTimeout(() => {
        newSlides.classList.add('animated');
    }, 0.1);   
};

makeClone();

const newSlides = document.querySelector('.slides');
const newSlide = document.querySelectorAll('.slideShow');
const newSlideCount = newSlide.length;

for(let i=0; i<newSlideCount; i++) {
    newSlide[i].style.left = (i-slideCount)*100 + '%';
}


function gotoSlide(index) {
    newSlides.style.left = -index*100 + '%';
    currentIndex = index;

    if(currentIndex == slideCount) { 
        setTimeout(() => {
            newSlides.classList.remove('animated');
            newSlides.style.left = 0 + '%';
            currentIndex=0;  
        }, 500);
        setTimeout(() => {
            newSlides.classList.add('animated');
        }, 600);
    }   

    if(currentIndex == -1) {
        setTimeout(() => {
            newSlides.classList.remove('animated');
            newSlides.style.left = (slideCount-7)*100 + '%';
            currentIndex=slideCount-1;      
        }, 500);  
        setTimeout(() => {
            newSlides.classList.add('animated');
        }, 600);
    }
}



nextBtn.addEventListener('click', (ev) => {
    ev.preventDefault();
    gotoSlide(currentIndex+1);
});
prevBtn.addEventListener('click', (ev) => {
    ev.preventDefault();
    gotoSlide(currentIndex-1);
});


gotoSlide(0);

let idx = 1;
let loopInterval = setInterval(() => {
    
    gotoSlide(idx);
    if(idx>=4) {
        idx=1;
    } else {
        idx++;
    }
}, 3000);

container.addEventListener('mouseover', () => {
    clearInterval(loopInterval);
});

container.addEventListener('mouseout',() => {
    loopInterval = setInterval(() => {
    
        gotoSlide(idx);
        if(idx>=4) {
            idx=1;
        } else {
            idx++;
        }
    }, 3000);
});

// Projects Slide show

const projectContainer = document.querySelector('.projects__slide-show');
const projectUl = document.querySelector('.slide__ul');
const projectli = document.querySelectorAll('.slide');
const projectPrevbtn = document.querySelector('#projectPrevbtn');
const projectNextbtn = document.querySelector('#projectNextbtn');
const liwidth = projectli[0].getBoundingClientRect().width;
const limargin = 20;
let pjIndex = 0;



function pjMakeclone() {
    for(let i=0; i<projectli.length; i++) {
        let clone = projectli[i].cloneNode(true);
        clone.classList.add('nextClone');
        projectUl.appendChild(clone);
    }
    for(let i=projectli.length-1; i>=0; i--) {
        let clone = projectli[i].cloneNode(true);
        clone.classList.add('prevClone');
        projectUl.prepend(clone);
    }
}

pjMakeclone();

const newprojectLi = document.querySelectorAll('.slide');

for(let i=0; i<newprojectLi.length; i++) {
    newprojectLi[i].style.left = i*(liwidth+limargin) + 'px';
}

function goThreeSlides(idx) {
    projectUl.style.left = -idx*(liwidth*3+limargin*3) + 'px'; 
    pjIndex = idx;

    if(pjIndex===2) {
        setTimeout(() => {
            projectUl.classList.remove('animated');
            goThreeSlides(1);
        }, 700);
    }
    if(pjIndex===0) {
        setTimeout(() => {
            projectUl.classList.remove('animated');
            goThreeSlides(1);
        }, 700);
    }
}

projectNextbtn.addEventListener('click',function evev(ev) {
    ev.preventDefault();
    projectUl.classList.add('animated');
    goThreeSlides(pjIndex+1);  
    console.log(pjIndex);
})
projectPrevbtn.addEventListener('click',function(ev) {
    ev.preventDefault();
    projectUl.classList.add('animated');
    goThreeSlides(pjIndex-1);  
    console.log(pjIndex);
});
goThreeSlides(1);

let loopNum = 1;
let loopFunc = setInterval(() => {
    
    projectUl.classList.add('animated');
    goThreeSlides(2);
    
}, 2000);

projectContainer.addEventListener('mouseover', () => {
    clearInterval(loopFunc);
});

projectContainer.addEventListener('mouseout',() => {
    loopFunc = setInterval(() => {
    
        projectUl.classList.add('animated');
        goThreeSlides(2);   
    }, 3000);
});

// Clients slideshow

const clientsUL = document.querySelector('.clientsUL');
const clientsLI = document.querySelectorAll('.clientsLi');
const squaresLI = document.querySelectorAll('.li__sqaure');
let slideNum = 0;

for(let i=1; i<clientsLI.length; i++) {
    clientsLI[i].style.left = i*100 + '%';
}

function goNthslide(num) {
    clientsUL.classList.add('active');
    clientsUL.style.left = (-num)*100 + '%';
    slideNum = num;
} 

// 각 num을 0,1,2,3을 부여함

for(let i=0; i<squaresLI.length; i++) {
    squaresLI[i].addEventListener('click', () => {
        for(let j=0; j<squaresLI.length; j++) {
            squaresLI[j].classList.remove('active');
        }
        squaresLI[i].classList.add('active');
        goNthslide(i);
    })
}

goNthslide(0);

// Responsive JS

// 1. navBar
const navbar = document.querySelector('#nav__bar');
const navUL = document.querySelector('.nav__ul');
navbar.addEventListener('click', (ev) => {
    ev.preventDefault();
    navUL.classList.toggle('active');
});

// 2. Responsive media query
if(matchMedia("screen and (max-width: 1270px)").matches){
    projectContainer.addEventListener('mouseover', () => {
        clearInterval(loopFunc);
    });
    projectContainer.addEventListener('mouseout', () => {
        clearInterval(loopFunc);
    });
}

window.onresize = function(){
    document.location.reload();
};

// 3.Scrolling to specific section
const navMenu = document.querySelectorAll('.nav__ul--menu a');

const header = document.querySelector('#header');
const services = document.querySelector('#services');
const about = document.querySelector('#about');
const furnitures = document.querySelector('#furnitures');
const contact = document.querySelector('#contact');

let sections = [header, services, about, furnitures, contact];

navMenu.forEach((value,index) => {
    value.addEventListener('click', (ev) => {
        ev.preventDefault();
        scrollTo({
            top : sections[index].getBoundingClientRect().y,
            left : 0,
            behavior: 'smooth',
        })
    })
});

// 4. Making gotoTop arrow

const gotoTop_btn = document.querySelector('#gotoTop--arrow');
const docHeight = document.documentElement.scrollHeight;
console.log(docHeight);

window.addEventListener('scroll', () => {
    if(window.scrollY*4>docHeight) {
        gotoTop_btn.classList.add('active');
    } else {
        gotoTop_btn.classList.remove('active');
    }
});

gotoTop_btn.addEventListener('click', (ev) => {
    ev.preventDefault();
    window.scrollTo({
        top : 0,
        left : 0,
        behavior: 'smooth',
    })
})
