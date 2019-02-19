// Link to DOM - create an array containing each carousel slide
let ind = document.querySelector('#carousel').firstElementChild
let car = document.querySelector('#carousel').lastElementChild
let insertRef = document.querySelector('.carousel-control-prev')
// Get data from API
fetch("https://project-622bb.firebaseio.com/BeCode.json")
.then((response)=>{
    return response.json();
})

.then((data)=>{
    for(i in data){
        ind.appendChild(document.createElement('li'))
        ind.children[i].setAttribute('data-target','"#carouselCaptions"')
        ind.children[i].setAttribute('data-slide-to',`${i}`)
        let di = document.createElement('div')
        di.className = 'carousel-item'
        if (i ==0){
            di.classList.add('active')
        }
        insertRef.before(di)
        let item = car.children[i]
        item.appendChild(document.createElement('div'))
        item.firstChild.classList.add('ima')
        item.children[0].appendChild(document.createElement('img'))
        item.children[0].children[0].setAttribute('src',data[i].image)
        item.appendChild(document.createElement('div'))
        item.children[1].className ='carousel-caption d-none d-md-block'
        item.children[1].appendChild(document.createElement('h5'))
        item.children[1].children[0].innerHTML=data[i].profile.firstname + ' '+data[i].profile.lastname
        item.children[1].appendChild(document.createElement('p'))
        item.children[1].children[1].innerHTML=data[i].history + `<br/><a href="${data[i].wiki}">Wikipedia Profile</a>`
        
    }
})

.catch((err)=>{
    throw err;
})
