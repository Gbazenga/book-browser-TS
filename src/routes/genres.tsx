import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"

import Header from "../components/Header"
import Footer from "../components/Footer"

import { Link } from "react-router-dom"
import "./genres.css"

const adventureImg = require ("../imgs/hiking.png")
const horrorImg = require ("../imgs/clown.png")
const humorImg = require ("../imgs/theater-masks.png")
const lifeImg = require ("../imgs/living-room.png")

function Genres() {
    return(
        <>
            <Header headerMini={true} />
            <h2 id="internal-title">Genres Page</h2>
            <Container>
                <Row>
                    <Col xxl={{span: 4, offset : 2}} xl={6} className="genre-layout">
                        <div className="genre-box">
                            <h3>Adventure</h3>
                            <img src={adventureImg} alt="adventure"></img>
                            <p>Settle in for the adventure of a life time! Incredible vistas, acts of heroism, and ancient tombs await inbetween these pages, ready to be discovered.</p>
                            <Link to="/genres/Adventure">View more books on Adventure</Link>
                        </div>
                    </Col>

                    <Col xxl={4} xl={6}  className="genre-layout">
                        <div className="genre-box">
                            <h3>Horror</h3>
                            <img src={horrorImg} alt="Horror"></img>
                            <p>Have a craving for frights and the feeling of unease? Don't worry, you won't find any here... unless?</p>
                            <Link to="/genres/Horror">View more books on Horror</Link>
                        </div>
                    </Col>

                    <Col xxl={{span: 4, offset : 2}} xl={6} className="genre-layout">
                        <div className="genre-box">
                            <h3>Humor</h3>
                            <img src={humorImg} alt="Humor"></img>
                            <p>Because sometimes you just need something to lift your spirits and tickle your funny bone. ...Wait, no,  did I mix up horror and humor again?</p>
                            <Link to="/genres/Humor">View more books on Humor</Link>
                        </div>
                    </Col>

                    <Col xxl={4} xl={6} className="genre-layout" >
                        <div className="genre-box">
                            <h3>Life & Living</h3>
                            <img src={lifeImg} alt="Life & Living"></img>
                            <p>Learn to adult with these books! Cooking, carpentry and whetever else they do.</p>
                            <Link to="/genres/Life & Living">View more books on Life & Living</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
            <br />
            <br />
            <br />
            <br />
            <br />
            <Footer />
        </>
    )
}

export default Genres