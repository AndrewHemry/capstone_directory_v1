const express = require("express")

let router = new express.Router()

let branchController = require("../controller/branchController")

//Create Company Branch /branch -- Company ID as part of the body
router.post("/company/:company_id/branch", branchController.createCompanyBranch)

//Update a Company Branch Name /company/:company_id/branch/:branch_id
router.patch("/company/:company_id/branch/:branch_id", branchController.updateCompanyBranch)

//Delete a Company Branch /company/:company_id/branch/:branch_id
router.delete("/company/:company_id/branch/:branch_id", branchController.deleteCompanyBranch)

//List a Company Branch GET /company/:company_id/branch/:branch_id
router.get("/company/:company_id/branch/:branch_id", branchController.showCompanyBranch)

//LIST all Branches GET /company/:company_id/branch
router.get("/company/:company_id/branch", branchController.listCompanyBranches)

module.exports = router;
