import type { NextPage } from 'next'
import Head from 'next/head'

import styled from 'styled-components'
import Posts from '~/components/Posts'

export const Main = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Homepage</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Main>
        <Posts />
      </Main>
    </div>
  )
}

export default Home
