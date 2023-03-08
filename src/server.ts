import { app } from "./app"
import mongoConfig from './configs/config.mongodb'

const { appConfig: { port } } = mongoConfig

const PORT = port || 8080

app.listen(PORT, () => {
    console.log(`WSV eCommerce start with ${PORT}`);
})