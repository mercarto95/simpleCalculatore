
let x=0, y = 0, newOperation = false;

/*
document.getElementById('0').onclick = function(){
    alert(0);
    console.log(0);
}

console.log(222);
*/
let result, num, operation, tmpLable;

const lbl1 = document.getElementById('lbl1');
const nr0 = document.getElementById("0");
const nr1 = document.getElementById("1");
const nr2 = document.getElementById("2");
const nr3 = document.getElementById("3");
const nr4 = document.getElementById("4");
const nr5 = document.getElementById("5");
const nr6 = document.getElementById("6");
const nr7 = document.getElementById("7");
const nr8 = document.getElementById("8");
const nr9 = document.getElementById("9");
const clearBtn = document.getElementById("clearBtn");
const cls = document.getElementById('cls');
const equal = document.getElementById("equal");
const comma = document.getElementById("comma");

const operationArray = ['+', '-', '*', '/'];

const add = document.getElementById("add");
const sub = document.getElementById("sub");
const mult = document.getElementById("mult");
const devide = document.getElementById("devide");

function clear (lable){
    if(lable == 0 || newOperation == true){
        lbl1.innerHTML = "";
        newOperation = false;
    }
}



function operationExist(param){
    for(let i = 0; i < lbl1.innerHTML.length; i++)
    {
        for(let j = 0; j < operationArray.length; j++){
            if(lbl1.innerHTML[i] == operationArray[j]){
                alert("True");
                return true;
            }
        }
        if(lbl1.innerHTML[i] == param){
            return true;
        }
    }
    
    return false;
}

function updateOperation(newOp){

    if(operationExist(newOp) == false){
        lbl1.innerHTML += newOp;
        //executeOperation(num, operation);
    }

    else{
        {
            tmpLable = lbl1.innerHTML;
            lbl1.innerHTML="";
            for(let i = 0; i < tmpLable.length -1 ; i++)
            {
                lbl1.innerHTML += tmpLable[i];
            }
            operation = newOp;
            lbl1.innerHTML += newOp;
        }
    }
}


nr0.onclick = function(){
    clear(lbl1.textContent);
    console.log("---> ", nr0.textContent);
    num = nr0.textContent;
    lbl1.innerHTML += nr0.textContent;
}




nr1.onclick = function(){
    clear(lbl1.textContent);
    console.log("---> ", nr1.textContent);
    num = nr1.textContent;
    lbl1.innerHTML += nr1.textContent;
}

nr2.onclick = function(){
    clear(lbl1.textContent);
    console.log("---> ", nr2.textContent);
    num = nr2.textContent;
    lbl1.innerHTML += nr2.textContent;
}


nr3.onclick = function(){
    clear(lbl1.textContent);
    console.log("---> ", nr3.textContent);
    num = nr3.textContent;
    lbl1.innerHTML += nr3.textContent;
}



nr4.onclick = function(){
    clear(lbl1.textContent);
    console.log("---> ", nr4.textContent);
    num = nr4.textContent;
    lbl1.innerHTML += nr4.textContent;
}


nr5.onclick = function(){
    clear(lbl1.textContent);
    console.log("---> ", nr5.textContent);
    num = nr5.textContent;
    lbl1.innerHTML += nr5.textContent;
}

nr6.onclick = function(){
    clear(lbl1.textContent);
    console.log("---> ", nr6.textContent);
    num = nr6.textContent;
    lbl1.innerHTML += nr6.textContent;
}

nr7.onclick = function(){
    clear(lbl1.textContent);
    console.log("---> ", nr7.textContent);
    num = nr7.textContent;
    lbl1.innerHTML += nr7.textContent;
}

nr8.onclick = function(){
    clear(lbl1.textContent);
    console.log("---> ", nr8.textContent);
    num = nr8.textContent;
    lbl1.innerHTML += nr8.textContent;
}

nr9.onclick = function(){
    clear(lbl1.textContent);
    console.log("---> ", nr9.textContent);
    num = nr9.textContent;
    lbl1.innerHTML += nr9.textContent;
}


nr0.onclick = function(){
    clear(lbl1.textContent);
    console.log("---> ", nr0.textContent);
    num = nr0.textContent;
    lbl1.innerHTML += nr0.textContent;
}

comma.onclick=function(){
    let lastChar = lbl1.innerHTML[lbl1.innerHTML.length], hasChar = false;
    for(let j = 0; j < operationArray.length; j++){
        if(lastChar == operationArray[j]){
            hasChar = true;
        }
    }
    if(hasChar == false){
        lbl1.innerHTML += comma.textContent;
    }
}













/* =========  */

clearBtn.onclick = function(){
    clear(lbl1.textContent);
    console.log("---> ", clearBtn.textContent);
    num = 0;
    lbl1.innerHTML = "0";
}


cls.onclick = function(){
    clear(lbl1.textContent);
    console.log("---> ", clearBtn.textContent);
    num = 0;
    lbl1.innerHTML = "0";
}
















/* ============    Operation ============ */



add.onclick = function(){
    console.log("---> ", add.textContent);
    operation = add.textContent;
    updateOperation(add.textContent);
    //lbl1.innerHTML += add.textContent;
}

sub.onclick = function(){
    console.log("---> ", sub.textContent);
    operation = sub.textContent;
    updateOperation(sub.textContent);
    //lbl1.innerHTML += add.textContent;
}

mult.onclick = function(){
    console.log("---> ", mult.textContent);
    operation = mult.textContent;
    updateOperation(operation);
    //lbl1.innerHTML += add.textContent;
}


devide.onclick = function(){
    console.log("---> ", devide.textContent);
    operation = devide.textContent;
    updateOperation(operation);
    //lbl1.innerHTML += add.textContent;
}


equal.onclick = function(){
    let num1 = 0, num2 = 0;
    tmpLable = lbl1.innerHTML;
    position = tmpLable.indexOf(operation)
    for(let i = 0; i < tmpLable.length; i++)
    {
        console.log("& " , tmpLable[i], " O " , operation);
        if(tmpLable[i] == operation){
            //num1 = tmpLable.substring(tmpLable[0], tmpLable.indexOf(operation)-1);
            num1 = parseFloat( tmpLable.substring(0, position) );
            num2 = parseFloat( tmpLable.substring(position +1, tmpLable.length) );
            executeOperation(num1, num2, operation);
        }
    }
    
}




function executeOperation(num1, num2, operation){
    switch(operation){
        case '+':
            result = num1 + num2;
            operation = "";
            lbl1.innerHTML = result;
            newOperation = true;
            break;
        case '-':
            result = num1 - num2;
            operation = "";
            lbl1.innerHTML = result;
            newOperation = true;
            break;
        case '*':
            result = num1 * num2;
            operation = "";
            lbl1.innerHTML = result;
            newOperation = true;
            break;
        case '/':
            result = num1 / num2;
            operation = "";
            lbl1.innerHTML = result;
            newOperation = true;
            break;
        
    }
}




