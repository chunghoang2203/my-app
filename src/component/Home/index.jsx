import { Link } from "react-router-dom";
import './Home.css'
import '../../global/grid.css'
import ProductItem from "../ProductItem";

function Home() {
    return (
        <div className="container">
            <div className="grid wide">               
                                                               
                 <div>
                    <div className="grid-top">
                         <h2>Trang chủ</h2>
                     </div>
                     <div className="grid-top grid-border-bottom">
                         <span>phim mới - phim hay hd - top trending - phim bom tấn</span>
                    </div>
                 </div>

                <div className="row">

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

                    
                        <div className="product-sidebar item"></div>
                        <div className="product-sidebar item"></div>
                        <div className="product-sidebar item"></div>
                        <div className="product-sidebar item"></div>
                        <div className="product-sidebar item"></div>
                        <div className="product-sidebar item"></div>
                        <div className="product-sidebar item"></div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;