import './App.css';
import Header from './components/Header';
import BookBrowser from './components/BookBrowser';
import Footer from './components/Footer';

import { useEffect } from "react"

import { useDispatch} from "react-redux"
import { counterActions } from "../src/store/index"

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    const fetchBooks = async() => {
      const response =  await fetch("https://book-browser-eaacc-default-rtdb.firebaseio.com/books.json")
      const respondeData = await response.json()

      let fetchedBooks = []

      for(const key in respondeData) {
        fetchedBooks.push({
            key: respondeData[key].key,
            title: respondeData[key].title,
            genre: respondeData[key].genre,
            synopsis: respondeData[key].synopsis,
            img: respondeData[key].cover,
            author: respondeData[key].author
        })
      }
      dispatch(counterActions.populateBookList(fetchedBooks))
    }

    fetchBooks()
  })

  return (
    <div>
      <Header headerMini={false}/>
      <BookBrowser />
      <Footer />
    </div>
  );
}

export default App;
