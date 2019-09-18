import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import Dropdown from 'react-bootstrap/Dropdown'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const FormSection = styled(Row)``

const TourForm = () => {
  return (
    <React.Fragment>
      <Row>
        <Col className="text-center">
          <h2>Book a tour now!</h2>
        </Col>
      </Row>
      <form
        className="row"
        css={css`
          display: flex;

          > * {
            margin-top: 0;
          }
        `}
      >
        <Col className="text-center">
          <h5>Participants</h5>
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              select no of Participants
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>1</Dropdown.Item>
              <Dropdown.Item>2</Dropdown.Item>
              <Dropdown.Item>3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>

        <Col className="text-center">
          <h5>Tour</h5>

          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              select tour
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>1 day tour</Dropdown.Item>
              <Dropdown.Item>1/2 day tour</Dropdown.Item>
              <Dropdown.Item>Custom tour</Dropdown.Item>
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
          <button type="button" className="btn btn-primary">
            Primary
          </button>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default TourForm
