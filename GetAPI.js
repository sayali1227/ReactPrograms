import React, { useEffect, useState } from "react";
import classes from './GetAPI.module.css';

const GetAPI = () => {

    const [data1, setData] = useState([]);
    let isDatafound = false;
    // const data11 = [
    //     {
    //         "id": 1,
    //         "title": "iPhone 9", 
    //         "price": 549,
    //         "description":"An apple mobile which is nothing like apple",
    //         "brand": "Apple",
    //         "thumbnail":"https://dummyjson.com/image/i/products/1/thumbnail.jpg",
    //         "category":"smartphones"
    //     },
    //     {
    //         "id": 2,
    //         "title": "iPhone X", 
    //         "price": 549,
    //         "description":"SIM-Free, Model A19211 6.5-inch Super Retina HD display",
    //         "brand": "Apple",
    //         "thumbnail":"https://dummyjson.com/image/i/products/2/thumbnail.jpg",
    //         "category":"smartphones"
    //     }
    // ]
    const hideData = () => {
        setData([]);
    }
    if (data1.length === 0) {
        isDatafound = false;
    }
    useEffect(() =>{
        getData();
    },[]);
    const getData = () => {

        fetch("https://react-application-9cd68-default-rtdb.firebaseio.com/movies.json").then(response => {
            if(!response.ok){
                throw new Error('Something went wrong');
            }
            return response.json();
        }).then(data => {
            const dataArray = data.results.map(item => {
                return {
                    id: item.episode_id,
                    title: item.title,
                    producer: item.producer,
                    director: item.director,
                    releaseDate: item.release_date
                };
            })
            isDatafound = true;
            setData(dataArray);
        })
    }


    return (
        <div>
            <h2>Get API</h2>
            <button onClick={getData}>Fetch data</button> |&nbsp;
            <button onClick={hideData}>Hide data</button>
            <p></p>
            <table border={1} cellPadding={5} cellSpacing={4} className={classes.tableAlign}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Director</th>
                        <th>Producer</th>
                        <th>Release Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data1 && data1.map((item, i) => (
                        <tr key={i}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.director}</td>
                            <td>{item.producer}</td>
                            <td>{item.releaseDate}</td>
                            <td><button>Edit</button> <button>Delete</button></td>
                        </tr>
                    ))}

                </tbody>
            </table>
            {!isDatafound && data1.length === 0 && <p>No data found</p>}
        </div>
    )
}

export default GetAPI;