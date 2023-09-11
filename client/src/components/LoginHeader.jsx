import { Link } from 'react-router-dom'
import '../assets/css/LoginHeader.css'

//Export the LoginHeader page
export default function LoginHeader() {
    return (
        <div className='login-header'>
            <div className='redirect-about'>
                <Link to="/about" className='about'>About</Link>
            </div>
            <div className='header'>
                <header className='sasquest-name'>
                    <h1><span>S</span>ASQUES<span>T</span></h1>
                </header>
                <p className='tagline'>
                    tame your beast
                </p>
            </div>
        </div>
    )
}