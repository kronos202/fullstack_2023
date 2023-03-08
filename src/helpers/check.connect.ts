import mongoose from "mongoose";
import os from 'os'
import process from 'process'

const _SECOND = 5000

//count connect 
const countConnect = () => {
    const numConnection = mongoose.connections.length

    console.log(`Number of connections:: ${numConnection}`);

}
//check over load
const checkOverload = () => {
    setInterval(() => {
        const numberConnection = mongoose.connections.length
        const numCores = os.cpus().length
        const memoryUsage = process.memoryUsage().rss

        //example maximum number of connections based on number osf cores
        const maxConnection = numCores * 5
        console.log(`Active connecions:: ${numberConnection}`);
        console.log(`Memory usage:: ${memoryUsage / 1024 / 1024} MB`);


        if (numberConnection > maxConnection) {
            console.log(`Connection overload detected`);

        }


    }, _SECOND)
}

export { countConnect, checkOverload }