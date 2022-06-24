import React from 'react';
import {Link} from "react-router-dom";
function NotFound(){
    return(
        <div className="text-center">
            <h1>Page Not Found</h1>
            <Link to="/" className="btn btn-primary">Back To Home Page</Link>
        </div>
    )
}
export default NotFound;