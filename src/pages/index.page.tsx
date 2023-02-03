import Head from "next/head";
import Link from "next/link";
import { Container } from "./styles";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Container>
        <h1>Home</h1>
        <p>Essa é a página Home</p>
        <Link href="/about"> Sobre </Link>
      </Container>
    </>
  );
}
