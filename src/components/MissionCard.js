import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { styled } from 'styled-components';

class MissionCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <Card data-testid="mission-card">
        <ul>
          <li data-testid="mission-name">{name}</li>
          <li data-testid="mission-year">{year}</li>
          <li data-testid="mission-country">{country}</li>
          <li data-testid="mission-destination">{destination}</li>
        </ul>
      </Card>
    );
  }
}

const Card = styled.div`
  background-color: #32343d;
  border-radius: 4%;
  max-width: 230px;
  width: 100%;
  margin: 16px;

  ul {
    padding: 0 25px 0 30px;

    li {
      margin-bottom: 12px;
    }
  }
`;

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
