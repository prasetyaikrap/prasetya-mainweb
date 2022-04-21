export function SocmedCardPreview() {
  async function setActive(e) {
    e.preventDefault;
    const buttonId = e.target.id;
    document.querySelectorAll(".socmedNav button").forEach((set) => {
      set.classList.remove("active");
    });
    document.getElementById(buttonId).classList.add("active");
  }
  return (
    <>
      <div className="socmedNav">
        <button
          id="youtubeContentPreview"
          className="buttonText active"
          onClick={setActive}
        >
          Youtube
        </button>
        <button
          id="instagramContentPreview"
          className="buttonText"
          onClick={setActive}
        >
          Instagram
        </button>
        <button
          id="linkedinContentPreview"
          className="buttonText"
          onClick={setActive}
        >
          Linkedin
        </button>
      </div>
      <div className="socmedPreview">
        <div className="socmedContent"></div>
      </div>
    </>
  );
}
