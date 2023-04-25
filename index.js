import { debounce } from './util.js'
const bgElement = document.querySelectorAll('#myCanvas')[0];
var canvas = document.getElementById("myCanvas");
// 获取canvas上下文
var ctx = canvas.getContext("2d");
// 设置canvas宽度和高度为窗口的宽度和高度
canvas.width = window.innerWidth;
canvas.height = window.innerHeight - 40;

// var devicePixelRatio = window.devicePixelRatio;
// var dom_width = canvas.clientWidth;
// var dom_height = canvas.clientHeight ;

// canvas.width = dom_width * devicePixelRatio;
// canvas.height = dom_height * devicePixelRatio;



// 创建Image对象
var img = new Image();

// 当图片加载完成后执行回调函数
img.onload = function() {
  // 将图片绘制到画布上
  ctx.drawImage(img,0,0);
}
// 保存画布状态
ctx.save();

// 设置图片地址
img.src = "./assets/bg.png";
// 定义变量，记录手指在屏幕上的位置和手指移动的距离
let startTouchX = 0
let startTouchY = 0;
let lastTouchX = 0;
let lastTouchY = 0;
let moveDistanceX = 0;
let moveDistanceY =0;
let startPos ={
  x: 0,
  y: 0
};
let offset = { x: 0, y: 0 };

// 获取图片宽度和容器宽度
// const imgWidth = bgElement.getBoundingClientRect().width;
// const containerWidth = bgElement.parentElement.getBoundingClientRect().width;

const touchEnter = (event) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const touch = event.touches[0];
  console.log('%c [ touch ]-52', 'font-size:13px; background:#f69d8a; color:#ffe1ce;', ctx)
  startPos.x = touch.clientX;
  startPos.y = touch.clientY;
  bgElement.addEventListener('touchmove',touchMove)

}
const touchMove = (event) => {
  const touch = event.touches[0];
  offset.x = touch.clientX - startPos.x;
  offset.y = touch.clientY - startPos.y;
  console.log('%c [ touch ]-60', 'font-size:13px; background:#e1110c; color:#ff5550;', touch)
  ctx.drawImage(img, -offset.x, -offset.y);
  // ctx.drawImage(img, offset.x,  offset.y);

}

const touchLeave =(event) => {
  console.log('%c [ event ]-68', 'font-size:13px; background:#74762a; color:#b8ba6e;', event)
  const touch = event.changedTouches[0];

  console.log('%c [ touch ]-69', 'font-size:13px; background:#ebef85; color:#ffffc9;', touch)
  ctx.save();
  // 重置变量
  bgElement.removeEventListener('touchmove',touchMove)

  startTouchX = 0;
  startTouchY = 0;
  lastTouchX = 0;
  lastTouchY = 0;
  moveDistanceX = 0;
  moveDistanceY = 0;
}


bgElement.addEventListener('touchstart',touchEnter)

bgElement.addEventListener('touchend', touchLeave)
// doc.removeEventListener('touchend', touchLeave)

