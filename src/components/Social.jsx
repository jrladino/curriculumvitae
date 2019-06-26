import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

const SocialStyle = styled.div`
    margin: 0 auto;
    display: block;
`;

const SocialUl = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
`;

const SocialLi = styled.li`
    display: inline;
    margin: 0 1em 0 0;
`;

const SocialAnchor = styled.a`
    color: #212121;
    text-decoration: none;
    font-size: 1.2em;
`;

const SocialIcon = styled.i`
    color: ${props => props.theme.color};

`;

const colors = {

    facebook: '#3b5958',
    twitter: '#38A1F3',
    linkedin: '#0e76a8',
    github: '#333',
    default: '#000000',
}

const getColor = name => ({
    color: colors[name] || colors.default,
})

const Social = props => (
    <SocialStyle>
        {props.social &&
            <SocialUl>
                {props.social.map((item, index) => (
                    <SocialLi key={`social-${index}`} target="_blank">
                        <SocialAnchor href={item.url}>
                            <ThemeProvider theme={getColor(item.name)}>
                                <SocialIcon className={`fab fa-${item.name}`} />
                            </ThemeProvider>
                        </SocialAnchor>
                    </SocialLi>
                ))}
            </SocialUl>
        }
    </SocialStyle>
);

export default Social;