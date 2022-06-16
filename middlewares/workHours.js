


exports.workHours = async(req,res,next)=>{
    
    const date = new Date(Date.now())
    const d = date.getDay()
    const h = date.getHours()
    try {
        if ( d >=1 && d<=5 ) {
            if ( h>=9 && h<=17){
                return res.status(200).send({msg:'welcome'})
            }
            else{
                res.status(400).send({msg:'We Are Closed, We are only available during working hours (Monday to Friday,  from 9 to 17)'})
            }
        }else{
            res.status(400).send({msg:'We Are Closed, We are only available during working hours (Monday to Friday,  from 9 to 17)'})
        }
        next()
    } catch (error) {
        return res.status(500).send({error:error})
    }
}