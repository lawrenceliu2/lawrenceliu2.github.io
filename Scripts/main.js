
function changeImage(url){
  var img = document.getElementById("sprite");
  img.src=url;
  return false;
}

function setup(){
  var button = document.getElementById('idle');
  button.addEventListener('click', function(){
    changeImage("../Resources/flameskull/idle.gif")
  });
  button = document.getElementById('walk_right');
  button.addEventListener('click', function(){
    changeImage("../Resources/flameskull/walk_right.gif")
  });
  button = document.getElementById('walk_left');
  button.addEventListener('click', function(){
    changeImage("../Resources/flameskull/walk_left.gif")
  });
  button = document.getElementById('attack_right');
  button.addEventListener('click', function(){
    changeImage("../Resources/flameskull/attack_right.gif")
  });
  button = document.getElementById('attack_left');
  button.addEventListener('click', function(){
    changeImage("../Resources/flameskull/attack_left.gif")
  });
  button = document.getElementById('damage_right');
  button.addEventListener('click', function(){
    changeImage("../Resources/flameskull/damage_right.gif")
  });
  button = document.getElementById('damage_left');
  button.addEventListener('click', function(){
    changeImage("../Resources/flameskull/damage_left.gif")
  });
  button = document.getElementById('death');
  button.addEventListener('click', function(){
    changeImage("../Resources/flameskull/death.gif")
  });
  button = document.getElementById('dance');
  button.addEventListener('click', function(){
    changeImage("../Resources/flameskull/dance.gif")
  });
}

setup();