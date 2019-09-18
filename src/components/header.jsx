import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import SubMenu from './subMenu';
import useTours from '../hooks/useTours';
import useLogo from '../hooks/useLogo';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const allTours = useTours();
  const { image } = useLogo();

  return (
    <Navbar
      bg="light"
      variant="light"
      expand="md"
      fixed="top"
      className="shadow bg-gradient-light"
      css={css`
        background: rgba(255, 255, 255, 0.85) !important;
      `}
    >
      <Container fluid={false}>
        <Navbar.Brand as={Link} activeClassName="active" to="/">
          <Image
            css={css`
              width: 100px;
            `}
            fluid={image.sharp.fluid}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="About" id="basic-nav-dropdown">
              <NavDropdown.Item
                as={Link}
                activeClassName="active"
                to="/about/4x4-experiences/"
              >
                4x4 Experiences
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                activeClassName="active"
                to="/about/brasov-and-surroundings/"
              >
                Brasov and Surroundings
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Jeep Tours" id="basic-nav-dropdown">
              {allTours.map(tour => {
                return (
                  <NavDropdown.Item
                    key={tour.slug}
                    as={Link}
                    activeClassName="active"
                    to={`/jeep-tours/${tour.slug}`}
                  >
                    {tour.title}
                  </NavDropdown.Item>
                );
              })}
            </NavDropdown>
            <Nav.Link as={Link} activeClassName="active" to="/team-buildings/">
              Team Buildings
            </Nav.Link>
            <Nav.Link as={Link} activeClassName="active" to="/contact/">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <FontAwesomeIcon
              className="mr-2 text-secondary"
              icon={faPhoneAlt}
            />
            <a href="tel:+40725064902">(+4) 0725 06 49 02</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
