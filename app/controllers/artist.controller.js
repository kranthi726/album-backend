const db = require('../models')
const Artist = db.artist
const Op = db.Sequelize.Op;

//Create and Save New artist
exports.create = (req, res) =>{
    if(!req.body.title){
        res.status(400).send({
            message: "Can't be empty"
        })
        return
    }
    //Create the artist
    const artist = {
        title:req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    }
    //save the artist
    Artist.create(artist)
    .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the artist."
        });
      });

}

exports.findAll = (req, res)=>{
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
    Artist.findAll({where:condition})
    .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving artist."
        });
      });
}

exports.findOne =(req,res)=>{
    const id = req.params.id;
    Artist.findByPk(id)
    .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find artist with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving artist with id=" + id
        });
      });
}

exports.update = (req, res) =>{
    const id = req.params.id;
    Artist.update(req.body,{
        where: { id: id }
    }).then(num => {
        if (num == 1) {
          res.send({
            message: "artist was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update artist with id=${id}. Maybe artist was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating artist with id=" + id
        });
      });
}
// Delete a artist with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Artist.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Artist was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete artist with id=${id}. Maybe artist was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Track with id=" + id
        });
      });
  };
  // Delete all Tracks from the database.
exports.deleteAll = (req, res) => {
    Artist.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} artist were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all artist."
        });
      });
  };
  
  // find all published Tutorial
  exports.findAllPublished = (req, res) => {
    Artist.findAll({ where: { published: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving artists."
        });
      });
  };
  