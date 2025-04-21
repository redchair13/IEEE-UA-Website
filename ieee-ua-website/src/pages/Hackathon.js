import React from "react";
import "./Hackathon.css";
import { useState } from "react";

const images = [
    { src: "../hackathon/DSCF1510.JPG"},
    { src: "../hackathon/IMG_0357.JPG"},
    { src: "../hackathon/IMG_0105.JPG"},
    { src: "../hackathon/IMG_0094.JPG"},
    // { src: "../hackathon/IMG_0354.JPG"},
    { src: "../hackathon/IMG_0081.JPG"},
    { src: "../hackathon/IMG_0141.JPG"},
    // { src: "../hackathon/IMG_0142.JPG"},
    { src: "../hackathon/IMG_0171.JPG"},
    { src: "../hackathon/IMG_0189.JPG"},
    { src: "../hackathon/IMG_0200.JPG"},
    { src: "../hackathon/IMG_0513.JPG"},
    { src: "../hackathon/IMG_0112.JPG"},
    { src: "../hackathon/20240414_001919.JPG"},
    // { src: "../hackathon/IMG_0154.JPG"},

  ];

function Hackathon() {

    const [slideIndex, setSlideIndex] = useState(0);

    const plusSlides = (n) => {
      setSlideIndex((prev) => (prev + n + images.length) % images.length);
    };

    return (
        <div className="page-container">
            <div className="header">
                <h1>HACK-A-DAMIEN:</h1>
            </div>
            <div className="content">
                <div className="left-content">
                <h2>About Hack-A-Damien</h2>
                <img src="../IMG_198.png" alt="Sponsor 3" />
                </div>
                <div className="right-content">
                <p>Details about the hackathon.Details about the hackathon.
                Details about the hackathon.Details about the hackathon.
                Details about the hackathon.Details about the hackathon.
                Details about the hackathon.Details about the hackathon.
                Details about the hackathon.Details about the hackathon.
                Details about the hackathon.Details about the hackathon.
                Details about the hackathon.Details about the hackathon.
                </p>
                </div>
            </div>

            <div className="slideshow">
            <div className="slideshow-container">
                {images.map((img, i) => (
                    <div
                        key={i}
                        className={`mySlides fade ${i === slideIndex ? "active" : ""}`}
                    >
                    <img src={img.src} alt={`Slide ${i + 1}`} />
                    <div className="text">{img.caption}</div>
                    </div>
                ))}

            <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
            <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
            </div>
            </div>
            <div className = "sponser-container">
                <h1>Our Previous Sponsors:</h1>
                <div className="sponsor-grid">
                    <img src="../sponser1.svg" alt="Sponsor 1" />
                    <img src="../sponsor4.png" alt="Sponsor 2" />
                    <img src="../sponsor7.png" alt="Sponsor 3" />
                    <img src="../sponsor2.png" alt="Sponsor 4" />
                    <img src="../sponsor3.png" alt="Sponsor 5" />
                    <img src="../sponsor5.png" alt="Sponsor 6" />
                    <img src="../sponsor6.png" alt="Sponsor 7" />
                    <img src="../sponsor8.png" alt="Sponsor 8" />
                    <img src="../sponsor9.png" alt="Sponsor 9" />
                    <img src="../sponsor10.png" alt="Sponsor 10" />
                    <img src="../sponsor11.png" alt="Sponsor 11" />
</div>

            </div>
        </div>
    );
}

export default Hackathon;