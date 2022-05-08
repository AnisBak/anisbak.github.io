class BankAccount {
    #accountName;
    #deposit;

    static bankInfoList = [];
    static index = 0;
    static s = "";

    constructor(accountName, deposit) {
        this.#accountName = accountName;
        this.#deposit = deposit;

    }
    toJSON() {
        return {
            "accountName": this.#accountName,
            "balance": this.#deposit
        }

    }


    static createAccount() {

        var accountName = document.getElementById("accountName").value;
        var deposit = document.getElementById("deposit").value;
        BankAccount.bankInfoList[BankAccount.index] = new BankAccount(accountName, deposit).toJSON();

        BankAccount.s += "Account name: " +
            BankAccount.bankInfoList[BankAccount.index].accountName +
            " Balance: " + BankAccount.bankInfoList[BankAccount.index].balance + "\n";
        BankAccount.index++;
        document.getElementById("textArea").value = BankAccount.s;
        //document.getElementById("textArea").value = JSON.stringify(BankAccount.bankInfoList);
        sessionStorage.setItem("list", JSON.stringify(BankAccount.bankInfoList));

    }

}
function openDebit() {

    window.open("debit.html");

}
function openDeposit() {
    window.open("deposit.html");
}

function attachEvents() {
    var x = "";
    var button = document.getElementById("newAccount");
    var depositBtn = document.getElementById("depositButton");
    var debitBtn = document.getElementById("debitButton");
    button.onclick = BankAccount.createAccount;
    debitBtn.onclick = openDebit;
    depositBtn.onclick = openDeposit;
    //document.getElementById("textArea").value = sessionStorage.getItem("list");
    var list = JSON.parse(sessionStorage.getItem("list"));
    for (let i = 0; i < list.length; i++) {
        x += "Account name: " +
            list[i].accountName +
            " Balance: " + list[i].balance + "\n";

    }
    document.getElementById("textArea").value = x;
}


window.onload = attachEvents;