import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import "./LeagueBox.css";

const LeagueBox = ({league}) => {
    const [League,setLeague] = useState({});
    useEffect(() =>{
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${league}`)
        .then(res => res.json())
        .then(data => setLeague(data.leagues[0]))
    },[league])
    const { strLeague, strBadge, strSport} = League;
    return (
            <Card className="text-center m-3" style={{ width: '20rem' }}>
            <Card.Img variant="top" src={strBadge} />
                <Card.Body>
                <Card.Title>{strLeague}</Card.Title>
                <Card.Text> Sports type : {strSport}</Card.Text>
                <Link to={"/leagueDetails/" + league}>
                    <Button className="explore_btn">
                        <b>Explore </b>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </Button>
                </Link>
                </Card.Body>
            </Card>
    );
};

export default LeagueBox;