module.exports = app => {
  const tutorials = require("../controllers/tutorial.controller.js");
  const tracks = require("../controllers/track.controller.js")
  const artist = require('../controllers/artist.controller.js')

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/tutorial", tutorials.create);

  // Retrieve all Tutorials
  router.get("/tutorial", tutorials.findAll);

  // Retrieve all published Tutorials
  router.get("/tutorial/published", tutorials.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/tutorial/:id", tutorials.findOne);
  // Retrieve a single Tutorial with id
  router.get("/arttutorial/:id", tutorials.artfindOne);
  // Retrieve a single Tutorial with id
  router.get("/tracktutorial/:id", tutorials.trackfindOne);
  // Update a Tutorial with id
  router.put("/tutorial/:id", tutorials.update);
  
  // Delete a Tutorial with id
  router.delete("/tutorial/:id", tutorials.delete);

  // Delete all Tutorials
  router.delete("/tutorial", tutorials.deleteAll);
//----------------------------------------------------------------------------------------------------------------------
// Create a new track
router.post("/track", tracks.create);

// Retrieve all tracks
router.get("/track", tracks.findAll);

// Retrieve all published tracks
router.get("/track/published", tracks.findAllPublished);

// Retrieve a single track with id
router.get("/track/:id", tracks.findOne);

// Update a track with id
router.put("/track/:id", tracks.update);

// Delete a track with id
router.delete("/track/:id", tracks.delete);

// Delete all tracks
router.delete("/track", tracks.deleteAll);  
//------------------------------------------------------------------------------------------------------------------
// Create a new track
router.post("/artist", artist.create);

// Retrieve all artists
router.get("/artist", artist.findAll);

// Retrieve all published artists
router.get("/artist/published", artist.findAllPublished);

// Retrieve a single artist with id
router.get("/artist/:id", artist.findOne);

// Update a artist with id
router.put("/artist/:id", artist.update);

// Delete a artist with id
router.delete("/artist/:id", artist.delete);

// Delete all artists
router.delete("/artist", artist.deleteAll);  

  app.use('/api', router);
};
