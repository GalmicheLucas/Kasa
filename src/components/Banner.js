
import imgApropos from "../images/about_cover.png";

const Banner = ({ imgSrc, altText, title }) => {
    return (
      <div className="banner">
        <img src={imgSrc} alt={altText} />
        <h1>{title}</h1>
      </div>
    );
  };

function HomePage() {
    return (
      <div className="banner">
        {/* { <img src="./src/assets/images/img-acceuil.png" alt="banner" /> } */}
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
    )
  }
  

function AboutPage(){
    return (
        <div>
            <Banner imgSrc={imgApropos} altText="Image à propos" title="" />
        </div>
    )
}

  export default Banner
  export {HomePage, AboutPage};
