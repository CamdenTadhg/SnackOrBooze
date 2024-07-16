const unroll = require("./unroll");

describe("#unroll", function () {

  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });
  it('handles small squares', function() {
    const square = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16]
    ];
    const smallerSquare = [
      ["a", "b", "c"],
      ["d", "e", "f"],
      ["g", "h", "i"]
    ];
    expect(unroll(square)).toEqual([1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]);
    expect(unroll(smallerSquare)).toEqual(["a", "b", "c", "f", "i", "h", "g", "d", "e"]);
  });
  it('handles larger squares', function(){
    const largeSquare = [
      [9, 8, 6, 7, 2, 0, 1],
      [4, 4, 9, 6, 8, 4, 2],
      [2, 5, 4, 9, 2, 6, 4],
      [7, 1, 3, 6, 7, 6, 2],
      [8, 8, 2, 6, 0, 4, 7],
      [2, 9, 3, 3, 2, 0, 3],
      [5, 5, 1, 3, 5, 4, 0]
    ]
    expect(unroll(largeSquare)).toEqual([9, 8, 6, 7, 2, 0, 1, 2, 4, 2, 7, 3, 0, 4, 5, 3, 1, 5, 5, 2, 8, 7, 2, 4, 4, 9, 6, 8, 4, 6, 6, 4, 0, 2, 3, 3, 9, 8, 1, 5, 4, 9, 2, 7, 0, 6, 2, 3, 6])
  });
  it('handles squares with null values', function(){
    const square = [
      [1, 2, 3, 4],
      [5, null, 7, null], 
      [9, 10, 11, 12],
      [null, 14, null, 16]
    ]
    expect(unroll(square)).toEqual([1, 2, 3, 4, null, 12, 16, null, 14, null, 9, 5, null, 7, 11, 10]);
  });


});
