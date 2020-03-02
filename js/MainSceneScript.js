//MainSceneのjs
//画像の上にマウスをホバーさせた際のフェード
//画面繊維

window.onload = function(){
  $('body').fadeIn(500);
  $("#work-img01").fadeIn(500);
  $("#work-img02").fadeIn(2000);
  $("#work-img03").fadeIn(1000);
  $("#work-img04").fadeIn(2000);
  $("#work-img05").fadeIn(500);
  $("#work-img06").fadeIn(1200);
  $("#work-img07").fadeIn(1200);
  $("#work-img08").fadeIn(800);
  $("#work-img09").fadeIn(1200);
  $("#work-img10").fadeIn(1200);
  $("#work-img11").fadeIn(1200);
  $("#work-img12").fadeIn(800);



  //---Titleの出現エフェクト
  $("#work-img01").mouseover(
    function(){
      $("#work-des01").fadeIn();
    }
  );

  $("#work-img01").mouseout(
    function(){
      $("#work-des01").fadeOut();
    }
  );

  $("#work-img02").mouseover(
    function(){
      $("#work-des02").fadeIn();
    }
  );
  $("#work-img02").mouseout(
    function(){
      $("#work-des02").fadeOut();
    }
  );
  $("#work-img03").mouseover(
    function(){
      $("#work-des03").fadeIn();
    }
  );
  $("#work-img03").mouseout(
    function(){
      $("#work-des03").fadeOut();
    }
  );
  $("#work-img04").mouseover(
    function(){
      $("#work-des04").fadeIn();
    }
  );
  $("#work-img04").mouseout(
    function(){
      $("#work-des04").fadeOut();
    }
  );

  $("#work-img05").mouseover(
    function(){
      $("#work-des05").fadeIn();
    }
  );
  $("#work-img05").mouseout(
    function(){
      $("#work-des05").fadeOut();
    }
  );

  $("#work-img06").mouseover(
    function(){
      $("#work-des06").fadeIn();
    }
  );
  $("#work-img06").mouseout(
    function(){
      $("#work-des06").fadeOut();
    }
  );

  $("#work-img07").mouseover(
    function(){
      $("#work-des07").fadeIn();
    }
  );
  $("#work-img07").mouseout(
    function(){
      $("#work-des07").fadeOut();
    }
  );

  $("#work-img08").mouseover(
    function(){
      $("#work-des08").fadeIn();
    }
  );
  $("#work-img08").mouseout(
    function(){
      $("#work-des08").fadeOut();
    }
  );

  $("#work-img09").mouseover(
    function(){
      $("#work-des09").fadeIn();
    }
  );
  $("#work-img09").mouseout(
    function(){
      $("#work-des09").fadeOut();
    }
  );
  $("#work-img10").mouseover(
    function(){
      $("#work-des10").fadeIn();
    }
  );
  $("#work-img10").mouseout(
    function(){
      $("#work-des10").fadeOut();
    }
  );
  $("#work-img11").mouseover(
    function(){
      $("#work-des11").fadeIn();
    }
  );
  $("#work-img11").mouseout(
    function(){
      $("#work-des11").fadeOut();
    }
  );


  $("#work-img12").mouseover(
    function(){
      $("#work-des12").fadeIn();
    }
  );
  $("#work-img12").mouseout(
    function(){
      $("#work-des12").fadeOut();
    }
  );

  $("#work-img13").mouseover(
    function(){
      $("#work-des13").fadeIn();
    }
  );
  $("#work-img13").mouseout(
    function(){
      $("#work-des13").fadeOut();
    }
  );

  $('#work-img01').click(function() {
      location.href = "../html/VJ02.html";
  })
  $('#work-img02').click(function() {
      location.href = "TheFeelingofSences.html";
  })
  $('#work-img03').click(function() {
      location.href = "../html/MIX.html";
  })
  $('#work-img04').click(function() {
      location.href = "../html/VJ01.html";
  })
  $('#work-img05').click(function() {
      location.href = "../html/CO.html";
  })
  //チンアナゴ
  $('#work-img06').click(function() {
      location.href = "../html/Tinanago.html";
  })
  $('#work-img07').click(function() {
      location.href = "../html/DanDanLanthanum.html";
  })
  $('#work-img08').click(function() {
      location.href = "../html/OneWayInformation.html";
  })
  $('#work-img09').click(function() {
      location.href = "../html/FureFure.html";
  })
  $('#work-img10').click(function() {
      location.href = "../html/LED.html";
  })
  $('#work-img11').click(function() {
      location.href = "../html/Gan.html";
  })
  $('#work-img12').click(function() {
    location.href = "../html/DCGAN.html";
  })
  //BurnNow 
  $('#work-img13').click(function() {
    location.href = "../html/BurnNow.html";
  })
}
