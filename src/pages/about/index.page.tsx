import Head from "next/head";
import Link from "next/link";
import { Container } from "./styles";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Sobre</title>
      </Head>
      <Container>
        <h1>Sobre</h1>
        <p>Essa é a página Sobre</p>
        <Link href="/"> Home </Link>
      </Container>
    </>
  );
}
