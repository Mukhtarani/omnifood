//////////////////////////////////////////////////////////
// console.log("hello world")

//// to update the year in footer
const yearEl = document.querySelector(".year")
const currentYear = new Date().getFullYear()
yearEl.textContent = currentYear;


//// make mobile nav work
const btnEl = document.querySelector(".btn-mobile-nav")
const headerEl = document.querySelector(".header")

btnEl.addEventListener("click", function() {
    headerEl.classList.toggle("nav-open")
})




//// to create smooth scrolling work on html first then write js
//// so it can work on all browsers especially safari
//// smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function(link) {
    link.addEventListener("click", function(e) {
        e.preventDefault(); //to prevent moving to default point on page
        const href = link.getAttribute("href");

        // scroll back to top
        if(href === "#") {
          window.scrollTo({
              top: 0,
              behavior: "smooth"
          })
        }

        if(href !== "#" && href.startsWith("#")) {
         const sectionEl = document.querySelector(href)

        //  we cant use scrollTo because we dont always know the position we want to move to
         sectionEl.scrollIntoView({
             behaviour: "smooth"
         })
        }

        //close mobile navigation after scrolling to section

        if(link.classList.contains("main-nav-link")){
            // i.e remove nav-open in header when there is main-nav-link
            headerEl.classList.toggle("nav-open")
        }
          
    })
})


//////////////////////////////////////////////
// sticky navigation
const sectionHeroEl = document.querySelector(".section-hero")

const obs = new IntersectionObserver(function(entries) {
  const ent = entries[0];
//   console.log(ent);
  if(ent.isIntersecting === false){
      document.body.classList.add("sticky");
  }

  if(ent.isIntersecting === true){
    document.body.classList.remove("sticky");
   }
  
}, 
{
    root:null,
    threshold: 0,
    rootMargin: "-80px" //to make the sticky appear 80px before the next section after hero
})

obs.observe(sectionHeroEl)




///// to perform an action on h1

// const myName = "Muhtar anileleye "
// const h1 = document.querySelector(".heading-primary")
// h1.addEventListener("click", function() {
//     h1.textContent = myName;
//     h1.style.backgroundColor = "red";
//     h1.style.padding = "5rem";
// })











// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
    var flex = document.createElement("div");
    flex.style.display = "flex";
    flex.style.flexDirection = "column";
    flex.style.rowGap = "1px";
  
    flex.appendChild(document.createElement("div"));
    flex.appendChild(document.createElement("div"));
  
    document.body.appendChild(flex);
    var isSupported = flex.scrollHeight === 1;
    flex.parentNode.removeChild(flex);
    console.log(isSupported);
  
    if (!isSupported) document.body.classList.add("no-flexbox-gap");
  }
  checkFlexGap();
  
  // https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js