import React, { Component } from 'react';
import Profiles from '../Components/Profiles.component';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Banner from '../Components/Banner.component';

export default class AboutUs extends Component {
    render() {
        return (
            <div>
                <div className="banner-img-wrapper">
                    <Banner />
                </div>
                <Container fluid className="homecontainer">
                    <h1 className="Listingh1">GIT CLUB</h1>
                    <hr />
                    <Profiles />
                    <hr />
                    <h1 className="Listingh1">PLEASE DON'T HESISTATE TO <Link to="/ContactUs" style={{ color: "#28CDE9" }}>GET IN TOUCH</Link></h1>
                    <hr />
                    <h1 className="Listingh1">OUR JOURNEY USING <a href="https://www.scrum.org/" target="__blank" style={{ color: "#28CDE9" }}>SCRUM</a></h1>
                    <hr />
                    <p id="Carouselp1"> Scrum is a framework that helps teams work together. Much like a rugby team (where it gets its name) training for the big game,
                    Scrum encourages teams to learn through experiences, self-organize while working on a problem, and reflect on their wins and losses to continuously improve.</p> 
                    <p id="Carouselp1">As a team we have used Scrum during this project.</p>
                    <p id="Carouselp1">Every day we have had a stand up to see what everyone is working on & if they have any blockers to the tasks.</p>
                    <p id="Carouselp1">We have assigned stories to our sprint each week and have been able to be flexible on our workload because of this.</p><br/>
                    <h5 id="abouth5">Courage</h5>
                    <p id="Carouselp1">The team members have taken a challenge and worked on tasks that they havent alyways been familiar with.</p><br/>
                    <h5 id="abouth5">Focus</h5>
                    <p id="Carouselp1">The sprint backlogs have all been worked towards by the team to accomplish everything on time.</p><br/>
                    <h5 id="abouth5">Commitment</h5>
                    <p id="Carouselp1">Everyone has done additional work towards the project at home.</p><br/>
                    <h5 id="abouth5">Respect</h5>
                    <p id="Carouselp1">All ideas & opinions have been listened too & valued.</p><br/>
                    <h5 id="abouth5">Openness</h5>
                    <p id="Carouselp1">The team have constantly communicated and used each others knowledge to help solve any issues.</p><br/>

                </Container>
            </div>
        )
    }
}
