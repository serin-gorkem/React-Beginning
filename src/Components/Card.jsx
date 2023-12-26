export default function Card(props) {
  const altText = `Image of ${props.alt}`;
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "Sold Out";
  } else if (props.location === "Online") {
    badgeText = "Online";
  }
  return (
    <>
      <div className="relative" aria-label="person-image">
        <img
          src={`/images/${props.coverImg}`}
          alt={altText}
          className="h-full w-full rounded-xl"
        ></img>
        {badgeText ? (
          <div className="absolute left-2 top-2 rounded-md bg-white p-1 px-2">
            <p>{badgeText}</p>
          </div>
        ) : null}
      </div>
      <div
        className="my-2 flex items-center justify-start gap-1"
        aria-label="person-stars"
      >
        <img src="/images/star.png" alt="Star icon" className="w-4"></img>
        <p>
          {" "}
          {props.rating}{" "}
          <span className=" text-[#918E9B]">
            ({props.reviewCount}) <span className=" font-bold">·</span>{" "}
            {props.location}{" "}
          </span>{" "}
        </p>
      </div>
      <div aria-label="title">
        <h2> {props.title}</h2>
      </div>
      <div aria-label="price">
        <p>
          <span className="font-bold"> From ${props.price} </span>/ person
        </p>
      </div>
    </>
  );
}
