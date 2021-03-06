const express = require('express');
const Promise = require('promise');

const TeamModel = require('../models/team');

module.exports = {
  list: (req) => {

    return new Promise((resolve, reject) => {

      TeamModel.list()
      .then((doc) => {
        resolve(doc)
      })
      .catch((err) => {
        reject(err)
      })
    })
  },

  listManagerOf: (req) => {
    return new Promise((resolve, reject) => {

      TeamModel.listManagerOf(req.params.manager_id)
      .then((doc) => {
        resolve(doc)
      })
      .catch((err) => {
        reject(err)
      })
    })
  },
  get: (team_id) => {

    return new Promise((resolve, reject) => {

      TeamModel.get(team_id)
      .then((doc) => {
        if(doc) {
          resolve(doc)
        } else {
          resolve(null)
        }
      })
      .catch((err) => {
        reject(err)
      })
    })
  },
  create: (req) => {

    let schema = Object.assign({
      name: '',
      mission: '',
      vision:'',
      companyId: '',
      members: [],
      managers: []
    }, req.body)

    return new Promise((resolve, reject) => {
      TeamModel.create(schema)
      .then((doc) => {
        resolve({
          created: !!doc,
          doc
        })
      })
      .catch((err) => {
        reject(err)
      })
    })
  },
  update: (id, req) => {

    let schema = Object.assign({
      field1: 'updated5',
      field2: 'updated5'
    }, req.body)

    return new Promise((resolve, reject) => {
      TeamModel.update(id, schema)
      .then((doc) => {
        resolve({
          updated: true,
          doc
        })
      })
      .catch((err) => {
        reject(err)
      })
    })
  },
  delete: (id) => {
    return new Promise((resolve, reject) => {
      TeamModel.delete(id)
      .then((doc) => {
        resolve({
          deleted: true,
          doc
        })
      })
      .catch((err) => {
        reject(err)
      })
    })
  }
}
