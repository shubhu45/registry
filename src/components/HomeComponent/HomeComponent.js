import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import { useHistory } from 'react-router-dom'
import './HomeComponent.scss'

export default function HomeComponent(){

    let history = useHistory();
    let [items,setItems] = useState([])
    let [hasMore, setHasMore] = useState(true)
   
    useEffect(()=>{
        fetchMoreData()
    },[])

    function fetchMoreData(){
        if(items.length > 500){
            setHasMore(false)
        }else{
            setTimeout(()=>{
                fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(json => {
                    if(items.length < 20){
                        setItems([...items,...json,...json])
                    }else{
                        setItems([...items,...json])
                    }
                })
                
            },2000)
        }

    }
    return(
        <div className='home-container'>
            <h1 className="list-title">Users List</h1>
            <hr/>
            <InfiniteScroll
                dataLength={items.length}
                next={fetchMoreData}
                hasMore={hasMore}
                loader={items.length < 1 ?<h4>Loading initial data...</h4> :<h4>Loading more results...</h4>}
                endMessage={
                    <p style={{ textAlign: "center" }}>
                    <b>You have reaced at end of the page</b>
                    </p>
                }
            >
          
            {items.map((item,index) => (
                <div className='card' key={index}>
                    <div className="row">
                        <p className="card-title">User Id - </p>
                        <p>{item.id}</p>
                    </div>
                    <div className="row">
                        <p className="card-title">User Name - </p>
                        <p>{item.name}</p>
                    </div>
                    <div className="row">
                        <p className="card-title">User Name - </p>
                        <p>{item.website}</p>
                    </div>                    
                </div>
            ))}
            </InfiniteScroll>
        </div>
    )
}