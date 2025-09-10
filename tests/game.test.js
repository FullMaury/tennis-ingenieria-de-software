const Game = require('../src/game');  // Asegúrate de que la ruta sea correcta

// Test 1: El marcador comienza en Love-Love
test('Should start the game with Love-Love', () => {
    const game = new Game();
    expect(game.getScore()).toBe('Love-Love');  // Esta prueba fallará al principio
});

// Test 2: Jugador 1 anota un punto, el marcador debería ser 15-Love
test('Player 1 scores a point, score should be 15-Love', () => {
    const game = new Game();
    game.player1Scores();  // Llamamos a la función para que el Jugador 1 anote
    expect(game.getScore()).toBe('15-Love');  // Esta prueba fallará al principio
});

// Test 3: Jugador 2 anota un punto, el marcador debería ser 15-15
test('Player 2 scores a point, score should be 15-15', () => {
    const game = new Game();
    game.player1Scores();  // Jugador 1 anota
    game.player2Scores();  // Jugador 2 anota
    expect(game.getScore()).toBe('15-15');  // Esta prueba fallará al principio
});

// Test 4: Jugador 1 anota dos puntos, el marcador debería ser 30-15
test('Player 1 scores two points, score should be 30-15', () => {
    const game = new Game();
    game.player1Scores();  // Jugador 1 anota
    game.player1Scores();  // Jugador 1 anota de nuevo
    game.player2Scores();  // Jugador 2 anota
    expect(game.getScore()).toBe('30-15');  // Esta prueba fallará al principio
});

// Test 5: Jugador 1 anota tres puntos, el marcador debería ser 40-15
test('Player 1 scores three points, score should be 40-15', () => {
    const game = new Game();
    game.player1Scores();  // Jugador 1 anota
    game.player1Scores();  // Jugador 1 anota de nuevo
    game.player1Scores();  // Jugador 1 anota una vez más
    game.player2Scores();  // Jugador 2 anota
    expect(game.getScore()).toBe('40-15');  // Esta prueba fallará al principio
});

// Test 6: Ambos jugadores anotan hasta llegar a Deuce
test('Player 1 and Player 2 score to Deuce', () => {
    const game = new Game();
    game.player1Scores();  // Jugador 1 anota
    game.player2Scores();  // Jugador 2 anota
    game.player1Scores();  // Jugador 1 anota
    game.player2Scores();  // Jugador 2 anota
    game.player1Scores();  // Jugador 1 anota
    game.player2Scores();  // Jugador 2 anota
    expect(game.getScore()).toBe('Deuce');  // Esta prueba fallará al principio
});

// Test 7: Jugador 1 gana con una diferencia de 2 puntos
test('Player 1 wins the game', () => {
    const game = new Game();
    game.player1Scores();  // Jugador 1 anota
    game.player1Scores();  // Jugador 1 anota de nuevo
    game.player1Scores();  // Jugador 1 anota una vez más
    game.player2Scores();  // Jugador 2 anota
    game.player1Scores();  // Jugador 1 anota y gana
    expect(game.getScore()).toBe('Game for Player 1');  // Esta prueba fallará al principio
});
