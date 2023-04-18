import './ProductSidebar.css'

function ProductSidebar() {
    return (  
        <a href='/'>
                <div className='product-sidebar'>
                    <div className='sidebar-img'>
                        <span>Trailer</span>
                        <img src='https://toplist.vn/images/800px/nguoi-kien-va-chien-binh-ong-the-gioi-luong-tu-1019325.jpg' alt='phim jonh wick 4'></img>
                    </div>
                    <div className='sidebar-info'>
                        <h3 className='sidebar-title'>Phim Jonh Wick 4 </h3>
                        <p className='sidebar-des'>Phim Jonh Wick 4</p>
                        <div className='sidebar-views'>API lượt xem</div>
                    </div>
                </div>
            </a>
    );
}

export default ProductSidebar;