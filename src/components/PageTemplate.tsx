import Head from 'next/head'
import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
  title: string
}

function PageTemplate({ children, title }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </>
  )
}

export default PageTemplate
