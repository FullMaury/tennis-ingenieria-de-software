class Game {
    constructor() {
        this.player1Points = 0;
        this.player2Points = 0;
    }

    // Función para que el Jugador 1 anote un punto
    player1Scores() {
        this.player1Points++;
    }

    // Función para que el Jugador 2 anote un punto
    player2Scores() {
        this.player2Points++;
    }

    // Función para obtener el marcador actual
    getScore() {
        // Condiciones de marcador cuando ambos jugadores tienen el mismo puntaje
        if (this.player1Points === 0 && this.player2Points === 0) {
            return 'Love-Love';
        }
        if (this.player1Points === 1 && this.player2Points === 0) {
            return '15-Love';
        }
        if (this.player1Points === 0 && this.player2Points === 1) {
            return 'Love-15';
        }
        if (this.player1Points === 1 && this.player2Points === 1) {
            return '15-15';
        }
        if (this.player1Points === 2 && this.player2Points === 0) {
            return '30-Love';
        }
        if (this.player1Points === 0 && this.player2Points === 2) {
            return 'Love-30';
        }
        if (this.player1Points === 2 && this.player2Points === 1) {
            return '30-15';
        }
        if (this.player1Points === 1 && this.player2Points === 2) {
            return '15-30';
        }
        if (this.player1Points === 3 && this.player2Points === 0) {
            return '40-Love';
        }
        if (this.player1Points === 0 && this.player2Points === 3) {
            return 'Love-40';
        }
        if (this.player1Points === 3 && this.player2Points === 1) {
            return '40-15';
        }
        if (this.player1Points === 1 && this.player2Points === 3) {
            return '15-40';
        }
        if (this.player1Points === 3 && this.player2Points === 2) {
            return '40-30';
        }
        if (this.player1Points === 2 && this.player2Points === 3) {
            return '30-40';
        }

        // Casos de empate (Deuce)
        if (this.player1Points === 3 && this.player2Points === 3) {
            return 'Deuce';  // Empate en 40
        }

        // Ventaja para cualquier jugador
        if (this.player1Points === 4 && this.player2Points === 3) {
            return 'Advantage Player 1';
        }
        if (this.player1Points === 3 && this.player2Points === 4) {
            return 'Advantage Player 2';
        }

        // Caso final de un jugador ganando
        if (this.player1Points >= 4 && this.player1Points - this.player2Points >= 2) {
            return 'Game for Player 1';
        }
        if (this.player2Points >= 4 && this.player2Points - this.player1Points >= 2) {
            return 'Game for Player 2';
        }

        // En cualquier otro caso, el marcador sigue igual
        return 'Love-Love';
    }
}

module.exports = Game;
