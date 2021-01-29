import React from 'react'

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

function Footer() {
    return(
        <footer> 
            <p>Copyright &copy; {currentYear}</p>
        </footer>
    )
}

export default Footer;