import * as functions from 'firebase-functions'
import * as express from 'express'
import { getQrCodes } from './controllers/entryController'
const app = express()

app.post('/', getQrCodes)

exports.qrcodeGen = functions.https.onRequest(app)
