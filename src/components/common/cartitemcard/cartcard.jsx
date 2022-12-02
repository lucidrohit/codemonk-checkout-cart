import "./cartcard.scss";

function CartCard({ cardDetails }) {
  const { tagline, name, imageUrl, desc, id, planLink } = cardDetails;
  return (
    <div className="cart-card" key={id}>
      <img src={imageUrl} alt={name} className="cart-card__image" />
      <div className="cart-card__details">
        {tagline && <div className="cart-card__details__label">{tagline}</div>}
        <div className="cart-card__details__name">{name}</div>
        {desc && <div className="cart-card__details__desc">{desc}</div>}
        {planLink && (
          <a href={planLink} className="cart-card__details__plan">
            View Plans
          </a>
        )}
      </div>
    </div>
  );
}

export default CartCard;
