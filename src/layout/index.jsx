import React from "react";
import DefaultLayout from "./defaultLayout";


function Layout({children}) {
    return ( 
        <DefaultLayout>
            {children}
        </DefaultLayout>
     );
}

export default Layout;