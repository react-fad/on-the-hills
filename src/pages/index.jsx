import React from 'react';
import Layout from '../components/layout';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'gatsby';

// import usePosts from "../hooks/use-posts"

import Hero from '../components/hero';

import TourForm from '../components/tourForm';
import '../custom.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const WelcomeToBrasov = styled(Row)`
  text-align: center;
`;

const LargeVideo = styled.section``;
const SubscriptionSection = styled(Row)``;
const PhotoGallery = styled.section``;

export default () => {
  return (
    <React.Fragment>
      <Layout isUnderMenu={true}>
        <Hero />
        <Container fluid={false}>
          <TourForm />
          <WelcomeToBrasov className="py-5">
            <Col>
              <h2 className="my-2">TRANSYLVANIA WILDERNESS ADVENTURE</h2>
              <h3 className="py-3">Welcome to Brasov</h3>
              <p className="lead py-2">
                Experience the ultimate Jeep tour adventure on the mountains and
                hills surrounding Brasov City.
              </p>
              <p className="lead py-2">
                We organize daily 4x4 tours with professional drivers, offering
                amazing outdoor sightsees in the Transylvania's mountains.
              </p>
              <p className="lead py-3">Shepherd tour included!</p>
            </Col>
          </WelcomeToBrasov>
        </Container>
        <LargeVideo>
          <iframe
            css={css`
              min-height: 400px;
              width: 100%;
            `}
            src="https://www.youtube.com/embed/OFmUzdt9HsU"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </LargeVideo>
        <Container fluid={false}>
          <SubscriptionSection className="py-4">
            <Col>
              <p className="">
                Get exclusive free seats and last minute discount jeep tours,
                learn about our partners services and the first to know what is
                new.
              </p>
            </Col>
            <Col>
              <h5>
                <FontAwesomeIcon icon={faEnvelope} /> SUBSCRIBE
              </h5>
              <InputGroup>
                <FormControl
                  placeholder="subscribe via email"
                  aria-label="subscribe via email"
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                  <Button variant="outline-secondary">Subscribe</Button>
                </InputGroup.Append>
              </InputGroup>
            </Col>
          </SubscriptionSection>
          <PhotoGallery>PhotoGallery</PhotoGallery>
          <Row className="my-3 mb-5">
            <Col>
              <h3>Gift cards</h3>
              <p className="lead">
                Do you need a great gift idea? Give someone you love the gift
                card for one day or half a day jeep tour or surprise someone
                with a custom 4x4 tour.
              </p>
              <Button as={Link} variant="outline-secondary" href="/">
                GIFT CARDS
              </Button>
            </Col>
            <Col>
              <h3>Custom Tours</h3>
              <p className="lead">
                Let us plan your unique tour. You can have outdoor 4x4 trips for
                a special occasion or make combo packages like jeep & rafting.
              </p>
              <Button as={Link} variant="outline-secondary" href="/">
                MORE INFO
              </Button>
            </Col>
          </Row>
        </Container>
      </Layout>
    </React.Fragment>
  );
};
