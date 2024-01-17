import axios from "axios";
import { useEffect, useState } from "react";

function Inquiry() {

    const [ datas, setDatas ] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8080/api/inquiry`)
            .then(response => {
                console.log(response)
                setDatas(response.data)
            })
            .catch(error => console.log(error))

    }, [])

    return(

        <>
            <div>
                <h2>멀티케어 문의</h2>
                
            </div>
        </>
    )
}

export default Inquiry;