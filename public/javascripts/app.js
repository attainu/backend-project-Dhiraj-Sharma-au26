


let addToCart = document.querySelectorAll('.add-to-cart');
let cartCounter = document.querySelector('#cartCounter');


function updatecart(data){
    url = '/updatecart'
    params = {
        method : 'post',
        headers : {
            'content-type' : 'application/json'
                
        },
        body : JSON.stringify(data)
    }


    fetch(url,params).then(response=>response.json())
    .then(data=>{console.log(data)})

}


addToCart.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        let data = JSON.parse(btn.dataset.tool);
       
        updatecart(data)
    })

})

