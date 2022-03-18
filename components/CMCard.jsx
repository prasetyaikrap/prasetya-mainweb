import Link from "next/link";

function CMCard(props) {
  return (
    <div className={props.CSScontentBox}>
      <div className={props.CSScontentHeader}>
        <h2>{props.CMTitle}</h2>
        <Link href={props.routeLink}>
          <button>Compose</button>
        </Link>
      </div>
      <hr />
      <div className={props.CSScardContainer}>
        <div className={props.CSScontentCard}></div>
        <div className={props.CSScontentCard}></div>
        <div className={props.CSScontentCard}></div>
      </div>
      <div className={props.CSScontentPageNav}>
        <button
          id={props.prevBtn}
          className={props.CSSarrowPrev}
          onClick={props.pageButton}
        >
          Previous
        </button>
        <p className={props.CSSpageNumber}>{props.pageCount}</p>
        <button
          id={props.nextBtn}
          className={props.CSSarrowNext}
          onClick={props.pageButton}
        >
          Next
        </button>
      </div>
    </div>
  );
}
export default CMCard;
