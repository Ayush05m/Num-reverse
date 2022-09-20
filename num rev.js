let eq="";

function clicked(a){
    eq = eq + a;
}

function revert(){
    console.log(eq);
    let a=eq.length;
    let rveq ="";
    while(a>0){
        a=a-1;
        rveq = rveq + eq[a];
    }
    console.log(rveq);
    eq=""
}

function revertit(eqt){
    console.log(eqt);
    let a=eqt.length;
    let rveq ="";
    while(a>0){
        a=a-1;
        rveq = rveq + eqt[a];
    }
    console.log(rveq);
}