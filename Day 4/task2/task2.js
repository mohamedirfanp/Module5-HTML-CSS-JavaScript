var inputVal = 0;
userVisit = 0;

function getStatusOfAdmission(mark)
{
    mark = Number(mark);
    let status = document.getElementById("status");
    if(mark < 50)
    {
        status.innerHTML = 'Admission Application Rejected';
        status.style.color = 'red';
    }
    else if(mark >= 50 && mark < 70)
    {
        status.innerHTML = 'Acceptable to admit';
        status.style.color = 'wheat';
    }
    else if(mark > 70 && mark <= 90)
    {
        status.innerHTML = 'Good to admin';
        status.style.color = 'green';
    }
    else
    {
        status.innerHTML = 'Outstanding to admit';
        status.style.color = 'green';
    }
}


function getInputField()
{
    inputVal = document.getElementById("totalItem").value; 
    var inputField = document.getElementById("input-field");
    for(let i=0;i<inputVal;i++)
    {
        inputField.innerHTML += `<label>Enter the amount ${i+1} </label><input type=number id=price${i} /><br>` 
    }
}

function CalculateGV()
{
    var gv = 0;
    let totalBill = 0;
    for(let i=0;i < inputVal;i++)
    {
        totalBill += Number(document.getElementById("price"+i).value)
    }
    do{
       
        gv= getGifts(totalBill) ;
        gv += 100;
        totalBill =0;
    }
    while(totalBill > 0)

    document.getElementById("gv").innerHTML = `Your gained gv : ${gv}`;
}


function getGifts(totalBill)
{
    let answer = 0;

    if(totalBill > 5000)
        answer += 3000;
    else if(totalBill > 3000)
        answer += 1500
    else if(totalBill > 1000)
        answer += 500
    
    console.log(answer);
   return answer;
}