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
      expand="md"
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
              <NavDropdown.Item as={Link} to="/about/4x4-experiences/">
                4x4 Experiences
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about/brasov-and-surroundings/">
                Brasov and Surroundings
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Jeep Tours" id="basic-nav-dropdown">
              {allTours.map(tour => {
                return (
                  <NavDropdown.Item
                    key={tour.slug}
                    as={Link}
                    to={`/jeep-tours/${tour.slug}`}
                  >
                    {tour.title}
                  </NavDropdown.Item>
                )
              })}
            </NavDropdown>
            <Nav.Link as={Link} to="/team-buildings/">
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

export default Header
