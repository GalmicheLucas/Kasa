import img from "../images/logo_footer.png"
import "../sass/layout/footer.scss"

const Footer = () => {
    return (
        <footer>
            <img src={img} alt="Logo" />
            <h3>© 2020 Kasa. All rights reserved</h3>
        </footer>
    )
}

export default Footer