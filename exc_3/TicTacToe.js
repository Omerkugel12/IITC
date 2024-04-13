//creating board
    function GameBoard(size){
        let board1 = []
        for(let i = 0;i<size;i++){
            board1.push([]);
            for(let j = 0;j<size;j++){
                board1[i][j]=null
            }
            
        }   
        
        return board1
    }
    
    function turn(){
        let rowNum
        let colNum
        while (true) {
             rowNum = check_valid_size('Enter number of row: ')
             colNum = check_valid_size('Enter number of column: ')
            
            if(rowNum<=size && colNum<=size&&board[rowNum-1][colNum-1]===null){
                break
            }else{
                alert("enter valiad num")
            }
        }
        board[rowNum-1][colNum-1] = sign
        if(sign === 'X'){
            sign = 'O'
        } else{
            sign = 'X'
        }
        console.log("playerx",playerX,"playery",playerO);
        for(let arr of board){
            console.log(...arr);
        }

        console.log(`its ${sign} turn`);
    }

    function names(){
        let Player1=prompt('Enter name of Player X: ')
        let Player2=prompt('Enter name of Player O: ')
        return [Player1,Player2]
    }
    
    //check if the winning is because the diagonal goes up (left to right)
    function isWinByDiagup(){
        for(let jRow = 0;jRow<board.length;jRow++){
                if(board[0][board.length-1] != board[jRow][board.length-jRow-1]){
                    return false
                }else if(board[jRow][board.length-jRow-1]===null){
                    return false
                }
            }
        return true
    }
    
    //check if the winning is because the diagonal goes down (left to right)
    function isWinByDiagDown(){
        for(let jRow = 0;jRow<board.length;jRow++){
            if(board[0][0] != board[jRow][jRow]){
                return false
            }else if(board[jRow][jRow]===null){
                return false
            }
            
        }
        return true
}

//check if random collumn wins
function isWinByColIndex(iColIndex){
    for(let jRow = 0;jRow<board.length;jRow++){
        if(board[0][iColIndex] != board[jRow][iColIndex]){
            return false
        }else if(board[jRow][iColIndex]===null){
            return false
        }
    }
    return true
}

//check if the winning is because a collumn
function isWinByCol(){
    for(let jcol = 0;jcol<board.length;jcol++){
        if(isWinByColIndex(jcol)){
            return true
        }
    }
    return false
}

//check if random row wins
function isWinByRowIndex(iRowIndex){
    for(let iCol = 0; iCol<board.length;iCol++){
        if(board[iRowIndex][0] != board[iRowIndex][iCol]){
            return false
        }else if(board[iRowIndex][iCol]===null){
            return false
        }
    }
    return true
    }
    
    //check if the winning is because a row
    function isWinByRow(){
        for(let iRow = 0;iRow<board.length;iRow++){
        if(isWinByRowIndex(iRow))
        return true
}
return false
}
function check_valid_size(str){
    while(true){
       let size1 = Number(prompt(str))
       
       if(Number.isInteger(size1)){
        return size1
       }
       
    }
}
isTie=false
let sign = 'X'
let [playerX,playerO]=names()
let size = check_valid_size('Enter size: ')
let board=GameBoard((size))

while(true){
    turn()
    let ByRow = isWinByRow()
    let ByCol= isWinByCol()
    let ByDiagUp = isWinByDiagup()
    let ByDiagDown = isWinByDiagDown()
    if(ByCol || ByRow || ByDiagDown || ByDiagUp){
        if(sign === 'X'){
            console.log('o win');
        } else{
            console.log('x win');
        }
        break  
    }
    for(let row of board){
        if(row.includes(null)){
            isTie=false
            break
        }else{
            isTie=true
        }
    }
    if (isTie) {
        console.log("tie");
        break
    }   
}