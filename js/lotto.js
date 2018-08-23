function Lotto(nRows, nCols, nSize) {
    if(nRows >= 1 && nCols >= 1 && nSize >= 1 && nCols <= nSize) {
        this.nRows = nRows;
        this.nCols = nCols;
        this.nSize = nSize;

        this.lottoMatrix = new Array(nRows);
        for(let i = 0; i < nRows; i++)
            this.lottoMatrix[i] = new Array(nCols);
    }
    else {
        throw "Illegal Argument!!!";
    }
}

Lotto.prototype.sample = function() {
    let initSeq = [];

    for (let i = 0; i < this.lottoMatrix.length; i++) {
        reset(initSeq, this.nSize);
        for (let j = 0; j < this.lottoMatrix[i].length; j++)
            this.lottoMatrix[i][j] = initSeq.splice(Math.floor(initSeq.length * Math.random()), 1);
        initSeq = [];
    }

    function reset(arr, sz) {
        for (let i = 0; i < sz; i++) {
            arr.push(i + 1);
        }
    }
}

Lotto.prototype.sortMatrix = function() {
    this.lottoMatrix.forEach(function(item) {
        item.sort(function (first, second) {
            return first - second;
        });
    });
}

Lotto.prototype.lottoPrint = function() {
    let fig = Math.floor(Math.log10(this.nSize)) + 1;
    this.lottoMatrix.forEach(function(item) {
        item.forEach(function(item) {
            document.body.innerHTML += this.pad(item, fig) + " ";
        }, this);
        document.body.innerHTML += "<br>";
    }, this);
    document.body.innerHTML += "<br>";
}

Lotto.prototype.show = function() {
    this.sample();
    this.sortMatrix();
    this.lottoPrint();
}

Lotto.prototype.pad = function(n, fig) {
    n = n + "";
    return n.length >= fig ? n : new Array(fig - n.length + 1).join("0") + n;
}
