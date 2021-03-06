const db = require('../models')
const Track = db.track
const Op = db.Sequelize.Op;

//Create and Save New Track
exports.create = (req, res) =>{
    if(!req.body.title){
        res.status(400).send({
            message: "Can't be empty"
        })
        return
    }
    //Create the Track
    const track = {
        title:req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false,
        album:req.body.album,
    }
    //save the track
    Track.create(track)
    .then(data => {
        res.send(data);
        alert(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Track."
        });
      });

}

exports.findAll = (req, res)=>{
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
    Track.findAll({where:condition})
    .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Track."
        });
      });
}

exports.findOne =(req,res)=>{
    const id = req.params.id;
    Track.findByPk(id)
    .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Track with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Track with id=" + id
        });
      });
}

exports.update = (req, res) =>{
    const id = req.params.id;
    Track.update(req.body,{
        where: { id: id }
    }).then(num => {
        if (num == 1) {
          res.send({
            message: "Track was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Track with id=${id}. Maybe Track was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Track with id=" + id
        });
      });
}
// Delete a Track with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Track.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Track was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Track with id=${id}. Maybe Tutorial was not found!`
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
    Track.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Track were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Track."
        });
      });
  };
  
  // find all published Tutorial
  exports.findAllPublished = (req, res) => {
    Track.findAll({ where: { published: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };
  