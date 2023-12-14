import React from "react"
const footer = ()=>{


    return (

        <div className="footer">

            <div className="pre">
            <img className="pre-image" src="images/previous.png" alt="logo" />
            <button> Previous</button>
            </div>

            <div className="cr">
            <button> clear response</button>
            </div>

            <div className="mor">
            <button> mark for review</button>
            </div>

            <div className="nex">
            <button> Next</button>
            <img className="nex-image" src="images/next.png" alt="logo" />
            </div>
            
        </div>
       
    )
}

export default footer ; 