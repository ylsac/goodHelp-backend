const express = require('express')
const router = require('express').Router()

router.use('/', require('./postagem'))

module.exports = router