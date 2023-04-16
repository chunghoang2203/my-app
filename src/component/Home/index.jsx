import { Link } from "react-router-dom";
import './Home.css'
import '../../global/grid.css'

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

                <div className="row ">

                    <div className="col l-8 m-8 c-12 ">
                        <div className="row small-gutters">
                            <div className="col l-3 m-6 c-12 item">
                                <div className="test1"></div>
                            </div>
                            <div className="col l-3 m-6 c-12 item">
                                <div className="test1"></div>
                            </div>
                            <div className="col l-3 m-6 c-12 item">
                                <div className="test1"></div>
                            </div>
                            <div className="col l-3 m-6 c-12 item">
                                <div className="test1"></div>
                            </div>
                        </div>
                    </div>

                    <div className="col l-4 m-4 c-0">
                        <div className="test2"></div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;