import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import styled from "styled-components";

export default function AboutPage() {
  return (
    <>
      <Header title="Sobre" />
      <Container>
        <h1>Sobre</h1>
      </Container>
      <Footer />
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: rgba(2, 0, 36, 100);
  background: linear-gradient(
    0deg,
    rgba(6, 29, 55, 100) 0%,
    rgba(0, 0, 0, 100) 100%
  );
  color: #fff;
`;
