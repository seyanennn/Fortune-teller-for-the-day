//Today's fortune-telling for the day including today's luck, advice, and lucky food

let topText = [
  
  "EXCELLENT LUCK!!! I'm jealous🥺",
  "GOOD BLESSING: Lucky you!",
  "MIDDLE BLESSING: Better than usual!",
  "SMALL BLESSING: Better than nothing!",
  "ANIMAL BLESSING: Do you have an animal you'd like to befriend?",
  "STUDY BLESSING: Let's not be late just for today!",
  "ENCOUNTER BLESSING: Who was that guy?",
  "TRAVEL BLESSING: Have you got everything?",
  
//an array of top fortunes that will randomly appear
  
];

let bottomText = [
  
  "💡Put on the shoes from the left foot.",
  "💡SLOW DOWN.",
  "💡Chew your food well.",
  "💡Pick the left one.",
  "💡Look up at the sky.",
  "💡Be the first to say hello faster than anyone else around you.",
  "💡Make sure you have everything with you.",
  "💡A detour is sometimes a good idea.",
  "💡Take a deep breath.",
  "💡Hug yourself.",
  "💡The lucky color is purple",
  "💡Let's give someone a treat. Do you want one?",
  "💡Maybe intuition is the key.",
  "💡Don't forget to ask for help!",
  "💡Don't believe too much today.",
  
  
//an array of small advice that will randomly appear
  
];

let topIndex = 0; 
let bottomIndex = 0;
let picIndex = 0;
//setting the variables of the index of the text and images to be randomised in draw

let images = [];
//making the images part of an array

function setup() {
  createCanvas(650, 600);
  rectMode(CENTER);
  textFont('Mincho');
  
  images[0] = loadImage("1.jpg");
  images[1] = loadImage("2.jpg");
  images[2] = loadImage("3.jpg");
  images[3] = loadImage("4.jpg");
  images[4] = loadImage("5.jpg");
  images[5] = loadImage("6.jpg");
  images[6] = loadImage("7.jpg");
  images[7] = loadImage("8.jpg");
  images[8] = loadImage("9.jpg");
  images[9] = loadImage("10.jpg");
  images[10] = loadImage("11.jpg");
 
// inserting 11 lucky food images that would appear randomly when mouse is clicked
  
}



function draw() {
  
  image(images[picIndex], 0, 0, width, height);
//Places the image from the array randomly onto the screen
  
  fill(255);
  strokeWeight(3);
  stroke(0);
  textSize(40);
  textAlign(CENTER, CENTER);
  text(topText[topIndex], width/2, height/7, 500, 700);  
//The size, position and appearance of the top text 

  fill(255);
  strokeWeight(3);
  stroke(0);
  textSize(40);
  textAlign(CENTER, CENTER);
  text(bottomText[bottomIndex], width/2, height/1.2, 500, 700);  
//The size, position and appearance of the bottom text
  
}

function mouseClicked() {
  
  background(255);
  topIndex = int(random(8));
  bottomIndex = int(random(15));
  picIndex = int(random(11));
  
}







