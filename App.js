import React from "react";
import ReactDOM  from "react-dom/client";


//React element
const title = (
    <h1 id="title" key="h4">Namaste React Element
    </h1>
);

//Or

const Title = ()=>(
    <h1 id="title" key="h4">Namaste React Funtional component
    </h1>
);

// React component
// Funtional component - New way to write the code
//Name of Component always strat with capital letters - good practice to use (not mandatory)
// Funtional component is a normal function :)


//I we want to use a funtional component in other functional componnet is call COMPONENT COMPOSITION
const HeaderComponent = ()=>{
    return (
    <div>
        {title}
        <Title />
        <h1>Namaste React Header Component</h1>
        <h2>This is tag h2</h2>
    </div>
    );
};


const root = ReactDOM.createRoot(document.getElementById("root"));

//paasing a react element inside the root
root.render(<HeaderComponent />);
