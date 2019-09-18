import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import SubMenu from './subMenu'
import useTours from '../hooks/useTours'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

const II = styled(Image)`
  padding: 0;
  * {
    margin-top: 0;
  }
`

const NavLink = styled(Link)`
  /* color: #222; */
  /* color: #0C2544; */
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
  const allTours = useTours()
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "on-the-hills-logo-tr.png" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Navbar
      bg="light"
      variant="light"
      expand="lg"
      fixed="top"
      css={css`
        background: rgba(255, 255, 255, 0.85) !important;
      `}
    >
      <Container fluid={false}>
        <Navbar.Brand as={Link} to="/">
          <II
            css={css`
              margin-top: 0;
              width: 100px;
              padding-top: 0;
            `}
            fluid={image.sharp.fluid}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="About" id="basic-nav-dropdown">
              {allTours.map(tour => {
                return (
                  <NavDropdown.Item
                    key={tour.slug}
                    as={Link}
                    to={`/jeepTours/${tour.slug}`}
                  >
                    {tour.title}
                  </NavDropdown.Item>
                )
              })}
            </NavDropdown>
            <NavDropdown title="Jeep Tours" id="basic-nav-dropdown">
              {allTours.map(tour => {
                return (
                  <NavDropdown.Item
                    key={tour.slug}
                    as={Link}
                    to={`/jeepTours/${tour.slug}`}
                  >
                    {tour.title}
                  </NavDropdown.Item>
                )
              })}
            </NavDropdown>
            <Nav.Link as={Link} to="/teamBuildings/">
              Team Buildings
            </Nav.Link>
            <Nav.Link as={Link} to="/contact/">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
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
{
  /* <header
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
</NavLink> */
}
