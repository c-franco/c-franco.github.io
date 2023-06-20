function scrollFunction(nav) {
  var width = $(window).width();

  if (width < 840) {
    document.getElementById("pivot").checked = false;
  }
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

const navScroll2 = document.querySelector("#nav-ul");
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    navScroll2.classList.add("nav-scrolled");
  } else if (window.scrollY <= 200) {
    navScroll2.classList.remove("nav-scrolled");
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
  const flag2 = document.getElementById("change-lang-flag2");

  if (flag.src.includes("ES")) {
    flag.src = "https://flagsapi.com/GB/flat/32.png";
    flag2.src = "https://flagsapi.com/GB/flat/32.png";

    $(".nav-about-me a").text("About me");
    $(".nav-works a").text("Works");
    $(".nav-contact a").text("Contact");
    $("#job").text("Back-End Developer");
    $(".about-me-title").text("About me");
    $("#p1").html(
      "Hi! My name is Christian Franco, I'm 22 years old and I'm a <span>back-end developer</span>."
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
    $(".form-email-label").text("Mail");
    $("#input-submit").prop("value", "Send");
    $(".mail-logo").text("Mail");
  } else {
    flag.src = "https://flagsapi.com/ES/flat/32.png";
    flag2.src = "https://flagsapi.com/ES/flat/32.png";

    $(".nav-about-me a").text("Sobre mí");
    $(".nav-works a").text("Trabajos");
    $(".nav-contact a").text("Contacto");
    $("#job").text("Desarrollador Back-End");
    $(".about-me-title").text("Sobre mí");
    $("#p1").html(
      "¡Hola! Mi nombre es Christian Franco, tengo 22 años y soy <span>desarrollador back-end</span>."
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
    $(".form-email-label").text("Email");
    $("#input-submit").prop("value", "Enviar");
    $(".mail-logo").text("Correo");
  }
}

var modal = document.getElementById("modal-panel");
var span = document.getElementsByClassName("close")[0];

$("#work-1, #work-2, #work-3").click(function () {
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
  document.body.style.height = "100%";
});

span.onclick = function () {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
  document.body.style.height = "auto";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
    document.body.style.height = "auto";
  }
};

function fillModal(id) {
  const flag = document.getElementById("change-lang-flag");

  var esp = false;
  if (flag.src.includes("ES")) {
    esp = true;
  }

  switch (id) {
    case "#work-1":
      $(".modal-title").text("LiftSplit");
      if (esp) {
        $(".modal-text-1").html(
          "LiftSplit es una <span>aplicación móvil</span> para Android " +
            "que permite a los usuarios realizar un seguimiento " +
            "de las rutinas de entrenamiento. Cada usuario puede " +
            "<span>crear una cuenta</span> y registrar ejercicios dentro de cada " +
            "rutina. Además, se pueden contabilizar las <span>series, " +
            "repeticiones y pesos</span> en los ejercicios. "
        );
        $(".modal-text-2").html(
          "LiftSplit también incluye <span>otras funcionalidades</span> como temporizador, gráficas " +
            "con los datos de los ejercicios, control de peso, etc. " +
            "Esta aplicación fue desarrollada por mí en un plazo de 5 semanas."
        );
        $(".modal-tech").text("Hecho con: Android Studio, SQLite, Java, XML.");
      } else {
        $(".modal-text-1").html(
          "LiftSplit is a <span>mobile app</span> for Android that allows users to track " +
            "workout routines. Each user can <span>create an account</span> and log exercises " +
            "within each routine. In addition, <span>sets, reps and weights</span> can be " +
            "counted for each exercise. "
        );
        $(".modal-text-2").html(
          "LiftSplit also includes <span>other functionalities</span> " +
            "such as timer, exercise data graphs, weight control, etc. This application " +
            "was developed by me in a period of 5 weeks."
        );
        $(".modal-tech").html("Made with: Android Studio, SQLite, Java, XML.");
      }
      $("#modal-img").css("display", "inline");
      $("#modal-video").css("display", "none");
      $("#modal-obj").css("display", "none");
      $(".modal-dots").css("display", "block");
      break;
    case "#work-2":
      $(".modal-title").text("Hungry and angry");
      if (esp) {
        $(".modal-text-1").html(
          "Hungry and Angry es un <span>videojuego de plataformas en 3D</span>. El objetivo principal " +
            "es <span>eliminar a las ratas</span> antes de que te golpeen e ir <span>recogiendo queso</span> para " +
            "que el personaje no empiece a tener hambre y se enfade. "
        );
        $(".modal-text-2").html(
          "Se puede recargar la munición con los elementos que sueltan las ratas. " +
            "También hay <span>potenciadores</span> y <span>ratas más fuertes</span> de forma aleatoria. " +
            "Este juego fue desarrollado por mí en un plazo de 3 semanas."
        );
        $(".modal-tech").html("Hecho con: Unity, C#, Blender.");
      } else {
        $(".modal-text-1").html(
          "Hungry and Angry is a <span>3D platform video game</span>. The main goal is to <span>kill the rats</span> " +
            "before they hit you and <span>collect cheese</span> so that the character doesn't get hungry and angry. "
        );
        $(".modal-text-2").html(
          "The ammo can be refilled with items dropped by the rats. " +
            "There are also <span>power-ups</span> and randomly <span>stronger rats</span>. This game was developed by me within 3 weeks."
        );
        $(".modal-tech").html("Made with: Unity, C#, Blender.");
      }
      $("#modal-img").css("display", "none");
      $("#modal-video").css("display", "inline");
      $("#modal-obj").css("display", "none");
      $(".modal-dots").css("display", "none");
      break;
    case "#work-3":
      if (esp) {
        $(".modal-title").text("Modelo 3D taburete");
        $(".modal-text-1").html(
          "Este pequeño proyecto es un <span>ensamblaje 3D</span> de un taburete compuesto por 4 piezas. " +
            "Para cada pieza se crea un <span>plano 2D paramétrico</span> con todas las medidas y después se " +
            "modela la pieza en base al plano. Por último se <span>ensamblan todas las piezas</span> formando un único objeto. "
        );
        $(".modal-text-2").html(
          "Este proyecto fue desarrollado por mí en menos de una semana."
        );
        $(".modal-tech").html("Hecho con: Autodesk Fusion 360.");
      } else {
        $(".modal-title").text("3D stool model");
        $(".modal-text-1").html(
          "This small project is a <span>3D assembly</span> of a stool made up of 4 pieces. " +
            "For each part a<span> parametric 2D drawing</span> is created with all the measurements " +
            "and then the part is modelled based on the drawing. Finally, all the <span>pieces are assembled</span> to form a single object."
        );
        $(".modal-text-2").html(
          "This project was developed by me in less than a week."
        );
        $(".modal-tech").html("Made with: Autodesk Fusion 360.");
      }
      $("#modal-img").css("display", "none");
      $("#modal-video").css("display", "none");
      $("#modal-obj").css("display", "inline-block");
      $(".modal-dots").css("display", "none");
      break;
    case "#work-4":
      break;
    case "#work-5":
      break;
    case "#work-6":
      break;
    default:
      break;
  }
}

function changeLifSplitImage(id) {
  const img = document.getElementById("modal-img");

  if (id == "#modal-dot-1") {
    $(id).css("background-color", "#d4d571");
    $("#modal-dot-2").css("background-color", "white");
    $("#modal-dot-3").css("background-color", "white");
    $("#modal-dot-4").css("background-color", "white");
    img.src = "/images/works/login.png";
  } else if (id == "#modal-dot-2") {
    $(id).css("background-color", "#d4d571");
    $("#modal-dot-1").css("background-color", "white");
    $("#modal-dot-3").css("background-color", "white");
    $("#modal-dot-4").css("background-color", "white");
    img.src = "/images/works/home.png";
  } else if (id == "#modal-dot-3") {
    $(id).css("background-color", "#d4d571");
    $("#modal-dot-1").css("background-color", "white");
    $("#modal-dot-2").css("background-color", "white");
    $("#modal-dot-4").css("background-color", "white");
    img.src = "/images/works/workout.png";
  } else if (id == "#modal-dot-4") {
    $(id).css("background-color", "#d4d571");
    $("#modal-dot-1").css("background-color", "white");
    $("#modal-dot-2").css("background-color", "white");
    $("#modal-dot-3").css("background-color", "white");
    img.src = "/images/works/profile.png";
  }
}
