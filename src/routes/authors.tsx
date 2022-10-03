import Header from "../components/Header"

import { Link } from "react-router-dom"

import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"

function Authors() {

    return(
        <>
        <Header headerMini={true} />
        <h2 id="internal-title">Authors Page</h2>
        <Container >

        <div className="book-item-large">
                <Row className="book-item-box">
                    <Col xl={4} lg={6} xs={12} className="book-image">
                        <img src="https://alchetron.com/cdn/douglas-adams-749b1aac-4cef-42db-842c-71fcbb53ac6-resize-750.jpeg" alt="Douglas Adams"></img>
                    </Col>
                    <Col xl={8} lg={6} xs={12} className="book-text">
                        <h4>Douglas Adams</h4>
                        <h6>Genre(s): <Link to={`/genres/Humor`}>Humor</Link></h6><br />
                        
                        <Link className="btn" to={"/authors/Douglas Adams"}>Current Books Available</Link>
                    </Col>
                </Row>
                <hr />
            </div>

           

            <div className="book-item-large">
                <Row className="book-item-box">
                    <Col xl={4} lg={6} xs={12} className="book-image">
                        <img src="https://images.wook.pt/getresourcesservlet/GetResource?5YwWcY9Q2vv5ACyv+ZRfLvd5wsBnieq7SRjv3V72zEs=" alt="Joanna Farrow"></img>
                    </Col>
                    <Col xl={8} lg={6} xs={12} className="book-text">
                        <h4>Joanna Farrow</h4>
                        <h6>Genre(s): <Link to={`/genres/Life & Living`}>Life & Living</Link></h6><br />
                        
                        <Link className="btn" to={"/authors/Joanna Farrow"}>Current Books Available</Link>
                    </Col>
                </Row>
            </div>
            <hr />

            <div className="book-item-large">
                <Row className="book-item-box">
                    <Col xl={4} lg={6} xs={12} className="book-image">
                        <img src="https://cdna.artstation.com/p/assets/images/images/024/622/624/large/roger-magrini-tolkien-3-bnw.jpg?1583008987" alt="J. R. R. Tolkien"></img>
                    </Col>
                    <Col xl={8} lg={6} xs={12} className="book-text">
                        <h4>J. R. R. Tolkien</h4>
                        <h6>Genre(s): <Link to={`/genres/Adventure`}>Adventure</Link></h6><br />
                        
                        <Link className="btn" to={"/authors/J. R. R. Tolkien"}>Current Books Available</Link>
                    </Col>
                </Row>
            </div>
            <hr />
            
            <div className="book-item-large">
                <Row className="book-item-box">
                    <Col xl={4} xs={12} className="book-image">
                        <img src="https://www.famousbirthdays.com/headshots/mamadou-ndiaye-2.jpg" alt="Mamadou Ndiaye"></img>
                    </Col>
                    <Col xl={8} xs={12} className="book-text">
                        <h4>Mamadou Ndiaye</h4>
                        <h6>Genre(s): <Link to={`/genres/Humor`}>Humor</Link></h6><br />
                        
                        <Link className="btn" to={"/authors/Mamadou Ndiaye"}>Current Books Available</Link>
                    </Col>
                </Row>
            </div>

            <hr />

            <div className="book-item-large">
                <Row className="book-item-box">
                    <Col xl={4} lg={6} xs={12} className="book-image">
                        <img src="https://comicvine.gamespot.com/a/uploads/scale_small/11/111746/7129090-3389.jpg" alt="Stephen king"></img>
                    </Col>
                    <Col xl={8} lg={6} xs={12} className="book-text">
                        <h4>Stephen King</h4>
                        <h6>Genre(s): <Link to={`/genres/Horror`}>Horror</Link></h6><br />
                        
                        <Link className="btn" to={"/authors/Stephen King"}>Current Books Available</Link>
                    </Col>
                </Row>
                
            </div>

        </Container>
        </>
    )
}

export default Authors