import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMapMarkerAlt, faFlag, faFutbol, faMars} from '@fortawesome/free-solid-svg-icons'
import "./LeagueDetails.css";
import { faFacebookF, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';


const LeagueDetails = () => {
    const {league} = useParams();
    const [League, setLeague] = useState({});
    const female = 'https://www.stanleyblackanddecker.com/sites/stanleyblackanddecker.com/files/aaff_poster_football-women-web_1.jpg';
    const male = 'https://img.fifa.com/image/upload/t_l4/v1562169862/fczz28jmke7k4tl5wvgj.jpg'
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${league}`)
            .then(res => res.json())
            .then(data => setLeague(data.leagues[0]))
    }, [league]);
    console.log(League);
    const { 
        strLeague, strBadge, intFormedYear,
         strCountry,strSport, strGender,
          strDescriptionEN, strFacebook, strTwitter,
           strYoutube} = League;
    
    const handleIconClick = (url) => {
        window.open("http://"+url,'_blank');
    }

    return (
        <div>
            <div className=" bg-image d-flex justify-content-center align-items-center">
                <img src={strBadge} alt=""/>
            </div>
            <Container fluid className="background text-white">
                <div className="detail_box bg-primary">
                    <div className="w-100 m-auto">
                        <h3>{strLeague}</h3>
                        <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Founded :{intFormedYear}</p>
                        <p><FontAwesomeIcon icon={faFlag} /> Country : {strCountry}</p>
                        <p><FontAwesomeIcon icon={faFutbol} /> Sports Type : {strSport}</p>
                        <p><FontAwesomeIcon icon={faMars} /> Gender : {strGender}</p>
                    </div>
                    <div className="w-100 m-auto">
                        {strGender === 'Male' &&
                            <img className="team_img img-fluid" src={male} alt=""/>
                        }
                        {strGender === 'Female' &&
                            <img className="team_img" src={female} alt=""/>
                        }
                    </div>
                </div>
                <p className="my-3">
                    {strDescriptionEN}
                </p>
                <div className="d-flex justify-content-center">
                    <span onClick={() => handleIconClick(strTwitter)} className="custom-design bg-primary ">
                            <FontAwesomeIcon icon={faTwitter} />
                        </span>
                    <span onClick={() => handleIconClick(strFacebook)} className="custom-design bg-blue">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </span>
                    <span onClick={() => handleIconClick(strYoutube)} className="custom-design bg-danger">
                            <FontAwesomeIcon icon={faYoutube} />
                        </span>
                </div>
            </Container>

        </div>
    );
};

export default LeagueDetails;