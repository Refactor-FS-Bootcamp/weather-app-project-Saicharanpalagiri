import styled from "styled-components";
export const SiderWrapperStyled = styled.div`
.active-container {
    align-items: center;
    background-color: #ffce5e;
    color: #633ea5;
    height: 60px;
    font-weight: 600;
    cursor: pointer;
    padding: 10px;
  }
  .deactive-container {
    cursor: pointer;
    color: orange;
    height: 60px;
    font-weight: 600;
    padding: 10px;
  }
  .sider {
    left: 0;
    bottom: 0;
    top: 0;
    height: 100vh;
    width: 150px;
    background-color:${(props) => (props.mode === "Dark" ? "black" :  "white")};
    text-align: center;
    color:${(props) => (props.mode === "Dark" ? "white" : "#ffce5e")};
  }
  @media screen and (max-width: 780px) {
    .sider {
      width: 20vh;
      height: 100vh;
      background: ${(props) => (props.mode === "Dark" ? "black" :  "white")};
      display: flex;
      flex-direction: column;
    }
  }
  @media screen and (max-width: 400px) {
    .sider {
      width: 10vh;
      height: 100vh;
      background: ${(props) => (props.mode === "Dark" ? "black" :  "white")};
      display: flex;
      flex-direction: column;
    }
  }
  .switch {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 25px;
  }
  
  .switch input {
    display: none;
  }
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
  }
  .slider:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 18px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }
  
  input:checked+.slider {
    background-color: #2196F3;
  }
  
  input:focus+.slider {
    box-shadow: 0 0 1px #2196F3;
  }
  input:checked+.slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
  
  
  /* Rounded sliders */
  
  .slider.round {
    border-radius: 34px;
  }
  .slider.round:before {
    border-radius: 50%;
  }

`;

export const HeaderWrapperStyled = styled.div`
.ctybtn {
    background-color: #633ea5;
    color: white;
    border: none;
    border-radius: 5px;
    height: 40px;
    padding: 10px;
    width: 150px;
    font-size: 17px;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin-left: 14%;
    margin-left: 0;
   
  }


`;


export const ModuleWrapperStyled = styled.div`
.model-header {
    /* background-color: #FFCE5E;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items:center;    
    height:60px;
    color:black;
    border-radius:12px 12px 0 0;
    
    font-size: x-large;
    padding: 7px; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    background: #ffce5e;
    height: 13vh;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    font-size: 20px;
  }
  
  .model-wrapper {
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    /* display: flex; */
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    color:${(props) => (props.mode === "Dark" ? "black" : "black")};
  }
  .bgClicker {
    z-index: 999;
    margin-left: 0;
    top: 0;
  
    left: 0;
  
    width: 100%;
    height: 100%;
  
    background: rgba(0, 0, 0, 0.7);
    /* background:yellow; */
  }
  
  /* .activeHeader{
    background: rgba(0, 0, 0, 0.3);
  } */
  .into {
    align-items: center;
    justify-content: center;
  }
  .model-content {
    width: 28%;
    /* height:70vh; */
    min-width: 100px;
    min-height: 100px;
    margin-top: 80px;
    border-radius: 5px;
    border: none;
    background: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    /* z-index:9999; */
    position: fixed;
    top: 35%;
    left: 20%;
    transform: translate(-50%, -50%);
  
    margin-left: 30%;
  }
  
  .city-content {
    text-align: center;
    max-height: 260px;
    overflow-y: scroll;
    cursor: pointer;
    overflow: hidden;
  }
  .search {
    align-items: center;
    align-self: center;
    margin-top: 6%;
    margin-bottom:6%;
    border-radius: 8px;
    width: 80%;
    height: 40px;
    border: 0px;
    background: rgba(228, 255, 248, 0.752);
    padding: 20px;
  }
  .into {
    margin-right: 0;
  }


`;