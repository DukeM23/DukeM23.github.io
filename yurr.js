function estimate(sym, qnty, entry, exit) {
    console.log("I am working");
    console.log(sym + " " + qnty + " " + entry + " " +exit);

    var diff = exit - entry
    var total = diff * qnty

    var p = document.getElementById("sym");
    var txtNode = document.createTextNode("Symbol: " + sym);
    p.appendChild(txtNode);

    p = document.getElementById("qnty");
    txtNode = document.createTextNode("Quantity: " + qnty);
    p.appendChild(txtNode);
    
    p = document.getElementById("enter");
    txtNode = document.createTextNode("Entry Price: " + entry);
    p.appendChild(txtNode);
     
    p = document.getElementById("exit");
    txtNode = document.createTextNode("Exit Price: " + exit);
    p.appendChild(txtNode);

    p = document.getElementById("diff");
    txtNode = document.createTextNode("Difference(+/-): " + diff);
    p.appendChild(txtNode);

    p = document.getElementById("total");
    txtNode = document.createTextNode("Total(+/-): " + total);
    p.appendChild(txtNode);


}
