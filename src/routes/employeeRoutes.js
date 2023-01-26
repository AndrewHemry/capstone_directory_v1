const express = require("express")

let router = new express.Router()

let employeeController = require("../controller/employeeController")

//Create User POST /users
router.post("/company/:company_id/branch/:branch_id/employee", employeeController.createEmployee)

//Update a User PATCH /users/:id
router.patch("/company/:company_id/branch/:branch_id/employee/:id", employeeController.updateEmployee)

//Delete a User DELETE /users/:id
router.delete("/company/:company_id/branch/:branch_id/employee/:id", employeeController.deleteEmployee)

//List a User GET /users/:id
router.get("/company/:company_id/branch/:branch_id/employee/:id", employeeController.showEmployee)

//LIST all Users GET /users
router.get("/company/:company_id/branch/:branch_id/employee", employeeController.listEmployees)

module.exports = router;
