import { useDispatch } from "react-redux"
import { useAppSelector } from "../app/hooks"
import Header from "../components/Header"
import Footer from "../components/Footer"

import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

import { Link} from "react-router-dom"

import { useEffect } from "react"

import { counterActions } from "../store/index"
import { bookItf } from "../app/Interfaces"

import "./books.css"

function Books() {

    const dispatch = useDispatch()

  useEffect(() => {
    const fetchBooks = async() => {
      const response =  await fetch("https://book-browser-eaacc-default-rtdb.firebaseio.com/books.json")
      const respondeData = await response.json()

      let bookArray = []

      for(const key in respondeData) {
        bookArray.push({
          key: respondeData[key].key,
          title: respondeData[key].title,
          genre: respondeData[key].genre,
          synopsis: respondeData[key].synopsis,
          img: respondeData[key].cover,
          author: respondeData[key].author
        })
      }
      dispatch(counterActions.populateBookList(bookArray))
    }

    fetchBooks()
  })

    const bookList = useAppSelector(state => state.books)

    return(
            <>
            <Header headerMini={true} />
            <h2 id="internal-title">Books Page</h2>
                {bookList.map((book: bookItf) => {
                    return(
                        
                        <Col lg={{span: 10, offset: 1}} className="book-item-large" key={book.key}>
                            <div className="book-item-box">
                            <Row>
                                <Col lg={4} xs={12} className="book-image">
                                    <img src={book.img} alt={`${book.title} cover`}></img>
                                </Col>
                                <Col lg={8} xs={12} className="book-text">
                                    <h4>{book.title}</h4>
                                    <h6>{book.author}</h6><br />
                                    <Link to={`/genres/${book.genre}`}><p>{book.genre}</p></Link>
                                    <p id="text-hidden">Book Synopses<br/><br/>{book.synopsis}</p>
                                    
                                    <Link className="btn" to={`/books/${book.title}`}>Book Info</Link>
                                </Col>
                            </Row>
                            </div>
                            <hr/>
                        </Col>
                        
                )})}
            <Footer />
            </>
    )
}

export default Books