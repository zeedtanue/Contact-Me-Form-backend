"use strict";
const mongoose = require('mongoose');

const Schema= mongoose.Schema;
const formSchema = new Schema({
        name         : {type: String, minLength: 4, maxlength: 100, required: true},
        email        : {type: String, minLength: 4, maxlength: 10, required: true},
        contact      : {type: Number, minLength: 4, maxlength: 15, required: true},
        message      : {type: String, minLength: 10, maxlength: 600, required: true},
                
}, { timestamps : { 
    createdAt   : 'created_at',
    updatedAt   : 'updated_at' 
}});

module.exports = mongoose.model('form', formSchema,'forms');