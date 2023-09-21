import {S3Client, PutObjectCommand,ListObjectsCommand,GetObjectCommand} from "@aws-sdk/client-s3"
import {AWS_BUCKET_NAME,AWS_BUCKET_REGION,AWS_PUBLIC_KEY, AWS_SECRET_KEY} from "./src/config.js"
import fs from "fs"
import {getSignedUrl} from "@aws-sdk/s3-request-presigner"


const client = new S3Client({
    region: AWS_BUCKET_REGION,
    credentials:{
        accessKeyId:AWS_PUBLIC_KEY,
        secretAccessKey:AWS_SECRET_KEY,
    }
})

export async function uploadFile(file){
    const stream = fs.createReadStream(file.tempFilePath)
    const uploadParam = {
        Bucket: AWS_BUCKET_NAME,
        Key:file.name,
        Body: stream
       
    }
  

 const comand = new PutObjectCommand(uploadParam)
  return await client.send(comand)
 

}

export async function getFiles(){
    const comand = new ListObjectsCommand(
    {
        Bucket: AWS_BUCKET_NAME,
    })
    return  await client.send(comand)
}

export async function getFile(fileName){
        const comand = new GetObjectCommand({
            Bucket: AWS_BUCKET_NAME,
            Key: fileName,
        })
        return await client.send(comand)
}

export async function dowloadFile(fileName){
        const comand = new GetObjectCommand({
            Bucket: AWS_BUCKET_NAME,
            Key: fileName,
        })
        const result = await client.send(comand)
        result.Body.pipe(fs.createWriteStream(`./src/images/${fileName}`))

}

export async function getFileUrl(fileName){
    const comand = new GetObjectCommand({
        Bucket: AWS_BUCKET_NAME,
        Key: fileName,
    })
    return await getSignedUrl(client,comand, {expiresIn:3600})
}



