document.getElementById('submitName').addEventListener("click", function(){ 
    let user = document.getElementById('name').value;
    if (!user) {
        alert("Please input your name!")
    }
    else {
        document.getElementById('landingPage').style.display = 'none';
        document.getElementById('secondPage').removeAttribute("style");
        document.getElementById('greeting').innerText = `Hello, ${user}`;
    }
})