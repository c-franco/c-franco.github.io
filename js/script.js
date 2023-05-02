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

function ChangeLanguage() {
  const flag = document.getElementById("change-lang-flag");
  if (flag.src.includes("ES")) {
    flag.src = "https://flagsapi.com/GB/flat/32.png";

    $(".nav-about-me a").text("About me");
    $(".nav-works a").text("Works");
    $(".nav-contact a").text("Contact");
    $("#job").text("Back-End Developer");
    $(".about-me-title").text("About me");
    $("#p1").html(
      "Hi! My name is Christian Franco, I'm 21 years old and I'm a <span>back-end developer</span>."
    );
    $("#p2").html(
      "My skills include handling programming languages such as <span>C#</span> and <span>Java</span>, " +
        "as well as <span>database skills</span> and knowledge in web development. " +
        "I currently have more than <span>a year of experience</span> in .NET software development."
    );
    $("#p3").html(
      "Outside of work, I like to automate tasks through programming, develop my own mobile apps " +
        "and even video games. Right now I am <span>looking for new projects</span>."
    );
    $("#works h1").text("Personal projects");
    $("#contact h1").text("Contact");
    $(".contact-message").text(
      "If you have any questions or comments, don't hesitate to contact me!"
    );
    $(".form-name-label").text("Name");
    $(".form-message-label").text("Message");
    $("#input-submit").prop("value", "Send");
    $(".mail-logo").text("Mail");
  } else {
    flag.src = "https://flagsapi.com/ES/flat/32.png";

    $(".nav-about-me a").text("Sobre mí");
    $(".nav-works a").text("Trabajos");
    $(".nav-contact a").text("Contacto");
    $("#job").text("Desarrollador Back-End");
    $(".about-me-title").text("Sobre mí");
    $("#p1").html(
      "¡Hola! Mi nombre es Christian Franco, tengo 21 años y soy <span>desarrollador back-end</span>."
    );
    $("#p2").html(
      "Mis habilidades incluyen el manejo de lenguajes de programación como " +
        "<span>C#</span> y <span>Java</span>, al igual que competencias en " +
        "<span>base de datos</span> y conocimientos en desarrollo web. " +
        "Actualmente cuento con más de <span>un año de experiencia</span> en " +
        "desarrollo de software en .NET."
    );
    $("#p3").html(
      "Fuera del trabajo, me gusta automatizar tareas mediante la " +
        "programación, desarrollar mis propias aplicaciones móviles e incluso " +
        "videojuegos. Ahora mismo me encuentro en <span>búsqueda de nuevos proyectos</span>."
    );
    $("#works h1").text("Proyectos personales");
    $("#contact h1").text("Contacto");
    $(".contact-message").text(
      "¿Tienes alguna pregunta o comentario? ¡No dudes en " +
        "ponerte en contacto conmigo!"
    );
    $(".form-name-label").text("Nombre");
    $(".form-message-label").text("Mensaje");
    $("#input-submit").prop("value", "Enviar");
    $(".mail-logo").text("Correo");
  }
}
