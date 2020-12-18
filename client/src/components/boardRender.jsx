import React from 'react';
//below renders the squares based on the board state

const BoardRender= (props) => {
    //test gamelogic
    //make a table
    let entireBoard= [];
    
    let boardButtons = [];
     //first we want to push the buttons for user to press, to 'drop' checkers
     for (let i = 1; i < 8; i++) {
        boardButtons.push(<th key={ i}><button onClick= {()=> {
            props.handlePieces(i);
            
        }}>Column {i}</button></th>
            );
     }
     //now we are given all the columns to make our board
     for (let x = 1; x <= 7; x ++) {
        let current = props[`c${x}`];
        let boardElement = [];
        for (let a=1; a<=current.length; a++) {
            if(current[a] !== 0) {
                boardElement.push(<tr key={a}>{current[a]}</tr>)
            } else {
            boardElement.push(<tr key={a}>{a}</tr>);
            }
            
        }
        let newElem = (<th>{boardElement}</th>);
            entireBoard.push(newElem);

     }
     
     
// for (let i = 0; i < 6; i ++) {
//     //now push 7 tr into
//     boardElement.push(<tr>
//         <th >1</th>
//     <th>2</th>
//     <th>3</th>
//     <th>4</th>
//     <th>5</th>
//     <th>6</th>
//     <th>7</th>
//     </tr>);
// };
console.log('entire board?', entireBoard);
    return(
        <div>
            
<table>
    <tbody>
   
    </tbody>
</table>
       <table id="gameBoard">
           <tbody> 
           <tr>
               {boardButtons}
               </tr>
           {entireBoard}
           </tbody>
       </table>
       </div>
       
  
    )

   
}
export default BoardRender;