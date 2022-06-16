

exports.home = async(req,res)=>{
    try {
        return res.status(200).send({msg:'Home Page'})
    } catch (error) {
        return res.status(500).send({error:error})
    }
}
exports.services = async(req,res)=>{
    try {
        return res.status(200).send({msg:'Our Services'})
    } catch (error) {
        return res.status(500).send({error:error})
    }
}
exports.contact = async(req,res)=>{
    try {
        return res.status(200).send('Contact us')
    } catch (error) {
        return res.status(500).send({error:error})
    }
}