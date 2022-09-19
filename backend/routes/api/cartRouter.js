const express = require('express')
const cartRouter = express.Router()

const MyCart = require('../../models/cart')

const { isAuth } = require('../../utils')

// POST cart to dATABASE
cartRouter.post('/', isAuth, async (req, res) => {
console.log(req.user)
    let product = {
        productId: req.body.product._id,
        name: req.body.product.name,
        price: req.body.product.price,
        image: req.body.product.image,
        quantity: req.body.qty,
    }

    try {
        let userCart = await MyCart.findOne({
            user: req.user.id
        })
        if (userCart) {
            let check =  userCart.products.find(x => x.productId == req.body.product._id)
  
            if (!check) {
                userCart = await MyCart.findOneAndUpdate({
                    user: req.user.id,
            
                }, {
                    $push: {
                        products: product,

                    }, // to push more objects to the products array
                }, {
                    new: true
                })
                console.log(userCart,'savecart router')
                return res.json(userCart)

            }  else {
                userCart = await MyCart.findOneAndUpdate({
                        user: req.user.id,
                        "products.productId": req.body.product._id
                    }, {
                        $inc: {
                            // to increase the quantity of the product
                            "products.$.quantity": req.body.qty
                        },
                    }, {
                        new: true
                    })
                    .exec((err, response) => {
                        if (err) {
                            console.log(err)
                            return res.json(err)
                        } else {
                            console.log(response, 'res')
                            return res.json(response)
                        }
                    })
            }
        }  else {
            userCart = new MyCart({
                user: req.user.id,
                products: [product],
            })
             const createdCart =await userCart.save()
            return res.status(200).json(createdCart)
        }
    } catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
})

// to increase the qunntity 
cartRouter.put('/incQuantity', isAuth, async (req, res) => {

    try {
        let userCart = await MyCart.findOne({
            user: req.user.id
        })
        if (userCart) {
            userCart = await MyCart.findOneAndUpdate({
                user: req.user.id,
                "products.productId": req.body.productId
            }, {
                $inc: {
                    "products.$.quantity": 1
                },
            }, {
                new: true
            }).exec((err, response) => {
                if (err) {
                    console.log(err)
                    return res.json(err)
                } else {
                    return res.json(response)
                }
            })
        }
        console.log(userCart, "after")

    } catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }

})


// to increase the qunntity 
cartRouter.put('/decQuantity', isAuth, async (req, res) => {

    try {
        let userCart = await MyCart.findOne({
            user: req.user.id
        })
        if (userCart) {
            userCart = await MyCart.findOneAndUpdate({
                user: req.user.id,
                "products.productId": req.body.productId
            }, {
                $inc: {
                    "products.$.quantity": -1
                },
            }, {
                new: true
            }).exec((err, response) => {
                if (err) {
                    console.log(err)
                    return res.json(err)
                } else {
                    console.log(response, 'res')
                    return res.json(response)
                }
            })
        }
    } catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
})


// GET cart by user Id
cartRouter.get('/:id', isAuth, async (req, res) => {
const userId =req.params.id

    try {
        const myCart = await MyCart.findOne({
            user:userId
        })

        if (myCart) {
            return res.status(200).json(myCart)
        } else{
            return res.status(200).json([])
        }
    } catch (error) {
        console.log(error)
        return res.json(error)
    }
})


// DELETE ITEM from the cart
cartRouter.delete('/del/:id', isAuth, async (req, res) => {

    const productId = req.params.id

    try {
        let userCart = await MyCart.findOne({
            user: req.user.id
        })
 
        if (userCart) {
      
            userCart = await MyCart.findOneAndUpdate({
                user: req.user.id,
            }, {
                $pull: {
                    'products': {
                        productId: productId
                    }
                },
            }, {
                new: true
            }).exec( async (err, response) => {
                if (err) {
                    return res.json(err)
                } else {
                   if (!response.products.length){
                    await MyCart.deleteOne({use:req.user.id})
                    return res.json()
                   } else{
                    return res.json(response)
                   }     
                }
            })
        }
    } catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }

})


//Delet cart
cartRouter.delete('/:id',isAuth, async (req, res) => {
    try {
        await MyCart.findOneAndRemove({
            id: req.params.id
        })
            res.json()
    } catch (err) {
        console.log(err)
        return res.json(err.message)
    }
})


// Delete All carts
cartRouter.delete('/',isAuth, async (req, res) => {
    try {
            await MyCart.deleteMany()
            res.json({message:"successfuly delete all carts"})
    
    } catch (err) {
        console.log(err)
        return res.json(err.message)
    }
})

module.exports = cartRouter