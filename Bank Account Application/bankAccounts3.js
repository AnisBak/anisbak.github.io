function submitAmount() {
    var bankInfoList = JSON.parse(sessionStorage.getItem("list"));
    var depositAmount = document.getElementById("debitAmount").value;
    var depositDrop = document.getElementById("debitSelec");

    for (let i = 0; i < bankInfoList.length; i++){
        if (depositDrop.value === bankInfoList[i].accountName)
            bankInfoList[i].balance = parseInt(bankInfoList[i].balance) - parseInt(depositAmount);
           
    }
    sessionStorage.setItem("list", JSON.stringify(bankInfoList));
    
    window.open("bankAccount.html");
    
}


function changeSelect() {
    var submit = document.getElementById("submitD");
    if (document.getElementById("debitSelec").value === "")
        submit.disabled = true;
    else {
        submit.disabled = false;
    
    } 
}

function attachEvent() {
    
    var bankInfoList = JSON.parse(sessionStorage.getItem("list"));
    var debitDrop = document.getElementById("debitSelec");
   
    
    for (let i = 0; i < bankInfoList.length; i++){
        var opt = document.createElement("option");
        opt.value = bankInfoList[i].accountName;
        opt.innerHTML = bankInfoList[i].accountName;    
        debitDrop.appendChild(opt);
    }
    var submit = document.getElementById("submitD");
    debitDrop.onchange = changeSelect;
    if (document.getElementById("debitSelec").value === "")
        submit.disabled = true;
    submit.onclick = submitAmount;
    
}
window.onload = attachEvent;
