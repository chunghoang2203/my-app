import ProductNew from '../ProductNew';
import './New.css'

function New() {


  return (
    <div className='container'> 

      <div className='grid wide'>
        <div className='row'>
          <div className="grid-top">
              <div className="grid-top-title">
                <h2 className='new-title'>Trang chủ</h2>
                <p>- News categories - Tin tức</p>
              </div>
              <div className="grid-top-title grid-border-bottom-1 new-border">
                <span>tin tức phim hay</span>
              </div>
          </div>
          <div className="row small-gutters">
              <div className="col l-12 m-12 c-12 item-new">
                <ProductNew />
              </div>
              <div className="col l-12 m-12 c-12 item-new">
                <ProductNew />
              </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default New;
