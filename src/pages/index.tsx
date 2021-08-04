import { GetServerSideProps } from 'next'
import Layout from 'components/Layout'
import { DataProps } from 'types'

export default function Page({ data }: DataProps) {
  return <Layout locations={data.locations} />
}

export const getServerSideProps: GetServerSideProps = async () => {
  const endpoint = process.env.GRAPHQL_HOST || ''
  const res = await fetch(endpoint)
  const data = await res.json()

  return { props: { data } }
}
