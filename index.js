const heroSection = document.querySelector(".section-hero");

// creating a portfolio tabbed componenet

const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".img-overlay");

// code for click in a button

p_btns.addEventListener("click", (e) => {
    const p_btn_clicked = e.target;
    console.log(p_btn_clicked);

    p_btn.forEach((curElem) => curElem.classList.remove("p-btn-active"));

    p_btn_clicked.classList.add("p-btn-active");

// to find the number of button in data attr
 const btn_num = p_btn_clicked.dataset.btnNum;
 console.log(btn_num);

 const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);
//  ${btn_num} is used to target the button number of images
  
 p_img_elem.forEach((curElem) => curElem.classList.add("p-image-not-active"));

 img_active.forEach((curElem) => curElem.classList.remove("p-image-not-active"));


});

/* <!-- our testimonial section start --> */

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

// const heroSection = document.querySelector(".section-hero");

const footerElem = document.querySelector(".section-footer");

// scroll to top button create

  const scrollTotop = document.createElement("div");

// createElemnt is used to create elment

 scrollTotop.classList.add("scrollTop-style");

//  scrollTotop.classList.add("scrollTop-style"); it is a class of elemnet

scrollTotop.innerHTML = `<ion-icon name="arrow-up" class="scroll-top"></ion-icon>
`;

footerElem.after(scrollTotop);

// it is a function of scroll button to send him in the top
const scrollTop = () => {
  heroSection.scrollIntoView({behavior: "smooth"});
};

scrollTotop.addEventListener("click",scrollTop);

// add animation in our work counter section

const counterNum = document.querySelectorAll(".counter-numbers");

const speed = 200;

counterNum.forEach((curElem) => {
  const updateNumber = () => {
    const targetNumber = parseInt(curElem.dataset.number);
    // console.log(targetNumber);

    const initialNum = parseInt(curElem.innerText);
    // console.log(initialNum);

    const incrementNum = Math.trunc(targetNumber / speed);
    // console.log(incrementNum);

    if(initialNum < targetNumber)
{
  curElem.innerText = `${initialNum + incrementNum}+`;
  setTimeout(updateNumber,10);
}
  };
updateNumber();

});

// creating a responsive navbar component

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const headerElem = document.querySelector(".header");

mobile_nav.addEventListener('click' , () =>{
  // headerElem.classList.toggle("active");
  if(headerElem.classList.contains("active"))
  headerElem.classList.remove("active");
  else{
  headerElem.classList.add("active");
  }


})

// toggle is a method which first add and second remove the class

// creating a sticky responsive navbar component
//  const observer = new IntersectionObserver( (entries) => {
//   const ent = entries[0];

//  !ent.isIntersecting ? document.body.classList.add("sticky") : document.body.classList.remove("sticky");
//  }, {
//   root: null,
//   threshold: 0,
// });


//  observer.observe(heroSection);


//animated number section

const workSection = document.querySelector('.section-work-data');

const workObserver = new IntersectionObserver( (entries,observer) => {
  const [entry] = entries;
  // console.log(ent);

  if(entry.isIntersecting == false) return;

  // add animation in our work counter section

const counterNum = document.querySelectorAll(".counter-numbers");

const speed = 200;

counterNum.forEach((curElem) => {
  const updateNumber = () => {
    const targetNumber = parseInt(curElem.dataset.number);
    // console.log(targetNumber);

    const initialNum = parseInt(curElem.innerText);
    // console.log(initialNum);

    const incrementNum = Math.trunc(targetNumber / speed);
    // console.log(incrementNum);

    if(initialNum < targetNumber)
{
  curElem.innerText = `${initialNum + incrementNum}+`;
  setTimeout(updateNumber,30);
}
  };
updateNumber();

});

observer.unobserve(workSection)},
{
  root:null,
  threshold:0,
}
);

const myJsmedia = (widthSize) =>{
  if(widthSize.matches){
    new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
  });
  }else{
    new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
    });
  }
};

workObserver.observe(workSection);
// make responsive testmonial section

 const widthSize = window.matchMedia("(max-width: 780px)");
//  call listener function at run time
myJsmedia(widthSize);
// attach listener function on state change
widthSize.addEventListener("change" , myJsmedia);