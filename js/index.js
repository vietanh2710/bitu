/* eslint-disable quotes */
$(document).ready(function () {
  $(".carousel").slick({
    lazyLoad: "ondemand",
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    nextArrow: "<img class='slick-next' src='/assets/images/arrow-right.png'>",
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });

  $(".carousel-feedback").slick({
    lazyLoad: "ondemand",
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    nextArrow: "<img class='slick-next' src='/assets/images/arrow-right.png'>",
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });

  if ($(document).width() <= 800) {
    $(".carousel-experience").slick({
      lazyLoad: "ondemand",
      infinite: true,
      centerMode: true,
      responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          },
        },
      ],
    });
  }

  $(".hamburger").on("click", function (event) {
    event.preventDefault();
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const backDrop = document.querySelector(".backdrop");

    hamburger.classList.toggle("active");
    backDrop.classList.toggle("active");
    navMenu.classList.toggle("active");

    const navLink = document.querySelectorAll(".nav-link");

    navLink.forEach((n) => n.addEventListener("click", closeMenu));

    function closeMenu() {
      hamburger.classList.remove("active");
      backDrop.classList.remove("active");
      navMenu.classList.remove("active");
    }
  });
});
