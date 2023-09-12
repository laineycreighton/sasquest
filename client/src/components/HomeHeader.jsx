import { Link } from 'react-router-dom'
import sasquatch from '../assets/images/sasquatch.png'
import '../assets/css/HomeHeader.css';

//Export the HomeHeader page
export default function HomeHeader() {
    return (
        <div className='full-home-header'>
            <div className='home-header'>
                <nav className='redirect-logout'>
                    <Link to="/" className='logout'>Logout</Link>
                </nav>
                <section className='home-sasquest'>
                    <div className='home-lg-letters'>
                        <h1 className='homeLg'>S</h1>
                    </div>
                    <div className='home-logo-middle'>
                        <h2 className='homeMiddle'>ASQUES</h2>
                        <p className='home-tagline'>
                            tame your beast
                        </p>
                    </div>
                    <div className='home-lg-letters'>
                        <h1 className='homeLg'>T</h1>
                    </div>
                </section>
            </div>
            <div className='home-mascot'>
                <img src={sasquatch} alt='sasquatch' />
            </div>
        </div >
    )
}