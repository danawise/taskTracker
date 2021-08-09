import Button from './Button'
const Header = ({title , color, onAdd, showAdd}) => {
 
    return (
        <header className = 'header'>
            <h1 style= {{color : color}}>{title }</h1>
            <Button onClick = {onAdd} color = {showAdd ?'red' :"green"} text = {showAdd ? '-' : '+' } /> 
           
            
            
            
        </header>
    )
}

Header.defaultProps ={title :" oiu0oiuopiupoi"}


export default Header
