let intervalId;
let image = document.getElementById('img1');
var src = image.getAttribute('src');

function changeImage(){

  if(image.style.opacity == ''){
    image.style.opacity = 1;
  }

  let opacityInt = image.style.opacity * 100;
  //フェードアウトの処理（opacityを100ミリ秒ごとに0.1づつ減らす）
  let intervalId = setInterval( () => {
    opacityInt = opacityInt - 10;
    image.style.opacity = opacityInt / 100;

    if(image.style.opacity <= 0){
      clearInterval(intervalId);
      //画像を交換
      src = image.getAttribute('src');
      bunki();
      opacityInt = image.style.opacity * 100;
      //フェードインの処理（opacityを100ミリ秒ごとに0.1づつ増やす）
      intervalId = setInterval( () => {
        opacityInt = opacityInt + 10;
        image.style.opacity = opacityInt / 100;
        if(image.style.opacity >= 1){
          clearInterval(intervalId);
        }
      }, 100);
    }
  }, 100);
}

function bunki(){
  let path='../../mysite/images/'+京都+'/';
  let flag=0;
  //浅草
  if(src===path+'kiyomizudera.jpg'){
      flag++;
  }


  if(src===path+'senhontorii.jpg'){
      flag++;
  }

  if(src===path+'tetsugakunomichi.jpg'){
      flag++;
  }
    
  if(flag==3){
    image.setAttribute('src', path+'senhontorii.jpg');
  }

  if(flag==2){
    image.setAttribute('src', path+'tetsugakunomichi.jpg');
  }

  if(flag==1){
    image.setAttribute('src', path+'kiyomizudera.jpg');
  }
}
