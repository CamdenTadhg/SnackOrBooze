function unroll(squareArray) {
    let startIndex = 0;
    let endIndex = squareArray.length - 1;
    let resultsArray = [];
    debugger;
    //while the results array is not yet full
    while (resultsArray.length < squareArray.length ** 2){
        //(x,y) starts at (startIndex,startIndex)
        //go across
        let x = startIndex;
        let y = startIndex;
        while (x < endIndex){
            resultsArray.push(squareArray[y][x]);
            x++;
        }
        //now (x,y) is (endIndex, startIndex)
        //go down
        while (y < endIndex){
            resultsArray.push(squareArray[y][x]);
            y++;
        }
        //now (x,y) is (endIndex, endIndex)
        //go backwards across
        while (x > startIndex){
            resultsArray.push(squareArray[y][x]);
            x--;
        }
        //now (x,y) is (startIndex, endIndex)
        //go up
        while (y > startIndex){
            resultsArray.push(squareArray[y][x])
            y--;
        }
        //square completed. Increment indexes and start again.
        startIndex++;
        endIndex--;
        //deal with odd length squares
        if(startIndex === endIndex){
            resultsArray.push(squareArray[startIndex][endIndex]);
        }
    }
    console.log(resultsArray);
    return resultsArray;
}

module.exports = unroll;
