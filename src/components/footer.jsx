import React from 'react';
import { Global, css } from '@emotion/core';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import useLogo from '../hooks/useLogo';
import Image from 'gatsby-image';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faYoutube,
  faPinterest,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const List = styled.ul`
  list-style: none;
  margin-left: 0;
  padding-left: 0;

  > li {
    margin-top: 12px;
    padding-left: 0;

    svg {
      margin-right: 8px;
    }
  }
`;

const Layout = ({ children }) => {
  const { image } = useLogo();
  return (
    <footer className="py-3 shadow-sm bg-gradient-light" css={css``}>
      <Container fluid={false}>
        <Row>
          <Col>
            <Image
              css={css`
                width: 100px;
              `}
              fluid={image.sharp.fluid}
            />
            <List className="pt-2">
              <li>
                <Link to="/">Terms and conditions</Link>
              </li>
              <li>
                <Link to="/">Tips and safety rules</Link>
              </li>
              <li>
                <Link to="/">FAQ</Link>
              </li>
            </List>
          </Col>
          <Col>
            <p className="lead">INFO POINT IN BRASOV</p>
            <p>Visit us at Timeout2go</p>
            <p>Monday to Sunday 10AM – 6PM</p>
            <p>Address: No. 18, Baritiu Street</p>
          </Col>
          <Col>
            <p>
              Call us:
              <a href="tel:+40725064902">(+4) 0725 06 49 02</a>
            </p>
            <p>Follow us:</p>
            <List
              css={css`
                li {
                  margin-left: 3px;
                }
              `}
            >
              <li>
                <FontAwesomeIcon icon={faFacebook} /> Facebook
              </li>
              <li>
                <FontAwesomeIcon icon={faTwitter} />
                Twitter
              </li>
              <li>
                <FontAwesomeIcon icon={faYoutube} />
                Youtube
              </li>
              <li>
                <FontAwesomeIcon icon={faPinterest} />
                Pinterest
              </li>
              <li>
                <FontAwesomeIcon icon={faInstagram} />
                Instagram
              </li>
            </List>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Layout;
