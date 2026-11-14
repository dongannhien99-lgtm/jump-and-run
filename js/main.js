import { Box } from "./objects/Box.js";
import { Rectangle } from "./objects/Rectangle.js";
import { Player } from "./objects/Player.js";
import { clearCanvas } from "./canvas.js";
import { timer } from "./Timer.js";

const p = new Player({
    pos: [100, 100],
    size: [40, 40],
    color: "red",
});

const r = new Rectangle({
    pos: [400, 400],
    size: [100, 10],
    color: "blue"
});

const s = new Rectangle({
    pos: [200, 500],
    size: [10, 100],
    color: "blue"
});

const objects = [p, r, s];

timer.update = (deltaTime) => {
    clearCanvas();
    objects.forEach(obj => obj.update(deltaTime, objects));
    objects.forEach(obj => obj.draw());
};

timer.start();