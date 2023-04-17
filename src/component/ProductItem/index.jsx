import "./ProductItem.css";

function ProductItem() {
  return (
    <div>
      <a href="/">
          <div className="product-item">
            <figure className="product-img">
                <img src="https://static.tvtropes.org/pmwiki/pub/images/100420.jpg" alt="the avengers"></img>
            </figure>
            <span className="product-status">Full hd -Phụ đề</span>
            <span className="product-episode">Tập API</span>
            <div className="product-pots-title">
                <h2>The Avengers</h2>
                <p>Maver</p>
            </div>
          </div>
      </a>
    </div>
  );
}

export default ProductItem;
