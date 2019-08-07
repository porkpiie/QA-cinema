import React from 'react';
import { Card, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';
import Container from 'react-bootstrap/Container';
import spAdam from '../Images/spAdam.jpg';
import spMatt from '../Images/spMatt.jpg';
import spMike from '../Images/spMike.jpg';
import spDan from '../Images/spDan.png';
import spRich from '../Images/spRich.jpg';
import spVal from '../Images/spVal.jpg';

const Profiles = (props) => {
    return (
        <div>
            <Container fluid id="aboutcontainer">
                <CardDeck className="bg-black">
                    <Card id="aboutcard">
                        <a href="https://www.sp-studio.de/" target="__blank">
                            <CardImg top width="100%" src={spRich} alt="Card image cap" />
                        </a>
                        <CardBody>
                            <CardTitle>Richard Clack</CardTitle>
                            <CardSubtitle>"The Shafeeq Whisperer"</CardSubtitle>
                            <CardText id="aboutText">"Look at your reflection in the mirror. You're a creature of the night Michael, just like out of a comic book! You're a vampire Michael! My own brother, a goddamn, s**t-sucking vampire. You wait 'till mom finds out, buddy!"
          - Corey Haim, The Lost Boys (1987)</CardText>
                        </CardBody>
                    </Card>
                    <Card id="aboutcard">
                        <a href="https://www.sp-studio.de/" target="__blank">
                            <CardImg top width="100%" src={spMatt} alt="Card image cap" />
                        </a>
                        <CardBody>
                            <CardTitle>Matt Anslow</CardTitle>
                            <CardSubtitle>"Quick Fix"</CardSubtitle>
                            <CardText id="aboutText">Edward Malus: “Killing me won't bring back your goddamn honey!”
            - Nicolas Cage, The Wicker Man (2006)</CardText>
                        </CardBody>
                    </Card>
                    <Card id="aboutcard">
                        <a href="https://www.sp-studio.de/" target="__blank">
                            <CardImg top width="100%" src={spMike} alt="Card image cap" />
                        </a>
                        <CardBody>
                            <CardTitle>Mike Hill</CardTitle>
                            <CardSubtitle>"Honeymoon"</CardSubtitle>
                            <CardText id="aboutText">Eddie Temple: "You're born, you take s**t. You get out in the world, you take more s**t. You climb a little higher, you take less s**t. Till one day you're up in the rarefied atmosphere and you've forgotten what s**t even looks like. Welcome to the layer cake son."
          - Michael Gambon, Layer Cake (2004)</CardText>
                        </CardBody>
                    </Card>
                </CardDeck>
            </Container>

            <Container fluid id="aboutcontainer">
                <CardDeck className="bg-black">
                    <Card id="aboutcard">
                        <a href="https://www.sp-studio.de/" target="__blank">
                            <CardImg top width="100%" src={spDan} alt="Card image cap" />
                        </a>
                        <CardBody>
                            <CardTitle>Dan Shurmer</CardTitle>
                            <CardSubtitle>"The Shurminator"</CardSubtitle>
                            <CardText id="aboutText">J. Russell Finch: "Hey, did you see th-the way he went SAILING right out there?"
                            - Milton Berle, It's  Mad Mad Mad Mad world (1963)</CardText>
                        </CardBody>
                    </Card>
                    <Card id="aboutcard">
                        <a href="https://www.sp-studio.de/" target="__blank">
                            <CardImg top width="100%" src={spVal} alt="Card image cap" />
                        </a>
                        <CardBody>
                            <CardTitle>Valentine Gonsalves</CardTitle>
                            <CardSubtitle>"The Victim"</CardSubtitle>
                            <CardText id="aboutText">Batman: "I'm Batman!"
                            - Christian Bale, Batman Begins (2005)</CardText>
                        </CardBody>
                    </Card>
                    <Card id="aboutcard">
                        <a href="https://www.sp-studio.de/" target="__blank">
                            <CardImg top width="100%" src={spAdam} alt="Card image cap" />
                        </a>
                        <CardBody>
                            <CardTitle>Adam Read</CardTitle>
                            <CardSubtitle>"Reaction Jackson"</CardSubtitle>
                            <CardText id="aboutText">Kurtz: "We train young men to drop fire on people, but their commanders won't allow them to write "f**k" on their airplanes because it's obscene!"
                            - Marlon Brando, Apocalypse Now (1979)</CardText>
                        </CardBody>
                    </Card>
                </CardDeck>
            </Container>
        </div>
    );

};

export default Profiles;