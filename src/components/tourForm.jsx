import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Dropdown from 'react-bootstrap/Dropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import useTours from '../hooks/useTours';
import { Link } from 'gatsby';

const FormSection = styled(Row)``;

const TourForm = () => {
  const allTours = useTours();
  const [participants, setParticipants] = React.useState(null);
  const [tour, setTour] = React.useState(null);

  return (
    <React.Fragment>
      <Row className="p-3">
        <Col className="text-center">
          <h2>Book a tour now!</h2>
        </Col>
      </Row>
      <form className="row p-3">
        <Col className="text-center">
          <h5>Participants</h5>
          <Dropdown>
            <Dropdown.Toggle variant="light" className="w-100">
              {participants
                ? `${participants < 10 ? participants : '+10'} participants`
                : 'select no of Participants'}
            </Dropdown.Toggle>

            <Dropdown.Menu className="w-100">
              {Array(9)
                .fill()
                .map((v, i) => i)
                .map(index => {
                  return (
                    <Dropdown.Item
                      key={`part-${index}`}
                      onClick={() => {
                        setParticipants(index + 1);
                      }}
                    >
                      {index + 1}
                    </Dropdown.Item>
                  );
                })}
              <Dropdown.Item
                onClick={() => {
                  setParticipants(10);
                }}
              >
                at least 10
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>

        <Col className="text-center">
          <h5>Tour</h5>

          <Dropdown>
            <Dropdown.Toggle
              variant="light"
              id="dropdown-basic"
              className="w-100"
            >
              {tour ? tour.title : 'select tour'}
            </Dropdown.Toggle>
            {tour && (
              <p className="p-2">
                More details on the{' '}
                <Link to={`/jeepTours/${tour.slug}`}>{tour.title}</Link>
              </p>
            )}
            <Dropdown.Menu className="w-100">
              {allTours.map(tour => {
                return (
                  <Dropdown.Item key={tour.title} onClick={() => setTour(tour)}>
                    {tour.title}
                  </Dropdown.Item>
                );
              })}
            </Dropdown.Menu>
          </Dropdown>
        </Col>

        <Col className="text-center">
          <h5>Date</h5>
          <input type="date" placeholder="select date" />
        </Col>
      </form>
      <Row>
        <Col className="text-center">
          <Button type="button" variant="primary" size="lg">
            Book your tour!
          </Button>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default TourForm;
