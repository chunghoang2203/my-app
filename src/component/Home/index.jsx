import { Link } from "react-router-dom";
import './Home.css'
import '../../global/grid.css'
import ProductList from "../ProductList";
import ListProductSidebar from "../ListSidebarProduct";
import New from "../New";

function Home() {
    return (
        <div className="container">

            <div className="grid wide">                                                                            
                <div className="row">
                    <ProductList />
                    <ListProductSidebar />
                </div>
                <div className="row">
                    <ProductList />
                    <ListProductSidebar />
                </div>
                <New />
            </div>

        </div>
    );
}

export default Home;