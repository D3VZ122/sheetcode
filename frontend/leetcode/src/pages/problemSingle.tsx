
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router"
export default function ProblemSingle(){
    const server = import.meta.env.VITE_backend_url;
    const [ques,setquest] = useState();
    useEffect(()=>{
        const getdata = async()=>{
            const resp = await axios.get(server+"/api/v1/problem/"+id);
            setquest(resp.data);

            
        }
        getdata();
    },[])
    const {id} = useParams();
    return(
        <>
      
        hello
        </>
    )
}