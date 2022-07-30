import {useState} from 'react';

let number = 0;

function FavoritesPage()
{
    
    const[current,setcurrent] = useState(number);
    
    function NumbHandler()
    {
        // number +=1;
        console.log(number);
        setcurrent(number+=1);
    }

    return(
        <div>
            
            <h1>{current}</h1>
            <button onClick={NumbHandler}>Click Me!</button>
        </div>
    );
}

export default FavoritesPage;