import React from 'react';
//below renders the squares based on the board state

const BoardRender= (props) => {
    //test gamelogic
    //make a table
    console.log('c1', props.c1);
    console.log('c5', props.c5);
    let entireBoard= [];
    let boardButtons = [];
     //first we want to push the buttons for user to press, to 'drop' checkers
     for (let i = 1; i < 8; i++) {
        boardButtons.push(<th key={i+i}><button onClick= {()=> {
            props.handlePieces(i);
            
        }}>Column {i}</button></th>
            );
     }
     //now we are given all the columns to make our board
     for (let x = 1; x <= 7; x ++) {
        let current = props[`c${x}`];
        let boardElement = [];
        for (let a=0; a<=current.length; a++) {
            if(current[a] !== 0) {
                boardElement.push(<tr key={current+a}>{current[a]}</tr>)
            } else {
            boardElement.push(<tr key={current+a}>_</tr>);
            }
            //give it a class and make the opacity nothingness
            
        }
        let newElem = (<th key={"newboardelement1"+ x}>{boardElement}</th>);
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

       <table id="gameBoard">
           <tbody> 
           <tr key="testingss">
               {boardButtons}
               </tr>
           {entireBoard}
           </tbody>
       </table>
       </div>
       
  
    )

   
}
export default BoardRender;