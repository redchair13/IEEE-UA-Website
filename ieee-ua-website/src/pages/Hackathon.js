import React from "react";
import "./Hackathon.css";

function Hackathon() {

    return (
        <div className="page-container">
            <div className="header-container">
                <h1>HACK-A-DAMIEN</h1>
                <p>(pictures and logo)</p>
            </div>
            <div className="content-container">
                <h2>HACK-A-DAMIEN</h2>
                <p>Details about the hackathon.</p>
            </div>
            <div className = "sponser-container">
                <h1>Our Previous Sponsors:</h1>
                <div className="sponsor-grid">
                    <img src="../sponser1.svg" alt="Sponsor 1" />
                    <img src="../sponsor4.png" alt="Sponsor 2" />
                    <img src="../sponsor7.png" alt="Sponsor 3" />
                    <img src="../sponsor2.png" alt="Sponsor 4" />
                    <img src="../sponsor5.png" alt="Sponsor 5" />
                    <img src="../sponsor3.png" alt="Sponsor 6" />
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