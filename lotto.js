function LottoMatrix(rows, cols, size) {
    var rowsNum = rows;
    var colsNum = cols;
    var sizeNum = size;

    this.numsChosen = new Array(rowsNum);
    for (var i = 0; i < rowsNum; i++) {
        this.numsChosen[i] = new Array(colsNum);
    }

    this.getRows = function () { return rowsNum; }
    this.getCols = function () { return colsNum; }
    this.getSize = function () { return sizeNum; }
}

LottoMatrix.prototype.sample = function () {
    var numOfBalls = [];

    for (var i = 0; i < this.numsChosen.length; i++) {
        reset(numOfBalls, this.getSize());
        for (var j = 0; j < this.numsChosen[i].length; j++) {
            this.numsChosen[i][j] = numOfBalls[pvt = Math.floor(numOfBalls.length * Math.random())];
            numOfBalls.splice(pvt, 1);
        }
        numOfBalls = [];
    }

    function reset(arr, sz) {
        for (var i = 0; i < sz; i++) {
            arr.push(i + 1);
        }
    }
}

LottoMatrix.prototype.sortMatrix = function () {
    for (var i = 0; i < this.numsChosen.length; i++) {
        this.numsChosen[i].sort(function (first, second) {
            return first - second;
        });
    }
}

LottoMatrix.prototype.show = function() {
    var fig = Math.floor(logB(10, this.getSize())) + 1;
    for (var i = 0; i < this.numsChosen.length; i++) {
        for (const element of this.numsChosen[i]) {
            document.write(pad(element, fig) + " ");
        }
        document.write("<br />");
    }
    document.write("<br />");
}

function logB(base, x) {
    return Math.log(x) / Math.log(base);
}

function pad(n, fig) {
    n = n + "";
    return n.length >= fig ? n : new Array(fig - n.length + 1).join("0") + n;
}

lotto = new LottoMatrix(5, 6, 45);
lotto.sample();
lotto.sortMatrix();
lotto.show();
