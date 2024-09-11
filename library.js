document.onscroll = function () {
  let optionFill = document.querySelectorAll(".optionFill");
  for (let i = 0; i < optionFill.length; i++) {
    optionFill[i].style.height = `0px`;
    optionFill[i].style.opacity = `0`;
  }
};

let optionBox = document.querySelectorAll(".optionBox");

optionBox[0].onmouseover = function () {
  let optionFill = document.querySelectorAll(".optionFill");
  for (let i = 0; i <= 3; i++) {
    optionBox[0].style.backgroundColor = `white`;
    optionFill[i].style.transition = `all .3s ease`;
    optionFill[i].style.transform = `translateX(0px)`;
    optionFill[i].style.opacity = `1`;
    optionFill[i].style.height = `50px`;
  }
};
optionBox[0].onmouseout = function () {
  let optionFill = document.querySelectorAll(".optionFill");
  for (let i = 0; i <= 3; i++) {
    optionBox[0].style.backgroundColor = `transparent`;
    optionFill[i].style.transition = `all .3s ease`;
    optionFill[i].style.transform = `translateX(-350px)`;
    optionFill[i].style.height = `0px`;
    optionFill[i].style.opacity = `0`;
  }
};

optionBox[1].onmouseover = function () {
  let optionFill = document.querySelectorAll(".optionFill");
  for (let i = 4; i <= 7; i++) {
    optionBox[1].style.backgroundColor = `white`;
    optionFill[i].style.transition = `all .3s ease`;
    optionFill[i].style.transform = `translateX(0px)`;
    optionFill[i].style.opacity = `1`;
    optionFill[i].style.height = `50px`;
  }
};
optionBox[1].onmouseout = function () {
  let optionFill = document.querySelectorAll(".optionFill");
  for (let i = 4; i <= 7; i++) {
    optionBox[1].style.backgroundColor = `transparent`;
    optionFill[i].style.transition = `all .3s ease`;
    optionFill[i].style.transform = `translateX(-350px)`;
    optionFill[i].style.height = `0px`;
    optionFill[i].style.opacity = `0`;
  }
};

optionBox[2].onmouseover = function () {
  let optionFill = document.querySelectorAll(".optionFill");
  for (let i = 8; i <= 11; i++) {
    optionBox[2].style.backgroundColor = `white`;
    optionFill[i].style.transition = `all .3s ease`;
    optionFill[i].style.transform = `translateX(0px)`;
    optionFill[i].style.opacity = `1`;
    optionFill[i].style.height = `50px`;
  }
};
optionBox[2].onmouseout = function () {
  let optionFill = document.querySelectorAll(".optionFill");
  for (let i = 8; i <= 11; i++) {
    optionBox[2].style.backgroundColor = `transparent`;
    optionFill[i].style.transition = `all .3s ease`;
    optionFill[i].style.transform = `translateX(-350px)`;
    optionFill[i].style.height = `0px`;
    optionFill[i].style.opacity = `0`;
  }
};

optionBox[3].onmouseover = function () {
  let optionFill = document.querySelectorAll(".optionFill");
  for (let i = 12; i <= 15; i++) {
    optionBox[3].style.backgroundColor = `white`;
    optionFill[i].style.transition = `all .3s ease`;
    optionFill[i].style.transform = `translateX(0px)`;
    optionFill[i].style.opacity = `1`;
    optionFill[i].style.height = `50px`;
  }
};
optionBox[3].onmouseout = function () {
  let optionFill = document.querySelectorAll(".optionFill");
  for (let i = 8; i <= 15; i++) {
    optionBox[3].style.backgroundColor = `transparent`;
    optionFill[i].style.transition = `all .3s ease`;
    optionFill[i].style.transform = `translateX(-350px)`;
    optionFill[i].style.height = `0px`;
    optionFill[i].style.opacity = `0`;
  }
};
