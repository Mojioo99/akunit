$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    margin: 10,
    dots: true,
    loop: true,
    center: true,
    responsive: {
      0: {
        items: 1,
      },
      992: {
        items: 3,
      },
    },
  });
});
// navbar
$(".nav-link").on("click", function () {
  $(".navbar-collapse").collapse("hide");
});

// row6
$("#app").click(function () {
  $(".cardd,.web").addClass("hidden");
  $(".app").removeClass("hidden");
  $("#app").addClass("active");
  $("#web,#card,#all").removeClass("active");
});

$("#card").click(function () {
  $(".app,.web").addClass("hidden");
  $(".cardd").removeClass("hidden");
  $("#card").addClass("active");
  $("#web,#app,#all").removeClass("active");
});

$("#web").click(function () {
  $(".cardd,.app").addClass("hidden");
  $(".web").removeClass("hidden");
  $("#web").addClass("active");
  $("#card,#app,#all").removeClass("active");
});

$("#all").click(function () {
  $(".app,.cardd,.web").removeClass("hidden");
  $("#all").addClass("active");
  $("#card,#app,#web").removeClass("active");
});

var button = document.querySelector("#r2 button");

let i = 0;
let j = 0;
let increasingI = true;
let increasingJ = false;

const inetervalID = setInterval(() => {
  if (increasingI) {
    i++;
    if (i === 100) {
      increasingI = false;
      increasingJ = true;
    }
  } else if (increasingJ) {
    j++;
    if (j === 100) {
      increasingJ = false;
    }
  } else {
    i--;
    if (i === 0) {
      setTimeout(() => {
        j = 0;
        increasingI = true;
      }, 1200);
    }
  }
  if (i === 0 && j === 0 && !increasingI) {
    clearInterval(intervalId);
  }
  button.style.background = `radial-gradient(circle at ${i}% ${j}%, lightblue, dodgerblue`;
}, 30);

button.addEventListener("click", function () {
  if (this.innerText == "GET STARTED") {
    this.innerText = "STOP";
    intID = setInterval(movingBG, 10);
  } else {
    this.innerText = "GET STARTED";
    clearInterval(intID);
  }
});
let n = 0;
const movingBG = () => {
  n++;
  if (n > document.getElementById("r2").offsetWidth) {
    n = 0;
  }
  document.getElementById("r2").style.backgroundPosition = n + "px";
};
let mybutton = document.getElementById("myBtn");

function scrollFunction() {
  if (
    (document.body.scrollTop > 500 && document.body) ||
    document.documentElement.scrollTop > 500
  ) {
    mybutton.style.translate = "5px";
  } else {
    mybutton.style.translate = "-100px";
  }
}

function topFunction() {
  $("html , body").animate(
    {
      scrollTop: 0,
    },
    500
  );
}
mybutton.onclick = topFunction;

document.querySelector("#r3 > .row > .col-lg-6:first-child").style.translate =
  "-150%";
document.querySelector("#r3 > .row > .col-lg-6:last-child").style.translate =
  "150%";
document.querySelector("#r3 > .row > .col-lg-6:last-child").style.transition =
  "2s";
document.querySelector("#r3 > .row > .col-lg-6:first-child").style.transition =
  "2s";
$("#r4 .row .col-lg-6:first").css({ translate: "150%", transition: "2s" });
$("#r4 .row .col-lg-6:last").css({ translate: "-150%", transition: "2s" });
$("#r5 .row").css({ translate: "-150%", transition: "2s" });
$("#r6 .row").css({ translate: "-150%", transition: "2s" });
$("#r9 .row").css({ translate: "150%", transition: "2s" });
$("#r11 .row .col-lg-3:first,#r11 .row .col-lg-3:nth-child(2)").css({
  translate: "-200% -50%",
  transition: "2s",
});
$("#r11 .row .col-lg-3:last,#r11 .row .col-lg-3:nth-child(3)").css({
  translate: "200% -50%",
  transition: "2s",
});
$(".ribbon").css({ scale: "2", opacity: "0", transition: "2s" });
$("#r13 .row .col-lg-5").css({ translate: "-200% -50%", transition: "2s" });
$("#r13 .row .col-lg-7").css({ translate: "200% -50%", transition: "2s" });
$("#r14 .row .col-lg-2,#r14 .row .col-lg-4").css({
  translate: "0 -200%",
  transition: "2s",
});
$("#r14 .row .col-lg-3").css({ translate: "0 200%", transition: "2s" });

document.querySelector("#r3").style.transition = "2s";


window.onscroll = function () {
  if (
    document.body.scrollTop >= document.getElementById("r3").offsetTop - 300 ||
    document.documentElement.scrollTop >=
      document.getElementById("r3").offsetTop - 300
  ) {
    $("#r3 .row .col-lg-6").css({
      translate: "0",
    });
  }
  if (
    document.body.scrollTop >= document.getElementById("r4").offsetTop - 200 ||
    document.documentElement.scrollTop >=
      document.getElementById("r4").offsetTop - 200
  ) {
    $("#r4 .row .col-lg-6").css({
      translate: "0",
    });
  }
  if (
    document.body.scrollTop >= document.getElementById("r5").offsetTop - 200 ||
    document.documentElement.scrollTop >=
      document.getElementById("r5").offsetTop - 200
  ) {
    $("#r5 .row").css({ translate: "0" });
  }
  if (
    document.body.scrollTop >= document.getElementById("r6").offsetTop - 200 ||
    document.documentElement.scrollTop >=
      document.getElementById("r6").offsetTop - 200
  ) {
    $("#r6 .row").css({ translate: "0" });
  }
  if (
    document.body.scrollTop >= document.getElementById("r9").offsetTop - 200 ||
    document.documentElement.scrollTop >=
      document.getElementById("r9").offsetTop - 200
  ) {
    $("#r9 .row").css({ translate: "0" });
  }
  if (
    document.body.scrollTop >= document.getElementById("r11").offsetTop - 200 ||
    document.documentElement.scrollTop >=
      document.getElementById("r11").offsetTop - 200
  ) {
    $("#r11 .row .col-lg-3").css({ translate: "0" });
    setTimeout(() => {
      $(".ribbon").css({ scale: "1", opacity: "1" });
    }, 2000);
  }
  if (
    document.body.scrollTop >= document.getElementById("r13").offsetTop - 200 ||
    document.documentElement.scrollTop >=
      document.getElementById("r13").offsetTop - 200
  ) {
    $("#r13 .row .col-lg-5,#r13 .row .col-lg-7").css({
      translate: "0",
      rotate: "360deg",
    });
  }
  if (
    document.body.scrollTop >= document.getElementById("r14").offsetTop - 200 ||
    document.documentElement.scrollTop >=
      document.getElementById("r14").offsetTop - 200
  ) {
    $("#r14 .row").children().css({ translate: "0" });
  }
  scrollFunction();
  let currentScroll = window.scrollY;
  progress =
    currentScroll /
    (document.documentElement.scrollHeight -
      document.documentElement.clientHeight);
  document.querySelector(".progress-bar").style.width = progress * 100 + "%";
  console.log(window.scrollY, window.innerHeight);
};

$(document).ready(function () {
  setTimeout(() => {
    $(".loading").css({ display: "none" });
    $("#r2").css({ opacity: "1" });
  }, 2000);
});
