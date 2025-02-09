import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
// import logo from "./assets/logo/png";
import Countries from 'countries'
import countries from "./Countries";

function Header(){
    const [active, setAcTIVE] = useState(false);
    const [showNewsDropDown, setNewsDropDown] =useState(false)
    const [showCategoryDropDown, setCategoryDropDown] =useState()
    const [theme, setTheme] = useState("light-them")
    const category = ["business", "entertainment", "health", "technology"]

// writing some javascripe code to change the website theme
//we will create a country.js file so we can use it here 
    useEffect(()=>{
        document.body.className = theme
    }, [theme])

    function toggleTheme(){
        if(theme == "ligth-theme"){
            setTheme("darktheme")
        }
        else{
            setTheme("ligth-theme")
        }
    }



    // Here is our header html, we have to create react function above
    return(

        <header>
            <nav className="fixed top-0 left-0 w-full h-auto bg-grey-800 z-10 flex items-center justify-arounder">
                <h3 className="relative heading font-bold md:basis-1/6 text-2x1 xs:basis-4/12 z-50 md-5">
                <span className="logo">
                    {/* importing logo from a file folder */}
                    <img src="{logo}" alt="Amebonaija" />

                </span>
                    
                </h3>

                <ul className={`nav-ul flex gap-11 md:gap-14 xs:gap-12 lg:basis-3/6 md:basis-4/6 md:justify-end ${active ? 'active':''}` }>
                    <li>
                        {/* when a user click this link we will route to the App.jsx */}
                        <link className="no-underline font-semibold" to="" 
                        onClick={() => setAcTIVE(!active)}>
                        Amebonaija
                        </link>
                    </li>

                    {/* getting the list of category dropdown */}
                    <ul className={setCategoryDropDown ? "dropdown p-2 show-dropdown" : "dropdown p-2"}>
                    { /* we will create country using the flagapi so when we click on it we get the information */ }
                        {Countries.map((element, index)=>(
                        <li key={index} onClick={() => setCategoryDropDown(!showCountryDropDown)}>
                                {/* get the url of the country, we can also parse this on our backend */}
                                <link to={`/country/${element?.iso_2_alpha}`} className="flex-gap-3" onClick={()=>{setAcTIVE(!active)}}>

                                    {/* get the image from the api, if ots not load we get auternative */}
                            <img src="{element?.png}" srcSet ={`https://flagcdn.com/32x24/${element?.iso_2_alpha}.png 2x`} alt="{element?.countryName}"/>
                            <span>{element?.countryName}</span>
                            </link>
                        </li>
                            
                        ))}

                    </ul>
                    {/* This will be dropdown linkbelow for different pages */}
                    <li className="dropdown-li"></li>
                        <Link className="no-underline font-semibold flex-center gap-2" 
                        onClick={()=>{setCategoryDropDown(!setCategoryDropDown)}}>Top Headlines</Link>
                    <li>
                        {/* Creating a toggle for the header and give an input */}
                        <link className="no-underline font-semibold" to="#" onClick={toggleTheme}>
                        <input type="checkbox" className="checkbox" id="checkbox" />
                        <label>
                            <i class="fas fa-moon"></i>
                            <i class="fas fa-sun"></i>
                            <span class="ball"></span>
                        </label>
                        </link>

                    </li>
                    <li></li>
                </ul>

            </nav>
        </header>
    )
}
export default Header