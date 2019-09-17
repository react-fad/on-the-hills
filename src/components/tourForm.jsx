import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import Dropdown from 'react-bootstrap/Dropdown'

const FormSection = styled.section``

const TourForm = () => {
  return (
    <FormSection>
      <form
        css={css`
          display: flex;

          > * {
            margin-top: 0;
          }
        `}
      >
        <div>
          <h5>Participants</h5>
          <button type="button">-</button>
          <select>
            <option>1</option>
          </select>
          <button type="button">+</button>
        </div>

        <div>
          <h5>Tour</h5>

          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              select tour
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <select>
            <option>1 day tour</option>
          </select>
        </div>
        <div>
          <h5>Date</h5>
          <input type="date" placeholder="select date" />
        </div>
        <button type="button" class="btn btn-primary">
          Primary
        </button>
      </form>
    </FormSection>
  )
}

export default TourForm
