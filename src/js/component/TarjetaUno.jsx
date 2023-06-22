import React from "react";

const TarjetaUno = () => {
    return (
        <div id="unaTarjeta" className="card bg-secondary" style={{ "--bs-bg-opacity": ".1" }}>
            <div className="card-body">
                <h1 className="card-title">A Warm Welcome!</h1>
                <p className="card-text">
                    Quisque eu sapien metus. Aliquam non felis ante. Curabitur eu ultricies nisl, eget pellentesque elit.
                    Cras sed magna quis libero rhoncus dignissim quis vitae quam. Curabitur eu ultricies nisl, eget pellentesque elit.
                    Cras sed magna quis libero rhoncus dignissim quis vitae quam.
                </p>
                <a href="#" className="btn btn-primary">Call to Action!</a>
            </div>
        </div>
    );
};

export default TarjetaUno;
