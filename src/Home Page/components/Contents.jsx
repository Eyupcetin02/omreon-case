import React, { useEffect, useState } from 'react';
import { FaCirclePlay } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import MovieKids from './collections/MovieKids';
import TvShowWar from './collections/TvShowWar';
import MovieHorror from './collections/MovieHorror';
import TvShowComedy from './collections/TvShowComedy';



const Contents = () => {

  const {mode} = useSelector(state => state.mode)
  const [info , setInfo] = useState({img : "https://tr.web.img4.acsta.net/pictures/210/562/21056253_20131108151938568.jpg" , desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, totam consequuntur iusto cumque excepturi laudantium necessitatibus sunt voluptates vitae fugiat autem soluta animi inventore est modi debitis nam cupiditate magni veritatis! At tenetur, mollitia nulla impedit doloribus ab beatae consectetur ad eveniet sequi maiores necessitatibus ipsa nemo saepe veniam laboriosam!"})
  const [filter , setFilter] = useState("hepsi")

  const filterChange = (e)=>{
    setFilter(e.target.value)
    console.log(filter);
  }

    return (
        <div className={mode ? "container" : "container-active"}> 
        <div className="content-wrapper" id="content-wrapper">
        <div className='featured-items'>
        <p className={mode ? "featured-desc" : "featured-desc-active"}>
            {info.desc}
          </p>
          <div className="featured-buttons">
            <button className="play-button">
            <FaCirclePlay/> Oynat
            </button>
            <button className="info-button">
              <i className="bi bi-info-circle"></i> Daha Fazla Bilgi
            </button>
          </div>
        </div>
        <div className="featured-content" id="featured-content" style={{backgroundImage:`url(${info.img})`}}>
         
        </div>
       
      </div>
      <div className="movie-list-filter">
        <select onChange={filterChange} name="" id="" className="filter">
          <option value="hepsi">Hepsi</option>
          <option value="Dizi">Diziler</option>
          <option value="Film">Filmler</option>
        </select>
      </div>


      <div className="movie-list-conteiner">
      {filter === 'hepsi' || filter === 'Dizi' ? (
          <>
            <h1 className="movie-list-title">Aile</h1>
            <TvShowComedy setInfo={setInfo}/>
          </>
        ) : null}

        {filter === 'hepsi' || filter === 'Film' ? (
          <>
            <h1 className="movie-list-title">Korku</h1>
            <MovieHorror setInfo={setInfo}/>
          </>
        ) : null}

        {filter === 'hepsi' || filter === 'Dizi' ? (
          <>
            <h1 className="movie-list-title">Savaş</h1>
            <TvShowWar setInfo={setInfo}/> 
          </>
        ) : null}

        {filter === 'hepsi' || filter === 'Film' ? (
          <>
            <h1 className="movie-list-title">Çocuk</h1>
            <MovieKids setInfo={setInfo}/>
          </>
        ) : null}
      </div>
      
        </div>
    );
}

export default Contents;
