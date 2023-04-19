import ProductSidebar from "../ProductSidebar";
import './ListSidebarProduct.css'


function ListProductSidebar() {
  return (

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
    );
}

export default ListProductSidebar;
