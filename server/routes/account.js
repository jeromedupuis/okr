const express = require('express');
const router  = express.Router();
const bodyParser  = require('body-parser');
const Promise = require('promise');

const accountController = require('../controllers/account.js');
const companyController = require('../controllers/company.js');

router.use(bodyParser.json());

module.exports = function(app) {

  //Login
  router.post('/account/login', (req, res) => {
    accountController.login(req)
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.send({
        err: err
      })
    })
  })

  //Crud
  router.post('/account/create', (req, res, next) => {
    accountController.create(req)
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.send({
        err: err
      })
    })
  })

  //cRud
  router.get('/account/list', (req, res, next) => {
    accountController.list(req)
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.send({
        err: err
      })
    })
  });

  //cRud
  router.get('/account/get/:id', (req, res, next) => {

    let withDojoMember = req.query.wdm || false
    let withDojoOwner = req.query.wdo || false

    accountController.get(req.params.id, withDojoMember, withDojoOwner)
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.send({
        err: err
      })
    })
  });

  router.put('/account/update/:id', (req, res, next) => {
    let id = req.params.id

    accountController.update(id, req)
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.send({
        err: err
      })
    })
  });

  //cruD
  router.delete('/account/delete/:id', (req, res, next) => {
    let id = req.params.id

    accountController.delete(id)
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.send({
        err: err
      })
    })
  });

  router.post('/account/update-password', (req, res, next) => {
    const user_id = req.body.user_id
    const old_password = req.body.old_password
    const new_password = req.body.new_password

    accountController.updatePassword(user_id, old_password, new_password)
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.send({
        err: err
      })
    })
  });

  app.use(router)
}
