import * as qrcode from 'qrcode'

const generateQrCode = (arrayData: Array<string>): Array<string> => {
  const qrCodeUrlArray: Array<string> = []

  arrayData?.map(async (data: string) => {
    try {
      const qrCodeUrl = await qrcode.toDataURL(data)
      qrCodeUrlArray.push(qrCodeUrl)
    } catch (error) {
      return
    }
  })

  return qrCodeUrlArray
}

export default generateQrCode
