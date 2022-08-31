// canvas 是一种用js调用在一个html元素（canvas）中去生成图形，是位图，数据发生变化时，重绘，不支持事件
// svg用XML去描述图形，多个html元素可以去描述一个图形，是一种矢量图，不需要重绘，支持HTML事件

// canvas的宽高只能指定属性宽高，不能靠css，css只是会拉伸内容显示的效果
// canvas 默认画的线条是1px，中心点会与像素（一个像素点就是1px这样的小格子）底部对齐, 显示效果2px非纯黑色
//  beginPath，绘制时以前设置的样式属性会被后面继承，后面的也会影响前面的，且被视为一条path，可以使用beginPath重开路径，避免影响
function init() {
  /**
   * @type  HTMLCanvasElement
   */
  // @ts-ignore
  const canvas = document.getElementById('canvas');
  const canvasInfo = { width: canvas.width, height: canvas.height };
  const ctx = canvas.getContext('2d');
  /**
   * @typedef {[number,number]} Point
   * @param {Point[]} [points]
   * @param {Point} start
   * @param {Point} end
   * @returns
   */
  function drawLine(start, end, points, isClosed = false) {
    if (!ctx) {
      return;
    }
    ctx.moveTo(...start);
    points?.forEach(([x, y]) => {
      ctx.lineTo(x, y);
    });
    ctx.lineTo(...end);
    if (isClosed) {
      ctx.closePath();
    }
    ctx.stroke();
  }
  /**
   *
   * @param {Partial< CanvasPathDrawingStyles&CanvasFillStrokeStyles>} params
   * @returns
   */
  function setLineStyle(params) {
    if (!ctx) {
      return;
    }
    Object.entries(params).forEach(([k, v]) => {
      ctx[k] = v;
    });
  }
  function beginPath() {
    ctx?.beginPath();
  }
  /**
   *
   * @param {Point} startPoint
   * @param {number} width
   * @param {number} height
   * @param {string | CanvasGradient | CanvasPattern} [strokeStyle]
   *
   */
  function drawLineRect(startPoint, width, height, strokeStyle = '') {
    if (!ctx) return;

    ctx.strokeStyle = strokeStyle;
    ctx.strokeRect(...startPoint, width, height);
  }
  /**
   *
   * @param {Point} startPoint
   * @param {number} width
   * @param {number} height
   * @param {string | CanvasGradient | CanvasPattern} [fillStyle]
   *
   */
  function drawFillRect(startPoint, width, height, fillStyle = '') {
    if (!ctx) return;

    ctx.fillStyle = fillStyle;
    ctx.fillRect(...startPoint, width, height);
  }
  /**
   *
   * @param {Point} startPoint
   * @param {number} width
   * @param {number} height
   * @param {string | CanvasGradient | CanvasPattern} [fillStyle]
   * @param {string | CanvasGradient | CanvasPattern} [strokeStyle]
   */
  function drawRect(
    startPoint,
    width,
    height,
    fillStyle = '',
    strokeStyle = ''
  ) {
    if (!ctx) return;

    ctx.beginPath();
    ctx.strokeStyle = strokeStyle;
    ctx.fillStyle = fillStyle;

    ctx.rect(...startPoint, width, height);

    ctx.stroke();
    ctx.fill();
  }
  /**
   *
   * @param {Point} start
   * @param {number} width
   * @param {number} height
   */
  function clearRect(start, width, height) {
    ctx?.clearRect(...start, width, height);
  }

  function clear() {
    const { width, height } = canvasInfo;
    ctx?.clearRect(0, 0, width, height);
  }
  /**
   *  @param {Point[]} [points]
   * @param {Point} start
   * @param {Point} end
   * @returns
   */
  function drawPoly(start, end, points) {
    beginPath();
    drawLine(start, end, points, true);
  }
  /**
   *
   * @param {Point} p 原点
   * @param {number} radius 半径
   * @param {number} start 开始的角度 180°是 Math.PI
   * @param {number} end 结束角度
   * @param {boolean} wise 方向，默认false是顺时针
   * @param {string} [strokeStyle]
   * @param {string} [fillStyle]
   * @returns
   */
  function drawArc(
    p,
    radius,
    start,
    end,
    wise = false,
    strokeStyle = '',
    fillStyle = ''
  ) {
    if (!ctx) return;
    beginPath();
    ctx.strokeStyle = strokeStyle;
    ctx.fillStyle = fillStyle;
    ctx.arc(...p, radius, start, end, wise);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }
  /**
   *画圆弧
   * @param {Point} p1 控制点
   * @param {Point} start 控制点
   * @param {Point} end 结束点
   * @param {number} radius 半径
   * @returns
   */
  function drawArcTo(p1, start, end, radius) {
    if (!ctx) return;
    beginPath();
    ctx.moveTo(...start);
    ctx.arcTo(...p1, ...end, radius);

    ctx.stroke();
  }

  // 非零环绕填充
  function drawFill() {
    //  顺时针闭合区域+1
    // 逆时针闭合区域-1
    // 如果区域为0 那么不会得到填充，如果是非0区域则会填充
    // 比如逆时针区域与顺时针区域重合的即为0
    // 外层矩形
    if (!ctx) return;
    beginPath();
    ctx.fillStyle = '#00f';
    ctx.moveTo(50, 50);
    ctx.lineTo(200, 50);
    ctx.lineTo(200, 100);
    ctx.lineTo(50, 100);
    ctx.closePath();
    // 内层
    ctx.moveTo(60, 60);
    ctx.lineTo(60, 90);
    ctx.lineTo(190, 90);
    ctx.lineTo(190, 60);
    ctx.closePath();

    ctx.fill();
  }
  /**
   *
   * @param {string} text
   * @param {Point} v2
   * @param {number} [maxWidth]
   * @returns
   */
  function drawText(text, v2, strokeStyle, maxWidth) {
    if (!ctx) return;
    ctx.font = '30px Arial';
    ctx.strokeStyle = strokeStyle;
    ctx.textAlign = 'start';
    ctx.strokeText(text, ...v2, maxWidth);
    // ctx.fillText
    const width = ctx.measureText(text).width;
    console.log('width', width);
    // todo 一些字体样式相关的
  }
  // drawImage(image,x,y) todo
  /**
   *
   * @param {string} src
   * @param {Point} p
   */
  function drawImage(src, p) {
    const image = new Image();
    image.src = src;
    image.onload = () => {
      ctx?.drawImage(image, ...p);
    };
  }
  return {
    drawLine,
    setLineStyle,
    beginPath,
    drawLineRect,
    drawFillRect,
    drawRect,
    clearRect,
    clear,
    drawPoly,
    drawArc,
    drawArcTo,
    drawFill,
    drawText,
  };
}

const ctx = init();
ctx.drawLine([10, 10.5], [90, 20]);

ctx.drawLine([90.5, 90], [90.5, 200]);

ctx.beginPath();
ctx.setLineStyle({ lineWidth: 20, strokeStyle: '#ff0' });
ctx.drawLine([9, 9], [40, 30]);
//  画折线
ctx.beginPath();
ctx.setLineStyle({ lineWidth: 1, strokeStyle: '#f00' });
ctx.drawLine(
  [0, 0],
  [100, 100],
  Array(10)
    .fill(0)
    .map((_) => [Math.random() * 200, Math.random() * 100])
);

// 画矩形
ctx.drawRect([80, 80], 40, 80, '#f0f');
// 清空区域
ctx.clearRect([85, 90], 20, 20);
// 清空画布

ctx.clear();

// 画多边形

ctx.drawPoly(
  [150, 50],
  [50, 100],
  [
    [250, 100],
    [150, 150],
  ]
);

// 画扇形
ctx.drawArc([60, 60], 40, 0, Math.PI, true, '#f00', '#445');
// 画圆弧

ctx.drawArcTo([120, 40], [40, 40], [120, 120], 80);
ctx.clear();
// 非零填充
ctx.drawFill();
