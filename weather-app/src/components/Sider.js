import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { SiderWrapperStyled } from './Components';
import { useContext } from 'react';
import { MyContext } from '../context/appContext';

export default function Sider(props) {
  const { NavItems } = props;
  let context=useContext(MyContext)
  let [modeName,setModeName]=useState('Enable Dark Mode')
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState("Home");
  const mode=context.bkMode

  const handleClick = (item) => {
    setSelectedItem(item);
    if (item === "Home") {
      navigate("/");
    } else if (item === "City") {
      navigate("/city");
    }
  };
  console.log(context.bKMode)
  const toggleCheck=()=> {
   context.setBkMode(context.bkMode==="light"?"Dark":"light")
   setModeName(modeName==="Enable Dark Mode"?"Enable Light Mode":"Enable Dark Mode")
  }
  return (
    <SiderWrapperStyled mode={mode}>
    <div className="sider">
      <div style={{height:"50px",alignItems:"center",padding:"5px"}} onClick={toggleCheck}>
    {modeName}
{/* <label className="switch" style={{marginTop:"10px",marginLeft:"10px"}}>
  <input type="checkbox" id="myCheckbox" onChange={toggleCheck} />
  <span className="slider round"></span>
</label> */}
            </div><hr/>
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
              {console.log(context.bkMode)}
             
            </div>
            
            
          </>
        );
      })}
    </div>
    </SiderWrapperStyled>
  )
}
