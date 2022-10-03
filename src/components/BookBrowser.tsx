import React, { useState, useEffect } from "react";

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"

import BookItem from "./BookItem";

import "./BookBrowser.css"

import { useAppSelector } from "../app/hooks";
import { bookItf } from "../app/Interfaces";

function BookBrowser() {

    const books: bookItf[] = useAppSelector(state => state.books)

    const [curGenre, setCurGenre] = useState("All");
    const [updatedGenres, setUpdatedGenres] = useState(books);


    useEffect(() => {
        if(curGenre === "All") {
            setUpdatedGenres(books)
        }
        else(
            setUpdatedGenres(books.filter((book: bookItf) => {
                return(book.genre === curGenre)
            }))
        )
    }, [curGenre, books])

    function activeBtn(event: React.MouseEvent) {

        event.preventDefault();
        const target = event.target as HTMLInputElement
        setCurGenre(target!.textContent!)
        const prevGenre = document.getElementsByClassName("active")[0]
        if(prevGenre === event.currentTarget){
            return;
        }
        else{
            prevGenre.classList.toggle("active")
            event.currentTarget.classList.toggle("active")
        }
    }

    return(
        <section id="browser">
            <div id="genre-buttons">
                <button onClick={activeBtn} className="active">All</button>
                <button onClick={activeBtn}>Adventure</button>
                <button onClick={activeBtn}>Humor</button>
                <button onClick={activeBtn}>Horror</button>
                <button onClick={activeBtn}>Life & Living</button>
            </div>
            <Container>
                <Row>
                    <BookItem bookData={updatedGenres}/>
                </Row>
            </Container>
        </section>
    )
}

export default BookBrowser;