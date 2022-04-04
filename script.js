const data = [
{
quote:`“Once you wake up and smell the coffee, it’s hard to go back to sleep.” -Fran Drescher`,
emoji:'☕️',
image:`url(assets/coffee1.jpg)`,
link: `<a href=\"https://www.google.com/maps/place/First+Avenue+Coffee/@47.6562574,-117.4293959,17z/data=!3m1!4b1!4m5!3m4!1s0x549e19cecc39b959:0xf769f4ca6f1ca531!8m2!3d47.6564312!4d-117.4272036\" target="_blank">First Avenue Coffee</a>`
},
  
{
quote:`“I orchestrate my mornings to the tune of coffee.” -Harry Mahtar`,
emoji:'🎵',
image:`url(assets/coffee2.jpg)`,
link: `<a href=\"https://www.google.com/maps/place/Mason+Jar/@47.4870933,-117.5781683,17z/data=!3m1!4b1!4m5!3m4!1s0x549e389c043f2807:0xd95728df8a66e2bb!8m2!3d47.4870543!4d-117.5759433" target="_blank">Mason Jar</a>`
},

{
quote:`“I’d rather take coffee than compliments just now.” -Louisa May Alcott, Little Women`,
emoji:'🥐',
image:`url(assets/coffee3.jpg)`,
link: `<a href=\"https://www.google.com/maps/place/Thomas+Hammer+Coffee+Roasters/@47.4907369,-117.5860463,17z/data=!3m1!4b1!4m5!3m4!1s0x549e3898b8845547:0x44e5b680bfcb98de!8m2!3d47.4907333!4d-117.5838576" target="_blank">Thomas Hammer</a>`
},

{
quote:`“Ah, coffee. The sweet balm by which we shall accomplish today’s tasks.” -Holly Black, Ironside`,
emoji:'💻',
image:`url(assets/coffee4.jpg)`,
link: `<a href=\"https://www.google.com/maps/place/West+Plains+Roasters/@47.4876076,-117.577846,17z/data=!3m1!4b1!4m5!3m4!1s0x549e394ddb4be0d1:0xaa2eb079700e0bea!8m2!3d47.487604!4d-117.5756573" target="_blank">West Plains Roasters</a>`
},
  
{
quote:`“I like coffee because it gives me the illusion that I might be awake.” -Lewis Black`,
emoji:'⏰',
image:`url(assets/coffee5.jpg)`,
link: `<a href=\"https://www.google.com/maps/place/Jacob's+Java/@47.6507801,-117.4205448,17z/data=!3m1!4b1!4m5!3m4!1s0x549e1864aefcd009:0x9055e43934c16912!8m2!3d47.650776!4d-117.4183377" target="_blank">Jacob's Java</a>`
},
  
{
quote:`“Coffee, the favorite drink of the civilized world.” -Thomas Jefferson`,
emoji:'🎓',
image:`url(assets/coffee6.jpg)`,
link: `<a href=\"https://www.google.com/maps/place/Rocket+Bakery/@47.6563842,-117.4344859,17z/data=!3m2!4b1!5s0x549e18680a2601e7:0x1a13f3af47308d34!4m5!3m4!1s0x549e186809d81e1d:0x70389f6a831c147!8m2!3d47.6563806!4d-117.4322972" target="_blank">Rocket Bakery</a>`
},
  
{
quote:`“Without my morning coffee, I’m just like a dried-up piece of goat.” -Johann Sebastian Bach`,
emoji:'🐐',
image:`url(assets/coffee7.jpg)`,
link: `<a href=\"https://www.google.com/maps/place/Wake+Up+Call+-+Union+District+Cafe/@47.6571892,-117.3868683,16.94z/data=!4m5!3m4!1s0x549e1962fce5cd19:0xeb55c6b6b976be03!8m2!3d47.6571353!4d-117.3845989" target="_blank">Wake Up Call</a>`
},
  
{
quote:`“Live life today like there is no coffee tomorrow.” -Meik Wiking, The Little Book of Hygge`,
emoji:'⚰️',
image:`url(assets/coffee8.jpg)`,
link: `<a href=\"https://www.google.com/maps/place/Hold+Your+Grounds+Espresso/@47.6677366,-117.4394651,17z/data=!3m1!4b1!4m5!3m4!1s0x549e1850c761bd59:0x8826ca9d24ae5b72!8m2!3d47.667733!4d-117.4372764" target="_blank">Hold Your Grounds</a>`
},
  
{
quote:`“Adventure in life is good; consistency in coffee even better.” -Justina Chen, North of Beautiful`,
emoji:'♨️',
image:`url(assets/coffee9.jpg)`,
link: `<a href=\"https://www.google.com/maps/place/Kitty+Cantina/@47.71904,-117.3968493,17z/data=!3m1!4b1!4m5!3m4!1s0x549e1f2acd4f0dd9:0x28eafaaf2f423c6d!8m2!3d47.7189043!4d-117.3946611" target="_blank">Kitty Cantina</a>`
},
  
{
quote:`“The powers of a man’s mind are directly proportioned to the quantity of coffee he drinks.” -Sir James Mackintosh`,
emoji:'💡',
image:`url(assets/coffee10.jpg)`,
link: `<a href=\"https://www.google.com/maps/place/Atticus+Coffee+%26+Gifts/@47.6597258,-117.423022,17z/data=!3m1!4b1!4m5!3m4!1s0x549e1860716babc9:0xb65ebc0cce578c93!8m2!3d47.6597218!4d-117.4209115" target="_blank">Atticus Coffee and Gifts</a>`
},
];

