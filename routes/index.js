const express = require('express');
var router = express.Router();

// Mounting the userRouter under the '/userRouter' path prefix
router.use('/userRouter', require('./userRouter'))
//router.use('/admin', require('./adminRouter'))

// // Mounting the adminRouter under the '/router' path prefix
router.use('/adminRouter', require('./adminRouter'))
router.use("/superAdminRouter", require('./superAdminRouter'))

// router.use('/subAdminRouter', require('./subAdminRouter'))
// // Exporting the router instance to be used by other parts of the application

module.exports = router
