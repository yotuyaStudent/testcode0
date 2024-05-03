mobs.onMobKilled(CHICKEN, function () {
    blocks.fill(
    GRASS,
    pos(0, 0, 0),
    pos(0, 0, 0),
    FillOperation.Replace
    )
})
player.say(agent.getPosition())
