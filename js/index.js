/* eslint-disable quotes */
$(document).ready(function () {
  window.addEventListener("resize", function () {
    const tag = document.querySelector(
      ".experience .experience__wrapper .container"
    );

    if ($(document).width() <= 1000) {
      tag.classList.add("carousel-experience");
    } else {
      tag.classList.remove("carousel-experience");
    }

    $(".carousel-experience").slick({
      lazyLoad: "ondemand",
      infinite: true,
      centerMode: true,
      responsive: [
        {
          breakpoint: 1000,
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
    console.log("object :>> ");
  });

  $(".carousel-moderator").slick({
    lazyLoad: "ondemand",
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
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
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
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
          centerMode: true,
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
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
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
          centerMode: true,
        },
      },
    ],
  });

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
