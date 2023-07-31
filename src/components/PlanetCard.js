import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space } from 'styled-system';

class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;

    return (
      <Card data-testid="planet-card" m="16px">
        <p data-testid="planet-name">{planetName}</p>
        <img src={ planetImage } alt={ `Planeta ${planetName}` } />
      </Card>
    );
  }
}

const Card = styled.div`
  text-align: center;
  background-color: #32343d;
  border-radius: 4%;
  max-width: 230px;
  width: 100%;

  p {
    margin: 1em 2px;
    border-radius: 10px;
  }

  img {
    width: 100%;
    max-width: 200px;
  }

  ${space}
`;

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
