// оживление промо-слайдера на странице index.html
let sliderButtonFirst = document.querySelectorAll(".slider-button.first");
let sliderButtonSecond = document.querySelectorAll(".slider-button.second");
let sliderButtonThird = document.querySelectorAll(".slider-button.third");

let sliderFirst = document.querySelector(".promo-slider-item.first");
let sliderSecond = document.querySelector(".promo-slider-item.second");
let sliderThird = document.querySelector(".promo-slider-item.third");

for (let i = 0; i < 3; i++) {
  sliderButtonFirst[i].addEventListener("click", function(evt) {
    evt.preventDefault();
    if (!sliderButtonFirst[i].classList.contains("active")) {
      sliderFirst.classList.add("show-item");
      sliderSecond.classList.remove("show-item");
      sliderThird.classList.remove("show-item");
      sliderFirst.classList.remove("hide-item");
      sliderSecond.classList.add("hide-item");
      sliderThird.classList.add("hide-item");
      for (let i = 0; i < 3; i++) {
        sliderButtonFirst[i].classList.add("active");
        sliderButtonSecond[i].classList.remove("active");
        sliderButtonThird[i].classList.remove("active");
      }     
    }
  });

  sliderButtonSecond[i].addEventListener("click", function(evt) {
    evt.preventDefault();
    if (!sliderButtonSecond[i].classList.contains("active")) {
      sliderSecond.classList.add("show-item");
      sliderFirst.classList.remove("show-item");
      sliderThird.classList.remove("show-item");
      sliderSecond.classList.remove("hide-item");
      sliderFirst.classList.add("hide-item");
      sliderThird.classList.add("hide-item");
      for (let i = 0; i < 3; i++) {
        sliderButtonSecond[i].classList.add("active");
        sliderButtonFirst[i].classList.remove("active");
        sliderButtonThird[i].classList.remove("active");
      }  
    }
  });

  sliderButtonThird[i].addEventListener("click", function(evt) {
    evt.preventDefault();
    if (!sliderButtonThird[i].classList.contains("active")) {
      sliderThird.classList.add("show-item");
      sliderSecond.classList.remove("show-item");
      sliderFirst.classList.remove("show-item");
      sliderThird.classList.remove("hide-item");
      sliderSecond.classList.add("hide-item");
      sliderFirst.classList.add("hide-item");
      for (let i = 0; i < 3; i++) {
        sliderButtonThird[i].classList.add("active");
        sliderButtonSecond[i].classList.remove("active");
        sliderButtonFirst[i].classList.remove("active");
      }  
    }
  });
}

// оживление блока с услугами
let deliveryLink = document.querySelector(".services-item-title.delivery");
let guaranteeLink = document.querySelector(".services-item-title.guarantee");
let creditLink = document.querySelector(".services-item-title.credit");

let deliveryBlock = document.querySelector(".services-item-block.delivery");
let guaranteeBlock = document.querySelector(".services-item-block.guarantee");
let creditBlock = document.querySelector(".services-item-block.credit");

deliveryLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (!deliveryLink.classList.contains("active")) {
    deliveryLink.classList.add("active");
    guaranteeLink.classList.remove("active");
    creditLink.classList.remove("active");
    deliveryBlock.classList.add("show-item");
    deliveryBlock.classList.remove("hide-item");
    guaranteeBlock.classList.remove("show-item");
    guaranteeBlock.classList.add("hide-item");
    creditBlock.classList.remove("show-item");
    creditBlock.classList.add("hide-item");
  }
});

guaranteeLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (!guaranteeLink.classList.contains("active")) {
    guaranteeLink.classList.add("active");
    deliveryLink.classList.remove("active");
    creditLink.classList.remove("active");
    guaranteeBlock.classList.add("show-item");
    guaranteeBlock.classList.remove("hide-item");
    deliveryBlock.classList.remove("show-item");
    deliveryBlock.classList.add("hide-item");
    creditBlock.classList.remove("show-item");
    creditBlock.classList.add("hide-item");
  }
});

creditLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (!creditLink.classList.contains("active")) {
    creditLink.classList.add("active");
    guaranteeLink.classList.remove("active");
    deliveryLink.classList.remove("active");
    creditBlock.classList.add("show-item");
    creditBlock.classList.remove("hide-item");
    guaranteeBlock.classList.remove("show-item");
    guaranteeBlock.classList.add("hide-item");
    deliveryBlock.classList.remove("show-item");
    deliveryBlock.classList.add("hide-item");
  }
});

