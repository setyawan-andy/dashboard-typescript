import type { NextApiRequest, NextApiResponse } from "next"
import { mockDataTeam } from "src/@fake-db/table"

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { search } = req.query

  const filteredData = mockDataTeam.filter((item) => {
    const name = item.name.toLowerCase()
    const email = item.email.toLowerCase()
    const access = item.access.toLowerCase()
    const searchLower = search?.toString().toLowerCase()

    return (
      name.includes(searchLower as string) ||
      email.includes(searchLower as string) ||
      access.includes(searchLower as string)
    )
  })

  res.status(200).json(filteredData)
}
