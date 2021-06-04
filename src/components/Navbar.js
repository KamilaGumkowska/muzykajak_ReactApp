import Button from './Button'

const Navbar = () => {
    return (
        <div className='navbar'>
            <Button className ='nav-btn'text='Main Page'/>
            <Button className = 'nav-btn' text =" Your Profile"/>
            <Button className = 'nav-btn'text ="About us" />    
        </div>
    )
}

export default Navbar
