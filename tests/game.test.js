const Game = require('../src/game');  // Asegúrate de que la ruta sea correcta

test('Should start the game with Love-Love', () => {
    const game = new Game();
    expect(game.getScore()).toBe('Love-Love');  // Esta prueba fallará al principio
});

test('Player 1 scores a point, score should be 15-Love', () => {
    const game = new Game();
    game.player1Scores();  // Llamamos a la función que implementaremos para que el Jugador 1 anote
    expect(game.getScore()).toBe('15-Love');  // Esta prueba fallará al principio
});


test('Player 2 scores a point, score should be 15-15', () => {
    const game = new Game();
    game.player1Scores();  // Jugador 1 anota
    game.player2Scores();  // Jugador 2 anota
    expect(game.getScore()).toBe('15-15');  // Esta prueba fallará al principio
});

test('Player 1 scores two points, score should be 30-15', () => {
    const game = new Game();
    game.player1Scores();  // Jugador 1 anota
    game.player1Scores();  // Jugador 1 anota de nuevo
    game.player2Scores();  // Jugador 2 anota
    expect(game.getScore()).toBe('30-15');  // Esta prueba fallará al principio
});
