const Sms = require('../models').Sms;
const Contact = require('../models').Contact;

const smsController = {
    create(req,res){
        Sms.create(req.body).then(()=>{
            return res.status(201).send({message:'created'});
        }).catch((error)=>{
            return res.status(400).send({message:'not created', 'error':error});
        });
    },
    update(req,res){
        Sms.findOne({
                where:{id:req.params.id}
            }
        ).then(sms=>{
            return sms.update(req.body).then(()=>{
                    return res.status(200).send({message:'contact updated successfully'});
            }).catch((error)=>{
                    return res.status(400).send({message:error});
            })
        }).catch(()=>{
            return res.status(404).send({message:'sms not found'});
        });

    },
    delete(req,res){
        Sms.findOne({
                where:{id:req.params.id}
            }
        ).then(sms=>{
            sms.destroy().then(()=>{
                return res.status(200).send({message:'sms deleted successfully'});
            }).catch(()=>{
                return res.status(400).send({message:error});
            });
        }).catch(()=>{
            return res.status(404).send({message:'sms not found'});
        });
    },
    getOne(req,res){
        Sms.findOne({
            where:{id:req.params.id},
            include:[ { model: Contact, as: 'sender' }, { model: Contact, as: 'receiver' } ]
        }).then(sms=>{
            return res.status(200).send({sms});
        }).catch((error)=>{
            return res.status(400).send({message:'an error occurred'+error});
        })
    },
    getAll(req,res){
        Sms.findAll({
            include:[ { model: Contact, as: 'sender' }, { model: Contact, as: 'receiver' } ]
        }).then(sms=>{
            return res.status(200).send({sms});
        }).catch((error)=>{
            return res.status(400).send({message:'an error occurred'+error});
        })
    }
};

module.exports = smsController;
