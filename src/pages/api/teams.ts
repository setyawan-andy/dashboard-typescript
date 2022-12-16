import type { NextApiRequest, NextApiResponse } from "next"
import { mockDataTeam } from "src/@fake-db/table"

type Data = {
  id: number
  name: string
  email: string
  age: number
  phone: string
  access: string
}

export const handler = (req: NextApiRequest, res: NextApiResponse<Data[]>) => {
  res.status(200).json(mockDataTeam)
}

export default handler
