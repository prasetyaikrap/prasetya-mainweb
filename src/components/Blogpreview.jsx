function Blogpreview() {
  return (
    <section id="blog-prev">
      <h2 className="blog-prev-title">LATEST CONTENT</h2>
      <div className="prev-container">
        <div className="post-container">
          <div className="post-card">
            <div className="img-prev">Preview Image</div>
            <div className="post-prev">
              <h3>Title</h3>
              <p>Premis or Preview Text</p>
            </div>
          </div>
          <div className="post-card">
            <div className="img-prev">Preview Image</div>
            <div className="post-prev">
              <h3>Title</h3>
              <p>Premis or Preview Text</p>
            </div>
          </div>
          <div className="post-card">
            <div className="img-prev">Preview Image</div>
            <div className="post-prev">
              <h3>Title</h3>
              <p>Premis or Preview Text</p>
            </div>
          </div>
          {/* <div className="post-card">
            <div className="img-prev">Preview Image</div>
            <div className="post-prev">
              <h3>Title</h3>
              <p>Premis or Preview Text</p>
            </div>
          </div>
          <div className="post-card">
            <div className="img-prev">Preview Image</div>
            <div className="post-prev">
              <h3>Title</h3>
              <p>Premis or Preview Text</p>
            </div>
          </div> */}
          <div className="find-more">
            <h3>Find More</h3>
          </div>
        </div>
        <div className="socmed-container">
          <div className="socmed-prev"></div>
          <div className="video-prev"></div>
        </div>
      </div>
    </section>
  );
}

export default Blogpreview;
