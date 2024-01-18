import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Main() {

    const [ datas, setDatas ] = useState([])

    // useEffect(() => {
    //     axios.get(`http://localhost:8080/api/inquiry`)
    //         .then(response => {
    //             console.log(response)
    //             setDatas(response.data)
    //         })
    //         .catch(error => console.log(error))
    // }, [])

    return (

        <>
            <div>
            <h1>MultiCare Shop</h1>
            <Link to="/tinting" className="btn">틴팅</Link>
            <Link to="/exterior" className="btn">광택&유리막</Link>
            <Link to="/ppf" className="btn">PPF</Link>
            <Link to="/inquiry" className="btn">문의사항</Link>


            </div>
        </>

    )
}

export default Main;