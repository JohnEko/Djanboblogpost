import {React, useState, useEffect} from 'react';
import Card from './Card';
import Loader from './Loader'



// we can use same things for tophealines, just to change few things
function News(){
// creating a function to hold each data from the page
//getting each page number
//getting the total pages and loads
    const [data, setData] =useState()
    const [page, setPage] =useState(1)
    const [totalResult, setTotalResult] =useState(0)
    const [isLoading, setLoading] =useState(false)

function handlePrev(){
    setPage(page-1)
}

function handleNext(){
    setPage(page+1)
}

let pageSize = 6;

// we will use this to fetch the data from news API FROM server
//fetch('http://localhost:8000'/all-news=${page}&pageSize{pageSize})
useEffect =(()=> {
    fetch('http://localhost:8000')
    .then(response => {
        if(response.ok){
            setIsLoading(true)
            return response.clone().json()
        }
    })
    .then(myJson =>{
        setTotalResult(myJson.data.totalResult)
        setData(myJson.data.content)
    })
        setLoading(false)
}, [page])

return(
    <>
    <div className='my-10 card grid lg:place-content-center md:grid-col-2 x1:grid-cols-3 
    xs:grid-cols-1 xs:gap-4 md:gap-4 md:gap-10 lg:gap-14 md:px-4'>
        {isLoading ? data.map((element, index) => {
            return <Card
                title={element.title} description={element.description} imgUrl={element.urlToImage}
                publishAt={element.publishAt} url={element.url} author={element.author}
                source={element.source} key={index}
                />
                //we have two component card and loader
                //  when the card is loading the loader component will trigger
        }) :<Loader />}

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

export default News