 
 $(document).ready(function() {
 var rocket = document.getElementById('rocket'); 
let rocket_parameter = [-6,-4,5,-11,-10,10,-20,-20,18,-26.3,-33,25,-30,-45,30,-36,-63,38,-47,-96,53,-53,-126,65,-53,-156,75,-50,-178,82,-47,-193,87,-46.5,-193,87,-46,-193,87,-44,-193,87,-41,-193,87,-36,-193,87,-31,-193,87,-26,-193,87,-21,-193,87,-16,-193,87];

  $("#take-a-view").click(function() {
    $("#home").fadeOut(500);
    $("#choose, .home-star-container").delay(600).fadeIn(700);
  });
  $(".home-star-container").click(function() {
    $(".home-star-container, [id^='data'], #choose").fadeOut(500);
    $(".12stars-main-container, #home").delay(600).fadeIn(700);
	/*$("#rocket").removeClass("Animate");*/
  });
  $("img[id^='stars']").click(function() {
    $(".12stars-main-container, #home, #choose").fadeOut(500);
    $(".home-star-container").delay(600).fadeIn(700);
	rocket_fire();
  });
  
  function rocket_move(x,y,deg){
  rocket.style.transform = "translate("+x+"vw ,"+y+"vh) rotate("+deg+"deg)";
}

function rocket_fire(){
  rocket.style.zIndex="10";
  for(let i=0;i<=20;i++){
	setTimeout("rocket_move("+rocket_parameter[3*i]+","+rocket_parameter[3*i+1]+","+rocket_parameter[3*i+2]+")", i*50 );
  }
  setTimeout("rocket.style.transition='1.5s'", 1100 );
  setTimeout("rocket.style.opacity='0'", 1100 );
  setTimeout("rocket.style.zIndex='1'", 1100 );
  setTimeout("rocket.style.transition='0s'", 2000 );
  setTimeout("rocket_move("+0+","+35+","+0+")", 2010 );
  setTimeout("rocket.style.opacity='1'", 2010 );
  setTimeout("rocket.style.transition='0.01s'", 2010 );
  for(let i=1;i<=35;i++){
	setTimeout("rocket_move("+0+","+(-i+35)+","+0+")", i*10+2010 );
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
  
  
  
  
  
  
  
 });
 
 
 
 