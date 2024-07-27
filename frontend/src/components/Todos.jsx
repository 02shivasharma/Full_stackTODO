

export function Todos({todos}){
    return <div>
    
      {todos.map((todo)=>{
        return <div>
        <h1>{todo.title}</h1>
        <h2>{todo.description}</h2>
        <button onClick={(todo)=>{
           todo.completed = true;
        }}>{todo.completed == true ? "Completed" : "Mark As Complete"}</button> 
        </div>})
      }
    </div>
}