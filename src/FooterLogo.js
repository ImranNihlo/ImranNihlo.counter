import React from 'react';
import footerLogo from "./FooterLogo.svg"

function FooterLogo(props) {
    return (
        <div>
            <img src={footerLogo} alt="footerLogo" />
        </div>
    );
}

export default FooterLogo;