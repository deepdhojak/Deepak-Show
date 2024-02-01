import React, {useEffect, useState} from 'react'


      const Summary = ({  }) => {
  const [shows, setShow] = useState([]);

  useEffect(() => {
    const fetchShow = async () => {
      try {
        const response = await fetch(`https://api.tvmaze.com/shows/${shows.show.id}`);
        const data = await response.json();
        setShow(data);
      } catch (error) {
        console.error('Error fetching show details:', error);
      }
    };

    fetchShow();
  }, []);

  if (!shows) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Show Details</h2>
      <h3>{ name}</h3>
      <p>{summary}</p>
      <div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>           
    </div>
  );
};

export default Summary
