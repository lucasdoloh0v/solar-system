import React, { Component } from 'react';
import { styled } from 'styled-components';
import MissionCard from './MissionCard';
import Title from './Title';
import missions from '../data/missions';

class Mission extends Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <Container>
          {missions
            .map((mission) => (
              <MissionCard
                key={ mission.name }
                name={ mission.name }
                year={ mission.year }
                country={ mission.name }
                destination={ mission.destination }
              />
            ))}
        </Container>
      </div>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default Mission;
