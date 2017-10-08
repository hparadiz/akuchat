'use strict'

const path = require('path');

class akuchat {
    constructor() {
        this.express = require('express')();
        this.server = require('http').Server(this.express);
        this.io = require('socket.io')(this.server);

        this.server.on('error',this.handleServerError);
        
        this.server.listen(process.env.AKUCHAT_PORT);

        this.establishRouting();


        this.publicPath = path.resolve(__dirname + '/../public');
    }


    establishRouting() {
        this.express.get('/js/*', this.handleStatic.bind(this));
        this.express.get('/css/*', this.handleStatic.bind(this));
        this.express.get('/', this.handleIndex.bind(this));
    }

    handleIndex(req,res) {
        console.log('this');
        res.sendFile(__dirname + '/views/index.html')
    }

    handleStatic(req, res) {
        res.sendFile(this.publicPath+req.path);
    }

    handleServerError(e) {
        console.log(e);
    }
}

module.exports = new akuchat();