import React, { useState } from 'react';
//import './index.css';
import { Button, Modal } from 'antd';
import { Cities } from '../helper/constant';
import toast, { Toaster } from 'react-hot-toast';

const App1: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [search,setSearch]=useState("")
    const [cities,setCities]=useState(Cities)
    const [selectedCities,setSelectedCities]=useState([])
    const notify = () => toast.success("city added");


    const searchChange=(e)=>{
        setSearch(e.target.value)
        const filterCities=Cities.filter((city)=>{
        if(!selectedCities.includes(city)){
        return city.name.toLowerCase().includes(e.target.value.toLowerCase())
       }
    })
        setCities(filterCities)
    }
    const addCity=(city)=>{
        const filterCities=cities.filter((c)=>city.id!==c.id)
       setCities(filterCities)
       setSelectedCities([...selectedCities,city])
       console.log(selectedCities)
       notify()
    }
    

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal} style={{float:"right"}}>
      Add city model
      </Button>
      <Modal title="Add city model" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <input className='search' onChange={searchChange} value={search} placeholder="search city"/>
               <hr/>
        <div style={{maxHeight:"300px",overflow:"hidden"}}>
        {cities.length > 0 ?cities.map((city)=>{
            return (
                <div >
                        <div onClick={()=>addCity(city)} className="cityNameContent"><p style={{marginTop:"10px"}}>{city.name}</p>
                        <svg viewBox="64 64 896 896" focusable="false" data-icon="plus-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"></path><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path></svg>
                      <Toaster/>
                        </div>
                        
                        </div>
            ) 
        }):"Not available"
    }
        </div>
      </Modal>
    </>
  );
};

export default App1;
