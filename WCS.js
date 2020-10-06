function myFunction() {
    for (let i = 1; i < 5; i++) {
    const li = document.createElement("a");
      if (i === 1) {
        li.textContent = `Performances`;
      };
      if (i === 2) {
        li.textContent = 'About Us';
      };
      if (i === 3) {
        li.textContent = 'Prices';
      };
      if (i === 4) {
        li.textContent = 'Contact Us';
      };
    li.setAttribute("class", "menu__link" );
    document.getElementById("navbar__list").appendChild(li);
    li.href = "#section"+i;
    }
}
    myFunction();



// Scroll to anchor ID using scrollTO event
const performances = document.getElementById('section1');

performances.scrollIntoView({
  behavior: "smooth",
  block: "start",
});

const aboutUs = document.getElementById('section2');

aboutUs.scrollIntoView({
  behavior: "smooth",
  block: "start",
});

const prices = document.getElementById('section3');

prices.scrollIntoView({
  behavior: "smooth",
  block: "start",
});

const contact = document.getElementById('section4');

contact.scrollIntoView({
  behavior: "smooth",
  block: "start",
});
