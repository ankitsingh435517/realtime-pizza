
let addToCart = document.querySelectorAll('.add-to-cart')

// let removeToCart = document.querySelectorAll('.editCart-btn')

import axios from 'axios'
import Noty from 'noty'

let cartCounter = document.querySelector('#cartCounter')

// function deleteCart(pizza) {
//    axios.post('/delete-cart' , pizza).then(res =>{
//         cartCounter.innerText = res.data.totalQty
        
//         new Noty({
//             type: 'success',
//             timeout: 1000,
//             progressBar: false,
//             text: 'Item removed from cart'
//          }).show();
//     }).catch(err => {
//         new Noty({
//             type: 'error',
//             timeout: 1000,
//             progressBar: false,
//             text: 'something went wrong'
//         }).show();
// })

// }

// removeToCart.forEach((btn) => {
//    btn.addEventListener('click' , (e) =>{
//        let pizza = JSON.parse(btn.dataset.pizza)
//        deleteCart(pizza)     
//    })    
// })

function updateCart(pizza) {
   axios.post('/update-cart' , pizza).then(res =>{
           cartCounter.innerText = res.data.totalQty
           new Noty({
              type: 'success',
              timeout: 1000,
              progressBar: false,
              text: 'Item added to cart'
           }).show();       
    }).catch(err => {
            new Noty({
                type: 'error',
                timeout: 1000,
                progressBar: false,
                text: 'something went wrong'
            }).show();
    })
}

addToCart.forEach((btn) => {
   btn.addEventListener('click',(e) => {
       
       let pizza = JSON.parse(btn.dataset.pizza)
       updateCart(pizza)
   })
})