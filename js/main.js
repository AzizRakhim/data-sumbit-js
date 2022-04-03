let elHeroSubmitBtns = document.querySelectorAll(".hero__submit-btn");
let elHeroBackBtns = document.querySelectorAll(".hero__back-btn");
let elHeroTexts = document.querySelectorAll('.hero__text');
let elHeroBtns = document.querySelectorAll(".hero__btn");
let elHeroContainers = document.querySelectorAll(".hero__container");
const elHeroForm = document.querySelector(".hero__form");

function showHide(index) {
  elHeroContainers.forEach((item, idx) => {
    if(index == idx){
      item.className = "hero__container d-block";
    } else{
      item.className = "hero__container d-none";
    }
  });
}

elHeroSubmitBtns.forEach((el, indx, args) => {
  el.addEventListener("click", () => {
    elHeroBtns.forEach((value, idx) => {
      if(idx == indx + 1){
        value.style.color = "#000";
        value.style.fontWeight = "600";
      } 
    });

    elHeroContainers.forEach((item, index ) => {
      if(index == indx + 1){
        item.className = "hero__container d-block";
      } else{
        item.className = "hero__container d-none";
      }
    });
  });
});

elHeroBackBtns.forEach((el, index) => {
  el.addEventListener("click", () => {
    showHide(index);
    elHeroBtns.forEach((value, indx) => {
      if(index == indx - 1){
        value.style.color = "#888";
        value.style.fontWeight = "400";
      } 
    });
  });
});

elHeroBtns.forEach((item, index, args) => {
  item.addEventListener("click", () => {
    if(index == 0){
      args[1].classList.remove('active');
      args[2].classList.remove('active');

      showHide(index);
    } else if(index == 1){
      item.classList.add("active");
      args[2].classList.remove("active");

      showHide(index);
    } else if(index == 2 && args[1].classList.contains("active")){
      item.classList.add("active");

      showHide(index);
    }
  });
});