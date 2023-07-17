import { data } from "../../helpers/data";
import Card from "./Card";
import "./Main.scss";
const Main = () => {
  console.log(data);
  return (
    <div className="card-container">
      {data.map((card) => (
        <Card {...card} key={card.id} />
        // <Card card={card} />
      ))}
    </div>
  );
};
export default Main;
