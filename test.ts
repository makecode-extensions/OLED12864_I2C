let item = 0
OLED12864_I2C.init(60)
OLED12864_I2C.rect(
0,
0,
60,
30,
1
)
OLED12864_I2C.showString(
0,
0,
"Hello!",
1
)
OLED12864_I2C.showString(
0,
1,
"1234567890",
0
)
item = 0
basic.forever(() => {
    OLED12864_I2C.showNumber(
    0,
    3,
    item,
    1
    )
    item += 1
    basic.pause(1000)
})
