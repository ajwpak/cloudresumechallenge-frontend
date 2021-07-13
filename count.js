fetch("https://vc9e04wb19.execute-api.us-west-1.amazonaws.com")
    .then(response => response.json())
    .then(data => document.getElementById("views").innerHTML = "Views: " + data)
    .catch(error => console.error('Error:', error))
