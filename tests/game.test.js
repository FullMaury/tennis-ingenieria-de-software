const Game = require('../src/game');  // Asegúrate de que la ruta sea correcta

test('Should start the game with Love-Love', () => {
    const game = new Game();
    expect(game.getScore()).toBe('Love-Love');  // Esta prueba fallará al principio
});
