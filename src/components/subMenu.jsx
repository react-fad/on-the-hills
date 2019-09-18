import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import useTours from '../hooks/useTours';
import { css } from '@emotion/core';

const OuterMenu = styled.div`
  position: absolute;
  display: block;
  flex-direction: column;
  top: calc(100% + 0.4rem);
  left: 0;
  overflow: hidden;
  background: rgb(12, 37, 68, 0.7);
  box-shadow: 0px 0px 9px 3px rgba(41, 41, 41, 0.25);

  transition: max-height 0.2s ease-in-out;
  max-height: ${p => (p.isVisible ? '500px' : '0')};
`;

const NavLink = styled(Link)`
  color: #0c2544;
  color: white;
  font-size: 1rem;
  line-height: 1;
  margin: 0 0.5rem 0 0;
  margin: 0 0 0 0;
  padding: 1.4rem 1rem;
  text-decoration: none;
  text-transform: uppercase;
  text-shadow: 2px 2px 2px #0c2544;
  /* text-shadow: 2px 2px 2px #0C2544; */
  /* background: ${p =>
    p.ismenuopened ? 'rgb(12, 37, 68, 0.7)' : 'inherit'}; */

  :hover {
    background: rgb(12, 37, 68, 0.7);
  }

  &.current-page {
    background: rgb(12, 37, 68, 0.4);
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

const SubMenuLink = styled(NavLink)`
  font-size: 16px;
  padding: 0.8rem 1rem;
  display: block;
  min-width: 7rem;
`;

const SubMenu = () => {
  const allTours = useTours();
  const [isVisible, setIsVisible] = React.useState(false);
  const [isAnimating, setIsAnimating] = React.useState(false);
  return (
    <span
      css={css`
        display: inline;
        position: relative;
      `}
      onMouseEnter={() => {
        setIsAnimating(true);
        setIsVisible(true);
      }}
      onMouseLeave={() => {
        setIsAnimating(true);
        setIsVisible(false);
      }}
    >
      <NavLink
        to="/jeepTours/"
        activeClassName="current-page"
        ismenuopened={String(isVisible)}
        onAnimationEnd={() => {
          setIsAnimating(false);
        }}
      >
        Jeep Tours
      </NavLink>
      {(isVisible || isAnimating) && (
        <OuterMenu isVisible={isVisible}>
          {allTours.map(tour => {
            return (
              <SubMenuLink
                key={tour.slug}
                to={`/jeepTours/${tour.slug}/`}
                activeClassName="current-page"
              >
                {tour.title}
              </SubMenuLink>
            );
          })}
        </OuterMenu>
      )}
    </span>
  );
};

export default SubMenu;
