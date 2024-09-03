import { useState } from "react"
import './App.css'
function App() {
  const[widgets,setWidgets] = useState([]);

  function handleOnDrag (e,widgetType){
    e.dataTransfer.setData("widgetType",widgetType)
  }
  function handleOnDrop (e){
    const widgetType = e.dataTransfer.getData("widgetType",widgetType);
    setWidgets([...widgets,widgetType]);
  }
  function handleDragOver(e){
    e.preventDefault();
    console.log('Drag Over')
  }
  return (
    <>
      <div className="widgets">
        <div className="widget"
        draggable
        onDragStart={(e)=>handleOnDrag(e,"Widget A")}
        >
          Widget A
        </div>
        <div className="widget"
        draggable
        onDragStart={(e)=>handleOnDrag(e,"Widget B")}
        >
          Widget B
        </div>
        <div className="widget"
        draggable
        onDragStart={(e)=>handleOnDrag(e,"Widget C")}
        >
          Widget C
        </div>

      </div>
      <div className='page' onDrop={handleOnDrop} onDragOver={handleDragOver}>
        {widgets.map((widget,index)=>(
          <div key={index}>
            {widget}
          </div>
        ))}
      </div>
    </>
  )
}

export default App
