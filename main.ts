//% block="play Bad Apple animation"
export function playBadAppleAnimation(): void {
    const frames = [
        `
        . . # . .
        . # # # .
        # # # # #
        . # # # .
        . . # . .
        `,
        `
        . # # # .
        # . # . #
        # # # # #
        # . # . #
        . # # # .
        `
    ]
    for (let frame of frames) {
        basic.showLeds(frame)
        basic.pause(200)
    }
}

//% block="play Bad Apple melody"
export function playBadAppleMelody(): void {
    const melody = ["C5:4", "D5:4", "E5:4", "F5:4", "E5:2", "D5:2", "C5:4"]
    music.beginMelody(melody, MelodyOptions.Once)
}
