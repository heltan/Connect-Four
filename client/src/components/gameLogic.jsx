const helpers = {
    helper1: function() {
        console.log('hi i am the helper function');
    },
    horizontalHelper(index) {
        console.log('calling horizontal helper');
    },
    checkHorizontal: function (player, c1, c2, c3, c4, c5, c6, c7) {
        //need to check for horizontal winner starting from last index of each column
        //this helper function takes in an index and compares each column at the index
        let horizontalHelper = (index) => {
            let arr= [];
            for (let i=1; i <= 7; i ++) {
            
                console.log('current arr', arr);
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
                    console.log('going into the else');
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
    }
}
export default helpers;