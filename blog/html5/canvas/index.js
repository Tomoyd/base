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
