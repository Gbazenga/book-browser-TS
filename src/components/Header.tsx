import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import "./Header.css"

import { useAppSelector } from "../app/hooks"

import { Link } from "react-router-dom"

const Headerbg = require("../imgs/header-bg.jpg")

interface headerMini{
    headerMini: boolean
}

const Header:React.FC<headerMini> = (props) => {

    const counter = useAppSelector(state => state.counter)
    const hasWishlist = useAppSelector(state => state.hasWishlist)
    const wishList = useAppSelector(state => state.wishList)

    const navClasses = hasWishlist ? "no-underline nav-link" : "nav-link";

    return(
        <>
        
        {!props.headerMini && <header style={{backgroundImage: `url(${Headerbg})`}}>
            <div id="wishlist-add" className="wishlist-popup">
                <p>Item added to withlist!</p>
            </div>
            <div id="wishlist-sub" className="wishlist-popup">
                <p>Item removed from withlist!</p>
            </div>
            <Navbar collapseOnSelect expand="lg">
                <Container>
                <Link to="/"><span className="navbar-brand">Book Browser</span></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="nav-link" to="/books">Books</Link>
                        <Link  className="nav-link" to="/genres">Genres</Link>
                        <Link  className="nav-link" to="/authors">Authors</Link>
                        <Link to="/wishlist" id="wishlist" className={navClasses}>Wishlist
                        { hasWishlist && <><span className="book-quantity">{counter}</span>
                             <div className="dropdown-menu">
                                {wishList.map((bookName) => {
                                    return (<p key={bookName.key}>{bookName.title}</p>)
                                })}
                            </div></>}
                        </Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div id="header-text">
                <h2>See the latest in literature, read<br/>our synopses, and add books to<br/>your wishlist for future reading</h2>
                <Link className="btn" to="/wishlist">Manage Your wishlist</Link>
            </div>

            <div id="mobile-text">
                <h2>See the latest in literature, read our synopses, and add books to your wishlist for future reading</h2>
                <Link className="btn" to="/wishlist">Manage Your wishlist</Link>
            </div>
        </header>}

        {props.headerMini && <header id="header-mini" style={{backgroundImage: `url(${Headerbg})`}}>
        <div id="wishlist-add" className="wishlist-popup">
            <p>Item added to withlist!</p>
        </div>
        <div id="wishlist-sub" className="wishlist-popup">
            <p>Item removed from withlist!</p>
        </div>
        <Navbar collapseOnSelect expand="lg">
                <Container>
                <Link to="/"><span className="navbar-brand">Book Browser</span></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="nav-link" to="/books">Books</Link>
                        <Link  className="nav-link" to="/genres">Genres</Link>
                        <Link  className="nav-link" to="/authors">Authors</Link>
                        <Link to="/wishlist" id="wishlist" className={navClasses}>Wishlist
                        { hasWishlist && <><span className="book-quantity">{counter}</span>
                             <div className="dropdown-menu">
                                {wishList.map((bookName) => {
                                    return (<p key={bookName.key}>{bookName.title}</p>)
                                })}
                            </div></>}
                        </Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>}

        </>
    )
}

export default Header;