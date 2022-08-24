// Add your code here
function submitData(name, email) {

   return fetch("http://localhost:3000/users", {
        method: 'POST',
        headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
        },
        body: JSON.stringify( {
            name,
            email
        })
    })
    .then(response => response.json())
    .then(response => {
            document.body.innerHTML = `<p>${response.id}<p>`
    })
    .catch(message => {
        // console.log("error", message)
            document.body.innerHTML = `<p> ${message}<p>`
    })
}