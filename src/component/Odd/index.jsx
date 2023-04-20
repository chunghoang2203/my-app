import ProductList from '../ProductList';
import ListProductSidebar from '../ListSidebarProduct'
import './Odd.css'

function Odd() {
    return ( 
        <div className='container'>
            <div className='grid wide'>
                <div className='row'>
                    <ProductList />
                    <ListProductSidebar />
                </div>
            </div>
        </div>
     );
}

export default Odd;