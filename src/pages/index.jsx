import React from 'react'
import Layout from '../components/layout'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
// import usePosts from "../hooks/use-posts"
import Hero from '../components/hero'
import TourForm from '../components/tourForm'
// import PostPreview from "../components/post-preview"

const WelcomeToBrasov = styled.section`
  text-align: center;
`
const LargeVideo = styled.section``
const SubscriptionSection = styled.section`
  display: flex;
  > * {
    margin-top: 0;
    max-width: 50%;
    flex: 1 0 auto;
  }
`
const PhotoGallery = styled.section``
const GiftCards = styled.section``
const CustomTours = styled.section``

export default () => {
  // const posts = usePosts()
  return (
    <React.Fragment>
      <Hero />
      <Layout>
        <TourForm />
        <WelcomeToBrasov>
          <h2>TRANSYLVANIAN WILDERNESS ADVENTURE</h2>
          <h3>WELCOME TO BRASOV</h3>
          <p>
            Experience the ultimate Jeep tour adventure on the mountains and
            hills surrounding Brasov City. We organize daily 4x4 tours with
            professional drivers, offering amazing outdoor sightsees in the
            Transylvanian mountains. Shepherd tour included!
          </p>
          <div class="alert alert-primary" role="alert">
            A simple primary alert—check it out!
          </div>
        </WelcomeToBrasov>
        <LargeVideo>LargeVideo</LargeVideo>
        <SubscriptionSection>
          <div>
            <p>
              Get exclusive free seats and last minute discount jeep tours,
              learn about our partners services and the first to know what’s
              new.
            </p>
          </div>
          <div>
            SUBSCRIBE
            <input type="email" placeholder="email" />
          </div>
        </SubscriptionSection>
        <PhotoGallery>PhotoGallery</PhotoGallery>
        <div
          css={css`
            display: flex;
            > * {
              margin-top: 0;
              flex: 1 0 auto;
              max-width: 50%;
            }
          `}
        >
          <GiftCards>
            <h3>Gift cards</h3>
            <p>
              Do you need a great gift idea? Give someone you love the gift card
              for one day or half a day jeep tour or surprise someone with a
              custom 4x4 tour.
            </p>
            <a href="/">GIFT CARDS</a>
          </GiftCards>
          <CustomTours>
            <h3>Custom Tours</h3>
            <p>
              Let us plan your unique tour. You can have outdoor 4x4 trips for a
              special occasion or make combo packages like jeep & rafting.
            </p>
            <a href="/">MORE INFO</a>
          </CustomTours>
        </div>
      </Layout>
    </React.Fragment>
  )
}
