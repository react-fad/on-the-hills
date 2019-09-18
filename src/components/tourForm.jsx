import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Dropdown from 'react-bootstrap/Dropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import useTours from '../hooks/useTours';
import { Link } from 'gatsby';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const FormSection = styled(Row)``;

const TourForm = () => {
  const allTours = useTours();
  const [participants, setParticipants] = React.useState(null);
  const [tour, setTour] = React.useState(null);
  const [startDate, setStartDate] = React.useState(new Date());

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

            <Dropdown.Menu
              className="w-100"
              css={css`
                max-height: 200px;
                overflow-y: auto;
                overflow-x: hidden;
              `}
            >
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
            <p className={`p-2 ${!tour && 'text-muted'}`}>
              {tour ? (
                <>
                  More details on the{' '}
                  <Link to={`/jeep-tours/${tour.slug}`}>{tour.title}</Link>
                </>
              ) : (
                'Select the tour you want'
              )}
            </p>
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

        <Col
          className="text-center"
          css={css`
            .react-datepicker-wrapper input {
              width: 100%;
              padding: 6px;
              text-align: center;
            }
            .react-datepicker-wrapper,
            .react-datepicker__input-container {
              width: 100%;
            }
          `}
        >
          <h5>Date</h5>
          <DatePicker
            showPopperArrow={false}
            selected={startDate}
            onChange={date => setStartDate(date)}
            minDate={new Date()}
          />
        </Col>
      </form>
      <Row>
        <Col className="text-center">
          <Button type="button" variant="secondary" size="lg">
            Book your tour!
          </Button>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default TourForm;
