const { CommandClient } = require('eris')

// create bot
async function init(token) {
    const ADBadge = new CommandClient(`Bot ${token}`, { intents: ['guilds'], maxShards: 'auto',restMode: true })
    // Register the command
    ADBadge.on('ready', async () => {
        await ADBadge.bulkEditCommands([{
            name: 'henlo',
            description: 'want that badge? use this slash command bruhhhhh',
            type: 1,
        }])
        console.log(`use URL below \nhttps://discord.com/oauth2/authorize?client_id=${ADBadge.user.id}&scope=applications.commands%20bot&permissions=3072`)
    })
    // interaction
    ADBadge.on('interactionCreate', async (interaction) => {
        if (interaction?.data?.name === 'henlo') {
            await interaction.createMessage({
                content: 'busted xD'
            })
            //console.log("interaction complete")
            console.log('im done, have a good time with your badge')
            process.exit(0)
        }
    })
    ADBadge.connect();
}

const ADBadge = process.argv[2]
init(ADBadge);
