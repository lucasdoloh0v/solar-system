import React, { Component } from 'react';
import styled from 'styled-components';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <Container>
          {Planets.map((planet) => (
            <PlanetCard
              key={ planet.name }
              planetName={ planet.name }
              planetImage={ planet.image }
            />))}
        </Container>
      </div>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default SolarSystem;
