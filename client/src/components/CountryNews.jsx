import {React, useState, useEffect} from 'react';
import Card from './Card';
import Loader from './Loader'
import { useParams } from 'react-router-dom';



// we can use same things for news and also CountryNews, just to change few things
//This is were my category will be
//if all component has been build we can ruote them in our App.jsx
function CountryNews(){
// creating a function to hold each data from the page
//getting each page number
//getting the total pages and loads
    const params = useParams;
    const [data, setData] =useState();
    const [page, setPage] =useState(1);
    const [totalResult, setTotalResult] =useState(0);
    const [isLoading, setLoading] =useState(false);

function handlePrev(){
    setPage(page-1)
}

function handleNext(){
    setPage(page+1)
}

let pageSize = 6;
// we will use this to fetch the data from news API FROM server
//fetch('http://localhost:8000'/all-news=${page}&pageSize{pageSize})
//fetch our category to the frontend
useEffect =(()=> {
    
    fetch(`http://localhost:8000/country/${params.iso}&pageSize=${pageSize}&API=${api_key}`)
    .then(response => {
        if(response.ok){
            return response.json();
            
            // setIsLoading(true)
            // return response.clone().json()
        }
        else{
            console.error('fail to fetch data', response.statusText)
            setLoading(false)
            return null;
        }
    })
    .then(myJson =>{
        if(response){
            setTotalResult(myJson.data.totalResult);
            setData(myJson.data.content);

        }
        
        setLoading(false);
    })
       
}, [page, params.iso])

return(
    <>
    <div className='my-10 card grid lg:place-content-center md:grid-col-2 x1:grid-cols-3 
    xs:grid-cols-1 xs:gap-4 md:gap-4 md:gap-10 lg:gap-14 md:px-4'>
        {isLoading ? (data.length > 0 ? (data.map((element, index) => (
         <Card
                title={element.title} 
                description={element.description} 
                imgUrl={element.urlToImage}
                publishAt={element.publishAt} 
                url={element.url} 
                author={element.author}
                source={element.source} 
                key={index}
                />
                //we have two component card and loader
                //  when the card is loading the loader component will trigger
        ))
        ) : (
            <p> no artickes find on this category</p>
        )
        ) :(
           <Loader />
        )}

      </div>
{/* lets create another component for pagination so user can get to the next page*/}

        {isLoading && <div className='pagination flex justify-center gap-14 my-10 item-center'>
            <button disabled={page <=1} className='pagination btn text-center' 
            onClick={() =>handlePrev()}>&larr; Prev</button>
            <p className='font-semibold opacity-80'>{page} of {Math.ceil(totalResult/15)}</p>
            <button className='pagination-btn text-center' disable={page>Math.ceil(totalResult/15)} 
                onClick={()=> handleNext()}>Next $arr;
            </button>
            
            </div>}


    </>
    
)

}

export default CountryNews