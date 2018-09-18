function Lotto (nRows, nCols, nSize) {
    if (nRows >= 1 && nCols >= 1 && nSize >= 1 && nCols <= nSize) {
        this.nRows = nRows;
        this.nCols = nCols;
        this.nSize = nSize;

        this.lottoMatrix = new Array(nRows);
        for(let i = 0; i < nRows; i++)
            this.lottoMatrix[i] = new Array(nCols);
    }
    else {
        throw Error("Illegal Argument!!!");
    }
}

Lotto.prototype.sample = function () {
    const initSeq = [];

    const reset = (arr) => {
        for (let i = 0; i < this.nSize; i++) {
            arr.push(i + 1);
        }
    }

    for (let i = 0; i < this.lottoMatrix.length; i++) {
        reset(initSeq);
        for (let j = 0; j < this.lottoMatrix[i].length; j++)
            this.lottoMatrix[i][j] = initSeq.splice(Math.floor(initSeq.length * Math.random()), 1);
        initSeq.length = 0;
    }
}

Lotto.prototype.sortMatrix = function () {
    this.lottoMatrix.forEach(function(item) {
        item.sort(function (first, second) {
            return first - second;
        });
    });
}

Lotto.prototype.show = function (id) {
    this.sample();
    this.sortMatrix();
    this.printToBrowser(id);
}

Lotto.prototype.pad = function (n, fig) {
    n = n + "";
    return n.length >= fig ? n : new Array(fig - n.length + 1).join("0") + n;
}

Lotto.prototype.printToBrowser = function (id) {
    let output = "";

    const fig = Math.floor(Math.log10(this.nSize)) + 1;
    for (const aRow of this.lottoMatrix) {
        for (const item of aRow) {
            output += this.pad(item, fig) + " ";        
        }
        output += "<br />";
    }    
    output += "<br />";    
    document.getElementById(id).innerHTML += output;
}
