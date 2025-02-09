let twoLetterISO =[
    "gh", "ng", "ke", "gb", "fi", "us"
];

let isoCountries = {
    "gh": "Ghana",
    "ng" : "Nigeria", 
    "ke":"Kenya", 
    "gb":"Great Britain", 
    "fi":"Finland", 
    "us":"USA"

};

let countries =[]
twoLetterISO.forEach(
    element =>{
        let obj={
            iso_2_alpha : element,
            png : `https://flagcdn.com/32x24/${element}.png`,
            countryName : getCountryName(element.toUpperCase()),
        }
        Countries.push(obj);
    }
)

function getCountryName(countryCode){
    if(isoCountries.hasOwnProperty(countryCode)){
        return isoCountries[countryCode]
    }else{
        return countryCode
    }

}
console.log(countries)

export default countries;