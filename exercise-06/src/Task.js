export const Task = (props) => {
    return (
        <ul className="task" style={{backgroundColor: props.isComplete ? "green" : 'transparent'}}>{props.taskName} 
            <button onClick={() => props.completeTask(props.id)}>Complete</button>
            <button onClick={() => props.deleteTask(props.id)}>X</button>
        </ul>
    )
}