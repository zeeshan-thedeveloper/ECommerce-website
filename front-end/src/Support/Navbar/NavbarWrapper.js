import NavBar from "./Navbar";

const NavbarWrapper = (Page)=>{
    return function wrapped(){
        return <div>
            <NavBar/>
            <Page/>
        </div>
    }
}

export default NavbarWrapper;