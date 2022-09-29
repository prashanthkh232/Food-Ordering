var burger1=0
var burger2=0
var burger3=0
var burger4=0
var fries1=0
var fries2=0
var fries3=0
var fries4=0
var pizza1=0
var pizza2=0
var pizza3=0
var pizza4=0
var noodle1=0
var noodle2=0
var noodle3=0
var noodle4=0
var desert1=0
var desert2=0
var desert3=0
var desert4=0
var item=0
var amt=0
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
        if ((a==1) &&  (fries1>0)){
            fries1--
            amt=amt-20
            document.getElementById('fries1').innerHTML = fries1
        }
        if ((a==2) && (fries2>0)){
            fries2--
            amt=amt-40
            document.getElementById('fries2').innerHTML = fries2
             }
        if ((a==3) && (fries3>0)){
            fries3--
            amt=amt-60
            document.getElementById('fries3').innerHTML = fries3
            }
        if ((a==4) && (fries4>0)){
            fries4--
            amt=amt-80
            document.getElementById('fries4').innerHTML = fries4
            }
    }else if (b=='pz'){
        if ((a==1) &&  (pizza1>0)){
            pizza1--
            amt=amt-20
            document.getElementById('pizza1').innerHTML = pizza1
        }
        if ((a==2) && (pizza2>0)){
            pizza2--
            amt=amt-40
            document.getElementById('pizza2').innerHTML = pizza2
             }
        if ((a==3) && (pizza3>0)){
            pizza3--
            amt=amt-60
            document.getElementById('pizza3').innerHTML = pizza3
            }
        if ((a==4) && (pizza4>0)){
            pizza4--
            amt=amt-80
            document.getElementById('pizza4').innerHTML = pizza4
            }
    }else if (b=='nd'){
        if ((a==1) &&  (noodle1>0)){
            noodle1--
            amt=amt-20
            document.getElementById('noodle1').innerHTML = noodle1
        }
        if ((a==2) && (noodle2>0)){
            noodle2--
            amt=amt-40
            document.getElementById('noodle2').innerHTML = noodle2
             }
        if ((a==3) && (noodle3>0)){
            noodle3--
            amt=amt-60
            document.getElementById('noodle3').innerHTML = noodle3
            }
        if ((a==4) && (noodle4>0)){
            noodle4--
            amt=amt-80
            document.getElementById('noodle4').innerHTML = noodle4
            }
    }else if (b=='de'){
        if ((a==1) &&  (desert1>0)){
            desert1--
            amt=amt-20
            document.getElementById('desert1').innerHTML = desert1
        }
        if ((a==2) && (desert2>0)){
            desert2--
            amt=amt-40
            document.getElementById('desert2').innerHTML = desert2
             }
        if ((a==3) && (desert3>0)){
            desert3--
            amt=amt-60
            document.getElementById('desert3').innerHTML = desert3
            }
        if ((a==4) && (desert4>0)){
            desert4--
            amt=amt-80
            document.getElementById('desert4').innerHTML = desert4
            }
    }
    
    item=burger1+burger2+burger3+burger4+fries1+fries2+fries3+fries4+pizza1+pizza2+pizza3+pizza4+noodle1+noodle2+noodle3+noodle4+desert1+desert2+desert3+desert4
    if (item>0){
        var x=document.getElementById('cart')
        x.innerHTML=`<button onclick='price()' class="sticky" > <div id="item">0 item | Rs.0</div> <div>VIEW CART</div></button>`
        document.getElementById('item').innerHTML = item + ' item | Rs.'+amt
    }else{
        var x=document.getElementById('cart')
        x.innerHTML = ''
    }
}
function price(){
    var p=0
    var i=1
    cart=document.getElementById('cart')
    cart.innerHTML = ''
    var hh=document.getElementById('maincart')
    let ma= document.createElement("div")
    ma.setAttribute('id','cartbox')
    ma.innerHTML = `<div class='deletecart'><button onclick="deletecart()">X</button></div><table id='table'>
    <tr>
        <th>Item</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Amount</th>
    </tr>
</table>`
    hh.appendChild(ma)
    console.log(ma);
    arr=['burger','fries','pizza','noodle','desert']
    for (k of arr){
        var j=1
        for(;j<5;j++){
            var n=`${k}${j}`
            var m=eval(`${k}${j}`)
            append(n,m)
            if ((k=='desert') &&(j==4 )){
                totalfun()
            }
        }
    }
}
function deletecart(){
    var hh=document.getElementById('maincart')
    hh.innerHTML =''
    var x=document.getElementById('cart')
    x.innerHTML=`<button onclick='price()' class="sticky" > <div id="item">0 item | Rs.0</div> <div>VIEW CART</div></BUtton>`
    document.getElementById('item').innerHTML = item + ' item | Rs.'+amt
}
function totalfun(){
    let mainDiv = document.createElement("tr")
    mainDiv.innerHTML =`<td colspan='3'>Total Amount</td> <td>${amt}</td>`
    tb=document.getElementById('table')
    tb.appendChild(mainDiv)
}
function append(n,m){
    if((m)>0){
        let y=n.slice((n.length)-1)
        if (y==1){p=20}else if(y==2){p=40}else if(y==3){p=60}else(p=80)
            let mainDiv = document.createElement("tr")
            var c=m*p
            mainDiv.innerHTML =`<td>${n}</td> <td>${m}</td><td>${p}</td><td>${c}</td>`
            tb=document.getElementById('table')
            tb.appendChild(mainDiv)
        }
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
            fries1++
            amt=amt+20
            document.getElementById('fries1').innerHTML = fries1
             }
        if (b==2){
            fries2++
            amt=amt+40
            document.getElementById('fries2').innerHTML = fries2
             }
        if (b==3){
            fries3++
            amt=amt+60
            document.getElementById('fries3').innerHTML = fries3
             }
        if (b==4){
            fries4++
            amt=amt+80
            document.getElementById('fries4').innerHTML = fries4
             }

    }else if (c=='nd'){
        if (b==1){
            noodle1++
            amt=amt+20
            document.getElementById('noodle1').innerHTML = noodle1
             }
        if (b==2){
            noodle2++
            amt=amt+40
            document.getElementById('noodle2').innerHTML = noodle2
             }
        if (b==3){
            noodle3++
            amt=amt+60
            document.getElementById('noodle3').innerHTML = noodle3
             }
        if (b==4){
            noodle4++
            amt=amt+80
            document.getElementById('noodle4').innerHTML = noodle4
             }

    }else if (c=='pz'){
        if (b==1){
            pizza1++
            amt=amt+20
            document.getElementById('pizza1').innerHTML = pizza1
             }
        if (b==2){
            pizza2++
            amt=amt+40
            document.getElementById('pizza2').innerHTML = pizza2
             }
        if (b==3){
            pizza3++
            amt=amt+60
            document.getElementById('pizza3').innerHTML = pizza3
             }
        if (b==4){
            pizza4++
            amt=amt+80
            document.getElementById('pizza4').innerHTML = pizza4
             }
    }else if (c=='de'){
        if (b==1){
            desert1++
            amt=amt+20
            document.getElementById('desert1').innerHTML = desert1
             }
        if (b==2){
            desert2++
            amt=amt+40
            document.getElementById('desert2').innerHTML = desert2
             }
        if (b==3){
            desert3++
            amt=amt+60
            document.getElementById('desert3').innerHTML = desert3
             }
        if (b==4){
            desert4++
            amt=amt+80
            document.getElementById('desert4').innerHTML = desert4
             }
    }
    item=burger1+burger2+burger3+burger4+fries1+fries2+fries3+fries4+pizza1+pizza2+pizza3+pizza4+noodle1+noodle2+noodle3+noodle4+desert1+desert2+desert3+desert4
    if (item>0){
        var x=document.getElementById('cart')
        x.innerHTML=`<button onclick='price()' class="sticky"> <div id="item">0 item | Rs.0</div> <div>VIEW CART</div></button>`
        document.getElementById('item').innerHTML = item + ' item | Rs.'+amt
    }
}
