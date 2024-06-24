import {configureStore} from "@reduxjs/toolkit"
import getMovieSlice from "./getMovie/getMovieSlice";
import modeSlice from "./DLmode/DLmode"
import modalSlice from "./movieModal/modal";
import TvShowSlice from "./getMovie/getTvShowSlice";

const store = configureStore({

    reducer:{
        movies : getMovieSlice,
        tv : TvShowSlice,
        mode : modeSlice,
        modal : modalSlice,
        info : modalSlice
    }


})



export default store;