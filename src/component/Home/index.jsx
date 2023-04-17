import { Link } from "react-router-dom";
import './Home.css'
import '../../global/grid.css'
import ProductItem from "../ProductItem";

function Home() {
    return (
        <div className="main">
            <div className="grid wide">
                <div>
                    <div className="grid-top ">
                        <h3>Trang chủ</h3>
                    </div>
                    <div className="grid-top grid-bottom">
                        <span>phim bộ</span>
                    </div>
                </div>

                <div className="row  main">

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
                            
                        </div>
                    </div>

                    <div className="col l-4 m-12 c-12 sidebar">
                        <div className="product-sidebar"></div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;