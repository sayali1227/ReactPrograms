import React, { useRef } from 'react';


function AddMovie(props) {
  const titleRef = useRef('');
  const directorRef = useRef('');
  const releaseDateRef = useRef('');
  const producerRef = useRef('');

  function submitHandler(event) {
    event.preventDefault();

    // could add validation here...

    const movie = {
      title: titleRef.current.value,
      director: directorRef.current.value,
      releaseDate: releaseDateRef.current.value,
      producer: producerRef.current.value,
    };

    props.onAddMovie(movie);
  }

  return (
    <form onSubmit={submitHandler}>
      <div >
        <label htmlFor='title'>Title &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <input type='text' id='title' ref={titleRef} />
      </div>
      <div >
        <label htmlFor='director'>Director&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <input type='text' id='director' ref={directorRef} />
      </div>
      <div >
        <label htmlFor='producer'>Producer&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <input type='text' id='producer' ref={producerRef} />
      </div>
      <div >
        <label htmlFor='date'>Release Date</label>
        <input type='text' id='date' ref={releaseDateRef} />
      </div>
      <button>Add Movie</button>
    </form>
  );
}

export default AddMovie;