import React from 'react';
//below renders the squares based on the board state

const BoardRender= (props) => {
    //make a table
    let boardElement = [];
    let boardButtons = [];
     //first we want to push the buttons for user to press, to 'drop' checkers
     for (let i = 1; i < 8; i++) {
        boardButtons.push(<th key={ i}><button>Column {i}</button></th>
            );
     }
for (let i = 0; i < 6; i ++) {
    //now push 7 tr into
    boardElement.push(<tr key={i}>
        <th>1</th>
    <th>2</th>
    <th>3</th>
    <th>4</th>
    <th>5</th>
    <th>6</th>
    <th>7</th>
    </tr>);
};

    return(

       <table>
           <tbody>
               <tr>
               {boardButtons}
               </tr>
               
           {boardElement}

           </tbody>
       </table>
       
  
    )

   
}
export default BoardRender;