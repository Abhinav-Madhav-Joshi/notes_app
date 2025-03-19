import logo from '../../assets/logo.png';

export const Navbar = () => {
    return(
        <header className='header'>
            <img src={logo} alt="Website icon" className='logo' />
            <h1 className='title'>NoteIt</h1>
        </header>
    )
} 