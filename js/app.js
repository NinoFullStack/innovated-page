(async () => {
  await import("./vendors/jquery.js");
  await import("./vendors/slick.js");

  $(document).ready(function () {
    $(".saying-slider").slick({
      infinite: false,
      slidesToShow: 2,
      slidesToScroll: 2,
      variableWidth: true,
      appendArrows: ".saying-navigation",
      nextArrow: `
        <div class="saying-navigation__icon">
            <img src="./img/saying/arrow-right.svg" alt="arrow right" />
        </div>
      `,
      prevArrow: `
        <div class="saying-navigation__icon">
            <img src="./img/saying/arrow-left.svg" alt="arrow left" />
        </div>
      `,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: false,
          },
        },
      ],
    });
  });
})();
