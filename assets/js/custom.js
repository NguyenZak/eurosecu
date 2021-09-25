(function ($) {
  "use strict";
  jQuery(".mean-menu").meanmenu({ meanScreenWidth: "991" });
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 150) {
      $(".navbar-area").addClass("sticky-nav");
    } else {
      $(".navbar-area").removeClass("sticky-nav");
    }
  });
  $(".nav-side .search-box i").on("click", function () {
    $(".search-overlay").toggleClass("search-overlay-active");
  });
  $(".search-close").on("click", function () {
    $(".search-overlay").removeClass("search-overlay-active");
  });
  $(".side-nav-responsive .dot-menu").on("click", function () {
    $(".side-nav-responsive .container-max .container").toggleClass("active");
  });

  $(".banner-slider").owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    items: 1,
    dots: true,
    autoplay: true,
    autoHeight: true,
    autoplayHoverPause: true,
  });
  let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = items[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})
$(' .owl_1').owlCarousel({
    loop:false,
    margin:2,  
    responsiveClass:true,autoplayHoverPause:true,
    autoplay:true,
     slideSpeed: 400,
      paginationSpeed: 400,
     autoplayTimeout:3000,
    responsive:{
        0:{
            items:3,
            nav:true,
              loop:false
        },
        600:{
            items:3,
            nav:true,
              loop:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
})
 
/*Image slider library*/
document.querySelectorAll('.button').forEach(button => {

  let duration = 3000,
      svg = button.querySelector('svg'),
      svgPath = new Proxy({
          y: null,
          smoothing: null
      }, {
          set(target, key, value) {
              target[key] = value;
              if(target.y !== null && target.smoothing !== null) {
                  svg.innerHTML = getPath(target.y, target.smoothing, null);
              }
              return true;
          },
          get(target, key) {
              return target[key];
          }
      });

  button.style.setProperty('--duration', duration);

  svgPath.y = 20;
  svgPath.smoothing = 0;

  button.addEventListener('click', e => {
      
      e.preventDefault();

      if(!button.classList.contains('loading')) {

          button.classList.add('loading');

          gsap.to(svgPath, {
              smoothing: .3,
              duration: duration * .065 / 1000
          });

          gsap.to(svgPath, {
              y: 12,
              duration: duration * .265 / 1000,
              delay: duration * .065 / 1000,
              ease: Elastic.easeOut.config(1.12, .4)
          });

          setTimeout(() => {
              svg.innerHTML = getPath(0, 0, [
                  [3, 14],
                  [8, 19],
                  [21, 6]
              ]);
          }, duration / 2);

      }

  });

});

function getPoint(point, i, a, smoothing) {
  let cp = (current, previous, next, reverse) => {
          let p = previous || current,
              n = next || current,
              o = {
                  length: Math.sqrt(Math.pow(n[0] - p[0], 2) + Math.pow(n[1] - p[1], 2)),
                  angle: Math.atan2(n[1] - p[1], n[0] - p[0])
              },
              angle = o.angle + (reverse ? Math.PI : 0),
              length = o.length * smoothing;
          return [current[0] + Math.cos(angle) * length, current[1] + Math.sin(angle) * length];
      },
      cps = cp(a[i - 1], a[i - 2], point, false),
      cpe = cp(point, a[i - 1], a[i + 1], true);
  return `C ${cps[0]},${cps[1]} ${cpe[0]},${cpe[1]} ${point[0]},${point[1]}`;
}

function getPath(update, smoothing, pointsNew) {
  let points = pointsNew ? pointsNew : [
          [4, 12],
          [12, update],
          [20, 12]
      ],
      d = points.reduce((acc, point, i, a) => i === 0 ? `M ${point[0]},${point[1]}` : `${acc} ${getPoint(point, i, a, smoothing)}`, '');
  return `<path d="${d}" />`;
}

/*End slider library*/
$(document) .ready(function(){
var li =  $(".owl-item li ");
$(".owl-item li").click(function(){
li.removeClass('active');
});
});

  $(".case-study-slider").owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: false,
    center: true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1024: { items: 3 },
      1200: { items: 4 },
    },
  });
  $(".brand-slider").owlCarousel({
    loop: true,
    margin: 60,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 2 },
      600: { items: 2 },
      700: { items: 3 },
      1024: { items: 5 },
    },
  });
  $(".clients-slider").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: { 0: { items: 1 }, 992: { items: 2 } },
    navText: [
      "<i class='bx bx-chevron-left'></i>",
      "<i class='bx bx-chevron-right'></i>",
    ],
  });
  $(".clients-slider-two").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    items: 1,
    navText: [
      "<i class='bx bx-chevron-left'></i>",
      "<i class='bx bx-chevron-right'></i>",
    ],
  });
  $(".banner-sub-slider").owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: { 0: { items: 1 }, 1024: { items: 3 } },
  });
  $(".popup-btn").magnificPopup({
    disableOn: 320,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });
  $("select").niceSelect();
  $(".accordion")
    .find(".accordion-title")
    .on("click", function () {
      $(this).toggleClass("active");
      $(this).next().slideToggle("fast");
      $(".accordion-content").not($(this).next()).slideUp("fast");
      $(".accordion-title").not($(this)).removeClass("active");
    });
  $(".skill-bar").each(function () {
    $(this)
      .find(".progress-content")
      .animate({ width: $(this).attr("data-percentage") }, 2000);
    $(this)
      .find(".progress-number-mark")
      .animate(
        { left: $(this).attr("data-percentage") },
        {
          duration: 2000,
          step: function (now, fx) {
            var data = Math.round(now);
            $(this)
              .find(".percent")
              .html(data + "%");
          },
        }
      );
  });
  new WOW().init();
  $(window).on("load", function () {
    $(".preloader").fadeOut(500);
  });
  $("body").append(
    "<div class='go-top'><i class='bx bx-chevrons-up'></i></div>"
  );
  $(window).on("scroll", function () {
    var scrolled = $(window).scrollTop();
    if (scrolled > 600) $(".go-top").addClass("active");
    if (scrolled < 600) $(".go-top").removeClass("active");
  });
  $(".go-top").on("click", function () {
    $("html, body").animate({ scrollTop: "0" }, 50);
  });
  function makeTimer() {
    var endTime = new Date("December 30, 2021 17:00:00 PDT");
    var endTime = Date.parse(endTime) / 1000;
    var now = new Date();
    var now = Date.parse(now) / 1000;
    var timeLeft = endTime - now;
    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - days * 86400) / 3600);
    var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    var seconds = Math.floor(
      timeLeft - days * 86400 - hours * 3600 - minutes * 60
    );
    if (hours < "10") {
      hours = "0" + hours;
    }
    if (minutes < "10") {
      minutes = "0" + minutes;
    }
    if (seconds < "10") {
      seconds = "0" + seconds;
    }
    $("#days").html(days + "<span>Days</span>");
    $("#hours").html(hours + "<span>Hours</span>");
    $("#minutes").html(minutes + "<span>Minutes</span>");
    $("#seconds").html(seconds + "<span>Seconds</span>");
  }
  setInterval(function () {
    makeTimer();
  }, 300);
  $(".newsletter-form")
    .validator()
    .on("submit", function (event) {
      if (event.isDefaultPrevented()) {
        formErrorSub();
        submitMSGSub(false, "Please enter your email correctly");
      } else {
        event.preventDefault();
      }
    });
  function callbackFunction(resp) {
    if (resp.result === "success") {
      formSuccessSub();
    } else {
      formErrorSub();
    }
  }
  function formSuccessSub() {
    $(".newsletter-form")[0].reset();
    submitMSGSub(true, "Thank you for subscribing!");
    setTimeout(function () {
      $("#validator-newsletter").addClass("hide");
    }, 4000);
  }
  function formErrorSub() {
    $(".newsletter-form").addClass("animated shake");
    setTimeout(function () {
      $(".newsletter-form").removeClass("animated shake");
    }, 1000);
  }
  function submitMSGSub(valid, msg) {
    if (valid) {
      var msgClasses = "validation-success";
    } else {
      var msgClasses = "validation-danger";
    }
    $("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
  }
  $(".newsletter-form").ajaxChimp({
    url: "https://envyTheme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9",
    callback: callbackFunction,
  });
})(jQuery);

