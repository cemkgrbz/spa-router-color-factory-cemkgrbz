import React, { useState } from "react";
import { useNavigate } from "react-router-dom" 


function AddNewColor( {selectColor, setSelectColor} ) {

    const [data, setData] = useState({ colorName: "", colorValue: ""}); 

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        
        setSelectColor([...selectColor, data])
        navigate("/")
    }

    return ( 
        <div>
            <div className="bg-green-400 h-screen flex justify-center items-center">
                <form className="bg-white w-[80%] p-[6rem] rounded-[15px] " action="">
                    <div >
                        <label htmlFor="">Color Name</label>
                        <input 
                        onChange={e => setData({...data, colorName: e.target.value })} 
                        className="border-2 border-gray-400 ml-5"  type="text" placeholder="Enter a color name" />
                    </div>
                    <div className="my-5">
                        <label htmlFor="">Color Value</label>
                        <input 
                        onChange={e => setData({...data, colorValue: e.target.value })} 
                        className="ml-5" type="color" />
                    </div>
                    <button className="border-2 bg-blue-200" onClick={handleSubmit}>Add this color</button>
                </form>
            </div>
        </div>
     );
}

export default AddNewColor;