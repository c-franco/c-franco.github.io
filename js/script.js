function scrollFunction(nav) {
  const yOffset = -$("nav").height() + 1;
  const element = document.getElementById(nav);
  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({ top: y, behavior: "smooth" });
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

const navScroll = document.querySelector("#nav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    navScroll.classList.add("nav-scrolled");
  } else if (window.scrollY <= 200) {
    navScroll.classList.remove("nav-scrolled");
  }
});

$("#form").submit(function (event) {
  event.preventDefault();
  $.ajax({
    type: "POST",
    url: "send-email.php",
    data: $(this).serialize(),
    success: function (data) {
      $("#result").html(data);
    },
  });
});

function IsFormValid() {
  const submitBtn = document.getElementById("input-submit");

  var validName = InputNotEmpty(document.getElementById("input-name"));
  var validEmail = ValidateEmail(document.getElementById("input-email"));
  var validMessage = InputNotEmpty(document.getElementById("input-message"));

  if (validEmail && validName && validMessage) {
    submitBtn.disabled = false;
    submitBtn.style.removeProperty("disabled");
    submitBtn.style.cursor = "pointer";
    submitBtn.style.opacity = 1;
  } else {
    submitBtn.disabled = true;
    submitBtn.style.cursor = "not-allowed";
    submitBtn.style.opacity = 0.65;
  }
}

function InputNotEmpty(inputText) {
  if (inputText.value.length == 0) {
    return false;
  }
  return true;
}

function ValidateEmail(inputEmail) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputEmail.value.match(mailformat)) {
    return true;
  } else {
    return false;
  }
}

const form = document.getElementById("form");
form.addEventListener("submit", function handleClick(event) {
  event.preventDefault();
  form.reset();

  const submitBtn = document.getElementById("input-submit");
  submitBtn.disabled = true;
  submitBtn.style.cursor = "not-allowed";
  submitBtn.style.opacity = 0.65;
});

