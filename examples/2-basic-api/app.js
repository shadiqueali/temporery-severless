const result= document.querySelector('.result')


const fetchData = async () => {
    try {
        const {data} = await axios.get('https://temp-serverless.netlify.app/api/2-basic-api')
        const produtcts = data.map((product)=>{
            const {image:{url},name,price} = product
            return ` <article class="product">
            <img
              src="${url}"
              alt="${name}"
            />
            <div class="info">
              <h5>${name}</h5>
              <h5 class="price">$${price}</h5>
            </div>
          </article> `
        }).join('')
        result.innerHTML =produtcts
    } catch (error) {
        result.innerHTML =`<h4>there was an error, try again</h4>`
    }
}

fetchData()
