var burger1=0
var burger2=0
var burger3=0
var burger4=0
var fr1=0
var fr2=0
var fr3=0
var fr4=0
var pz1=0
var pz2=0
var pz3=0
var pz4=0
var item=0
amt=0
function minus(a,b){

    if (b=='bur'){
        if ((a==1) &&  (burger1>0)){
            burger1--
            amt=amt-20
            document.getElementById('burger1').innerHTML = burger1
        }
        if ((a==2) && (burger2>0)){
            burger2--
            amt=amt-40
            document.getElementById('burger2').innerHTML = burger2
             }
        if ((a==3) && (burger3>0)){
            burger3--
            amt=amt-60
            document.getElementById('burger3').innerHTML = burger3
            }
        if ((a==4) && (burger4>0)){
            burger4--
            amt=amt-80
            document.getElementById('burger4').innerHTML = burger4
            }
    } else if (b=='fr'){
        if ((a==1) &&  (fr1>0)){
            fr1--
            amt=amt-20
            document.getElementById('fr1').innerHTML = fr1
        }
        if ((a==2) && (fr2>0)){
            fr2--
            amt=amt-40
            document.getElementById('fr2').innerHTML = fr2
             }
        if ((a==3) && (fr3>0)){
            fr3--
            amt=amt-60
            document.getElementById('fr3').innerHTML = fr3
            }
        if ((a==4) && (fr4>0)){
            fr4--
            amt=amt-80
            document.getElementById('fr4').innerHTML = fr4
            }
    }else if (b=='pz'){
        if ((a==1) &&  (pz1>0)){
            pz1--
            amt=amt-20
            document.getElementById('pz1').innerHTML = pz1
        }
        if ((a==2) && (pz2>0)){
            pz2--
            amt=amt-40
            document.getElementById('pz2').innerHTML = pz2
             }
        if ((a==3) && (pz3>0)){
            pz3--
            amt=amt-60
            document.getElementById('pz3').innerHTML = pz3
            }
        if ((a==4) && (pz4>0)){
            pz4--
            amt=amt-80
            document.getElementById('pz4').innerHTML = pz4
            }
    }
    
    item=burger1+burger2+burger3+burger4+fr1+fr2+fr3+fr4+pz1+pz2+pz3+pz4
    document.getElementById('item').innerHTML = item + ' item | Rs.'+amt
}
function add(b,c){
    if (c=='bur'){
        if (b==1){
            burger1++
            amt=amt+20
            document.getElementById('burger1').innerHTML = burger1
             }
        if (b==2){
            burger2++
            amt=amt+40
            document.getElementById('burger2').innerHTML = burger2
             }
        if (b==3){
            burger3++
            amt=amt+60
            document.getElementById('burger3').innerHTML = burger3
             }
        if (b==4){
            burger4++
            amt=amt+80
            document.getElementById('burger4').innerHTML = burger4
             }
    }else if (c=='fr'){
        if (b==1){
            fr1++
            amt=amt+20
            document.getElementById('fr1').innerHTML = fr1
             }
        if (b==2){
            fr2++
            amt=amt+40
            document.getElementById('fr2').innerHTML = fr2
             }
        if (b==3){
            fr3++
            amt=amt+60
            document.getElementById('fr3').innerHTML = fr3
             }
        if (b==4){
            fr4++
            amt=amt+80
            document.getElementById('fr4').innerHTML = fr4
             }
    }
    item=burger1+burger2+burger3+burger4+fr1+fr2+fr3+fr4
    document.getElementById('item').innerHTML = item + ' item | Rs.'+amt
}