// blockquote
const quote = document.querySelector('blockquote');
// emoji
const emoji = document.querySelector('p');
// background
const bgImage = document.querySelector('body');
// link
const link = document.querySelector('button');


// Check-Check: change text
quote.innerHTML = '“Once you wake up and smell the coffee, it’s hard to go back to sleep.” -Fran Drescher';
// Check-Check: change emoji text
emoji.innerHTML = "☕️";
// Check-Check: background image
bgImage.style.backgroundImage= 'url(/assets/coffee1.jpg)';
// Check-check: change link and text
link.innerHTML = '<a href=\"https://www.google.com/maps/place/First+Avenue+Coffee/@47.6562574,-117.4293959,17z/data=!3m1!4b1!4m5!3m4!1s0x549e19cecc39b959:0xf769f4ca6f1ca531!8m2!3d47.6564312!4d-117.4272036\" target="_blank">First Avenue Coffee</a>'


// intialize item number
let itemNumber = 0;
// get next button
const nextButton = document.querySelector('#next');
// get previous button
const prevButton = document.querySelector('#prev');
// get random button
const randButton = document.querySelector('#random');

// listen for clicks on next button
nextButton.addEventListener("click", function () {
  // update by INcreasing item number with each click
  itemNumber = itemNumber + 1;
  //   if at LAST item
  if (itemNumber > data.length - 1){
    //   reset counting to first item
    itemNumber = 0;
  }
  
//   display data based on array index
  quote.innerHTML = data[itemNumber].quote;
  emoji.innerHTML = data[itemNumber].emoji;
  bgImage.style.backgroundImage = data[itemNumber].image;
  link.innerHTML = data[itemNumber].link;
});

// listen for clicks on prev button
prevButton.addEventListener("click", function () {
  // update by DEcreasing item number with each click
  itemNumber = itemNumber - 1;
  // if at FIRST item
  if (itemNumber < 0){
    // reset counting to LAST item
    itemNumber = data.length - 1;
  }
  // show item number
  quote.innerHTML = data[itemNumber].quote;
  emoji.innerHTML = data[itemNumber].emoji;
  bgImage.style.backgroundImage = data[itemNumber].image;
  link.innerHTML = data[itemNumber].link;
});

// listen for clicks on random button
randButton.addEventListener('click',function () {
  // generate random number
  randomNumber = Math.floor ( Math.random() * data.length );
  
//   display random data
  quote.innerHTML = data[randomNumber].quote;
  emoji.innerHTML = data[randomNumber].emoji;
  bgImage.style.backgroundImage = data[randomNumber].image;
  link.innerHTML = data[itemNumber].link;
});

/* 
listen for keypress next
*/
document.addEventListener("keyup",function() {
  
  if ( event.keyCode === 39 ){
    itemNumber = itemNumber + 1;
    
    // if at LAST item
  if ( itemNumber > data.length - 1 ) {
    // reset counting to first item
    itemNumber = 0;
  }
    
    // display data based on array index
  quote.innerHTML = data[itemNumber].quote;
  emoji.innerHTML = data[itemNumber].emoji;
  bgImage.style.backgroundImage = data[itemNumber].image;
  link.innerHTML = data[itemNumber].link;
  }
    
    if (event.keyCode === 37){
    itemNumber = itemNumber - 1;
    
    // if at first item
  if ( itemNumber < 0 ) {
    // reset counting to first item
    itemNumber = data.length - 1;
  }
      // display data based on array index
  quote.innerHTML = data[itemNumber].quote;
  emoji.innerHTML = data[itemNumber].emoji;
  bgImage.style.backgroundImage = data[itemNumber].image;
  link.innerHTML = data[itemNumber].link;
  }
  
  if (event.keyCode === 32) {
    // generate random number
  randomNumber = Math.floor ( Math.random() * data.length );
  
//   display random data
  quote.innerHTML = data[randomNumber].quote;
  emoji.innerHTML = data[randomNumber].emoji;
  bgImage.style.backgroundImage = data[randomNumber].image;
  link.innerHTML = data[itemNumber].link;
  }
});