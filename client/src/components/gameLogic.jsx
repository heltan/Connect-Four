const helpers = {
    checkHorizontal: function (player, c1, c2, c3, c4, c5, c6, c7) {
        //need to check for horizontal winner starting from last index of each column
        //this helper function takes in an index and compares each column at the index
        let horizontalHelper = (index) => {
            let arr= [];
            for (let i=1; i <= 7; i ++) {
                if (arr.length === 4) {
                    break;
                }
                let current = ("c" + i).toString();
                let column = eval(current);
                if (arr.length === 0 && column[index]=== player) {
                    arr.push(player);
                } else if (column[index]=== player) {
                    arr.push(player);
                } else {
                    arr = [];
                }   
            }
            if (arr.length === 4) {
            
                return true;
            } else {
               
                return false;
            }
        }
        //now we loop through to call horizontal helper for each index
        for (let i = 6; i >=0; i --) {
            let hWinner = horizontalHelper(i);
            if (hWinner) {
                return true;
            } 
        }
        return false; 
    },
    checkDiagonalDown: function (player, c1, c2, c3, c4, c5, c6, c7) {
        //helper function to check every index of the column 
        let checkColumn= (startIndex, colNum) => {
            let count = 0;
            for (let v = 1; v <= 4; v++) {
                let column = eval(("c" + colNum).toString())
                if (count === 4) {
                    break;
                }
                if (column[startIndex]=== player) {
                    count++;
                    startIndex++;
                    colNum++;
                } else {
                    count = 0;
                    startIndex++;
                    colNum++;
                }
            }
            if (count === 4) {
                return true;
            } else {
                return false;
            }    
        }
        //first loop through the columns for which one to start checking
        for (let i = 1; i <=4; i ++) {
            let colNumToCheck = i;
            let result = checkColumn(0, colNumToCheck)
            let result1 = checkColumn(1, colNumToCheck)
            let result2 = checkColumn(2, colNumToCheck)
            if (result === true || result1 === true || result2 === true) {
                return true;
            }
        }
        return false;
    },
    checkDiagonalUp: function (player, c1, c2, c3, c4, c5, c6, c7) {
        //helper function to check every index of the column 
        let checkColumn= (startIndex, colNum) => {
            let count = 0;
            for (let v = 1; v <= 4; v++) {
                let column = eval(("c" + colNum).toString())
                if (count === 4) {
                    break;
                }
                if (column[startIndex]=== player) {
                    count++;
                    startIndex--;
                    colNum++;
                } else {
                    count = 0;
                    startIndex--;
                    colNum++;
                }
            }
            if (count === 4) {
                return true;
            } else {
                return false;
            }    
        }
        //first loop through the columns for which one to start checking
        for (let i = 1; i <=4; i ++) {
            let colNumToCheck = i;
            let result = checkColumn(3, colNumToCheck)
            let result1 = checkColumn(4, colNumToCheck)
            let result2 = checkColumn(5, colNumToCheck)
            if (result === true || result1 === true || result2 === true) {
                return true;
            }
        }
        return false;
    },
    checkVertical: function (player, c1, c2, c3, c4, c5, c6, c7) {
        //helper function to loop through 1 given column, and find if winner
    let loopCol = (column) => {
        let count = 0;
        for (let i = column.length-1; i >= 0; i --) {
            if (count  === 4) {
                break;
            }
                else if (column[i]=== player) {
                    count ++;
                } else if (column[i]!== player ) {
                    count = 0;
                }
        } 
        if (count === 4) {
            return true;
        } return false;    
    }
        for (let i = 1; i <= 7; i ++) {
            let column = eval(("c" + i).toString());
            let result = loopCol(column);
            if (result) {
                return true;
            } 
        }
        return false;
    },
    checkTie: function (c1, c2, c3, c4, c5, c6, c7){
        //for now if there are no more moves left then it is a tie
        let zeros = 0;
        for (let i = 1; i < 8; i ++) {
            let column = eval(("c" + i).toString());
            for (let a = 0; a < 7; a ++) {
                if (column[a]=== 0) {
                    zeros ++;
                }
            }
        }
        if (zeros === 0) {
            return true;
        } return false;
    }
}
export default helpers;