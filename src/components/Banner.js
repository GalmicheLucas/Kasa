import React from 'react';
import "../sass/layout/banner.scss"; // Vérifie que le fichier CSS est bien dans ce dossier


import {useLocation} from 'react-router-dom';
import {useEffect, useState} from 'react';
import "../sass/layout/banner.scss"; // Vérifie que le fichier CSS est bien dans ce dossier


export default function Banner() {

    const [aboutPage , setAboutPage] = useState(false);

    const location = useLocation();

    useEffect(() => {
        if(location.pathname === '/about'){
            setAboutPage(true)
        };
    })


    return (
        <div className={aboutPage ? 'banner-about' : 'banner'}>
            {!aboutPage && <p>Chez vous, partout et ailleurs</p>
            }

        </div>
    )


}