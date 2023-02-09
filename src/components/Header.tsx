import Head from "next/head";
import styled from "styled-components";
import Navbar from "./Navbar";

export default function Header({ title }: { title: string }) {
  return (
    <HeaderWrapper>
      <Head>
        <title>Talles Silva - {title}</title>
      </Head>

      <Navbar />
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100vw;
  background: transparent;
  color: #fff;
  padding: 1rem;
`;

const HeaderTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0;
`;
