/* eslint-disable quotes */
$(document).ready(function () {
  $(".carousel-experience").slick({
    lazyLoad: "ondemand",
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
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
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
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
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          centerMode: true,
        },
      },
      {
        breakpoint: 500,
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
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          centerMode: true,
        },
      },
      {
        breakpoint: 500,
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

  const backdrop = document.querySelector(".backdrop-team");
  const closeBtn = document.querySelector(".close-popup");
  const modal = document.querySelector(".modal");
  const openBtn = document.querySelector(".open");

  $(openBtn).on("click", function () {
    event.preventDefault();
    modal.classList.add("active");
    backdrop.classList.add("active");
  });

  $(closeBtn).on("click", function () {
    event.preventDefault();
    modal.classList.remove("active");
    backdrop.classList.remove("active");
  });
});
