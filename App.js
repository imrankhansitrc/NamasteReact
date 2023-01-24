import React from "react";
import ReactDOM  from "react-dom/client";

// Create element with React.createElement
const header = React.createElement(
    "div",
    {
        className:"title",
        id: "container",
        key:"title"
    },
    "This is container",
    [React.createElement(
        "h1",
        {
            id: "h1",
            key:"h1"
        },
        "This is H1 Tag"
        ),

        React.createElement(
            "h2",
            {
                id: "h2",
                key:"h2"
            },
            "This is H2 Tag"
            ),

            React.createElement(
                "h3",
                {
                    id: "h3",
                    key:"h3"
                },
                "This is H3 tag"
                )
    ]
);


//Create Element with JSX

const header2 = (
    <div id="title" key="title" className="title">
        <h1 id="h1" key="h1">This is tag h1</h1>
        <h2 id="h2" key="h2">This is tag h2</h2>
        <h3 id="h3" key="h3">This is tag h3</h3>
    </div>
);


//Create same with functional component

const Heading3 = ()=>{
    return(
        <div id="title" key="title" className="title">
        <h1 id="h1" key="h1">This is tag h1</h1>
        <h2 id="h2" key="h2">This is tag h2</h2>
        <h3 id="h3" key="h3">This is tag h3</h3>
    </div>
    );
}



//Create same with functional component with attributes

const AnotherComponent = ()=>{
    return(
    <h1 style={{color:"yellow"}} id="h10" key="h10">This another component going to do a composition with another component</h1>
    );
} 

const Heading4 = ()=>{
    return(
        <div style={{height:"50%"}} id="title" key="title" className="title">
        <AnotherComponent />
        <h1 style={{color:"green"}} id="h1" key="h1">This is tag h1</h1>
        <h2 id="h2" key="h2">This is tag h2</h2>
        <h3 id="h3" key="h3">This is tag h3</h3>
    </div>
    );
}



const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(header2); //render react element or by using React.createElemt

root.render(<Heading4 />);



