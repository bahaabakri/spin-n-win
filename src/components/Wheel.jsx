import {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import {wheelData} from '../data'
import WheelSection from './WheelSection';
import Pointer from '../assets/pointer.png'
const Wheel = ({resultId = 6, time = 5*1000, duration = 5*1000}) => {
    const [isSpinActive, setIsSpinActive] = useState(true)
    const [rotation, setRotation] = useState(0)
    const [timeToStart, setTimeToStart] = useState(time)
    const [isSpin, setIsSpin] = useState(false)
    useEffect(() => {
        let timer
        if (!isSpin) {
            // once spin done => reschedule a new timer
            timer = setTimeout(() => {
                setIsSpinActive(true)
            }, time)
        }
        return () => {
            clearTimeout(timer)
        }
    }, [isSpin, time])

    useEffect(() => {
        let interval
        if (!isSpin) {
            interval = setInterval(() => {
                // if (!isSpinActive) {
                setTimeToStart(prevTime => prevTime - 1000)
                // }
            }, 1000)
        }
        return () => {
            clearInterval(interval)
            setTimeToStart(time)
        }
    }, [isSpin, time])


    const calculateRotate = () => {
        // setRotation(0)
        // 10 rotate = 360 * 10 = 3600
        setTimeout(() => {
            setRotation(prev => prev + (360 - prev % 360) + 3600 + wheelData.find(el => el.id === resultId).angle)
        },0)
    }

    const onSpin = () => {
        if (!isSpinActive) {
            return
        }
        // setRotation(0)
        setIsSpin(true)
        calculateRotate()
        setTimeout(() => {
            setIsSpin(false)
            setIsSpinActive(false)
        }, duration)
    }

    const timeToStartMinutes = new Date(timeToStart).getMinutes()
    const timeToStartSeconds = new Date(timeToStart).getSeconds()
  return (
    <div className="wheel-container">
        {!isSpinActive && <p>Spin inactive {timeToStartMinutes} : {timeToStartSeconds}</p>}
        <div className={`wheel-wrapper`}>
            <div className={`wheel`} style={{transform: `rotate(${rotation}deg)`}}>
                {/* <div style={{ color: "red" }}>Hello</div> */}
                <div className="container">
                    {
                        wheelData.map((el) => 
                            <WheelSection 
                                key={el.id} section={el} isPrize={el.prize != 0}>
                            </WheelSection>)
                    }
                </div>
            </div>
            <button className="spin-button" onClick={onSpin}>
                {/* <img src={SpinButton} alt="" /> */}
            </button>
            <img className='pointer' src={Pointer} alt="" />
        </div>
    </div>

  );
};

Wheel.propTypes = {
    resultId: PropTypes.number,
    time: PropTypes.number,
    duration: PropTypes.number
}
export default Wheel;
