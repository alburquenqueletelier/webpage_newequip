import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';

export const Footer = () => {
    const [fixPosition, setFixPosition] = useState(false);
    let location = useLocation();

    // Fix the footer to the end of the document or the view port
    // when changing the class (see <footer .../>)
    useEffect(() => {
        if (window.innerHeight > document.querySelector('body').offsetHeight) {
            setFixPosition(true);
        } else {
            setFixPosition(false);
        }
    }, [[], location]);

    return (
        <footer className={fixPosition ? "pb-1 fixed-bottom bg-secondary" : "pb-1 bg-secondary"}>
            <p className="m-0 p-0 text-center">Created By: <strong>BAAL</strong></p>
            <div className="row justify-content-center">
                <div className="col-auto">
                    <a href="https://wa.me/56979577547" rel="noopener noreferrer" className="btn " target="_blank">
                        <img width="25px" className="mt-2 me-3" src="https://cdn-icons-png.flaticon.com/512/174/174879.png"
                            alt="logo-whatsapp" />
                    </a>
                </div>
                <div className="col-auto">
                    <a href="https://www.linkedin.com/in/alburquenque-letelier/" rel="noopener noreferrer" className="btn " target="_blank">
                        <img width="25px" className="mt-2 me-3"
                            src="https://cdn-icons-png.flaticon.com/512/3938/3938061.png" alt="Linkedin" />
                    </a>
                </div>
                <div className="col-auto">
                    <a href="https://github.com/alburquenqueletelier" rel="noopener noreferrer" className="btn " target="_blank">
                        <img width="25px" className="mt-2 me-3" src="https://cdn-icons-png.flaticon.com/512/536/536452.png"
                            alt="Github" />
                    </a>
                </div>
                <div className="col-auto">
                    <a href="https://instagram.com/baal_sw/?hl=en" rel="noopener noreferrer" className="btn " target="_blank">
                        <img width="25px" className="mt-2 ms-2"
                            src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg"
                            alt="https://www.instagram.com/baal_sw/?hl=en" />
                    </a>
                </div>
            </div>
        </footer >
    );
};