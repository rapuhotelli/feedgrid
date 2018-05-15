/*
 Peruskomponenttirakenne!

 Backtickkien (`) sisään normaalia css:ää
 React-komponentit (myös styled-components) alkavat isolla kirjaimella
*/

import React from "react";
import styled from "styled-components";
import * as color from "../Block/colors";

// span-elementti, sininen
const Spanni = styled.span`
  color: blue;
`;

// Tweeter's name
const Name = styled.div`
  font-size: 32pt;
  color: ${color.white};
  font-family: "IBM Plex Sans", sans-serif;
  line-height: 32pt;
  font-weight: 600; 
  display: inline;

`;

// Username
const Username = styled.div`
font-size: 32pt;
color: ${color.twitterBlueLight};
font-family: "IBM Plex Sans", sans-serif;
line-height: 32pt;
font-weight: 300; 
display: inline;

`;


// Tweet
const TweetText = styled.div`
font-size: 32pt;
color: ${color.white};
font-family: "IBM Plex Sans", sans-serif;
line-height: 32pt;
font-weight: 300; 

`;

//Background
const Background = styled.div`
background: ${color.twitterBlue}
`;

// Lopullinen ulostettava komponentti. Sisältää sisäkkäin yllä määritellyn suurifonttisen otsikon,
// jonka sisällä (aika turhan) sinistä tekstiä sisältävän span-elementin
const Tweet = () => (
    <Background>
  <Name>
    Gaylord
  </Name>
  <Username>
  @drkobros 28 Jan 2016
  </Username>
  <TweetText>
  Yeah, I know I should have joined Twitter ages ago. But you know, traveling around the world doing my business keeps me really busy... 
#salmoncheek
    </TweetText>
  </Background>
);

// Paljasta sovellukselle
export default Tweet;
