const express = require('express')
const product = require('../models/product');


exports.hello = async (req,res,next)=>{
    res.send('hello my app');
}


exports.postuser = async (req,res,next)=>{
    const amount = req.body.amount;
    const description = req.body.description;
    const category = req.body.category;
    const data = await product.create({Amount:amount,description:description,category:category})
    res.status(200).json({userData:data})
}
exports.getuser = async (req,res,next)=>{
    const details = await product.findAll();
    res.status(200).json({userDetails:details})
}
exports.deleteuser = async(req,res,next)=>{
    const uid = req.params.id;
    await product.destroy({where:{id :uid}})

}

