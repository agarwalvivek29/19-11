const { Schema } = require("mongoose");

const nftSchema = new Schema({
    tokenId : {
        type : String,
        require : true
    },
    owner : {
        type : String,
        require : true
    },
    history : {

    }
});