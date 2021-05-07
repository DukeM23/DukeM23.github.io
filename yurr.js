function checkNumberIfFloat(value) {
    return Number(value) === value && value % 1 !== 0;
 }

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
function estimate(sym, qnty, entry, exit) {
  
    console.log(sym + " " + qnty + " " + entry + " " +exit);

    var stringBool;
    var symbolUpper;
    var qntyBool;
    var entryBool;
    var exitBool;
    if (sym == "") {
        stringBool = false
    } else {
        symbolUpper = sym.toUpperCase();
        stringBool = true;
    }
    
    if (qnty <=0 || checkNumberIfFloat(qnty)) {
        //alert("You cannot have fractional shares.\n Ensure you are entering whole");
        qntyBool = false;
    } else {
        qntyBool = true;
    }

    if ((entry <=0 && exit <=0)) {
        //alert("Stock Prices are negatives. Please input positive numbers");
        entryBool = false;
        exitBool = false;
    } else {
        entryBool = true;
        exitBool = true;
    }

    var contains = document.getElementById("result").textContent;
    if (contains !== "") {
        console.log("not empty");
        const kids = document.querySelector('#result');
        removeAllChildNodes(kids);
        if (stringBool && qntyBool && exitBool && entryBool) {
            var diff = exit - entry
            var total = diff * qnty
            
            
            var p = document.createElement("p");
            //var p = document.getElementById("sym");
            var txtNode = document.createTextNode("Symbol: " + symbolUpper);
            p.appendChild(txtNode);
            var element = document.getElementById("result");
            element.appendChild(p);
            
            //p = document.getElementById("qnty");
            p = document.createElement("p");
            txtNode = document.createTextNode("Quantity: " + qnty);
            p.appendChild(txtNode);
            element = document.getElementById("result");
            element.appendChild(p);
            
            var p = document.createElement("p");
            //p = document.getElementById("enter");
            txtNode = document.createTextNode("Entry Price: $" + entry);
            p.appendChild(txtNode);
            element = document.getElementById("result");
            element.appendChild(p);
            
            var p = document.createElement("p");
            //p = document.getElementById("exit");
            txtNode = document.createTextNode("Exit Price: $" + exit);
            p.appendChild(txtNode);
            element = document.getElementById("result");
            element.appendChild(p);
            
            var p = document.createElement("p");
            //p = document.getElementById("diff");
            txtNode = document.createTextNode("Difference(+/-): $" + diff);
            p.appendChild(txtNode);
            element = document.getElementById("result");
            element.appendChild(p);
        
            var p = document.createElement("p");
            //p = document.getElementById("total");
            txtNode = document.createTextNode("Total(+/-): $" + total);
            p.appendChild(txtNode);
            element = document.getElementById("result");
            element.appendChild(p);
            
        } else {
            alert("More than one field are incorrect.\nEnsure that there are negative values for prices and Fractional shares are not valid.");
        }
    } else {
        console.log("empty");
    }
    
        

    
}
