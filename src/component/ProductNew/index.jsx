import './ProductNew.css'

function ProductNew() {


    return ( 
        <div className="new">
            <div className="new-img">
                <img src="https://img.meta.com.vn/Data/image/2022/05/13/thu-tu-phim-marvel-1.jpg" alt="img new" />
            </div>

            <div className="new-info">
                <button className="info-btn">Tin tức</button>
                <h1>Tên new ở here</h1>
                <div className="info-time">
                    <i class="fa-regular fa-clock"></i>
                    <span>22/03/2000</span>
                </div>
                <p className="info-des">ở đây viết linh ta linh tinh</p>
            </div>
        </div>
     );
}

export default ProductNew;