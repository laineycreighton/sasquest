import sasquatch from "../assets/images/sasquatch.png";
import "../assets/css/HomeHeader.css";
import Auth from "../utils/auth";

//Export the HomeHeader page
export default function HomeHeader() {
  return (
    <div className='full-home-header'>
      <div className='home-header'>
        <div className="redirect-logout">
          <button type="button" className="logout" onClick={() => Auth.logout()}>
            logout
          </button>
        </div>
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