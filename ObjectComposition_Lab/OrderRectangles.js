function orderRects(matrix) {
    let rects = [];

    function createRects(width, height) {
       let rect = {
            width: width,
            height: height,
            area: function() {
                return width * height;

            },
            compareTo: function (other) {
                return other.area() - this.area() ||
                    other.width - this.width;
            }
        };

        return rect;
    }

    for (const data of matrix) {
        rects.push(createRects(data[0], data[1]));
    }

    return rects.sort((a, b) => a.compareTo(b));
}

//console.log(orderRects([[ 3, 4 ], [ 5, 3 ], [ 3, 4 ], [ 3, 5 ], [ 12, 1 ] ]));
//console.log(orderRects([[10,5],[5,12]]));
console.log(orderRects([[10,5], [3,20], [5,12]]));

