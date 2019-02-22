window.onload = ()=>{
    // Stocks DOM elements into variables
    const go : HTMLButtonElement = document.querySelector('#go')
    const inpu : HTMLInputElement = document.querySelector('#inp')
    const sug : HTMLDataListElement = document.querySelector('#suggest')
    let iframe : HTMLIFrameElement = document.querySelector('#frame')
    iframe.setAttribute['src']=""
    inpu.addEventListener('input',(e)=>{
        e.preventDefault()
        inpu.removeEventListener('input',this)
        setTimeout(()=>{
            let val = inpu.value;
            async function asyncData(val){
                let response = await fetch(`https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=${val}`)
                let data = await response.json()
                return data
            }
            let result = asyncData(val)
            result.then(data =>{
                for (let i=0 ; i < data[3].length;i++){
                    let opt = document.createElement('option')
                    opt.value = data[1][i]
                    sug.appendChild(opt)
                }
            })
            inpu.addEventListener('input',this)
        },500)
    })
    go.addEventListener('click', (e) => {
        e.preventDefault()
        let val = inpu.value;
        async function asyncData(val){
            let response = await fetch(`https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=${val}`)
            let data = await response.json()
            return data
        }
        let result = asyncData(val)
        result.then(data => iframe.setAttribute('src', data[3][0]))
    })
}

