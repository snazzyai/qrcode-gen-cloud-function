import * as functions from 'firebase-functions'
import * as express from 'express'
import { getQrCodes } from './controllers/entryController'
const app = express()

app.get('/', (req, res) => {
  return res.status(200).send('Success')   
})

app.post('/addNumericCodes', getQrCodes)

exports.qrcodeGen = functions.https.onRequest(app)
