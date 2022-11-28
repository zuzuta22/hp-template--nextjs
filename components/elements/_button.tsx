const Button = (props:string) => {

  return (
    <a href="" className={props.styleClass}>{props.buttonName}</a>
  )
}

export default Button;