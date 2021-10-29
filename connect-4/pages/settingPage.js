import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/header'



export default function settingPage() {
  return (
    <div>
      <Head>
        <title>Setting Page</title>
      </Head>
      <Header />
      <h1>Setting Page</h1>
    </div>
  )
}
