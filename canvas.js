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
 function Ball(x,y,dy,radius,color)
  {
   this.x=x;
   this.y=y;
   this.dy=dy; //velocity of circle
   this.radius=radius;
   this.color=color;
    this.update=function()
    {
     this.y+=1;
     if(this.y+this.radius>canvas.height)
     {
        this.dy=-this.dy;
     } else
     {
      this.dy+=1;
      this.y+=this.dy;
     }
    this.draw();
    };
    this.draw=function ()
    {
      c.beginPath();
      c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
      c.fillStyle=this.color;
      c.fill();
      c.closePath();
    };
  }
  // Implementation
  var ball;
  function init()
  {
    ball=new Ball(canvas.width/2,canvas.height/2,2,30,red)
    console.log(ball);
  }
  //animation loop
  function animate()
  {
   requestAnimationFrame(animate);
   // c.clearRect(0,0,canvas.width,canvas.height); //to clear screen
    c.fillText("HTML canvas",mouse.X,mouse.Y);
    ball.update();
  }
