import type { NextPage } from 'next'
import Head from 'next/head'

interface Props {
  title?: string | "Lorem Ipsum";
  description?: string | "Lorem Ipsum"
}

const Meta: NextPage = (props: Props) => {
  const { title, description } = props
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default Meta
