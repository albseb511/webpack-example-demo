/**
 * 
 * @returns navbar component
 */
 function Navbar(){
    const div = document.createElement('div');
    div.className = "navbar"
    div.innerHTML = `
        <div id="search">
          search
        </div>    
        <div class="right">
            <div>
                Login
            </div>
            <div>
                Signup
            </div>
            <div>
                About
            </div>
        </div>
    `
    return div
}

export default Navbar