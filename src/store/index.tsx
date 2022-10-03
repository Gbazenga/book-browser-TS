import { bookItf } from "../app/Interfaces";
import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit"

const wishlist: bookItf[] = []
const highlightedBook: bookItf = {key: 1, title: "Christine", genre: "Horror", synopsis: "A love triangle involving 17-year-old misfit Arnie Cunningham, his new girlfriend and a haunted 1958 Plymouth Fury. Dubbed Christine by her previous owner, Arnie's first car is jealous, possessive and deadly. ", img: "https://upload.wikimedia.org/wikipedia/en/d/d3/StephenKing-Christine.jpg", author: "Stephen King"}

const counterSlice = createSlice({
    name: "counter",
    initialState: {counter: 0, hasWishlist: false, wishList: wishlist, books: [], highlightedBook: highlightedBook},
    reducers: {
        increment(state, action: PayloadAction<bookItf>) {
            state.counter++;
            state.hasWishlist = true;
            state.wishList.unshift(action.payload);
        },
        decrement(state, action) {
            state.counter--;
            if(state.counter === 0){
                state.hasWishlist = false;
            }

            const filtered = state.wishList.filter((book: bookItf) => {
                return (book.title !== action.payload)
            })

            state.wishList = filtered;
        },
        getBookInfo(state, action) {
            let highlighted: bookItf[]

            highlighted = state.books.filter((book: bookItf) => {
                return (book.title === action.payload)
            })

            state.highlightedBook = highlighted[0]
        },
        populateBookList(state, action){
            state.books = action.payload
        }
    }
})

const store = configureStore({
    reducer: counterSlice.reducer
});

export const counterActions = counterSlice.actions;
export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;