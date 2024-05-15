

const GameBoard = {
    gameBoard: [["","",""],
                ["","",""],
                ["","",""]],

    showBoard: function() {
        return this.gameBoard;
    },

    clearBoard: function() {
        this.gameBoard = [["","",""],
                        ["","",""],
                        ["","",""]];
        console.log(this.gameBoard);
    },

    placeMarker: function(row, col, marker){
        if(this.gameBoard[row][col] === ""){
            this.gameBoard[row][col] = marker;
            console.log(this.gameBoard);
            if(this.checkWin()){
                console.log(marker + "is the winner");
            }
            return true;
        }else{
            console.log(this.gameBoard);
            return false;
        }
    },

    checkWin: function() {
        if(this.checkCol() || this.checkRow() || this.checkDiag()){
            return true;
        }
        return false;
    },

    checkRow: function() {
        for(let i = 0; i < this.gameBoard.length; i++){
            if(this.gameBoard[i][0] != "" && this.gameBoard[i][0] === this.gameBoard[i][1] && this.gameBoard[i][1] === this.gameBoard[i][2]){
                return true;
            }
        }
        return false;
    },

    checkCol: function() {
        for(let i = 0; i < this.gameBoard.length; i++){
            if(this.gameBoard[0][i] != "" && this.gameBoard[0][i] === this.gameBoard[1][i] && this.gameBoard[1][i] === this.gameBoard[2][i]){
                return true;
            }
        }
        return false;
    },

    checkDiag: function() {
        if(this.gameBoard[1][1] != "" && this.gameBoard[1][1] === this.gameBoard[0][0] && this.gameBoard[1][1] === this.gameBoard[2][2]){
            return true;
        }else if(this.gameBoard[1][1] != "" && this.gameBoard[1][1] === this.gameBoard[0][2] && this.gameBoard[1][1] === this.gameBoard[2][0]){
            return true;
        }
        return false;
    },

    checkDraw: function() {
        for(let i = 0; i < this.gameBoard.length; i++){
            for(let j = 0; j < this.gameBoard.length; j++){
                if(this.gameBoard[i][j] === ""){
                    return false;
                }
            }
        }
        if(this.checkWin === false){
            return true;
        }
        return false;
    }
    
};

function Player (name, marker) {
    // const name = name;
    // const marker = marker;
    return {name, marker};
}


const gameControl = (function() {
    let currentPlayer;
    const player1 = Player("Player1", "X");
    const player2 = Player("Player2", "O");

    function start() {
        currentPlayer = player1;
        GameBoard.clearBoard();
        console.log("gameControl.start()")
    }

    function play(row, col) {
        if(row > GameBoard.length || col > GameBoard[0].length){
            console.log("invalid entry");
        }
        // null means placed
        if(GameBoard.placeMarker(row, col, currentPlayer.marker)){
            console.log("placed")
            console.log(GameBoard.showBoard());

            if(GameBoard.checkWin()){
                console.log("Winner");
                console.log(currentPlayer.name + " is the winner");
                return;
            }
            if(GameBoard.checkDraw()){
                console.log("DRAW");
                console.log();
                return;
            }

            switchPlayer();

        }else{
            console.log("spot taken, did not place")
        }
    }

    function switchPlayer() {
        currentPlayer = currentPlayer === player1 ? player2 : player1;
    }

    return {start, play};
})();

