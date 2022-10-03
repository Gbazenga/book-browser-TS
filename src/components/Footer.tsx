import "./Footer.css"

import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

function Footer() {
    return(
        <footer>
            <Row>
                <Col lg={6} xs={12} className="footer-contacts">
                    <p>Contact Info</p>
                    <button>guilhermebazenga@gmail.com</button>
                    <button><a href="https://www.linkedin.com/in/guilhermebazengacoder/">LinkedIn</a></button>
                </Col>
                <Col lg={6} xs={12}  className="flaticon-credits">
                    <a href="https://www.flaticon.com/free-icons/hiking" title="hiking icons">Hiking icons created by Freepik - Flaticon</a><br />
                    <a href="https://www.flaticon.com/free-icons/clown" title="clown icons">Clown icons created by max.icons - Flaticon</a><br />
                    <a href="https://www.flaticon.com/free-icons/humor" title="humor icons">Humor icons created by Hidra - Flaticon</a><br />
                    <a href="https://www.flaticon.com/free-icons/living-room" title="living room icons">Living room icons created by Freepik - Flaticon</a><br />
                    <a href="https://www.flaticon.com/free-icons/book" title="book icons">Book icons created by Freepik - Flaticon</a>
                </Col>
            </Row>
        </footer>
    )
}

export default Footer;