import React, { useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import { leaguesContext } from '../../App';
import LeagueBox from '../LeagueBox/LeagueBox';
import "./Home.css";

const Home = () => {
    const leagues = useContext(leaguesContext);
    return (
        <div>
            <p className="text-white m-0 custom d-flex justify-content-center align-items-center">
                <span>Soccer Leagues</span>
            </p>
            <Container fluid className="box_container">
                <Row className="justify-content-center">
                    {
                        leagues[0].map(league => 
                            <LeagueBox key={league.idLeague} league={league.idLeague}>
                            </LeagueBox>
                        )
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Home;