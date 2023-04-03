const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show_info");
    }
  });
});

const hiddenElementsLeft = document.querySelectorAll(".slide-in-left");
hiddenElementsLeft.forEach((el) => observer.observe(el));

const hiddenElementsRight = document.querySelectorAll(".slide-in-right");
hiddenElementsRight.forEach((el) => observer.observe(el));

const hiddenElementstest = document.querySelectorAll(".lower_section");
hiddenElementstest.forEach((el) => observer.observe(el));