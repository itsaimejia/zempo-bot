const { Client } = require("discord.js")
const client = new Client({ intents: [3276799] })

const config = require("./config.json")



client.on("messageCreate", async message => {
    if (message.content == "hola") {
        message.channel.send("Hola!")
    }
})

client.login(config.token)
