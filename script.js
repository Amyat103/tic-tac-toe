

const GameBoard = {
    gameBoard: [["","",""],
                ["","",""],
                ["","",""]],

    clearBoard: function() {
        this.gameBoard = [["","",""],
                        ["","",""],
                        ["","",""]];
        console.log(this.gameBoard);
    },

    placeMarker: function(row, col, marker){
        this.gameBoard[row][col] = marker;
        console.log(this.gameBoard);
        if(this.checkWin === true){
            console.log(marker + "is the winner");
            return true;
        }
    },

    checkWin: function() {
        if(this.gameBoard.checkCol || this.gameBoard.checkRow || this.gameBoard.checkDiag){
            return true;
        }
        return false;
    },

    checkRow: function() {
        for(let i = 0; i < this.gameBoard.length; i++){
            if(this.gameBoard[i][0] === this.gameBoard[i][1] === this.gameBoard[i][2]){
                return true;
            }
        }
        return false;
    },

    checkCol: function() {
        for(let i = 0; i < this.gameBoard.length; i++){
            if(this.gameBoard[0][i] === this.gameBoard[1][i] === this.gameBoard[2][i]){
                return true;
            }
        }
        return false;
    },

    checkDiag: function() {
        if(this.gameBoard[1][1] === this.gameBoard[0][0] === this.gameBoard[2][2]){
            return true;
        }else if(this.gameBoard[1][1] === this.gameBoard[0][2] === this.gameBoard[2][0]){
            return true;
        }
        return false;
    }




    
    
};

function Player (name, marker) {
    const name = name;
    const marker = marker;
    return {name, marker};
}


