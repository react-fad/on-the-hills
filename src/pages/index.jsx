import React from 'react';
import Layout from '../components/layout';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
// import usePosts from "../hooks/use-posts"

import Hero from '../components/hero';

import TourForm from '../components/tourForm';
import '../custom.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import PostPreview from "../components/post-preview"

const WelcomeToBrasov = styled(Row)`
  text-align: center;
`;
const LargeVideo = styled.section``;
const SubscriptionSection = styled(Row)``;
const PhotoGallery = styled.section``;

export default () => {
  // const posts = usePosts()
  return (
    <React.Fragment>
      <Layout isUnderMenu={true}>
        <Hero />
        <Container fluid={false}>
          <TourForm />
          <WelcomeToBrasov className="p-5">
            <Col className="p-4">
              <h2>TRANSYLVANIAN WILDERNESS ADVENTURE</h2>
              <h3>WELCOME TO BRASOV</h3>
              <p>
                Experience the ultimate Jeep tour adventure on the mountains and
                hills surrounding Brasov City. We organize daily 4x4 tours with
                professional drivers, offering amazing outdoor sightsees in the
                Transylvanian mountains. Shepherd tour included!
              </p>
            </Col>
          </WelcomeToBrasov>
          <LargeVideo>LargeVideo</LargeVideo>
          <SubscriptionSection>
            <Col>
              <p>
                Get exclusive free seats and last minute discount jeep tours,
                learn about our partners services and the first to know what’s
                new.
              </p>
            </Col>
            <Col>
              SUBSCRIBE
              <input type="email" placeholder="email" />
            </Col>
          </SubscriptionSection>
          <PhotoGallery>PhotoGallery</PhotoGallery>
          <Row>
            <Col>
              <h3>Gift cards</h3>
              <p>
                Do you need a great gift idea? Give someone you love the gift
                card for one day or half a day jeep tour or surprise someone
                with a custom 4x4 tour.
              </p>
              <a href="/">GIFT CARDS</a>
            </Col>
            <Col>
              <h3>Custom Tours</h3>
              <p>
                Let us plan your unique tour. You can have outdoor 4x4 trips for
                a special occasion or make combo packages like jeep & rafting.
              </p>
              <a href="/">MORE INFO</a>
            </Col>
          </Row>
        </Container>
      </Layout>
    </React.Fragment>
  );
};
