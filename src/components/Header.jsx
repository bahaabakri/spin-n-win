import SpinLogo from '../assets/spin-logo.png'
const Header = () => {
    return (
        <header>
            <img src={SpinLogo} alt=""/>
            <h2>Daily Spin Wheel</h2>
            <p>Spin the wheel to win different rewards daily.</p>
            <p>👇 Tap to spin 👇</p>
        </header>
    )

}
export default Header