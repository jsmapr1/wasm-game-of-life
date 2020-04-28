import { Universe } from "wasm-game-of-life";
const pre = document.getElementById("game-of-life-canvas");
const universe = Universe.new(3, 10);
const renderLoop = () => {
  pre.textContent = universe.render();
  universe.tick();
  console.log('here')
  //const a = universe.sort(JSON.stringify(['b', 'c', 'a', 'z', 'd', 'g']))
  console.log(universe.collect_numbers([4, 3, 1, 5, 10]));
  //requestAnimationFrame(renderLoop);
};

requestAnimationFrame(renderLoop);
