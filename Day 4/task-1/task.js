function calc()
{
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    const checkedRadio = document.querySelector('input[type="radio"]:checked');
    var oper = checkedRadio.value;
    let answer;
    if(oper === 'add')
        answer = add(num1, num2);
    else if(oper === 'sub')
        answer = sub(num1, num2);
    else if(oper === 'mul')
        answer = mul(num1, num2);
    else if(oper === "div")
        answer = div(num1,num2);
    else if(oper === 'mod')
        answer = mod(num1,num2);

    var answerField = document.getElementById("answer");
    answerField.innerHTML = answer;
    
}


function add(num1, num2)
{
    return num1 + num2;
}

function sub(num1, num2)
{
    return num1 - num2; 
}

function mul(num1, num2)
{
    return num1 * num2;
}

function div(num1, num2)
{
    return num1 / num2;
}
function mod(num1, num2)
{
    return num1 % num2;
}
