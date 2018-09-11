var link = document.querySelector(".write-us-link");

  var popup = document.querySelector(".modal-overlay");
  var close = popup.querySelector(".modal-close");
  var form = popup.querySelector(".feedback-form");
  var feedbackName = popup.querySelector(".feedback-form-name");
  var feedbackEmail = popup.querySelector(".feedback-form-email");
  var feedbackText = popup.querySelector(".feedback-text");
  var isStorageSupport = true;
  var storage = "";

try {
  storage = localStorage.getItem("feedbackName");
} catch (err) {
  isStorageSupport = false;
}

  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    if (storage) {
      feedbackName.value = storage;
      feedbackEmail.focus();
    } else {
    feedbackName.focus();
  }
  });

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
  });

  form.addEventListener("submit", function (evt) {
    if (!feedbackName.value || !feedbackEmail.value || !feedbackText.value) {
      evt.preventDefault();
      console.log("Нужно обязательно ввести имя, адрес электронной почты и текст");
    } else {
      if (isStorageSupport) {
      localStorage.setItem("feedbackName" , feedbackName.value);
    }
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
      }
    }
  });
