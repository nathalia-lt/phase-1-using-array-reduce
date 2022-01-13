const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const bat = (accumulator, battery) => {
    return accumulator + battery
}
const initialValue = 0
const totalBatteries = batteryBatches.reduce(bat, initialValue)
