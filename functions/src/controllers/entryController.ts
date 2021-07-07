import { Response } from 'express'
import { db } from '../config/firebase'

type EntryType = {
  codes: string[]
}

type Request = {
  body: EntryType
  params: { entryId: string }
}

//Endpoint '/storeCodes
const generateQrCode = async (req: Request, res: Response) => {
  const { codes } = req.body
  //use express-validator to validate req body
  try {
    const entry = db.collection('entries').doc()
    const entryObject = {
      id: entry.id,
      codes,
    }

    entry.set(entryObject)

    res.status(200).send({
      status: 'success',
      message: 'codes added successfully',
      data: entryObject,
    })
  } catch (error) {
    res.status(500).json(error.message)
    console.log('Error', error)
  }
}

export { generateQrCode }
