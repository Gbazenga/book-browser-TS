import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import "./BookItem.css"

import { useDispatch } from "react-redux"
import { useAppSelector } from "../app/hooks"
import { counterActions } from "../store/index"

import { bookItf } from "../app/Interfaces"

import { Link, Outlet } from "react-router-dom"
import React from "react"

interface BookDataInterface{
    bookData:{
        key: number,
        title: string,
        genre: string,
        synopsis: string,
        img: string,
        author: string
    }[]
}

const BookItem:React.FC<BookDataInterface> = (props) =>{

    

    const dispatch = useDispatch()

    const wishList = useAppSelector(state => state.wishList)

    function incrementHandler(event: React.MouseEvent) {
        event.preventDefault()

        const wishlistAdd = document.getElementById("wishlist-add")!;
        const target =  event.target as HTMLInputElement

        const parentElement = target!.parentElement!.querySelector("h4")!.textContent
        const filterBook = props.bookData.filter((book: bookItf) => {
            return(book.title === parentElement)
        })
        dispatch(counterActions.increment(filterBook[0]))
        
        wishlistAdd.classList.add("transition")
        setTimeout(() => {
            wishlistAdd.classList.remove("transition")
        }, 4000)

    }

    function decrementHandler(event: React.MouseEvent) {
        event.preventDefault()

        const wishlistSub = document.getElementById("wishlist-sub")! ;
        const target =  event.target as HTMLInputElement

        const parentElement = target!.parentElement!.querySelector("h4")!.textContent
        dispatch(counterActions.decrement(parentElement))

        wishlistSub.classList.add("transition")
        setTimeout(() => {
            wishlistSub.classList.remove("transition")
        }, 4000)

    }

    function checkIfWishlist(a: string) {

        const checking = wishList.filter((book: bookItf) => {
            return (book.title === a)
        })

        if(checking.length === 0){
            return true
        }
        else{
            return false
        }
        
    }


    return(
        <>
            {props.bookData.map((book: bookItf) => {
                return(
            <Col xl={4} lg={6} xs={12} className="book-item" key={book.key}>
                <div className="book-item-box">
                    <h4>{book.title}</h4>
                    <Link to={`/genres/${book.genre}`}><p>{book.genre}</p></Link>
                    <h6>{book.author}</h6>
                    <p id="text-hidden"><u>Book Synopses</u><br/><br/>{book.synopsis}</p>
                    <img src={book.img} alt={`${book.title} cover`}></img>
                    <Link className="btn" to={`/books/${book.title}`}>Book Info</Link>
                    {checkIfWishlist(book.title) && <Button className="active wishlistBtn" onClick={incrementHandler}>Add to wishlist</Button>}
                    {!checkIfWishlist(book.title) && <Button className="active wishlistBtn" onClick={decrementHandler}>Remove from wishlist</Button>}
                    <Outlet />
                </div>
                
            </Col>
            )})}
        </>
    )
}

export default BookItem;