// оживляем всплывающее окно с картой
let mapLink = document.querySelector(".map");
let mapModalWrapper = document.querySelector(".modal-wrapper.map");
let mapModal = document.querySelector(".modal-map");

let modalCloseButton = mapModal.querySelector(".modal-close");

mapLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapModalWrapper.classList.remove("hide-item");
  mapModalWrapper.classList.add("show-item");
  mapModal.classList.add("show-modal-animation");
  mapModal.classList.remove("hide-modal-animation");
});

modalCloseButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapModal.classList.add("hide-modal-animation");
  mapModal.classList.remove("show-modal-animation");
  setTimeout(function(){
    mapModalWrapper.classList.add("hide-item");
    mapModalWrapper.classList.remove("show-item");
  }, 1000);  
});

mapModalWrapper.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapModal.classList.add("hide-modal-animation");
  mapModal.classList.remove("show-modal-animation");
  setTimeout(function(){
    mapModalWrapper.classList.add("hide-item");
    mapModalWrapper.classList.remove("show-item");
  }, 1000);  
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    mapModal.classList.add("hide-modal-animation");
    mapModal.classList.remove("show-modal-animation");
    setTimeout(function(){
      mapModalWrapper.classList.add("hide-item");
      mapModalWrapper.classList.remove("show-item");
    }, 999); 
  }
});

// оживляем всплывающее окно с формой обратной связи 
let writeUsLink = document.querySelector(".contacts .button");
let writeUsModalWrapper = document.querySelector(".modal-wrapper.write-us");
let writeUsModal = document.querySelector(".modal-write-us");

let modalWriteUsCloseButton = writeUsModal.querySelector(".modal-close");

let nameField = writeUsModal.querySelector("#user-name");
let emailField = writeUsModal.querySelector("#user-email");
let messageField = writeUsModal.querySelector("#user-message");
let writeUsForm = writeUsModal.querySelector("form");

let isStorageSupport = true;
let storageName = "";
let storageEmail = "";

try {
  storageName = localStorage.getItem("name");
  storageEmail = localStorage.getItem("email");
} catch(err) {
  isStorageSupport = false;
}

writeUsLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  writeUsModalWrapper.classList.remove("hide-item");
  writeUsModalWrapper.classList.add("show-item");
  writeUsModal.classList.add("show-modal-animation");
  writeUsModal.classList.remove("hide-modal-animation");
  if (storageName) {
    nameField.value = storageName;
    emailField.focus();
  }
  if (storageEmail && storageName) {
    emailField.value = storageEmail;
    messageField.focus();
  }
  if (!storageName && !storageEmail) {
    nameField.focus();
  }
});

writeUsForm.addEventListener("submit", function(evt) {
  if (!nameField.value || !emailField.value) {
    writeUsModal.classList.remove("error-modal-animation");
    writeUsModal.offsetWidth = writeUsModal.offsetWidth;
    evt.preventDefault();
    writeUsModal.classList.add("error-modal-animation");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", nameField.value);
      localStorage.setItem("email", emailField.value);
    }
  }
});

modalWriteUsCloseButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  writeUsModal.classList.add("hide-modal-animation");
  writeUsModal.classList.remove("show-modal-animation");
  writeUsModal.classList.remove("error-modal-animation");
  setTimeout(function(){
    writeUsModalWrapper.classList.add("hide-item");
    writeUsModalWrapper.classList.remove("show-item");
  }, 1000);  
});

writeUsModal.addEventListener("click", function(evt) {
  evt.stopPropagation();
});

writeUsModalWrapper.addEventListener("click", function(evt) {
  evt.preventDefault();
  writeUsModal.classList.add("hide-modal-animation");
  writeUsModal.classList.remove("show-modal-animation");
  writeUsModal.classList.remove("error-modal-animation");
  setTimeout(function(){
    writeUsModalWrapper.classList.add("hide-item");
    writeUsModalWrapper.classList.remove("show-item");
  }, 1000);  
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    writeUsModal.classList.add("hide-modal-animation");
    writeUsModal.classList.remove("show-modal-animation");
    writeUsModal.classList.remove("error-modal-animation");
    setTimeout(function(){
      writeUsModalWrapper.classList.add("hide-item");
      writeUsModalWrapper.classList.remove("show-item");
    }, 999); 
  }
});
