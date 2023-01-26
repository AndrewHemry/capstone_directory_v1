// CREATE COMPANY BRANCH - createCompanyBranch 
// UPDATE COMPANY BRANCH - updateCompanyBranch
// DELETE COMPANY BRANCH - deleteCompanyBranch
// LIST SPECIFIC COMPANY BRANCH - showCompanyBranch
// LIST ALL COMPANY BRANCHES - listCompanyBranches
const db = require("../db")

const createCompanyBranch = function(req, res){
    // This is the command to create a new company branch in the "company_branch" table
    // SQL: INSERT INTO company_branch(branch_name) VALUES (?)

    let company_id = req.params.company_id
    let branch_name = req.body.branch_name

    // ADD JOIN ON INSERT FOR AVAILABLE_COMPANY_RELATION
    let sqlCommand = "INSERT INTO company_branch(company_id, branch_name) VALUES (?, ?)"
    let params = [company_id, branch_name]

    db.query(sqlCommand, params, function(err, results){
        if(err){
            console.log("Failed to create a new company branch", err)
            res.sendStatus(500)
        } else {
            res.sendStatus(202)
        }
      
    })
}

const updateCompanyBranch = function(req, res){
    // This is the command to update an existing branch name
    // SQL: UPDATE company_branch SET branch_name = ? where company_id = ? and branch_id = ?

    let company_id = req.params.company_id
    let branch_id = req.params.branch_id

    let branch_name = req.body.branch_name

    let sqlCommand = "UPDATE company_branch SET branch_name = ? WHERE company_id = ? and branch_id = ?"
    let params = [branch_name, company_id, branch_id]

    db.query(sqlCommand, params, function(err, results){
        if(err){
            console.log("Failed to updated branch", err)
            res.sendStatus(500)
        } else {
            res.sendStatus(202)
        }
    })
}

const deleteCompanyBranch = function(req, res){
    // This is the command to delete an existing company branch
    // SQL: DELETE FROM company_branch where company_id = ? and branch_id = ?

    let company_id = req.params.company_id
    let branch_id = req.params.branch_id

    let sqlCommand = "DELETE FROM company_branch WHERE company_id = ? and branch_id = ?"
    let params = [company_id, branch_id]

    db.query(sqlCommand, params, function(err, results){
        if(err){
            console.log("Failed to delete company branch", err)
            res.sendStatus(500)
        } else {
            res.sendStatus(200)
        }
    })
}

const showCompanyBranch = function(req, res){
    // This is the query to list out the company branch and it's specific info
    // SQL: Select company_id, branch_id, branch_name WHERE company_id = ? and branch_id = ?

    let company_id = req.params.company_id
    let branch_id = req.params.branch_id

    let sqlCommand = "Select company_id, branch_id, branch_name FROM company_branch WHERE company_id = ? and branch_id = ?"
    let params = [company_id, branch_id]

    db.query(sqlCommand, params, function(err, results){
        if(err){
            console.log("Failed to fetch company branch", err)
            res.sendStatus(500)
        } else {

            if(results.length == 0){
                res.json(null)
            } else {
                res.json(results[0])
            }
        }
    })
}

const listCompanyBranches = function(req, res){
    // This is the query to list all available company branches
    // SQL: Select branch_id, branch_name WHERE company_id = ?

    let stringID = req.params.company_id
    let company_id = parseInt(stringID)

    let sqlCommand = "Select branch_id, branch_name FROM company_branch WHERE company_id = ?"
    let params = [company_id]

    db.query(sqlCommand, params, function(err, results){
        if(err){
            console.log("Failed to fetch company branches", err)
            res.sendStatus(500)
        } else {
            res.json(results)
        }
    })

}

module.exports = {
    createCompanyBranch, updateCompanyBranch, deleteCompanyBranch, listCompanyBranches, showCompanyBranch
}