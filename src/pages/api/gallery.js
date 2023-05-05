import { getPhotos } from "../../../lib/mongo/images";

const handler = async (req,res)=>{
    if(req.method==="GET")
    {
        try{
            const { photos, error } = await getPhotos();
            if(error) throw new Error(error);

            return res.status(200).json({ photos })
        }
        catch(error){
            return res.status(500).json({
                error: error.message
            })
        }
    }
    res.setHeader('Allow',['GET'])
    res.status(425).end(`method ${req.method} is not allowed.`)
}

export default handler;