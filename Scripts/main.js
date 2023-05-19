var animationInterval;
var spriteSheet = document.getElementById("sprite-image");
var widthOfSpriteSheet = 576;
var widthOfEachSprite = 64;

function stopAnimation() {
  clearInterval(animationInterval);
}

function startAnimation(frames, startPos, startingRow) {
  stopAnimation()
  var position = startPos; //start position for the image
  const speed = 120; //in millisecond(ms)
  const diff = widthOfEachSprite; //difference between two sprites
  var currentFrame = 0
  var yposition = startingRow*widthOfEachSprite

  animationInterval = setInterval(() => {
    spriteSheet.style.backgroundPosition = `-${position}px -${yposition}px`;
    console.log(position, yposition);

    if (currentFrame < frames){
      if (position < widthOfSpriteSheet) {
        //increment the position by the width of each sprite each time
        position = position + diff;
      } else {
        //reset the position to show first sprite in row
        position = 0;
        yposition = yposition + widthOfEachSprite;
        spriteSheet.style.backgroundPosition = `-${position}px -${yposition}px`;
      }
      currentFrame ++;
    }else{
        position = startPos;
        yposition = startingRow*widthOfEachSprite;
        spriteSheet.style.backgroundPosition = `-${position}px -${yposition}px`;
        currentFrame = 0;
        //stopAnimation()
    }
  }, speed);
}

function test(x, y){
  stopAnimation()
  spriteSheet.style.backgroundPosition = `-${x}px -${y}px`;
}

//Start animation
startAnimation(5, 0, 0);