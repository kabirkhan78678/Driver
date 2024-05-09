const userController = require('./userController');
const adminController = require("./adminController")
const superAdminController = require('./superAdminController')
// const adminController = require('./adminController');
// const subAdminController = require('./subAdminController');

// Create an object to hold references to userController and adminController and subAdminController
const controller = {
    userController: userController,
    adminController: adminController,
    superAdminController: superAdminController
    // subAdminController:subAdminController
};

module.exports = controller;  
