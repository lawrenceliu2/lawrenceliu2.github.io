
function changeImage(image,url){
  var img = document.getElementById(image);
  img.src=url;
  return false;
}

function setup(){
  var button = document.getElementById('idle');
  button.addEventListener('click', function(){
    changeImage("sprite","../Resources/flameskull/idle.gif")
  });
  button = document.getElementById('walk_right');
  button.addEventListener('click', function(){
    changeImage("sprite","../Resources/flameskull/walk_right.gif")
  });
  button = document.getElementById('walk_left');
  button.addEventListener('click', function(){
    changeImage("sprite","../Resources/flameskull/walk_left.gif")
  });
  button = document.getElementById('attack_right');
  button.addEventListener('click', function(){
    changeImage("sprite","../Resources/flameskull/attack_right.gif")
  });
  button = document.getElementById('attack_left');
  button.addEventListener('click', function(){
    changeImage("sprite","../Resources/flameskull/attack_left.gif")
  });
  button = document.getElementById('damage_right');
  button.addEventListener('click', function(){
    changeImage("sprite","../Resources/flameskull/damage_right.gif")
  });
  button = document.getElementById('damage_left');
  button.addEventListener('click', function(){
    changeImage("sprite","../Resources/flameskull/damage_left.gif")
  });
  button = document.getElementById('death');
  button.addEventListener('click', function(){
    changeImage("sprite","../Resources/flameskull/death.gif")
  });
  button = document.getElementById('dance');
  button.addEventListener('click', function(){
    changeImage("sprite","../Resources/flameskull/dance.gif")
  });

  button = document.getElementById('standing');
  button.addEventListener('click', function(){
    changeImage("wolfie","../Resources/Wolfie/Zombie_Wolfie_Standing.jpg")
  });
  button = document.getElementById('walking');
  button.addEventListener('click', function(){
    changeImage("wolfie","../Resources/Wolfie/Zombie_Wolfie_Walking.gif")
  });
  button = document.getElementById('eating');
  button.addEventListener('click', function(){
    changeImage("wolfie","../Resources/Wolfie/Zombie_Wolfie_Eating.gif")
  });

  button = document.getElementById('angled_bottom');
  button.addEventListener('click', function(){
    changeImage("oddity","../Resources/ODDITY/O.D.D.I.T.Y Angled Bottom.png")
  });
  button = document.getElementById('angled_top');
  button.addEventListener('click', function(){
    changeImage("oddity","../Resources/ODDITY/O.D.D.I.T.Y Angled Top.png")
  });
  button = document.getElementById('bottom');
  button.addEventListener('click', function(){
    changeImage("oddity","../Resources/ODDITY/O.D.D.I.T.Y Bottom.png")
  });
  button = document.getElementById('side');
  button.addEventListener('click', function(){
    changeImage("oddity","../Resources/ODDITY/O.D.D.I.T.Y Side.png")
  });
  button = document.getElementById('top');
  button.addEventListener('click', function(){
    changeImage("oddity","../Resources/ODDITY/O.D.D.I.T.Y Top.png")
  });
}

setup();