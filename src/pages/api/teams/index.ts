import type { NextApiRequest, NextApiResponse } from "next"
import { mockDataTeam } from "src/@fake-db/table"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { search },
  } = req

  // do nothing fancy and simply return a string concatenation
  if (search) {
    return res.status(200).json(
      mockDataTeam.filter((team) => {
        return team.name.toLowerCase().includes(search.toString().toLowerCase())
      })
    )
  } else {
    res.status(200).json(mockDataTeam)
  }
}
