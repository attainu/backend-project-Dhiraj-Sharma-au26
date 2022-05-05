


let addToCart = document.querySelectorAll('.add-to-cart');
let cartCounter = document.querySelector('#cartCounter');
let deleteCartItem = document.querySelectorAll('#deleteCartItem')


function updatecart(data){
    url = '/updatecart'
    params = {
        method : 'post',
        headers : {
            'content-type' : 'application/json'
                
        },
        body : JSON.stringify(data)
    }


    fetch(url,params).then(response=>response.json(),
    cartCounter.innerText = res.data.totalQty)
    .then(data=>{console.log(data)})

}

function deleteCart(data){
    url = '/deleteCartItem'
    data = '{"_id":"'+data+'"}'
    params = {
        method : 'POST',
        headers : {
            'content-type' : 'application/json'                
        },

        body : data
    }


    fetch(url,params).then((response)=> {return response.json()})
    .then((data)=>{console.log(data)})

    
}


addToCart.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        let data = JSON.parse(btn.dataset.tool);
       
        updatecart(data)
    })

})

deleteCartItem.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        let data = JSON.parse(btn.dataset.item_id);
       
        deleteCart(data)
        
    })

})






