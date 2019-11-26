import React from 'react';

const DetailPage = (place) => {
  return (
    <div>
      <header>
          <h2>{place.title}</h2>
      </header>
      <section>
        <div className="place-content">
          <div className="place-images">
            <div className="main-image">
              <img src=""/>
            </div>
            <div className="thumbnails">
            {place.thumbnail.map(({ src }) => (
              <div className="single-thumbnail"><img src={src}/></div>
            ))}
            </div>
          </div>
          <div className="place-description">

          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailPage;