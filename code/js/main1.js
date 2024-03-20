 

 var rocket = document.getElementById('rocket'); 
let rocket_parameter = 
[-7,-3,5,
-11,-10,10,
-15,-15,13,
-21,-20,18.5,
-27,-33,25,
-30,-45,31,
-36,-62,39,
-48,-95,54,
-52,-124,66,
-52,-153,75.5,
-50,-176,83.5,
-48,-192,88,
-47,-192,88,
-46,-192,88,
-43,-192,88,
-39,-192,88,
-36,-192,88,
-32,-192,88,
-28,-192,88,
-22,-192,88,
-16,-192,88];

  $("#take-a-view").click(function() {
    $("#home").fadeOut(500);
    $("#choose, .home-star-container").delay(600).fadeIn(700);
  });
  $(".home-star-container").click(function() {
    $(".home-star-container, [id^='data'], #choose").fadeOut(500);
    $(".12stars-main-container, #home").delay(600).fadeIn(700);
	rocket_smoke();
  });
  $("img[id^='stars']").click(function() {
    $(".12stars-main-container, #home, #choose").fadeOut(500);
    $(".home-star-container").delay(600).fadeIn(700);
	rocket_smoke();
  });
  
  function rocket_animation(a,b,degree){
  rocket.style.transform = "translate("+a+"vw ,"+b+"vh) rotate("+degree+"deg)";
}

function rocket_smoke(){
  rocket.style.zIndex="10";
  for(let i=0;i<=20;i++){
	setTimeout("rocket_animation("+rocket_parameter[3*i]+","+rocket_parameter[3*i+1]+","+rocket_parameter[3*i+2]+")", i*50 );
  }
  setTimeout("rocket.style.transition='1.5s'", 1000 );
  setTimeout("rocket.style.opacity='0'", 1000 );
  setTimeout("rocket.style.zIndex='1'", 1000 );
  setTimeout("rocket.style.transition='0s'", 2022 );
  setTimeout("rocket_animation("+0+","+35+","+0+")", 2022 );
  setTimeout("rocket.style.opacity='1'", 2022 );
  setTimeout("rocket.style.transition='0.01s'", 2022 );
  for(let i=1;i<=35;i++){
	setTimeout("rocket_animation("+0+","+(-i+35)+","+0+")", i*10+2022 );
  }
}



  $("img#stars1").click(function() {
    $("img#data1").show();//???
    $("div#data1").delay(600).fadeIn(700);
  });
  $("img#stars2").click(function() {
    $("img#data2").show();//???
    $("div#data2").delay(600).fadeIn(700);
  });
   $("img#stars3").click(function() {
    $("img#data3").show();//???
    $("div#data3").delay(600).fadeIn(700);
  });
   $("img#stars4").click(function() {
    $("img#data4").show();//???
    $("div#data4").delay(600).fadeIn(700);
  });
   $("img#stars5").click(function() {
    $("img#data5").show();//???
    $("div#data5").delay(600).fadeIn(700);
  });
   $("img#stars6").click(function() {
    $("img#data6").show();//???
    $("div#data6").delay(600).fadeIn(700);
  });
  $("img#stars7").click(function() {
    $("img#data7").show();//???
    $("div#data7").delay(600).fadeIn(700);
  });
  $("img#stars8").click(function() {
    $("img#data8").show();//???
    $("div#data8").delay(600).fadeIn(700);
  });
  $("img#stars9").click(function() {
    $("img#data9").show();//???
    $("div#data9").delay(600).fadeIn(700);
  });
  $("img#stars10").click(function() {
    $("img#data10").show();//???
    $("div#data10").delay(600).fadeIn(700);
  });
  $("img#stars11").click(function() {
    $("img#data11").show();//???
    $("div#data11").delay(600).fadeIn(700);
  });
  $("img#stars12").click(function() {
    $("img#data12").show();//???
    $("div#data12").delay(600).fadeIn(700);
  });
  
  
  
  
  
