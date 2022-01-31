const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Virtual Library</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/newBook">New Book</a>
                <a href="/newShelf">New Shelf</a>
            </div>
        </nav>
     );
}
 
export default Navbar;