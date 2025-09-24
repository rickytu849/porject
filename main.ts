let Count = 0
basic.forever(function () {
    basic.pause(2000)
    basic.showNumber(input.runningTime())
    datalogger.log(datalogger.createCV("1", input.runningTime()))
    Count += 1
})
basic.forever(function () {
    if (Count >= 10 && input.lightLevel() < 25) {
        basic.showIcon(IconNames.No)
    } else if (input.lightLevel() < 25) {
        Count += 1
        basic.showIcon(IconNames.Sad)
    } else {
        Count = 0
        basic.showIcon(IconNames.Yes)
    }
})
