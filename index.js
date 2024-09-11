document.getElementById("addBook").onclick = function () {
  Swal.fire({
    title: "Sudah memiliki akun ?",
    text: "Silakan login terlebih dahulu !",
    icon: "question",
  });
};
let signSlide = document.getElementById("aub-sign");
console.log("🚀 ~ signSlide:", signSlide);
let loginSlide = document.getElementById("aub-login");

window.onscroll = function () {
  document.querySelector(".acces-user").style.transition = `all .5s ease`;
  document.querySelector(".acces-user").style.scale = `0`;
};
document.querySelector(".login-box").onclick = function () {
  document.querySelector(".acces-user").style.transition = `all .5s ease`;
  document.querySelector(".acces-user").style.scale = `1`;
};

document.getElementById("signSlide").onclick = function () {
  signSlide.style.transition = `all .5s ease`;
  signSlide.style.scale = `1`;
  signSlide.style.transform = `translateX(0px)`;
  signSlide.style.zIndex = `2`;

  loginSlide.style.transition = `all .5s ease`;
  loginSlide.style.scale = `0.5`;
  loginSlide.style.zIndex = `0`;
};

document.getElementById("loginSlide").onclick = function () {
  loginSlide.style.transition = `all .5s ease`;
  loginSlide.style.scale = `1`;
  loginSlide.style.transform = `translateX(0px)`;
  loginSlide.style.zIndex = `2`;

  signSlide.style.transition = `all .5s ease`;
  signSlide.style.scale = `0.5`;
  signSlide.style.zIndex = `0`;
};

let eyeClose = document.querySelectorAll(".close-eye");
let passwordCheck = document.querySelectorAll(".passwordCheck");

for (let i = 0; i < eyeClose.length; i++) {
  eyeClose[i].onclick = function () {
    for (let i = 0; i < passwordCheck.length; i++) {
      if (
        passwordCheck[i].type == "password" &&
        eyeClose[i].name == "eye-off"
      ) {
        passwordCheck[i].type = "text";
        eyeClose[i].name = "eye";
      } else {
        passwordCheck[i].type = "password";
        eyeClose[i].name = "eye-off";
      }
    }
  };
}