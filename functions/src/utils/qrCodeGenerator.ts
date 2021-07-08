import * as qrcode from 'qrcode'

const generateQrCode = async (data: string): Promise<string> => {
  const imageUrl = await qrcode.toDataURL(data);
  const result = imageUrl
  return result
};

export default generateQrCode
