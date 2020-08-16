var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });

  // FAQ

  // $(document).ready(function(){
  //   $("#div1").click(function(){
  //     $("#div2").slideToggle("slow");
  //   });
  //   $("#div3").click(function(){
  //     $("#div4").slideToggle("slow");
  //   });
  //   $("#div5").click(function(){
  //     $("#div6").slideToggle("slow");
  //   });
  //   $("#div7").click(function(){
  //     $("#div8").slideToggle("slow");
  //   });
  //   $("#div9").click(function(){
  //     $("#div10").slideToggle("slow");
  //   });
    
  // });

  $(document).ready(function(){
    $("#flip1").click(function(){
      $("#panel1").slideToggle("slow");
    });

    $("#flip2").click(function(){
      $("#panel2").slideToggle("slow");
    });
    $("#flip3").click(function(){
      $("#panel3").slideToggle("slow");
    });
    $("#flip4").click(function(){
      $("#panel4").slideToggle("slow");
    });
    $("#flip5").click(function(){
      $("#panel5").slideToggle("slow");
    });
    $("#flip6").click(function(){
      $("#panel6").slideToggle("slow");
    });
    $("#flip7").click(function(){
      $("#panel7").slideToggle("slow");
    });
  });
