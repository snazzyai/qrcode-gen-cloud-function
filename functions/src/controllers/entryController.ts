import { Response } from 'express'
import { db } from '../config/firebase'
import generateQrCode from '../middlewares/qrCodeGenerator'
import * as functions from 'firebase-functions'

type EntryType = {
  codes: Array<string>
}

type Request = {
  body: EntryType
  params: { entryId: string }
}


//Endpoint '/storeCodes
const getQrCodes = async (req: Request, res: Response) => {
  const { codes } = req.body
  let generatedQrCodesArray: Array<string> = []
  
  //use express-validator to validate req body
  try {
    const entry = db.collection('entries').doc()
    const entryObject = {
      id: entry.id,
      codes,
    }
    entry.set(entryObject)

    for (let value of codes) {
      const code = await generateQrCode(value);
      generatedQrCodesArray.push(code);
    }
    
    res.status(200).send({
        status: 'success',
        message: 'codes added successfully',
        data: generatedQrCodesArray,
    })
  } catch (error) {
    res.status(500).json(error.message)
    console.log('Error', error)
  }
}

export { getQrCodes }
