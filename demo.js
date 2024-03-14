function ageChecker() {
    var age=parseInt(document.getElementById('age').value);
    var name=document.getElementById('name').value;
    var roll=document.getElementById('roll').value;
    var reg=document.getElementById('reg').value;
    var dept=document.getElementById('dept').value;
    if (age >= 18) {
        console.log("Eligible");
        document.getElementById('result').innerText = "Eligible"
    } else {
        console.log(" Not Eligible");
        document.getElementById('result').innerText = " Not Eligible"
    }
    display(age);
    personalDetailsPrint(name,roll,reg,dept);
}

function personalDetailsPrint(name,roll,reg,dept) {
    document.getElementById('displayName').innerText = name;
    document.getElementById('displayRoll').innerText = roll;
    document.getElementById('displayReg').innerText = reg;
    document.getElementById('displayDept').innerText = dept;
}

function display(dage) {
    document.getElementById('display').innerText = dage;
}


