const express = require("express")

let router = new express.Router()

let companyController = require("../controller/companyController")

//Create Company Branch /branch -- Company ID as part of the body
router.post("/company", companyController.createCompany)

//Update a Company Name /company/:company_id/branch/:branch_id
router.patch("/company/:company_id", companyController.updateCompany)

// List Companies (Internal Only?)
router.get("/company", companyController.listCompanies)

module.exports = router;
