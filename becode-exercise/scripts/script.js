// Link to DOM - create an array containing each carousel slide
let car = document.querySelector('.carousel-inner')
let carChildren = car.children
// Get data from API
fetch("https://project-622bb.firebaseio.com/BeCode.json")
.then((response)=>{
    return response.json();
})
.then((data)=>{
    // Cycle through the data fetched and insert data into DOM
    for (let i = 0 ; i <= carChildren.length ; i++){
        let c = carChildren[i].childNodes
        c[3].childNodes[0].src = String(data[i].image)
        c[5].childNodes[1].innerHTML = data[i].profile.firstname + ' '+data[i].profile.lastname
        c[5].childNodes[3].innerHTML = data[i].history + `<br/><a href="${data[i].wiki}">Wikipedia Profile</a>`
    }
})
.catch((err)=>{
    throw err;
})