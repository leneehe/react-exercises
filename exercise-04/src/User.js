export const User = (props) => {
    return (
    <div key={props.key}>{props.name} - {props.age}</div>
    )
  }