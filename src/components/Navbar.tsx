import MediaLinks from "./MediaLinks";



const Navbar = () => {

    
    return (
      <nav className="fixed hidden sm:flex h-14 w-full right-8 items-center">
        <MediaLinks/>
      </nav>
    );
}
 
export default Navbar;