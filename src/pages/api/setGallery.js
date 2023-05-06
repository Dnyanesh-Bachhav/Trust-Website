import { setPhotos } from "../../../lib/mongo/images";

const handler = async (req,res)=>{
    
    // POST
    if(req.method==="POST")
    {
        try{
            const { response, error } = setPhotos(req.body);
            if(error) throw new Error(error);

            return res.status(200).json({ response: response, request: "POST" })
        }
        catch(error)
        {
                return res.status(500).json({
                    error: error.message
                })
        }
            res.setHeader('Allow',['POST'])
            res.status(425).end(`method ${req.method} is not allowed.`)
        }
}

export default handler;