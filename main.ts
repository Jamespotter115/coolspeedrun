controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (cube.isHittingTile(CollisionDirection.Bottom)) {
        cube.vy += -200
    }
})
scene.onOverlapTile(SpriteKind.Projectile, myTiles.tile2, function (sprite, location) {
    projectile.startEffect(effects.fire)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . e e . . . . . . . . 
        . . . . e 2 f b e . . . . . . . 
        . . . . b f f b e e . . . . . . 
        . . . e 2 f b 2 b 2 e . . . . . 
        . . . e 2 e b b f f b . . . . . 
        . . . . b f f 2 f 2 b . . . . . 
        . . . . 2 f 2 2 b b 2 . . . . . 
        . . . . . 2 b b e e . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, cube, 200, 0)
    if (cube.vx < 0) {
        projectile.setVelocity(-200, 0)
    }
    pause(500)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    game.over(true)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (cube.isHittingTile(CollisionDirection.Bottom)) {
        cube.vy += -200
    }
})
scene.onOverlapTile(SpriteKind.Projectile, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    projectile.startEffect(effects.fire)
})
scene.onOverlapTile(SpriteKind.Projectile, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    projectile.startEffect(effects.fire)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile1, function (sprite, location) {
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile5, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    tiles.setTilemap(tiles.createTilemap(hex`1400080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000101010000000000000001010000000000000101000000000001010100000000000000000000000000000000000000000000000000000001010000000000000000000000000000000000000000000000000000000000000000000000020101010101030303030303030303010101010101`, img`
        . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 2 . . . . . . . 2 2 . 
        . . . . . 2 2 . . . . . 2 2 2 . . . . . 
        . . . . . . . . . . . . . . . . . . . . 
        . . 2 2 . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . 
        2 2 2 2 2 . . . 2 2 . . . . 2 2 2 2 2 2 
        `, [myTiles.transparency16,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.collectibleInsignia,myTiles.tile5], TileScale.Sixteen))
    cube.setPosition(8, 105)
})
scene.onOverlapTile(SpriteKind.Projectile, sprites.dungeon.darkGroundNorthWest1, function (sprite, location) {
    projectile.startEffect(effects.fire)
})
let projectile: Sprite = null
let cube: Sprite = null
tiles.setTilemap(tiles.createTilemap(hex`1400080000000000000000000000000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000001010100000000000000000000000001010100000000000000000000000000010101000000000000000000010100000000000000000000000000000000000000000000020101010101010103030303030303030303010101`, img`
    . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . 
    2 . . . . . . . . . . . 2 2 2 . . . . . 
    . . . . . . . 2 2 2 . . . . . . . . . . 
    . . . 2 2 2 . . . . . . . . . 2 2 . . . 
    . . . . . . . . . . . . . . . . . . . . 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, [myTiles.transparency16,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.collectibleRedCrystal,myTiles.tile2,myTiles.tile1], TileScale.Sixteen))
cube = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . 2 2 2 2 2 2 2 . . . . . . . . 
    . 2 2 2 2 2 2 2 . . . . . . . . 
    . 2 2 2 2 2 2 2 . . . . . . . . 
    . 2 2 2 2 2 2 2 . . . . . . . . 
    . 2 2 2 2 2 2 2 . . . . . . . . 
    . 2 2 2 2 2 2 2 . . . . . . . . 
    . 2 2 2 2 2 2 2 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
cube.setPosition(8, 105)
controller.moveSprite(cube, 100, 0)
info.startCountdown(6.5)
scene.cameraFollowSprite(cube)
cube.ay = 600
game.splash("go go go")
