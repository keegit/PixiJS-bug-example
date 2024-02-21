import * as PIXI from 'pixi.js';

// Create application and render to target page
let app = new PIXI.Application<HTMLCanvasElement>({ 
        resizeTo: window,
        backgroundColor: 0x2980b9
});
document.body.appendChild(app.view);

// Magically load the PNG asynchronously
let sprite = PIXI.Sprite.from('breaker.png')
sprite.scale.set(5, 5)
app.stage.addChild(sprite);

// Move shit back and forth
let elapsed = 0.0;
app.ticker.add((delta) => {
    elapsed += delta;
    sprite.x = 100.0 + Math.cos(elapsed/25.0) * 25.0;
});