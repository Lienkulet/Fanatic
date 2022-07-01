const backToTopBtn = document.getElementById('backToTop');

function Scrollback_topfunc() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  function Scrollback_Servicesfunc() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }


  backToTopBtn.addEventListener("click", (e) => {
    e.preventDefault();
    Scrollback_topfunc();
});


$('#slick-caraousel-1').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    responsive: [
        {
            breakpoint: 700,
             settings: {
                slidesToShow: 2
             }
        },
        {
            breakpoint: 400,
            settings:{
                slidesToShow: 1
            }
        }
    ]


});

