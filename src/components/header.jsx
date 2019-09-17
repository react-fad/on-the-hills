import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import SubMenu from './subMenu'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

const II = styled(Image)`
  padding: 0;
  * {
    margin-top: 0;
  }
`

const NavLink = styled(Link)`
  color: #222;
  color: #0C2544;
  color: white;
  font-size: 1rem;
  box-shadow:
  font-weight: ${props => props.fontWeight || 'normal'};
  line-height: 1;
  margin: 0 0.5rem 0 0;
  margin: 0 0 0 0;
  padding: 1.4rem 1rem;
  text-decoration: none;
  text-transform: uppercase;
  text-shadow: 2px 2px 2px #0C2544;
  /* text-shadow: 2px 2px 2px #0C2544; */


  &.current-page {
    background: rgb(12, 37, 68, 0.4);
    /* border-bottom: 1px solid white; */
  }

  :hover {
    background: rgb(12, 37, 68, 0.7);
  }
  
  &:last-of-type {
    margin-right: 0;
  }
`

const Header = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "on-the-hills-logo.png" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <header
      css={css`
        position: absolute;
        top: 0;
        width: 100vw;
        background: rgb(12, 37, 68, 0.6);
        display: flex;
        align-items: center;
        box-shadow: 0px 0px 9px 3px rgba(41, 41, 41, 0.25);

        @media (min-width: calc(750px + 10vw)) {
          padding-left: calc((100vw - 750px - 0.5rem) / 2);
          padding-right: calc((100vw - 750px - 0.5rem) / 2);
        }
      `}
    >
      <NavLink
        to="/"
        css={css`
          padding: 0;
        `}
      >
        <II
          css={css`
            margin-top: 0;
            width: 100px;
            padding-top: 0;
          `}
          fluid={image.sharp.fluid}
        />
      </NavLink>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}
// <nav
//   css={css`
//     margin-top: 0;
//   `}
// >
//   <NavLink to="/" activeClassName="current-page">
//     About
//   </NavLink>
//   <SubMenu />
//   {/* <NavLink to="/jeepTours/" activeClassName="current-page">
//     Jeep Tours
//   </NavLink> */}
//   <NavLink to="/teamBuildings/" activeClassName="current-page">
//     Team Buildings
//   </NavLink>
//   <NavLink to="/contact/" activeClassName="current-page">
//     Contact
//   </NavLink>
// </nav>

export default Header
