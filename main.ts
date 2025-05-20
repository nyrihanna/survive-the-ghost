mp.onButtonEvent(mp.MultiplayerButton.A, ControllerButtonEvent.Pressed, function (player2) {
    mp.getPlayerSprite(player2).vy = -200
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(sprite, effects.fire, 100)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Finish, function (sprite, otherSprite) {
    info.changeScoreBy(1)
})
let projectile: Sprite = null
let finish: Sprite = null
let playerImages = [assets.image`red duck`, assets.image`blue duck`, assets.image`red duck`]
bundles.wrap1(function () {
    for (let index = 0; index <= 2; index++) {
        mp.setPlayerSprite(mp.getPlayerByIndex(index), sprites.create(playerImages[index], SpriteKind.Player))
        mp.getPlayerSprite(mp.getPlayerByIndex(index)).x = 75 + -30 * index
        mp.getPlayerSprite(mp.getPlayerByIndex(index)).ay = 600
        mp.getPlayerSprite(mp.getPlayerByIndex(index)).setStayInScreen(true)
    }
    finish = sprites.create(img`
        . 
        `, SpriteKind.Finish)
    finish.x = 0
    info.setLife(3)
})
game.onUpdateInterval(900, function () {
    projectile = sprites.createProjectileFromSide(assets.image`fireball`, -70, 0)
    projectile.y = randint(0, 120)
})
