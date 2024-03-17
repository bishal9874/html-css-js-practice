function eligiblitiesCheck() {
    let name = document.getElementById('name').value
    let aadharno = parseInt(document.getElementById('aadharno').value)
    let address = document.getElementById('address').value
    let pin = parseInt(document.getElementById('pin').value)
    let age = parseInt(document.getElementById('age').value)

    let result;
    if (age >= 18) {
        result = "voter Eligible"
    } else {
        result = "voter not eligible"
    }

    display(name, aadharno, address, pin, age, result)
}
function display(name, aadharno, address, pin, age, result) {

    document.getElementById('resultname').innerText = "Name: " + name
    document.getElementById('resultaadhar').innerText = "Aadhaar no: " + aadharno
    document.getElementById('resultaddress').innerText = "Address : " + address
    document.getElementById('resultpin').innerText = "pincode : " + pin
    document.getElementById('resultage').innerText = "Age: " + age
    document.getElementById('resultEligibility').innerText = "Status : " + result
}
var count = 0;
var subtotal = 0;
var price = 599.99
function increment() {
    document.getElementById('counter').innerText = ++count;
    subtotal = price * count;
    document.getElementById('price').innerText = "$" + subtotal.toFixed(2);
    console.log(count);
    console.log(subtotal);
}
function decrement() {

    if (count <= 0) {
        count = 0
    } else {
        document.getElementById('counter').innerText = --count;
        subtotal = subtotal - price;
        document.getElementById('price').innerText = "$" + subtotal.toFixed(2);
    }
}
