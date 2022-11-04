// import { useState } from "react";
import { Link } from "react-router-dom"
function Homepage({selectColor}) {


    return ( 
        <div>
            <div className="bg-black text-center text-white">
                <h1 className="font-bold text-2xl p-10">Welcome to the color factory</h1>
                <Link to="/colors/new"><h1 className="font-bold text-2xl underline p-10">Add a color</h1></Link>
            </div>
            <p className="text-center m-5 font-bold">Please select a color</p>
            {selectColor && selectColor.map((item,i) => (
                <Link to={`/colors/${item.colorName}`} key={i}>
                    <p className="text-center">{item.colorName}</p>
                </Link>
            ) )}
        </div>
     );
}

export default Homepage;