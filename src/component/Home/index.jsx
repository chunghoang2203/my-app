import { Link } from "react-router-dom";
import './Home.css'
import '../../global/grid.css'
import ProductItem from "../ProductItem";
import ProductSidebar from "../ProductSidebar";

function Home() {
    return (
        <div className="container">
            <div className="grid wide">               
                                                               

                <div className="row">

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
                        </div>
                    </div>

                    

                    <div className="col l-4 m-12 c-12 sidebar">
                        <div className="grid-top-title grid-border-bottom-2">
                            <span>trailer phim sắp ra mắt</span>
                        </div>
                    
                        <div className=" item">
                            <ProductSidebar />
                        </div>
                        <div className=" item">
                            <ProductSidebar />
                        </div>
                        <div className=" item">
                            <ProductSidebar />
                        </div>
                        <div className=" item">
                            <ProductSidebar />
                        </div>
                        
                        
                        
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;