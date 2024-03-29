import React from 'react';
import Social from './Social'
import styled from 'styled-components';

const AboutStyle = styled.div`
    text-align: center;
`;

const AboutAvatar = styled.div`
    padding: 2em 0 0 0;
`;

const AboutImg = styled.img`
    border-radius: 100%;
    width: 160px;
    height: 160px;
    border: 3px solid #6A99EA;
    margin: 0 auto;
    display: block;
    box-shadow: 0 0 20px rgba(0,0,0,0.6);
`;
const AboutName = styled.div`
    text-align: center;
`;
const AboutH2 = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    letter-spacing: 1.2px;
    margin: .5em 0 0 0;
    color: #6A99EA;
`;

const AboutProfessional = styled.p`
    margin: .2px 0 1em 0;
    font-weight: 300;
    letter-spacing: 1.6px;
    color: #6A99EA;
`;

const AboutBio = styled.p`
    color: #2D323B;
    font-size: 1em;
    font-weight: 300;
`;

const AboutLocation = styled.p`
color: #757575;
font-size: 1em;
font-weight: 400;
`;


const About = ({ avatar, name, profession, bio, address, social }) => (
    <AboutStyle>
        <div className="About-container">
            <AboutAvatar>
                <figure>
                    <AboutImg src={avatar} alt={name} />
                </figure>
            </AboutAvatar>
            <AboutName>
                <AboutH2>{name}</AboutH2>
            </AboutName>
            <div className="About-profession">
                <AboutProfessional>{profession}</AboutProfessional>
            </div>
            <div className="About-desc">
                <AboutBio>{bio}</AboutBio>
            </div>
            <div className="About-location">
                <AboutLocation>{address}</AboutLocation>
            </div>
            <div className="About-social">
                <Social social={social} />
            </div>
        </div>
    </AboutStyle>
);

export default About;