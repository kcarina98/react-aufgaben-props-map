import "./Produkt.css";

const Produkt = (props) => {
  return (
    <section>
      <img src={props.img} alt="" />
      <h3>{props.name}</h3>
      <p>{props.price}</p>
      <button>Buy now</button>
    </section>
  );
};

export default Produkt;
