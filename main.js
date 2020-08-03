const button = document.querySelector('button');



button.addEventListener('click',(e)=>{
  e.preventDefault()
  const getbored = async() =>{
    const response = await fetch('https://www.boredapi.com/api/activity/')

    if (response.status != 200) {
        throw new Error('cant fetch data')
    }

    const data = await response.json();

    return data.activity
}

getbored().then((data)=>{
    
    const h3 = document.querySelector('h3')
    h3.innerText = data
}).catch((err)=>{console.log(err)})

})


