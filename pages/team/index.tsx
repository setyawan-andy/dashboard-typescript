import { Team } from "../../views/pages"
import Head from "next/head"

const TeamPage = () => {
  return (
    <>
      <Head>
        <title>Team Management</title>
        <meta name="description" content="Generated table team management" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Team />
    </>
  )
}

export default TeamPage
