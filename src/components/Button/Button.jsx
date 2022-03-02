import './Button.css'

function Button(props) {

    let classes = 'button '
    classes += props.operation ? 'operation' : ''
    classes += props.double ? 'double ' : '' //verificar se o botão é operacao ou se é botão tipo double.
    classes += props.triple ? 'triple' : ''


    return (
        <button className={classes} onClick={() => {
            props.click && props.click(props.label) //se props.click for true, executa props.click(props.label)
            props.clear && props.clear() //se props.clear for true, executa props.clear()
            
            } }>
            {props.label}
        </button>
    )
}

export default Button