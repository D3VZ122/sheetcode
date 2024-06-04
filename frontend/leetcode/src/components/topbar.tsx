import { useRecoilValue } from "recoil"

import  {isauthenticated} from "../../store/recoil"
import { Link } from "react-router-dom";

export default function Topbar(){
    const isauth = useRecoilValue(isauthenticated);
    return(
        <>
        <div className=" flex justify-between bg-gray-900 p-5 mb-10 text-white items-center">
            <div className="flex justify-between ">
        <Link to={"/home"}><div className="font-medium mr-2">Home</div></Link>
        <Link to={"/problem"}><div className="font-medium mr-2">Problem</div></Link>
        <Link to={"/profile"}><div className="font-medium mr-2">Profile</div></Link>
        </div>
        <div>
            <div className="flex justify-between">
        {isauth?<Link to={"/problem"}><div className="font-medium mr-2">Start Solving</div></Link>:null}
        {isauth==false?
        <Link to={"/signin"}><div className="font-medium mr-2">Login</div></Link>:
        <Link to={"/profile"}><div className="font-medium mr-2">Name</div></Link>
          
        }
          </div>
        </div>
        </div>
        </>
    )
} 