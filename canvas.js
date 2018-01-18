// initial
var canvas=document.queryselector('canvas');
var c=canvas.getContext('2d');
canvas.width=innerWidth;
canvas.height=innerHeight;
// variable
var mouse={
              x:innerWidth/2,
              y:innerHeight/2
          };
 var colors=[
            '#2185C5',
            '#7ECEFD',
            '#FFF6E5',
            '#FF7F66',
            ]
 // Event listers
 addEventListener("mousemove", function(event))
 {
   mouse.x=event.clientX;
   mouse.y=event.clientY;
 });
 addEventListener("resize", function
 {
   canvas.width=innerWidth;
   canvas.height=innerHeight;
   
   init();
 });
 // utility functions
function randomIntFromRange(min,max)
{
  return Math.floor(Math.random()*(max-min+1)+min);
}
function randomcolor(colors)
{
  return.colors(Math.floor(Math.random()*colors.length);
}
  //objects
 function object 
