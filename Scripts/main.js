var animationInterval;
var spriteSheet = document.getElementById("sprite-image");
var widthOfSpriteSheet = 640;
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

  animationInterval = setInterval(() => {
    spriteSheet.style.backgroundPosition = `-${position}px 0px`;

    if (currentFrame < frames){
        if (position < widthOfSpriteSheet) {
        //increment the position by the width of each sprite each time
        position = position + diff;
        } else {
        //reset the position to show first sprite after the last one
        position = '0px ${startingRow}*WidthOfEachSprite';
        }
        currentFrame ++;
    }else{
        currentFrame = 0;
        position = startPos;
        spriteSheet.style.backgroundPosition = `-${position}px 0px`;
    }
    
  }, speed);
}

//Start animation
startAnimation(5, 0);