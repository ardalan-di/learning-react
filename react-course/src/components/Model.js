function Model(props)
{
    function buttonHandler()
    {
        props.HandelingClose();
    }

    return (
        <div>
          <p>Are you sure?</p>
          <button onClick={buttonHandler}>Cancel</button>
          <button onClick={buttonHandler}>Confirm</button>
        </div>
    );
}

export default Model;    