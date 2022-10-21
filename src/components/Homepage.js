import { useState } from "react";
import { Link } from "react-router-dom"
function Homepage() {

    const [selectColor, setSelectColor] = useState(["red", "green", "blue"])

    return ( 
        <div>
            <div className="bg-black text-center text-white">
                <h1 className="font-bold text-2xl p-10">Welcome to the color factory</h1>
                <h1 className="font-bold text-2xl underline p-10">Add a color</h1>
            </div>
            <p className="text-center m-5 font-bold">Please select a color</p>
            {selectColor.map((item,i) => (
                <Link>
                    <p className="text-center">{item}</p>
                </Link>
            ) )}
        </div>
     );
}

export default Homepage;