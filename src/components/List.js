import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'



const List = () => {
  const API_URL = 'https://api.tvmaze.com/search/shows?q=all';

  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setShows(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  let navigate = useNavigate();


  return (
    <div className="container my-3" >
      <h1 className="text-center" >TV Shows</h1>
      <div className="row" >

        {shows.map((show) => (
          <div className="col-md-4" key={show.show.id}>
            <h2 >{show.show.name}</h2>
            {show.show.image && <img className="img-fluid rounded" src={show.show.image.medium} alt={show.show.name} />}
            <div className="my-2 mb-0">
              <p>
                Language: {show.show.language}
              </p>
              <p>
                Genres: {show.show.genres.join(', ')}
              </p>
            </div>
            <p>Premiere Date: {show.show.premiered}</p>

            <button type="button" onClick={() => {
              localStorage.setItem('{show.show.summary}', show.show.summary);
              localStorage.setItem('{show.show.name}', show.show.name);
              localStorage.setItem('{show.show.language}', show.show.language);

              localStorage.setItem('{show.show.premiered}', show.show.premiered);

              navigate("/Summary");

            }} className="btn btn-success">Summary</button>

            <hr />
          </div>
        ))}
      </div>
    </div>
  )
}

export default List
