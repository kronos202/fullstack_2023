const dev = {
    appConfig: {
        port: process.env.DEV_APP_PORT || 3000,
    },
    db: {
        host: process.env.DEV_DB_HOST || '127.0.0.1',
        port: process.env.DEV_DB_PORT || 27017,
        name: process.env.DEV_DB_NAME || 'iotShopDev',
    },
}
const pro = {
    appConfig: {
        port: process.env.PRODUCT_APP_PORT || 3001,
    },
    db: {
        host: process.env.PRODUCT_DB_HOST || '127.0.0.1',
        port: process.env.PRODUCT_DB_PORT || 27017,
        name: process.env.PRODUCT_DB_NAME || 'iotShopProduct',
    },
}

const config = { dev, pro }

const env = process.env.NODE_ENV || 'dev'

const mongoConfig = env === 'dev' ? config.dev : config.pro


export default mongoConfig
