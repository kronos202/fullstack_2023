import mongoose from 'mongoose'
import mongoConfig from '../configs/config.mongodb'
const { db: { host, name, port } } = mongoConfig

const connectString = `mongodb://${host}:${port}/${name}`;
class Database {
    private static _instance: Database
    constructor() {
        this.connect();

    }

    connect() {
        mongoose.connect(connectString, { maxPoolSize: 50 })
            .then(_ => console.log(`Connected Mongodb success`))
            .catch(err => console.log(`Error Connect!`));
    }

    static getInstance() {
        if (!Database._instance) {
            Database._instance = new Database();
        }
        return Database._instance;
    }
}

export const instanceMongodb = Database.getInstance();

