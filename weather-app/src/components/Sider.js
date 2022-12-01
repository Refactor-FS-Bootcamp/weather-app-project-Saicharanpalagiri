import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
export default function Sider(props) {
  const { NavItems } = props;
  
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState("Home");

  const handleClick = (item) => {
    setSelectedItem(item);
    if (item === "Home") {
      navigate("/");
    } else if (item === "City") {
      navigate("/city");
    }
  };
  return (
    <div className="sider">
      {NavItems.map((item) => {
        return (
          <>
            <div
              className={
                selectedItem === item.ele
                  ? "active-container"
                  : "deactive-container"
              }
              onClick={() => handleClick(item.ele)}
            >
              {item.ele}
             
            </div>
            
          </>
        );
      })}
    </div>
  )
}
