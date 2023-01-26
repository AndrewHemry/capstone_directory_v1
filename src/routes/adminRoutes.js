const express = require("express")

let router = new express.Router()

let adminController = require("../controller/adminController")

// To create a new Admin/Send them an invitation
router.post("/company/:company_id/invite", adminController.createAdmin)

module.exports = router;