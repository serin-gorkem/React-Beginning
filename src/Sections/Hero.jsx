import Card from "../Components/Card";
import data from "../data";

export default function Hero() {
  const cardItems = data.map((item) => (
    <li key={item.id} className="h-full w-48 sm:w-80">
      <Card {...item} />
    </li>
  ));
  return (
    <div className="flex w-full flex-col items-center justify-center p-6 sm:px-0">
      <div className="flex w-full flex-col items-center justify-center sm:px-4 ">
        <img src="/images/photo-grid.png" alt="people" className=""></img>
        <h1 className="my-4 self-start text-3xl font-semibold sm:text-5xl">
          Online Experiences
        </h1>
        <p className=" self-start text-sm sm:text-xl">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
      { // If there are more than 3 elements we don't need overflow-x-auto 
        data.length > 3 ? <div className="my-12 flex w-full overflow-x-auto sm:pl-4">
        <ul className="flex items-center justify-center gap-5 max-sm:w-[200%]">
          {cardItems}
        </ul>
      </div> :
      <div className="my-12 flex w-full lg:overflow-hidden overflow-x-auto sm:pl-4">
        <ul className="flex items-center justify-center gap-5 max-sm:w-[200%]">
          {cardItems}
        </ul>
      </div>
      }
    </div>
  );
}
