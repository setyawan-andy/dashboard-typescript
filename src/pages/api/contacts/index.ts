import type { NextApiRequest, NextApiResponse } from "next"
import { mockDataContacts } from "src/@fake-db/table"

type Data = {
  id: number
  name: string
  email: string
  age: number
  phone: string
  address: string
  city: string
  zipCode: string
  registrarId: number
}

export const handler = (req: NextApiRequest, res: NextApiResponse<Data[]>) => {
  res.status(200).json(mockDataContacts)
}

export default handler
