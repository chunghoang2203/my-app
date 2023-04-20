import ProductItem from "../ProductItem";
import './ProductList.css'

function ProductList() {


  return (
    <>
      <div className="grid-top">
        <div className="grid-top-title">
          <h2>Trang chủ</h2>
        </div>
        <div className="grid-top-title grid-border-bottom-1">
          <span>phim mới - phim hay hd - top trending - phim bom tấn</span>
        </div>
      </div>

      <div className="col l-8 m-12 c-12 product-list">
        <div className="row small-gutters ">
          <div className="col l-3 m-3 c-6 item">
            <ProductItem />
          </div>
          <div className="col l-3 m-3 c-6 item">
            <ProductItem />
          </div>
          <div className="col l-3 m-3 c-6 item">
            <ProductItem />
          </div>
          <div className="col l-3 m-3 c-6 item">
            <ProductItem />
          </div>
          <div className="col l-3 m-3 c-6 item">
            <ProductItem />
          </div>
          <div className="col l-3 m-3 c-6 item">
            <ProductItem />
          </div>
          <div className="col l-3 m-3 c-6 item">
            <ProductItem />
          </div>
          <div className="col l-3 m-3 c-6 item">
            <ProductItem />
          </div>
          <div className="col l-3 m-3 c-6 item">
            <ProductItem />
          </div>
          <div className="col l-3 m-3 c-6 item">
            <ProductItem />
          </div>
          <div className="col l-3 m-3 c-6 item">
            <ProductItem />
          </div>
          <div className="col l-3 m-3 c-6 item">
            <ProductItem />
          </div>
        </div>
          <div>
              <button className="product-list-btn">Xem tất cả</button>
          </div> 
      </div>
    </>
  );
}

export default ProductList;
