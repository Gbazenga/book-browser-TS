import { useDispatch } from "react-redux"
import { useAppSelector } from "../app/hooks"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { counterActions } from "../store/index"
import Button from "react-bootstrap/Button"

import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

import { Link } from "react-router-dom"

import "./wishlist.css"

function Wishlist() {

    const wishList = useAppSelector(state => state.wishList)
    const hasWishList = useAppSelector(state => state.hasWishlist)

    const dispatch = useDispatch()

    function decrementHandler(event: React.MouseEvent) {
        event.preventDefault()
        const target = event.target as HTMLInputElement
        const parentElement = target!.parentElement!.querySelector("h4")!.textContent
        dispatch(counterActions.decrement(parentElement))

        const wishlistSub = document.getElementById("wishlist-sub")!;

        wishlistSub.classList.add("transition")
        setTimeout(() => {
            wishlistSub.classList.remove("transition")
        }, 4000)

    }

    return(
            <>
            <Header headerMini={true} />
            <h2 id="internal-title">Current Wishlist</h2>
            {!hasWishList && <p id="error-text">You haven't added anything to your wishlist yet.</p>}
            {hasWishList && <>
                {wishList.map((book) => {
                    return(
                        
                        <Col xl={{span: 10, offset: 1}} className="book-item-large" key={book.key}>
                            <div className="book-item-box">
                            <Row>
                                <Col xl={4} lg={6} xs={12} className="book-image">
                                    <img src={book.img} alt={`${book.title} cover`}></img>
                                </Col>
                                <Col xl={8} lg={6} xs={12} className="book-text">
                                    <h4>{book.title}</h4>
                                    <p><Link to={`/genres/${book.genre}`}>{book.genre}</Link></p>
                                    <p id="text-hidden">Book Synopses<br/><br/>{book.synopsis}</p>
                                    
                                    <Link className="btn" to={`/books/${book.title}`}>Book Info</Link><br/>
                                    <Button onClick={decrementHandler}>Remove from wishlist</Button>
                                </Col>
                            </Row>
                            </div>
                        </Col>
                        
                )})}
                </>}
            <Footer />
            </>
    )
}

export default Wishlist