let Direction2 = 0
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
basic.forever(function () {
    Direction2 = -90
    RingbitCar.running_time(RingbitCar.Direction_run.forward, Direction2)
    basic.pause(1000)
    Direction2 = 90
    RingbitCar.steering_angle(RingbitCar.Direction_turn.right, Direction2)
    basic.pause(1000)
})
