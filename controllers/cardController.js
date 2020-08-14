const cardServices = require('../services/cardServices');
const Utils = require('../utils')

module.exports = {
  create: async(req, res) => {
    console.log(req.files)
    if(req.files){
      const { photo } = req.files;
      const upload = await Utils.uploadFile(photo.tempFilePath);
      if(upload) req.body.photo = upload.url;
    }
    try {
      const card = await cardServices.create(req.body);
      res.status(201).send({card});
    } catch (error) {
      res.status(409).send({error});
    }
  },
  getCards: async(req, res)=>{
    try {
      const cards = await cardServices.getCards();
      res.status(200).send({cards});
    } catch (error) {
      res.status(404).send(console.log(error));
    }
  },
  getCard: async(req, res)=>{
    try {
      const card = await cardServices.getCard(req.params.id);
      res.status(200).send({cards});
    } catch (error) {
      res.status(404).send({error});
    }
  },
  updateCard: async(req, res)=>{
    if(req.files){
      const { photo } = req.files;
      const upload = await Utils.uploadFile(photo.tempFilePath);
      if(upload) req.body.photo = upload.url;
    }
    try {
      const card = await cardServices.getCard(req.params.id);
      const modifiedUser = await cardServices.updateCard(card, req.body);
      res.status(200).send({card: modifiedCard});
    } catch (error) {
      res.status(404).send({error});
    }
  },
  deleteCard: async(req, res)=>{
    try {
      const card = await cardServices.getCard(req.params.id);
      await cardServices.updateCard(card, {is_active: false});
      res.status(200).send({message: 'Archivo eliminado'});
    } catch (error) {
      res.status(404).send({error});
    }
  },
}