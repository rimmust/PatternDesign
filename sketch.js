let mic, amp;
let ellipseColor;

function setup() {
  createCanvas(500, 500);
 // noLoop();
  
 userStartAudio();
  //the microphone settings
   mic = new p5.AudioIn();
   mic.start();
  
}
  

function draw() {
  background(255);
  
   //the micorphone settings
  let level = mic.getLevel();
  let s = map(level, 0, 1, 10, 200);
  
      
  fill('black');
  //This method calls the function to change colour
  
  ChangeColour();
  ellipse(width / 2, height / 2, s, s);
  
  
  
  //draw the first loop
  for(var  a = 50; a <= width; a += 100 )
    {
      for(var b =50; b <=height; b+=100)
        {
          //draw the rectangle
          fill('black');
          rect(a,b,50,50);
          
        }
    }
  
  //shift everything on the other side
  for(var  c = 0; c <= width; c += 100 )
    {
      for(var d =0; d <=height; d+=100)
        {
          //draw the rectangle
          fill('black');
          rect(c,d,50,50);
        }
    }
  
  
  function ChangeColour()
  {
    //randomise a colour for the ellipse 
    ellipseColor = color(random(100, 256), random(100, 256), random(100, 256))
    fill(ellipseColor);
  }
}
