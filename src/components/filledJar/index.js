import React, { useState } from 'react';
import "./style.css";
const Jar = () => {
    const data=[
        {
            category: "$"
        },
        {
            category: "$"
        },
        {
            category: "$"
        },
        {
            category: "$"
        }
    ]
    const [selected, setSelected] = useState(0);
    const Hanldedate = (e) => {
        setSelected(e.target.value);
    }
    const [count, setCount] = useState();
    console.log(selected, "selected");

    return (
        <div className="jarWrapper">
      <p className="perText">
                {selected >= 100 ? '100%' :
                `${selected}%`}
                </p>
            <div className="filledJar">
                <img src="./images/jar.svg" alt="jar" className="jarImg" />
                <div className="priceData">
                    {data?.map((item)=> {
                        return(
                         <span className='price'>{item.category}</span>
                   ) })}
                </div>
            </div>
            <input
                className="inputField"
                type="number"
                name="text"
                placeholder="Enter amount"
                value={selected >= 100 ? 100 : selected}
                onChange={(e) => Hanldedate(e)}
                />
        </div>
    );
};

export default Jar;