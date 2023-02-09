import Link from "next/link";
import styled from "styled-components";

export default function Navbar() {
  return (
    <NavbarWrapper>
      <NavbarList>
        <NavbarItem>
          <NavbarLink href="/">Home</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink href="/about">Sobre</NavbarLink>
        </NavbarItem>
      </NavbarList>
    </NavbarWrapper>
  );
}

const NavbarWrapper = styled.nav`
  background-color: #000;
  color: #fff;
  padding: 1rem;
  display: flex;
  justify-content: center;
`;

const NavbarList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavbarItem = styled.li`
  margin: 0 1rem;
`;

const NavbarLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: 700;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #39748f;
    border-bottom: #5f96af 2px solid;
  }
`;
