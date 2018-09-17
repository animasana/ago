// const printMatrix = function(selector , data) {
//     $(selector).empty();
//     const fig = Math.floor(Math.log10(data.size)) + 1;    
//     data.matrix.forEach(function(item) {
//         item.forEach(function(item) {
//             $(selector).append(pad(item, fig) + " ");
//         }, this);
//         $(selector).append("<br />");
//     }, this);
//     $(selector).append("<br />");
// }

// const printMatrixByEach = function(selector , data) {
//     $(selector).empty();
//     const fig = Math.floor(Math.log10(data.size)) + 1;
//     $.each(data.matrix, function(index, item) {
//         $.each(item, function(index, item) {
//             $(selector).append(pad(item, fig) + " ");
//         });
//         $(selector).append("<br />");
//     });
//     $(selector).append("<br />");    
// }

const printMatrix = function(selector , data) {
    let output = "";
    $(selector).empty();
    const fig = Math.floor(Math.log10(data.size)) + 1;    
    data.matrix.forEach(function(item) {
        item.forEach(function(item) {
            output += pad(item, fig) + " ";
        }, this);
        output += "<br />";
    }, this);
    output += "<br />";
    $(selector).append(output);
}

const printMatrixByEach = function(selector , data) {
    let output = "";
    $(selector).empty();
    const fig = Math.floor(Math.log10(data.size)) + 1;
    $.each(data.matrix, function(index, item) {
        $.each(item, function(index, item) {
            output += pad(item, fig) + " ";
        });
        output += "<br />";
    });
    output += "<br />";
    $(selector).append(output);
}

/*
const printLotto = function(id , data) {
    let output = "";
    document.getElementById(id).innerHTML = "";
    const fig = Math.floor(Math.log10(data.size)) + 1;
    for(let i = 0; i < data.matrix.length; i++) {
        for(let j = 0; j < data.matrix[i].length; j++) {
            output += pad(data.matrix[i][j], fig) + " ";        
        }
        output += "<br />";
    }    
    output += "<br />";    
    document.getElementById(id).innerHTML += output;
}
*/

const printLotto = function(id , data) {
    let output = "";
    //document.getElementById(id).innerHTML = "";
    const fig = Math.floor(Math.log10(data.size)) + 1;
    for(const aRow of data.matrix) {
        for(const element of aRow) {
            output += pad(element, fig) + " ";        
        }
        output += "<br />";
    }    
    output += "<br />";    
    document.getElementById(id).innerHTML += output;
}

const pad = function(n, fig) {
    n = n + "";
    return n.length >= fig ? n : new Array(fig - n.length + 1).join("0") + n;
}