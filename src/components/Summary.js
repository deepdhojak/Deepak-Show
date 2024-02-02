import React from 'react'


const Summary = () => {
  let fetchShowSummary = localStorage.getItem('{show.show.summary}') || '';
  let date = localStorage.getItem('{show.show.premiered}') || '';
  let Language = localStorage.getItem('{show.show.language}') || '';
  let Name = localStorage.getItem('{show.show.name}') || '';

  return (
    <div>
       <h1 className="text-center my-3">Summary</h1>
      <p className="text-center my-3">{fetchShowSummary}</p>
       <hr />
      <div className="d-grid gap-2 col-6 mx-auto">

        <button type="button" className="btn btn-primary my-5" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
          Book Show
        </button>

      </div>

      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">{Name}</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>
                Language: {Language}
              </p>
              <p>
                Premiere Date: {date}
              </p>

            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Book</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary
