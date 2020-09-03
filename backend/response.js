class response{
    constructor(data=null,errors = null){
        this.errors = errors;
        this.data = data;
    }

    success(res){
        return res.status(200).json({
            status:"success",
            data:this.data
        })
    }

    created(res){
        return res.status(201).json({
            status:"data saved",
            data:this.data
        })
    }   
    error500(res){
        return res.status(500).json({
            status:"error",
            errors:this.errors
        })
    }       
    error400(res){
        return res.status(400).json({
            status:"error",
            errors:this.errors
        })
    } 
    
    error404(res){
        return res.status(404).json({
            status:"not found",
            errors:this.errors
        })
    }   
}

module.exports = response;