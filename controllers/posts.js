const Post = require('../models/posts');
const {v4:uuidv4} = require('uuid');
const S3 = require('aws-sdk/clients/s3');
const s3 = new S3();
const BUCKET = process.env.BUCKET;

module.exports = {
    create,
    index
}

function create(req, res){

}

async function index(req, res){
    try{
        const posts = await (await Post.find({})).populate('user').exec();
        res.status(200).json({posts:posts});
    }catch(err){
        res.status(400).json({err});
    }
}