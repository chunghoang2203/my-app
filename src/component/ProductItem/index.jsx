import "./ProductItem.css";

function ProductItem() {
  return (
    <div>
      <a href="/">
          <div className="product">
            <div className="product-item">
              <figure className="product-img">
                  <img src="https://upload.wikimedia.org/wikipedia/vi/e/e8/Avengers-Infinity_War-Official-Poster.jpg" alt="the avengers"></img>
              </figure>
              <span className="product-status">Full hd -Phụ đề</span>
              <span className="product-episode">Tập API</span>
              <div className="product-pots-title">
                  <h2>The Avengers</h2>
                  <p>Maver</p>
              </div>
            </div>
          </div>
      </a>
    </div>
  );
}

export default ProductItem;
