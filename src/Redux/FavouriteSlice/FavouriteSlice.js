import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favoriteMovie:[],
    favoriteId:[],
}

const favoriteSlice = createSlice({
    name:"favorite",
    initialState,
    reducers:{
        setFavoriteMovie:(state,action) => {
            const favoriteMovie = action.payload;
            const existingMovie = state.favoriteMovie.find(movie => movie.imdbID == favoriteMovie.imdbID)
            if(existingMovie){
                state.favoriteMovie = state.favoriteMovie.filter(movie => movie.imdbID !== favoriteMovie.imdbID);
            }
            else{
                state.favoriteMovie.push(favoriteMovie)
            }
},
        setFavoriteId:(state,action) => {
           const favoriteMovieId = action.payload;
           const existingMovieId = state.favoriteId.find(movieId => movieId == favoriteMovieId)
           if(existingMovieId){
            state.favoriteId = state.favoriteId.filter(movieId => movieId !== favoriteMovieId);
        }
        else{
            state.favoriteId.push(favoriteMovieId)
        }
        }
    }
})


export const {setFavoriteMovie,setFavoriteId} = favoriteSlice.actions;
export default favoriteSlice.reducer;