import Head from 'next/head';
import { Container } from '../styles/pages/Home';

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1>Hello world</h1>
        <img src="./vercel.svg" alt="" />
      </div>
    </Container>
  );
}
