// ImageGrid.js
import React from 'react';

const Image = ({ images }) => {
  return (
    <section>
      <h2>Images</h2>
      <div className="image-grid">
        {images.map(img => (
          <img key={img.id} src={img.download_url} alt={`Random ${img.id}`} />
        ))}
      </div>
    </section>
  );
};

export default Image;
