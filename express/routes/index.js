var fetch = require('node-fetch');
var express = require('express');
var router = express.Router();

/* GET home page. */
// https://pokeapi.co/api/v2/
// pokemon/bulbasaur
// pokemon/psyduck
router.get('/', async function(req, res) {

  const r = await fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur')
  const json = await r.json();



  res.render('index', { pokemon: json });
});

module.exports = router;
