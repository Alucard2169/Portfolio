import { ReactNode } from "react";
import Navbar from "./components/Navbar";

type layoutProps = {
    children: ReactNode
}

const Layout = ({children}:layoutProps) => {
    return ( 
        <main className="px-4 sm:px-8 py-4 bg-MAIN w-full h-auto relative">
            <Navbar/>
            {children}
        </main>
     );
}
 
export default Layout;