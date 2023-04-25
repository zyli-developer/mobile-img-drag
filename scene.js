class Scene {
  offset = { x: 0, y: 0 }; // 拖动偏移
  curOffset = { x: 0, y: 0 }; // 记录上一次的偏移量
  x = 0; // 记录鼠标点击Canvas时的横坐标
  y = 0; // 记录鼠标点击Canvas时的纵坐标

  constructor(id, options = {
    width: 100,
    height: 100
  }) {
    this.canvas = document.querySelector('#' + id);
    console.log('%c [ this.canvas ]-12', 'font-size:13px; background:#c8f06f; color:#ffffb3;', this.canvas)
    this.width = options.width;
    this.height = options.height;
    this.canvas.width = options.width;
    this.canvas.height = options.height;
    this.ctx = this.canvas.getContext('2d');
    this.onMousedown = this.onMousedown.bind(this);
    this.onMousemove = this.onMousemove.bind(this);
    this.onMouseup = this.onMouseup.bind(this);
    this.canvas.addEventListener('mousedown', this.onMousedown);
  }

  onMousedown(e) {
    console.log('%c [ e ]-25', 'font-size:13px; background:#630733; color:#a74b77;', e)
    if (e.button === 0) {
      // 鼠标左键
      this.x = e.x;
      this.y = e.y
      window.addEventListener('mousemove', this.onMousemove);
      window.addEventListener('mouseup', this.onMouseup);
    }
  }

  onMousemove(e) {
    console.log('%c [ e ]-36', 'font-size:13px; background:#bdd43a; color:#ffff7e;', e)
    
   this.offset.x = this.curOffset.x + (e.x - this.x);
   this.offset.y = this.curOffset.y + (e.y - this.y);

   this.paint();
  }

  onMouseup() {
    this.curOffset.x = this.offset.x;
    this.curOffset.y = this.offset.y;
    window.removeEventListener('mousemove', this.onMousemove);
    window.removeEventListener('mouseup', this.onMouseup);
  }

  draw() {
    this.ctx.fillStyle = 'red';
    this.ctx.fillRect(50, 50, 50, 50);

    this.ctx.fillStyle = 'green';
    this.ctx.fillRect(150, 150, 50, 50);
  }

  clear() {
    this.canvas.width = this.width;
  }

  paint() {
    this.clear();
    this.ctx.translate(this.offset.x, this.offset.y);
    this.draw();
  }
}
let scene = new Scene('myCanvas');

scene.draw();
console.log('%c [ scene ]-72', 'font-size:13px; background:#70ab47; color:#b4ef8b;', scene)
