
var cnvs, dc;
var btnFx, btnFy, btnPd, btnFr, btnRe;
var A = 200, th = 0, step = 0.01;
var fx = 1, fy = 1, pd = 0, fr = 0;

window.onload = function(){

  cnvs = document.getElementById("myCanvas");
  cnvs.addEventListener("click", GetPosition, false);
  dc = cnvs.getContext("2d");

  btnFx = document.getElementById("Fx");
  btnFy = document.getElementById("Fy");
  btnPd = document.getElementById("Pd");
  btnFr = document.getElementById("Fr");
  btnRe = document.getElementById("Re");

  btnFx.addEventListener("click", ChangeParameter, false);
  btnFx.eventParam = "Fx";
  btnFy.addEventListener("click", ChangeParameter, false);
  btnFy.eventParam = "Fy";
  btnPd.addEventListener("click", ChangeParameter, false);
  btnPd.eventParam = "Pd";
  btnFr.addEventListener("click", ChangeParameter, false);
  btnFr.eventParam = "Fr";
  btnRe.addEventListener("click", ChangeParameter, false);
  btnRe.eventParam = "Re";

  init();
  Draw();
}


function Draw(){

  dc.fillStyle = "rgba(0,0,0,0.01)";
  dc.fillRect(0, 0, 640, 480);

  x = A*Math.cos(fr*th) * Math.cos(fx*th + pd*Math.PI/4) + cnvs.width/2;
  y = cnvs.height/2 - A*Math.cos(fr*th) * Math.sin(fy*th);
  dc.beginPath();
  dc.arc(x, y, 4, 0, Math.PI*2, false);
  dc.stroke();

  th += step;

  requestAnimationFrame(Draw);

}

function init(){

  // パラメータ、数式を描画
  var obj = document.getElementById("parameter").querySelectorAll(".value");
  obj[0].innerHTML = fx;
  obj[1].innerHTML = fy;
  obj[2].innerHTML = pd + " * π/4";
  obj[3].innerHTML = fr;

  // 画面の初期化
  dc.fillStyle = "black";
  dc.fillRect(0, 0, 640, 480);

  dc.strokeStyle = "white";

}

// クリックイベント対応
function GetPosition(e) {

  // nothing to do

  // マウスの座標からパラメータを取得
  // var rect = e.target.getBoundingClientRect();
  // Window x軸方向 の クリックされた座標 e.clientX
  // Window y軸方向 の クリックされた座標 e.clientY

  // Window x軸方向 の CANVASの左上座標 rect.left
  // Window y軸方向 の CANVASの左上座標 rect.top

}

// ボタンイベント対応
function ChangeParameter(e){

  switch (e.target.eventParam) {
    case "Fx":
      fx++;
      break;
    case "Fy":
      fy++;
      break;
    case "Pd":
      pd++;
      break;
    case "Fr":
      fr++;
      break;
    case "Re":
      fx = 1;
      fy = 1;
      pd = 0;
      fr = 0;
      break;
    default:
      break;
  }

  init();

}
