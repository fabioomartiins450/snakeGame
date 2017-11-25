$(document).ready(function(){
  var game;
  var canvas = document.getElementById('snake');
  var ctx = canvas.getContext('2d');
  
  game = new Game({
   rows: canvas.width / 10,
   columns: canvas.height / 10,
   snake: undefined,
   ctx: ctx,
  });

  game.start();
})