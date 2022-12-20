import type { NextApiRequest, NextApiResponse } from "next"
import { mockDataContacts } from "src/@fake-db/table"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { search },
  } = req

  // do nothing fancy and simply return a string concatenation
  if (search) {
    return res.status(200).json(
      mockDataContacts.filter((team) => {
        return team.name.toLowerCase().includes(search.toString().toLowerCase())
      })
    )
  } else {
    res.status(200).json(mockDataContacts)
  }
}
