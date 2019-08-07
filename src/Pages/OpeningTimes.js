import React from 'react';
import { Container } from "react-bootstrap";
import Banner from '../Components/Banner.component';
import Table from 'react-bootstrap/Table';
import './OpeningTimes.css';

class OpeningTimes extends React.Component {
    render() {
        return (
            <div>
                <div className="banner-img-wrapper">
                    <Banner />
                </div>

                <Container fluid className="homecontainer">
                    <h1 className="Listingh1">OPENING TIMES</h1>
                    <hr />
                    <br/>
                    <Table className="opening-times" style={{ color: "white", textAlign: "left" }}>
                        <tbody>
                            <tr>
                                <td>MONDAY</td>
                                <td>12:00 - 00:00</td>
                            </tr>
                            <tr>
                                <td>TUESDAY</td>
                                <td>12:00 - 00:00</td>
                            </tr>
                            <tr>
                                <td>WEDNESDAY</td>
                                <td>12:00 - 00:00</td>
                            </tr>
                            <tr>
                                <td>THURSDAY</td>
                                <td>12:00 - 00:00</td>
                            </tr>
                            <tr>
                                <td>FRIDAY</td>
                                <td>12:00 - 00:00</td>
                            </tr>
                            <tr>
                                <td>SATURDAY</td>
                                <td>12:00 - 00:00</td>
                            </tr>
                            <tr>
                                <td>SUNDAY</td>
                                <td>12:00 - 00:00</td>
                            </tr>
                            <tr>
                                <td colSpan="2" style={{ color: "white", textAlign: "left", fontSize:"100"}}>The Cinema is closed on Christmas Day</td>
                            </tr>
                        </tbody>
                    </Table>


                </Container>
                <br/>
            </div>
            

        )
    }
}
export default OpeningTimes


// <p style={{ color: "white", textAlign: "left"}} >The Cinema is closed on Christmas Day</p>