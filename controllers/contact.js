const Contact = require("../models").Contact;
const Sms = require("../models").Sms;

const ContactController = {
    create(req,res){
         Contact.create(req.body).then(()=>{
            return res.status(201).send({message:'created'});
        }).catch(()=>{
            return res.status(400).send({message:'not created'});
        });
    },
    update(req,res){
        Contact.findOne({
                where:{id:req.params.id}
            }
        ).then(contact=>{
            if(contact){
                return contact.update(req.body).then(()=>{
                    return res.status(200).send({message:'contact updated successfully'});
                }).catch((error)=>{
                    return res.status(400).send({message:error});
                })
            }
        }).catch(()=>{
            return res.status(404).send({message:'contact not found'});
        });

    },
    delete(req,res){
        Contact.findOne({
                where:{id:req.params.id}
            }
        ).then(contact=>{
            contact.destroy().then(()=>{
                return res.status(200).send({message:'contact deleted successfully'});
            }).catch(()=>{
                return res.status(400).send({message:error});
            });
        }).catch(()=>{
            return res.status(404).send({message:'contact not found'});
        });
    },
    getOne(req,res){
        Contact.findOne({
            where:{id:req.params.id},
            include:[ { model: Sms, as: 'received_messages' }, { model: Sms, as: 'sent_messages' } ]
        }).then(contacts=>{
            return res.status(200).send({contacts});
        }).catch((error)=>{
            return res.status(400).send({message:'an error occurred'+error});
        })
    },
    getAll(req,res){
        Contact.findAll({
            include:[ { model: Sms, as: 'received_messages' }, { model: Sms, as: 'sent_messages' } ]
        }).then(contacts=>{
            return res.status(200).send({contacts});
        }).catch((error)=>{
            return res.status(400).send({message:'an error occurred'+error});
        })
    }
};

module.exports = ContactController;
