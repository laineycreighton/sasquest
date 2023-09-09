// BELONGS TO:
//      - Home.jsx
//
//
//
// FUNCTIONALITY:
//      - link to logout:
//                      01. Login.jsx
//
//
// VISUAL:
//      - renders the SASQUEST logo with tagline
//                               01. logo
//                               02. tagline
import { Link } from 'react-router-dom'
import '../styles/HomeHeader.css';

//Export the HomeHeader page
export default function HomeHeader() {
    return (
        <div className='home-header'>
            <div className='redirect-about'>
                <Link to="/login">Logout</Link>
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