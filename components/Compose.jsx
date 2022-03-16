function Compose() {
  return (
    <div className="compose-container">
      <form action="/">
        <div className="input-box-1">
          <label for="title-post">Title</label>
          <input type="text" id="title-post" />
        </div>
        <div className="input-box-1">
          <label for="subtitle-post">Title</label>
          <input type="text" id="subtitle-post" />
        </div>
      </form>
    </div>
  );
}

export default Compose;
