const header = document.querySelector("header");
const sectionOne = document.querySelector(".shirt-Section");

const sectionOneOptions = {
  rootMargin: "1000px 0px 0px 0px",
  threshold: 1
};


const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled");
    } else {
      header.classList.remove("nav-scrolled");
    }
  });
},
sectionOneOptions);


sectionOneObserver.observe(sectionOne);


