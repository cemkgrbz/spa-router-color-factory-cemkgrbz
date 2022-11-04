import React from "react";
import  { Link, useParams } from "react-router-dom";



function SingleColor( { selectColor }) {

    const { color } = useParams();

    const colorNew = selectColor.filter((item) => item.colorName === color)[0]

    // console.log(colorNew)

    return ( 
        <div 
        style={{ backgroundColor: `${colorNew && colorNew.colorValue}`}}
        className="flex justify-center bg-red-500 h-screen">
            <div className="text-center mt-[15rem] text-white text-3xl ">
                <p>THIS IS {colorNew && colorNew.colorName.toUpperCase()}</p>
                <p className="m-16">ISN'T IT BEAUTIFUL?</p>
                <Link to="/"><p className="underline">GO BACK</p></Link>
            </div>
        </div>
     );
}

export default SingleColor;