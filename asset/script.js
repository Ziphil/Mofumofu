//


let STATE = {
  spinning: true
}

const BODY_COLOR = "#FFEECC";
const PART_COLOR = "#553388";

const ROOT = new Zdog.Illustration({
  element: ".zdog-canvas",
  resize: "fullscreen",
  dragRotate: true,
  onDragStart: () => {
    STATE.spinning = false;
  }
});

function init() {
  Zfont.init(Zdog);
}

function prepare() {
  let font = new Zdog.Font({
    src: "https://cdn.jsdelivr.net/gh/jaames/zfont/demo/fredokaone.ttf"
  });
  let text = new Zdog.Text({
    addTo: ROOT,
    stroke: 3,
    translate: {y: -200, z: 3},
    font: font,
    value: "M O F U M O F U",
    fontSize: 50,
    textAlign: "center",
    textBaseline: "middle",
    color: PART_COLOR,
    fill: false
  });
  let shadowText = text.copy({
    translate: {y: -200, z: -3},
    color: BODY_COLOR,
    fill: true
  });
  let body = new Zdog.Shape({
    addTo: ROOT,
    stroke: 220,
    path: [{x: -45}, {x: 45}],
    color: BODY_COLOR
  });
  let leftEye = new Zdog.Shape({
    addTo: ROOT,
    stroke: 15,
    path: [{x: 0, y: 0}, {x: 0, y: 40}],
    translate: {x: -70, y: -40, z: 110},
    color: PART_COLOR
  });
  let rightEye = leftEye.copy({
    translate: {x: 70, y: -40, z: 110}
  });
  let leftMouth = new Zdog.Shape({
    addTo: ROOT,
    stroke: 15,
    path: [
      {x: -40, y: 0},
      {bezier: [{x: -50, y: 10}, {x: -50, y: 40}, {x: -20, y: 40}]},
      {bezier: [{x: -5, y: 40}, {x: 0, y: 20}, {x: 0, y: 20}]}
    ],
    translate: {y: 20, z: 110},
    closed: false,
    color: PART_COLOR
  });
  let rightMouth = leftMouth.copy({
    scale: {x: -1}
  });
  let leftMiddleWhisker = new Zdog.Shape({
    addTo: ROOT,
    stroke: 15,
    path: [{x: -200, y: 0}, {x: -120, y: 0}],
    translate: {z: 80},
    color: PART_COLOR
  });
  let leftTopWhisker = leftMiddleWhisker.copy({
    path: [{x: -195, y: -50}, {x: -120, y: -30}]
  });
  let leftBottomWhisker = leftMiddleWhisker.copy({
    path: [{x: -195, y: 50}, {x: -120, y: 30}]
  });
  let rightMiddleWhisker = leftMiddleWhisker.copy({
    path: [{x: 195, y: 0}, {x: 120, y: 0}]
  });
  let rightTopWhisker = leftMiddleWhisker.copy({
    path: [{x: 195, y: -50}, {x: 120, y: -30}]
  });
  let rightBottomWhisker = leftMiddleWhisker.copy({
    path: [{x: 195, y: 50}, {x: 120, y: 30}]
  });
  ROOT.updateRenderGraph();
}

function animate() {
  ROOT.rotate.x += (STATE.spinning) ? -0.005 : 0;
  ROOT.rotate.y += (STATE.spinning) ? 0.015 : 0;
  ROOT.rotate.z += (STATE.spinning) ? -0.002 : 0;
  ROOT.updateRenderGraph();
  requestAnimationFrame(animate);
}

init();
prepare();
animate();