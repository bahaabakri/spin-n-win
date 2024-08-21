export const formatClockDigitalNumbers = (seconds = 0, minutes = 0, hours = 0) => {
    return `${getClockDigitalNumber(hours)} : ${getClockDigitalNumber(minutes)} : ${getClockDigitalNumber(seconds)}`
}

const getClockDigitalNumber = (value) => {
    return value.toString().length > 1 ? value: `0${value}`
}
