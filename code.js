alert("code compiled");
var notBin = true;
var i1 = 1;
var i2 = 2;
var w1 = 0.5;
var w2 = 0.5;
var out = 0;
var counts = 0;
function train (){
    for (counts = 0; counts < 100000; counts++) {
        think();
        
        //error for binjary calculation switch
        if (notBin) {
        //change type of calculation here
        this.err = (out - (i1 + i2));
        }
        else {
            //add rules here
                    this.err = (out - i1);
        }
        w1 = w1 + -0.01 * this.err * i1;
        w2 = w2 + -0.01 * this.err * i2;
        i1 = Math.random(0/10);
        i2 = Math.random(0/10);
    }
    alert("done\n" + out +"\nnew weights:\n"+ w1 + "\n" + w2);
}
function think (){
     out = w1*i1+w2*i2;
}
function user () {
    i1 = prompt("Input 1");
    i2 = prompt("Input 2");
    think();
    alert(Math.round(out));
}
