import * as functions from 'firebase-functions'
import * as express from 'express'
import { generateQrCode } from './controllers/entryController'
const app = express()

app.get('/', (req, res) => {
  return res.status(200).send('Success')
})

app.post('/addNumericCodes', generateQrCode)

exports.qrcodeGen = functions.https.onRequest(app)
