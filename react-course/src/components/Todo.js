function Todo(props)
{
    return (
        <div>
          <div>
            <h2>{props.text}</h2>
          </div>
          <div>
            <button>Delete</button>
          </div>
        </div>
    );
}

export default Todo;