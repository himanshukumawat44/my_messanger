import './Button.css'

const Button = (props) => {
    return <button className={`btn btn-solid ${props.className}`}>{props.children}</button>
}

export default Button;