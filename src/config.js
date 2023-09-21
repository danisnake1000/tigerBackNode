import {config} from "dotenv"

config()

export const PORT = process.env.PORT || 3000
export const DB_USER = process.env.DB_USER || "root"
export const DB_PASSWORD = process.env.DB_PASSWORD || "root"
export const DB_DATABASE = process.env.DB_DATABASE || "nodejs"
export const DB_HOST = process.env.DB_HOST || "localhost"
export const DB_PORT = process.env.DB_PORT || 3306


export const AWS_BUCKET_NAME = process.env.AWS_BUCKET_NAME
export const AWS_BUCKET_REGION = process.env.AWS_BUCKET_REGION
export const AWS_PUBLIC_KEY = process.env.AWS_PUBLIC_KEY
export const AWS_SECRET_KEY = process.env.AWS_SECRET_KEY
 console.log(AWS_BUCKET_NAME);