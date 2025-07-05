player.onChat("BC", function () {
    結構中心 = player.position()
    結構起點 = player.position()
    結構走向 = positions.toCompassDirection(player.getOrientation())
    for (let H = 0; H <= 高度; H++) {
        Face2Dir_center(positions.add(
        結構中心,
        pos(0, H, 0)
        ), 結構走向)
        player.say(H)
        for (let index = 0; index <= 9; index++) {
            blocks.place(方塊[index], 角隅[index])
        }
    }
})
function Face2Dir_center (中心: Position, 方向: number) {
    角隅[0] = pos(0 * 1, 0, 0 * 1)
    角隅[1] = pos(半寬 * 1, 0, 半深 * -1)
    角隅[2] = pos(0 * 1, 0, 半深 * -1)
    角隅[3] = pos(半寬 * -1, 0, 半深 * -1)
    角隅[4] = pos(半寬 * 1, 0, 0 * 1)
    角隅[5] = pos(0 * 1, 0, 0 * 1)
    角隅[6] = pos(半寬 * -1, 0, 0 * 1)
    角隅[7] = pos(半寬 * 1, 0, 半深 * 1)
    角隅[8] = pos(0 * 1, 0, 半深 * 1)
    角隅[9] = pos(半寬 * -1, 0, 半深 * 1)
    if (方向 == 4) {
        Rotating = 1
    } else {
        Rotating = (方向 + 2) % 4
    }
    for (let index = 0; index < Rotating; index++) {
        for (let index = 0; index <= 9; index++) {
            TempX = 角隅[index].getValue(Axis.X)
            TempZ = 角隅[index].getValue(Axis.Z)
            角隅[index] = pos(TempZ * -1, 0, TempX)
        }
    }
    for (let index = 0; index <= 9; index++) {
        TempX = 角隅[index].getValue(Axis.X)
        TempZ = 角隅[index].getValue(Axis.Z)
        角隅[index] = positions.add(
        中心,
        pos(TempX, 0, TempZ)
        )
    }
}
function Face2Dir_front (中心: Position, 方向: number) {
    角隅[0] = pos(0 * 1, 0, 0 * 1)
    角隅[1] = pos(半寬 * 1, 0, 0 * 1)
    角隅[2] = pos(0 * 1, 0, 0 * -1)
    角隅[3] = pos(半寬 * -1, 0, 0 * -1)
    角隅[4] = pos(半寬 * 1, 0, 半深 * 1)
    角隅[5] = pos(0 * 1, 0, 半深 * 1)
    角隅[6] = pos(半寬 * -1, 0, 半深 * 1)
    角隅[7] = pos(半寬 * 1, 0, 半深 * 2)
    角隅[8] = pos(0 * 1, 0, 半深 * 2)
    角隅[9] = pos(半寬 * -1, 0, 半深 * 2)
    if (方向 == 4) {
        Rotating = 1
    } else {
        Rotating = (方向 + 2) % 4
    }
    for (let index = 0; index < Rotating; index++) {
        for (let index = 0; index <= 9; index++) {
            TempX = 角隅[index].getValue(Axis.X)
            TempZ = 角隅[index].getValue(Axis.Z)
            角隅[index] = pos(TempZ * -1, 0, TempX)
        }
    }
    for (let index = 0; index <= 9; index++) {
        TempX = 角隅[index].getValue(Axis.X)
        TempZ = 角隅[index].getValue(Axis.Z)
        角隅[index] = positions.add(
        中心,
        pos(TempX, 0, TempZ)
        )
    }
}
player.onChat("BF", function () {
    結構中心 = player.position()
    結構起點 = player.position()
    結構走向 = positions.toCompassDirection(player.getOrientation())
    for (let H = 0; H <= 高度; H++) {
        Face2Dir_front(positions.add(
        結構中心,
        pos(0, H, 0)
        ), 結構走向)
        player.say(H)
        for (let index = 0; index <= 9; index++) {
            blocks.place(方塊[index], 角隅[index])
        }
    }
})
let TempZ = 0
let TempX = 0
let Rotating = 0
let 結構走向: CompassDirection = null
let 結構起點: Position = null
let 結構中心: Position = null
let 方塊: number[] = []
let 角隅: Position[] = []
let 半深 = 0
let 半寬 = 0
let 高度 = 0
高度 = 4
半寬 = 3
半深 = 2
角隅 = []
方塊 = [
AIR,
ORANGE_WOOL,
LIME_WOOL,
YELLOW_WOOL,
GRAY_WOOL,
MAGENTA_WOOL,
CYAN_WOOL,
BLUE_WOOL,
OCHRE_FROGLIGHT,
BROWN_WOOL
]
