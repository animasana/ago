function Lotto(nRows, nCols, nSize) {
    this.nRows = nRows;
    this.nCols = nCols;
    this.nSize = nSize;

    this.matrix = new Array(nRows).fill();
    for(let i = 0; i < nRows; i++)
        this.matrix[i] = new Array(nCols).fill();
}

Lotto.prototype.sample = function() {
    if (this.nRows > 0 && this.nCols > 0 && this.nSize >= this.nCols) {
        for (let i = 0; i < this.matrix.length; i++) {
            let initSeq = new Array(this.nSize)
                .fill()
                .map((_, idx) => idx + 1);                
            for (let j = 0; j < this.matrix[i].length; j++) {
                this.matrix[i][j] = initSeq.splice(Math.floor(initSeq.length * Math.random()), 1)[0];
            }
        }
    }
    else {
        throw Error("Invalid Argument!!!");
    }
}

Lotto.prototype.sort = function() {
    for (const aRow of this.matrix) {
        aRow.sort((first, second) => {
            return first - second;
        });        
    }    
}

Lotto.prototype.print = function(disp) {    
    const fig = Math.floor(Math.log10(this.nSize)) + 1;
    const pad = (n, fig) => {
        n = n + '';
        return n.length >= fig ? n : new Array(fig - n.length + 1).join('0') + n;
    }   
    
    disp.innerHTML = '';
    this.matrix.forEach(aRow => {
        aRow.forEach(element => {            
            disp.innerHTML += pad(element, fig) + ' ';
        });
        disp.innerHTML += '<br>';
    });
    disp.innerHTML += '<br>';    
}

Lotto.prototype.show = function(disp) {
    try {
        this.sample()
        this.sort()
        this.print(disp)
    }
    catch (e) {
        this.logErrors(e, disp);
    }
}

Lotto.prototype.logErrors = function(e, disp) {
    disp.innerHTML += e;
    disp.innerHTML += '<br><br>';

    console.log(e);
    console.log('\n');
}
