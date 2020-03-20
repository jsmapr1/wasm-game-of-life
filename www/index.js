import { Universe } from "wasm-game-of-life";
const pre = document.getElementById("game-of-life-canvas");
const universe = Universe.new(3, 10);
const renderLoop = () => {
  pre.textContent = universe.render();
  universe.tick();
  console.log(universe.collect_numbers([4, 3, 1, 5, 7]));
  //requestAnimationFrame(renderLoop);
};

requestAnimationFrame(renderLoop);
