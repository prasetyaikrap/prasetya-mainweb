import { useState } from "react";

function CMCard(props) {
  const [button, setButton] = useState(props.actionBtn[0]);
  function cardClicked(e) {
    e.preventDefault();
    const cardId = e.target.id;
    const cardClass = "." + props.CSScontentCard;
    switch (document.getElementById(cardId).getAttribute("data-selected")) {
      case "true":
        document.getElementById(cardId).removeAttribute("style");
        document.getElementById(cardId).setAttribute("data-selected", "false");
        setButton(props.actionBtn[0]);
        break;
      case "false":
        document.querySelectorAll(cardClass).forEach((q) => {
          if (q.getAttribute("data-selected") === "true") {
            q.removeAttribute("style");
            q.setAttribute("data-selected", "false");
          }
        });
        document.getElementById(cardId).style.border =
          "solid 1px var(--col-dkblue)";
        document.getElementById(cardId).style.backgroundColor =
          "rgb(243,243,243)";
        document.getElementById(cardId).style.transition = "all 0.3s ease";
        document.getElementById(cardId).setAttribute("data-selected", "true");
        setButton(props.actionBtn[1]);
      default:
    }
  }

  return (
    <div className={props.CSScontentBox}>
      <div className={props.CSScontentHeader}>
        <h2>{props.CMTitle}</h2>
        <button>{button}</button>
      </div>
      <hr />
      <div className={props.CSScardContainer}>
        <div
          id="card1"
          data-selected="false"
          className={props.CSScontentCard}
          onClick={cardClicked}
        >
          <div id="contentPublishedDate" className={props.CSScontentItem}>
            <h4>Published Date</h4>
            <p>22 March 2022</p>
          </div>
          <div id="contentAuthor" className={props.CSScontentItem}>
            <h4>Author</h4>
            <p>Prasetya Ikra Priyadi</p>
          </div>
          <div id="contentTitle" className={props.CSScontentItem}>
            <h4>Title</h4>
            <p>Personal Blog with NextJs and Firebase</p>
          </div>
          <div className={props.CSScontentItem}>
            <button>Explore</button>
          </div>
          <div className={props.CSSitemAction}>
            <button>V</button>
            <button>X</button>
            <button>Arc</button>
          </div>
        </div>
      </div>
      <div className={props.CSScontentPageNav}>
        <button
          id={props.prevBtn}
          className={props.CSSarrowPrev}
          onClick={props.pageBtn}
        >
          Previous
        </button>
        <p className={props.CSSpageNumber}>{props.pageCount}</p>
        <button
          id={props.nextBtn}
          className={props.CSSarrowNext}
          onClick={props.pageBtn}
        >
          Next
        </button>
      </div>
    </div>
  );
}
export default CMCard;
