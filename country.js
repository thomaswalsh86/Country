function getCountry() {
    var input = document.getElementById("input").value.trim();
    
    if (input === "") {
        document.getElementById("cy").innerText = "Please enter a country name.";
        return;

    }
    input = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();

    fetch(`https://countries-api-abhishek.vercel.app/countries/${input}`)
    .then(response => {
        if (!response.ok) {
            throw new Error("Country not found");
        }
        return response.json();
    })
    .then((data) => {
        document.getElementById("cy").innerText = "Country: " + data.data.name;
        console.log("Country is: " + data.data.name);
    })
    .catch(error => {
        document.getElementById("cy").innerText = "Error: " + error.message;
        console.error("Error fetching country:", error);
    });
}


document.getElementById("input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      getCountry();
      
    }
  });