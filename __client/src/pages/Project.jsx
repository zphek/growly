import { useParams } from "react-router-dom";
import sendReq from "../helpers/senreq";

const Project = () => {
    let {name} = useParams();
    console.log(name)
    
    sendReq("http://localhost:3000/project/"+name)
    .then(data=>{
        console.log(data);
    });

    return (<div>
            
    </div>);
}
 
export default Project;