'use strict'

const answers = document.querySelectorAll('.answer');
const plus = document.querySelectorAll('.plus');
const minus = document.querySelectorAll('.minus');
const menuBar = document.querySelector('.menu-icon');
const closeNav = document.querySelector('.close-nav');
const nav = document.querySelector('nav');
const navBar = document.querySelector('.nav-bar');
const header = document.querySelector('header')
const questions = document.querySelectorAll('.single-question');
const sliderBtnRight = document.querySelector('.slider-btn_right');
const sliderBtnLeft = document.querySelector('.slider-btn_left');
const allSection = document.querySelectorAll('.section')
const showNav = function(){
    navBar.classList.add('show-nav')

menuBar.style.animation= 'menu-spine 5s ease-in-out';
menuBar.style.display='none'
    closeNav.style.display= 'block'
}
const hideNav = function(){
    navBar.classList.remove('show-nav')
    closeNav.style.display='none'
    menuBar.style.display='block'
}

menuBar.addEventListener('click', showNav )
closeNav.addEventListener('click', hideNav)


const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight)
const stickyNav = function(entries){

    console.log(entries)
    const [entry] = entries;
    console.log(entry)

    if(!entry.isIntersecting){
        nav.classList.add('stickyNav')
    }else{
        nav.classList.remove('stickyNav')
    }

}

const headerObserver = new IntersectionObserver(
    stickyNav, {
        root: null,
        threshold:0,
        rootMargin:`-${navHeight}px`
    }
)

headerObserver.observe(header);

// answers.forEach(ans => ans.classList.add('hidden'))
minus.forEach(singleMinus => singleMinus.classList.add('hidden'))

questions.forEach(quest =>{quest.addEventListener('click',
()=> {
    quest.classList.toggle('active')
// plus.forEach(singleMinus => singleMinus.classList.toggle('hidden'))
    // minus.forEach(singleMinus => singleMinus.classList.toggle('hidden'))
}
)
})
const learnMore1 = document.querySelector('.more--1');
const section1 = document.getElementById('section--1');
const learnMore2 =document.querySelector('.insight-more');
const section3 =document.getElementById('section--3');
const faq = document.querySelector('.faq');
const section6 = document.getElementById('section--6')

learnMore1.addEventListener('click', function(e){
    const slCoords =section1.getBoundingClientRect();
    console.log(slCoords) ;
    
    // console.log(e.target.getBoundingClientRect());
    const section1Position = section1.offsetTop - navHeight
console.log(section1Position)

    window.scrollTo({
          top:  section1Position,
          behavior: 'smooth' 
        })
})

learnMore2.addEventListener('click', function(e){
    const section3Position = section3.offsetTop - navHeight;

    window.scrollTo({
        top: section3Position,
        behavior: "smooth",
    })
})

faq.addEventListener('click', function(e){
    e.preventDefault();
    const section6Position = section6.offsetTop - navHeight;

    window.scrollTo({
        top: section6Position,
        behavior: 'smooth'
    })
})
const test =document.querySelector('.test');

const scrollRight = function(){
    // tes t.scrollRight += 50;
    test.scrollBy(300, 0)

} 
const scrollLeft = function(){
    test.scrollBy(-300, 0)
//   test.scrollLeft -=50;
}

sliderBtnRight.addEventListener('click', scrollRight)
sliderBtnLeft.addEventListener('click', scrollLeft)

const sendBtn = document.querySelector('.send');
const suggInput = document.querySelector('.sugg-input');
const success= document.querySelector('.success')
const failed =document.querySelector('.failed')
// const suggInputValue = suggInput.value.trim();



const ShowInputMessage = function(){
const suggInputValue = suggInput.value.trim();

    if(suggInputValue  !== ''){
        success.classList.add('show')
        setTimeout(()=>{ success.classList.remove('show')}, 2500)
            }
    else{
        failed.classList.add('show')
        setTimeout(() => {failed.classList.remove('show')}, 2500)
    }

}

sendBtn.addEventListener('click', ShowInputMessage)



const revealSection = function(entries){
const [entry] = entries;
console.log(entry)
if(!entry.isIntersecting) return;
console.log(entry.target)
entry.target.classList.remove('hide-section')

sectionObserver.unobserve(entry.target)
}

const sectionObserver = new IntersectionObserver(
    revealSection, {
        root: null,
        threshold:.15,
    }
)

allSection.forEach(section => {
    sectionObserver.observe(section);
    section.classList.add('hide-section');
});
// tabsContainer.addEventListener('click', function (e) {
    
//     const clicked = e.target.closest('.operations__tab')
//         console.log(clicked);
        
//         if(!clicked) return;
    
//         // removing active tabs
//         tabs.forEach(t => t.classList.remove('operations__tab--active'));
//             tabsContent.forEach(c => c.classList.remove('operations__content--active'));
    
//             // activating tabs
//             clicked.classList.add('operations__tab--active')
//             // activatimg the content area
//               console.log(clicked.dataset.tab);
//               document.querySelector(`.operations__content--${clicked.dataset.tab}`)
//               .classList.add('operations__content--active');
              
//     })