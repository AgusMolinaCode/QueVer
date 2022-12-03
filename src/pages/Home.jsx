import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Request'

const Home = () => {
  return (
    <>
      <Main />
      <Row rowId='1' title='estrenos' fetchURL={requests.requestUpcoming} />
      <Row rowId='2' title='Populares' fetchURL={requests.requestPopular} />
      <Row rowId='3' title='Ultimas' fetchURL={requests.requestTrending} />
      <Row rowId='4' title='Terror' fetchURL={requests.requestHorror} />
    </>
  )
}

export default Home