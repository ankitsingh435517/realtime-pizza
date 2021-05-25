
//logic for get , post
// const Cart = require('../../../models/cart')

function cartController(){
    return {
        index(req,res){
            res.render('customers/cart')
        },
        update(req,res) {
            // let cart = {
            //     items: {
            //         pizzaId: { item: pizzaObject, qty: 0 },
            //     },
            //     totalQty: 0,
            //     totalPrice: 0
            // }

//for the first time creating cart and adding basic obect structure       
            if(!req.session.cart) {
                req.session.cart = {
                    items : {},
                    totalQty: 0,
                    totalPrice: 0
                }
            }
            let cart = req.session.cart

           
            //check if item does not exist in cart

            if(!cart.items[req.body._id]){
                cart.items[req.body._id] = {
                    item: req.body,
                    qty:1
                }
                cart.totalQty = cart.totalQty + 1,
                cart.totalPrice = cart.totalPrice + req.body.price
            }else{
                cart.items[req.body._id].qty = cart.items[req.body._id].qty + 1
                cart.totalQty = cart.totalQty + 1,
                cart.totalPrice = cart.totalPrice + req.body.price
            }




             return res.json({ totalQty: req.session.cart.totalQty })
        }
        

        //   delete(req,res){
                
        //         if(req.session.cart){
        //             if(req.session.cart.items[req.body._id].qty == '1'){
        //             req.session.cart = {
        //                 items : {},
        //                 totalQty: req.session.cart.totalQty - 1,
        //                 totalPrice: req.session.cart.totalPrice - req.body.price
        //             }
        //         }else{
        //             req.session.cart = {
        //                 items : req.session.cart.items,
        //                 totalQty: req.session.cart.totalQty - 1,
        //                 totalPrice: req.session.cart.totalPrice - req.body.price
        //             }
        //         }
                 
        //         return res.json({ totalQty: req.session.cart.totalQty })
        //     }     
        // }
    }
}



module.exports = cartController
