const accordianArray = document.querySelectorAll(".accordian");

accordianArray.forEach((accordian) => {
  const question = accordian.querySelector(".ques");
  const answer = accordian.querySelector(".answer");
  question.addEventListener("click", () => {
    accordian.classList.toggle("active");
    accordianArray.forEach((item) => {
        if (item !== accordian && item.classList.contains("active")) {
          item.classList.remove("active");
        }
      });
  });

});
