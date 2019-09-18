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
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

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
    <footer
      className="py-3 shadow-sm bg-gradient-light"
      css={css`
        border-top: 1px solid lightgrey;
      `}
    >
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
            <p>
              <FontAwesomeIcon className="mr-2" icon={faPhoneAlt} />
              Call us: <a href="tel:+40725064902">(+4) 0725 06 49 02</a>
            </p>
            <p className="text-muted">Follow us:</p>
            <List
              css={css`
                li {
                  margin-left: 3px;
                }
              `}
            >
              <li>
                <a href="/">
                  <FontAwesomeIcon icon={faFacebook} /> Facebook
                </a>
              </li>
              <li>
                <a href="/">
                  <FontAwesomeIcon icon={faTwitter} />
                  Twitter
                </a>
              </li>
              <li>
                <a href="/">
                  <FontAwesomeIcon icon={faYoutube} />
                  Youtube
                </a>
              </li>
              <li>
                <a href="/">
                  <FontAwesomeIcon icon={faPinterest} />
                  Pinterest
                </a>
              </li>
              <li>
                <a href="/">
                  <FontAwesomeIcon icon={faInstagram} />
                  Instagram
                </a>
              </li>
            </List>
          </Col>
          <Col
            css={css`
              p {
                margin-bottom: 5px;
                font-size: smaller;
              }
            `}
          >
            <p className="lead">INFO POINT IN BRASOV</p>
            <p>
              Visit us at <b>Timeout2go</b>
            </p>
            <p>Monday to Sunday 10AM – 6PM</p>
            <p>Address: No. 18, Baritiu Street</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2789.4745492101824!2d25.585177415984415!3d45.641291079103446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b35b6022be31b5%3A0x79364518e461d996!2sTimeout%202%20Go!5e0!3m2!1sen!2sro!4v1568809978121!5m2!1sen!2sro"
              allowfullscreen=""
              css={css`
                border: 0;
                min-height: 250px;
              `}
            ></iframe>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Layout;
