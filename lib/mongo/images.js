import clientPromise from ".";
let client;
let db;
let images;

async function init(){
    console.log("init called...")
    if(db) return
    try{
        client = await clientPromise
        db = await client.db()
        // console.log(db)
        images = await db.collection('photo_gallery')
        // console.log(images)
    }
    catch(error)
    {
        throw new Error("Failed to establish connection to database" + error);
    }
}


(async ()=>{
    await init()
})();

// Gallery Photos
export async function getPhotos(){
    try{
        if(!images){
            await init();
        }
        const result = await images.find().limit(20).map(img=>({ ...img, _id: img._id.toString() })).toArray()
        console.log( result );
        return { photos : result };
    }
    catch(error){
        return { error: error }
    }
}