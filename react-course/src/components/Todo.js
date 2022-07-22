import { useState } from "react";

import Model from "./Model";

function Todo(props)
{
    const [ modelIsOpen, setModelIsOpen ] = useState(false);
    function deleteHandler() 
    {
        setModelIsOpen(true);
    }

    function closeModelHandler()
    {
        setModelIsOpen(false);
    }

    return (
        <div>
          <div>
            <h2>{props.text}</h2>
          </div>
          <div>
            <button onClick={deleteHandler}>Delete</button>
          </div>
          {modelIsOpen ? <Model HandelingClose={closeModelHandler}  /> : null}
        </div>
    );
}

export default Todo;