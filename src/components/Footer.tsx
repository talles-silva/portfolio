import styled from "styled-components";

export default function Footer() {
  return (
    <FooterWrapper>
      <h1>Footer</h1>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100vw;
  background: transparent;
  color: #fff;
  padding: 1rem;
`;
