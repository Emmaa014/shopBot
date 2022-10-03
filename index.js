const { Client, Intents, DiscordAPIError, MessageEmbed, Permissions, Modal, PermissionOverwrites } = require('discord.js');
// const { REST } = require('@discordjs/rest');
// const { Routes } = require('discord-api-types/v9');
// const fs = require('node:fs');
// const { SlashCommandBuilder } = require('@discordjs/builders');
const { token, prefix } = require('./config.json');
const colors = require('./couleurs.json');
let time = new Date()
const config = require('./config.json');
// const { memberNicknameMention, Embed } = require('@discordjs/builders');
const client = new Client({ 
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS],
    partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});
// const discordModals = require('discord-modals');
// discordModals(client)

client.login(token)

client.once('ready', async() =>{
    console.log(`Logged in as ${client.user.tag} ==> ✔️`);
    // Statut
    client.user.setActivity(config.activity)
})
// Slash commands 

// const commands = [];
// const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

// const rest = new REST({ version: '9' }).setToken(token);

// (async () => {
// 	try {
// 		console.log('Started refreshing application (/) commands.');

// 		await rest.put(
// 			Routes.applicationGuildCommands(clientId, guildId),
// 			{ body: commands },
// 		);

// 		console.log('Successfully reloaded application (/) commands.');
// 	} catch (error) {
// 		console.error(error);
// 	}
// })();

// Place your client and guild ids here
// const clientId = '986576870881497139';
// const guildId = '986537290010599444';

// for (const file of commandFiles) {
// 	const command = require(`./commands/${file}`);
// 	commands.push(command.data.toJSON());
// }


// Give client role

client.on('guildMemberAdd', async(user) => {
    const guild = client.guilds.cache.get(('986537290010599444'))
    let role = guild.roles.cache.get('986670070484832337')

    user.roles.add(role)
    channel = guild.channels.cache.get('986930479880093696')
    channel.send(`Bienvenue sur le Time Less Shop <@${user.id}> ! N'hésites pas à lire le <#986562493566574592> avant de passer ta première commande !`)
    return;
})
client.on('messageCreate', async(message) => {
    let args = message.content.split(' ')

    // Say Commande
    // const say = new SlashCommandBuilder()
    //     .setName('Say')
    //     .setDescription('Permet au bot de dire le contenue de votre message')
    //     .addStringOption(option =>
    //         option.setName('Say2')
    //             .setDescription('Description')
    //             .setRequired(true));

    if(message.member.permissions.has('ADMINISTRATOR') && message.content.startsWith(config.prefix + 'say')) { 
        message.channel.send(message.content.replace(`${config.prefix}say `, ''))
        return;
    }

    // Comment Commander
    const guild = client.guilds.cache.get(('986537290010599444'));
    const packageEmote = guild.emojis.cache.get('986589780391391242')

    if(message.content.toLocaleLowerCase() === config.prefix + 'howtoorder' && message.member.permissions.has('ADMINISTRATOR')) {
        const howToOrder = new MessageEmbed()
            .setColor(colors.orange)
            .setAuthor({ name:'Time Less Shop BOT v1.5' })
            .setTitle('Commender commander ?')
            .setFooter({text:'Développé par 𝐸𝑚𝑚𝑎#9999'})
            .addField('\u200B', `Pour commander il vous suffit d'aller dans <#986582933995421736> et de réagir avec ${packageEmote}. Cela vous ouvrira un channel auquel seul vous, les vendeurs, et l'administatrion aura accès. Vous aurez alors un message vous détaillant les étapes de ventes. Lors de votre commande faites attention à bien respecter les instruction ! Donc si un article a un espace dans son nom comme par exmeple "Kit Pillage", afin d'indiquer que vous voulez cet article, vous devrez écrire "Kit-Pillage". Une amélioration sera bientôt apporté pour vous éviter cette contrainte mais en attendant nous vous demandons de bien vouloir respecter ce format ! En cas de question n'hésitez pas à ping un membre de l'adminitration ou un vendeur, ils se feront un plaisir de vous aider ! Merci encore de votre confiance et à bientôt sur le Time Less Shop !`, true)
            .setFooter({ text:'Développé par 𝐸𝑚𝑚𝑎#9999' })

        const howToOrderChann = message.channel
        howToOrderChann.send({ embeds: [howToOrder] });
    }


    // Sellers Categories
    // Emma
    const emmaCategory = guild.channels.cache.get('988757551808131113')
    // Maxime
    const maximeCategory = guild.channels.cache.get('988757847221346360')
    // Covox
    const covoxCategory = guild.channels.cache.get('988756501193699408')
    // JkPASenDieu
    const jkCategory = guild.channels.cache.get('988756653182713856')
    // Sirop
    const siropCategory = guild.channels.cache.get('988756882531422238')
    // Ago
    const agoCategory = guild.channels.cache.get('988757260715040768')
    // Block
    const blockCategory = guild.channels.cache.get('988762675737677854')
    // Lapinou
    const lapinouCategory = guild.channels.cache.get('988804359842299924')
    // Pokeuur
    const pokeuurCategory = guild.channels.cache.get('988762789394923540')
    // Marseille
    const marseilleCategory = guild.channels.cache.get('988762889471029248')
    // Pokkkk
    const pokkkkCategory = guild.channels.cache.get('988762989597425735')
    // Tsuko
    const tsukoCategory = guild.channels.cache.get('988763044152737872')

    // Sellers ID
    // Emma
    const emmaId = '275676354408611840'
    // Maxime
    const maximeId = '553952516010934284'
    // Covox 
    const covoxId = '411856695321427970'
    // JkPASenDieu
    const jkId = '531134284073926677'
    // Sirop
    const siropId = '981504768486801478'
    // Ago
    const agoId = '548201770892001302'
    // Block
    const blockId = '713885666169323550'
    // Lapinou
    const lapinouId = '607584707319955456'
    // Pokeuur
    const pokeuurId = '233333087965020170'
    // Mareille
    const marseilleId = '461110438067961866'
    // Pokkkk
    const pokkkkId = '319919569831723019'
    // Tsuko
    const tsukoId = '665586060188844051'

    // Message pour commencer une nouvelle commande
    if(message.content.startsWith(config.prefix)) {
        if(message.content === config.prefix + 'e' && message.member.permissions.has('ADMINISTRATOR')){
            
            let commande = new MessageEmbed()
                .setColor(colors.orange)
                .setAuthor({ name:'Time Less Shop BOT v1.5' })
                .setTitle('Cliques sur la réaction pour commander !')
                .setFooter({text:'Développé par 𝐸𝑚𝑚𝑎#9999'})
                .addField('\u200B', 'En cliquand sur la réaction, tu créeras un nouvel channel où tu pourra indiquer ce que tu souhaite commander', true)
                .setFooter({ text:'Développé par 𝐸𝑚𝑚𝑎#9999' })
            
            const orderChann = message.channel
            orderChann.send({ embeds: [commande] });

            let breake = setTimeout(react, 1000)
            function react() {
                message.channel.messages.fetch({ limit: 1 }).then( async(messages)=> {
                    const orderMessage = messages.first()
                    await orderMessage.react(message.guild.emojis.cache.get('986589780391391242'))
                })
            }
        };
        
        // Catalogue BC
        const guild = client.guilds.cache.get(('986537290010599444'));
        const arrow = guild.emojis.cache.get('986951896222793728');

        const bcCatalogEmbed = new MessageEmbed()
            .setColor(colors.orange)
            .setAuthor({ name:'Time Less Shop BOT v1.5' })
            .setTitle('Catalogue base claim')
            .addFields(
                { name:`${arrow} Obsidienne`, value:'1.500$/s', inline:true },
                { name:`${arrow} Hardened Obsidienne`, value:'2.000$/s', inline:true },
                { name:`\u200B`, value:'\u200B', inline:false },
                { name:`${arrow} Slime Pad`, value:'400$/u | 21.000$/s', inline:true },
                { name:`${arrow} Fake Water`, value:'100$/u | 4.900$/s', inline:true },
                { name:`\u200B`, value:'\u200B', inline:false },
                { name:`${arrow} Sable`, value:'5.000$/1.000', inline:true },
                { name:`${arrow} Enclumes`, value:'Temporairement indisponible', inline:true },
                { name:`\u200B`, value:'\u200B', inline:false },
                { name:`${arrow} Tables d'Enchantement`, value:'900$/u', inline:true },
                { name:`${arrow} Spikes en Titane`, value:'250$/u | 15.000$/s', inline:true },
                { name:`\u200B`, value:'\u200B', inline:false },
                { name:`${arrow} Spikes en Paladium`, value:'550$/u | 32.0000$/s', inline:true },
                { name:`${arrow} Guardian Golem niveau 1`, value:'80.000$/u', inline:true },
                { name:`\u200B`, value:'\u200B', inline:false },
                { name:`${arrow} Tank d'eau en Paladium`, value:'1.000$/t', inline:true },
                { name:`${arrow} Tank de lave en Paladium`, value:'2.000$/t', inline:true },
            )
            .setFooter({ text:'Développé par 𝐸𝑚𝑚𝑎#9999' })
        
        if(message.content === config.prefix + 'cataloguebc') {
            await message.channel.send({ embeds:[bcCatalogEmbed] }).then(message.delete())
        }

        // Catalogue Pillage
        const kitChannel = message.guild.channels.cache.get('986978934182805556')
        if(message.content === config.prefix.toLocaleLowerCase() + 'cataloguepillage' && message.member.permissions.has('ADMINISTRATOR')) {
            const pillageCatalogEmbed = new MessageEmbed()
                .setColor(colors.orange)
                .setAuthor({ name:'Time Less Shop BOT v1.5' })
                .setTitle('Catalogue pillage')
                .addFields(
                    { name:'__Unclaims Finders :__', value:'\u200B', inline:false },
                    { name:`${arrow} Unclaim Finder Vert`, value:'2.000$/u', inline:true },
                    { name:`${arrow} Unclaim Finder Orange`, value:'5.000$/u', inline:true },
                    { name:`\u200B`, value:'\u200B', inline:false },
                    { name:`${arrow} Unclaim Finder Rouge`, value:'8.500$/u', inline:true },
                    { name:`${arrow} Unclaim Finder Bleu`, value:'72.000$/u', inline:true },
                    { name:`\u200B`, value:'\u200B', inline:false },
                    { name:'__Unclaims Helmets (Slimy Helmet) :__', value:'\u200B', inline:false },
                    { name:`${arrow} Unclaim Helmet Vert`, value:'7.000/u', inline:true },
                    { name:`${arrow} Unclaim Helmet Orange`, value:'11.000$/u', inline:true },
                    { name:`\u200B`, value:'\u200B', inline:false },
                    { name:`${arrow} Unclaim Helmet Rouge`, value:'21.000$/u', inline:true },
                    { name:`${arrow} Unclaim Helmet Bleu`, value:'80.000$/u', inline:true },
                    { name:`\u200B`, value:'\u200B', inline:false },
                    { name:'__Divers__', value:'\u200B', inline:false },
                    { name:`${arrow} Cave Block`, value:'500$/u | 30.000$/s', inline:true },
                    { name:`${arrow} Scuba Helmet`, value:'400$/u', inline:true },
                    { name:`\u200B`, value:'\u200B', inline:false },
                    { name:`${arrow} Dynamite`, value:'700$/u | 42.000$/s', inline:true },
                    { name:`${arrow} Big dynamite`, value:' 2.100$/u | 130.000$/s', inline:true },
                    { name:`\u200B`, value:'\u200B', inline:false },
                    { name:`${arrow} Kit Travel`, value:`2.200$/u (<#${kitChannel.id}>)`, inline:true },
                    { name:`${arrow} Kit Pillage`, value:`35.000$/u (<#${kitChannel.id}>)`, inline:true },
                )
                .setFooter({ text:'Développé par 𝐸𝑚𝑚𝑎#9999' })
            message.channel.send({ embeds:[pillageCatalogEmbed] }).then(message.delete())
        }

        // Catalogue minage
        const minorCatalogEmbed = new MessageEmbed()
            .setColor(colors.orange)
            .setAuthor({ name:'Time Less Shop BOT v1.5' })
            .setTitle('Catalogue mineur')
            .addFields(
                { name:'__Lingots :__', value:'\u200B', inline:false },
                { name:`${arrow} Lingots de Paladium`, value:'6.000$/s', inline:true },
                { name:`${arrow} Lingots de Titane`, value:'1.600$/s', inline:true },
                { name:`\u200B`, value:'\u200B', inline:false },
                { name:`${arrow} Lingots de Améthyste`, value:'1.000$/s', inline:true },
                { name:`${arrow} Lingots de Fer`, value:'1.000$/s', inline:true },
                { name:`\u200B`, value:'\u200B', inline:false },
                { name:'__Minerais :__', value:'\u200B', inline:false },
                { name:`${arrow} Paladium Ore`, value:'12.000$/s (5 stacks/j max)', inline:true },
                { name:`${arrow} Titane Ore`, value:'3.000$/s (5 stacks/j max)', inline:true },
                { name:`\u200B`, value:'\u200B', inline:false },
                { name:`${arrow} Améthyste Ore`, value:'2.500$/s (5 stacks/j max)', inline:true },
                { name:`${arrow} Iron Ore`, value:'2.000$/s (5 stacks/j max)', inline:true },
                { name:`\u200B`, value:'\u200B', inline:false },
                { name:'__Cobble Breakers :__', value:'\u200B', inline:false },
                { name:`${arrow} Cobble Breaker`, value:'1.400$/u | 85.000$/s', inline:true },
                { name:`${arrow} Titane Upgrade`, value:'500$/u', inline:true },
            )
            .setFooter({ text:'Développé par 𝐸𝑚𝑚𝑎#9999' })
        
        if(message.content.toLocaleLowerCase() === config.prefix + 'catalogueminor') {
            await message.channel.send({ embeds:[minorCatalogEmbed] }).then(message.delete())
        }

        // Catalogue alchimiste
        // { name:`${arrow} `, value:'$/s', inline:true },
        const alchimistCatalogEmbed = new MessageEmbed()
            .setColor(colors.orange)
            .setAuthor({ name:'Time Less Shop BOT v1.5' })
            .setTitle('_atalogue alchimiste')
            .addFields(
                { name:'__Flower :__', value:'\u200B', inline:false },
                { name:`${arrow} Paldium Flower`, value:'380$/u', inline:true },
                { name:`${arrow} Mineral Flower`, value:'9.800$/u', inline:true },
                { name:`\u200B`, value:'\u200B', inline:false },
                { name:`${arrow} Harpagophytum`, value:'4.850$/u', inline:true },
                { name:`${arrow} Fleur Vanilla`, value:'240$/s', inline:true },
                { name:`\u200B`, value:'\u200B', inline:false },
                { name:'__Divers :__', value:'\u200B', inline:false },
                { name:`${arrow} Bois moddé (au choix)`, value:'1.200$/s', inline:true },
                { name:`${arrow} Lightning Potion`, value:'6.000$/u', inline:true },
                { name:`\u200B`, value:'\u200B', inline:false },
                { name:`${arrow} Fioles remplies (au choix)`, value:'2.500$/s', inline:true },
                { name:`${arrow} Mystical Bookshelvs (complètes)`, value:'165.000/u', inline:true },
                { name:`\u200B`, value:'\u200B', inline:false },
                { name:`${arrow} Fioles Vanilla`, value:'80$/s', inline:true },
                { name:`${arrow} Fioles Moddées`, value:'60$/s (16)', inline:true },
                { name:`\u200B`, value:'\u200B', inline:false },
                { name:`${arrow} Shiny Wood`, value:'4.500$/u', inline:true },
                { name:`\u200B`, value:'\u200B', inline:false },
                { name:'__Machines :__', value:'\u200B', inline:false },
                { name:`${arrow} Portail en Améthyste`, value:'80.000$/u', inline:true },
                { name:`${arrow} Portail en Titane`, value:'90.000$/u', inline:true },
                { name:`\u200B`, value:'\u200B', inline:false },
                { name:`${arrow} Portail en Paladium`, value:'110.000$/u', inline:true },
                { name:`\u200B`, value:'\u200B', inline:false },
                { name:`${arrow} __Tanks de Sève (au choix) :__`, value:'\u200B', inline:true },
                { name:`${arrow} Tank en or`, value:'3.300$/t', inline:true },
                { name:`${arrow} Tank en Améthyste`, value:'4.700$/t', inline:true },
                { name:`\u200B`, value:'\u200B', inline:false },
                { name:`${arrow} Tank en Titane`, value:'8.200$/t', inline:true },
                { name:`${arrow} Tank en Paladium`, value:'11.000$/t', inline:true },
            )
            .setFooter({ text:'Développé par 𝐸𝑚𝑚𝑎#9999' })
        
        if(message.content.toLocaleLowerCase() === config.prefix + 'cataloguealchimiste') {
            await message.channel.send({ embeds:[alchimistCatalogEmbed] }).then(message.delete())
        }

        // Catalogue PvP
        const pvpCatalogEmbed = new MessageEmbed()
            .setColor(colors.orange)
            .setAuthor({ name:'Time Less Shop BOT v1.5' })
            .setTitle('Catalogue PvP')
            .addFields(
                { name:'__Stuff Paladium :__', value:'\u200B', inline:false },
                { name:`${arrow} Épée parfaite`, value:'6.500$/u', inline:true },
                { name:`${arrow} Casque P4 U3`, value:'5.500$/u', inline:true },
                { name:`\u200B`, value:'\u200B', inline:false },
                { name:`${arrow} Plastron P4 U3`, value:'6.500$/u', inline:true },
                { name:`${arrow} Pantalon P4 U3`, value:'6.000$/u', inline:true },
                { name:`\u200B`, value:'\u200B', inline:false },
                { name:`${arrow} Bottes P4 U3`, value:'5.000$/u', inline:true },
                { name:`${arrow} Full P4 U3`, value:'22.000$/u', inline:true },
                { name:`\u200B`, value:'\u200B', inline:false },
                { name:`${arrow} Ajout d'amulettes`, value:'Temporairement indisponible', inline:true },
                { name:`\u200B`, value:'\u200B', inline:false },
                { name:'__Sticks :__', value:'\u200B', inline:false },
                { name:`${arrow} Heal Stick`, value:'5.000$/u', inline:true },
                { name:`${arrow} Strength Stick`, value:'5.000$/u', inline:true },
                { name:`\u200B`, value:'\u200B', inline:false },
                { name:`${arrow} Speed Stick`, value:'7.000$/u', inline:true },
                { name:`${arrow} Jump Stick`, value:'5.000$/u', inline:true },
                { name:`\u200B`, value:'\u200B', inline:false },
                { name:`${arrow} Stick of God`, value:'15.000$/u', inline:true },
                { name:`${arrow} Ajout U3`, value:'2.000$/u', inline:true },
                { name:`\u200B`, value:'\u200B', inline:false },
                { name:'__Paladium Bow :__', value:'\u200B', inline:false },
                { name:`${arrow} Perfect Paladium Bow`, value:'30.000$/u', inline:true },
                { name:`${arrow} Wither Arrow`, value:'4.500$/u', inline:true },
                { name:`\u200B`, value:'\u200B', inline:false },
                { name:`${arrow} Frost Arrow`, value:'3.000$/u', inline:true },
                { name:`${arrow} Mid Life Arrow`, value:'8.000$/u', inline:true },
                { name:`\u200B`, value:'\u200B', inline:false },
                { name:`${arrow} Switch Arrow`, value:'Temporairement indisponible', inline:true },
                { name:`\u200B`, value:'\u200B', inline:false },
                { name:'__Divers :__', value:'\u200B', inline:false },
                { name:`${arrow} Paladium Apple`, value:'900$/u | 13.500$/s (16)', inline:true },
                { name:`${arrow} Potion Launcher`, value:'1.800$/u', inline:true },
                { name:`\u200B`, value:'\u200B', inline:false },
                { name:`${arrow} Heal Potion II`, value:'300$/u', inline:true },
                { name:`${arrow} Fire Resistance 8min`, value:'700$/u', inline:true },
            )
            .setFooter({ text:'Développé par 𝐸𝑚𝑚𝑎#9999' })
        
        if(message.content.toLocaleLowerCase() === config.prefix + 'cataloguepvp') {
            await message.channel.send({ embeds:[pvpCatalogEmbed] }).then(message.delete())
        }

        // Catalogue Farmer
        const farmeurCatalogEmbed = new MessageEmbed()
            .setColor(colors.orange)
            .setAuthor({ name:'Time Less Shop BOT v1.5' })
            .setTitle('Catalogue farmeurs')
            .addFields(
                { name:'__Graine :__', value:'\u200B', inline:false },
                { name:`${arrow} Graine de Blé`, value:'150$/s', inline:true },
                { name:`${arrow} Graine Eggplants`, value:'220$/s', inline:true },
                { name:`\u200B`, value:'\u200B', inline:false },
                { name:`${arrow} Graine Chervils`, value:'330$/s', inline:true },
                { name:`${arrow} Graine Kiwano`, value:'55.000$/s', inline:true },
                { name:`\u200B`, value:'\u200B', inline:false },
                { name:'__Seedplanters :__', value:'\u200B', inline:false },
                { name:`${arrow} Seedplanters Améthyste`, value:'3.500$/u', inline:true },
                { name:`${arrow} Seedplanters Titane`, value:'5.800$/u', inline:true },
                { name:`\u200B`, value:'\u200B', inline:false },
                { name:`${arrow} Seedplanters Paladium`, value:'10.800$/u', inline:true },
                { name:`\u200B`, value:'\u200B', inline:false },
                { name:'__Divers :__', value:'\u200B', inline:false },
                { name:`${arrow} Xp Bush`, value:'300$/u | 18.000$/s', inline:true },
                { name:`${arrow} Xp Berry`, value:'8.200$/s', inline:true },
                { name:`\u200B`, value:'\u200B', inline:false },
                { name:`${arrow} Xp Berry Compressed`, value:'1.200$/u | 74.000$/s', inline:true },
                { name:`${arrow} Blé`, value:'500$/s', inline:true },
                { name:`\u200B`, value:'\u200B', inline:false },
                { name:`${arrow} Fertilised Dirt`, value:'600$/s', inline:true },
                { name:`${arrow} Os`, value:'300$/s', inline:true },
            )
            .setFooter({ text:'Développé par 𝐸𝑚𝑚𝑎#9999' })
        
        if(message.content.toLocaleLowerCase() === config.prefix + 'cataloguefarmer') {
            await message.channel.send({ embeds:[farmeurCatalogEmbed] }).then(message.delete())
        }

        // Catalogue Outils
        const outilsCatalogEmbed = new MessageEmbed()
            .setColor(colors.orange)
            .setAuthor({ name:'Time Less Shop BOT v1.5' })
            .setTitle('Catalogue outils')
            .addFields(
                { name:`${arrow} Epée en Paladium`, value:'700$/u', inline:true },
                { name:`${arrow} Pelle en Paladium`, value:'650$/u', inline:true },
                { name:`\u200B`, value:'\u200B', inline:false },
                { name:`${arrow} Hache en Paladium`, value:'800$/u', inline:true },
                { name:`${arrow} Pioche en Paladium`, value:'800$/u', inline:true },
                { name:`\u200B`, value:'\u200B', inline:false },
                { name:`${arrow} POG level 5 E4,F3`, value:'10.000$/u', inline:true },
                { name:`${arrow} Pioche Parfaites E5,U3,F3`, value:'6.500$/u', inline:true },
                { name:`\u200B`, value:'\u200B', inline:false },
                { name:`${arrow} Hammer en Paladium`, value:'3.500$/u', inline:true },
                { name:`${arrow} Hammer en Paladium Fortune 2 Smelt 1`, value:'6.500$/u', inline:true },
                { name:`\u200B`, value:'\u200B', inline:false },
                { name:`${arrow} Hammer en Paladium Fortune 3 Smelt 1`, value:'53.000$/u', inline:true },
                { name:`${arrow} Hammer en Paladium Speed 3`, value:'11.000$/u', inline:true },
                { name:`\u200B`, value:'\u200B', inline:false },
                { name:`${arrow} Cavern Hammer`, value:'9.000$/u', inline:true },
            )
            .setFooter({ text:'Développé par 𝐸𝑚𝑚𝑎#9999' })
        
        if(message.content.toLocaleLowerCase() === config.prefix + 'catalogueoutils') {
            await message.channel.send({ embeds:[outilsCatalogEmbed] }).then(message.delete())
        }

        // Catalgue Machines 
        const machinesCatalogEmbed = new MessageEmbed()
            .setColor(colors.orange)
            .setAuthor({ name:'Time Less Shop BOT v1.5' })
            .setTitle('Catalogue Machines')
            .addFields(
                { name:`${arrow} Paladium Furnace`, value:'700$/u', inline:true },
                { name:`${arrow} Paladium Furnace Upgrade`, value:'150$/u, 2.400/s (16)', inline:true },
                { name:`\u200B`, value:'\u200B', inline:false },
                { name:`${arrow} Palamachine`, value:'12.500$/u', inline:true },
                { name:`${arrow} Grinder complet`, value:'19.500$/u', inline:true },
            )
            .setFooter({ text:'Développé par 𝐸𝑚𝑚𝑎#9999' })
        
        if(message.content.toLocaleLowerCase() === config.prefix + 'cataloguemachines') {
            await message.channel.send({ embeds:[machinesCatalogEmbed] }).then(message.delete())
        }

        // Détails kits
        const detailsKitsEmbed = new MessageEmbed()
            .setColor(colors.orange)
            .setAuthor({ name:'Time Less Shop BOT v1.5' })
            .setTitle('Détails kits')
            .addFields(
                { name:`__Kit Travel :__`, value:'\u200B', inline:false },
                { name:`\u200B`, value:`${arrow} 1 Slimy Helmet`, inline:true },
                { name:`\u200B`, value:`${arrow} 1 Jump Chestplate`, inline:true },
                { name:`\u200B`, value:'\u200B', inline:false },
                { name:`\u200B`, value:`${arrow} 1 Travel Leggings`, inline:true },
                { name:`\u200B`, value:`${arrow} 1 Travel Boots`, inline:true },
                { name:`\u200B`, value:'\u200B', inline:false },
                { name:`\u200B`, value:`${arrow} 1 Hang Glider`, inline:true },
                { name:`\u200B`, value:'\u200B', inline:false },
                { name:`__Kit Pillage :__`, value:'\u200B', inline:false },
                { name:`\u200B`, value:`${arrow} 1 Kit Travel`, inline:true },
                { name:`\u200B`, value:`${arrow} 1 Scuba Helmet`, inline:true },
                { name:`\u200B`, value:'\u200B', inline:false },
                { name:`\u200B`, value:`${arrow} 1 Unclaim Finder Vert`, inline:true },
                { name:`\u200B`, value:`${arrow} 4 Caves Blocks`, inline:true },
                { name:`\u200B`, value:'\u200B', inline:false },
                { name:`\u200B`, value:`${arrow} 32 Dynamites`, inline:true },
            )
            .setFooter({ text:'Développé par 𝐸𝑚𝑚𝑎#9999' })
        
        if(message.content.toLocaleLowerCase() === config.prefix + 'kits') {
            await message.channel.send({ embeds:[detailsKitsEmbed] }).then(message.delete())
        }

        // Avis vendeur
        const feedbackEmbed = new MessageEmbed()
            .setColor(colors.orange)
            .setAuthor({ name:'Time Less Shop BOT v1.5' })
            .addFields(
                { name:'Commande teminée !', value:'Merci pour ta confiance ! Dis nous comment ça c\'est passé avec ton vendeur dans <#987124814043033710> !' },
            )
            .setFooter({ text:'Développé par 𝐸𝑚𝑚𝑎#9999' })
        
        const ticketChannelFeedback = message.channel
        if(message.content === config.prefix + 'feedback') {
            ticketChannelFeedback.send({ embeds:[feedbackEmbed] }).then(ticketChannelFeedback.permissionOverwrites.edit('986670070484832337', { SEND_MESSAGES: false }))
            ticketChannelFeedback.permissionOverwrites.edit('986669926943178812', { SEND_MESSAGES: true })
            ticketChannelFeedback.permissionOverwrites.edit('986738379414728774', { SEND_MESSAGES: true })
            ticketChannelFeedback.permissionOverwrites.edit('986738490794463303', { SEND_MESSAGES: true }).then(message.delete())
        }
        // Delet channel
        const clientRole = guild.roles.cache.get('986670070484832337')
        const vendeurTest = guild.roles.cache.get('986669926943178812')
        const vendeur = guild.roles.cache.get('986738379414728774')
        const vendeurConfirme = guild.roles.cache.get('986738490794463303')

        if(message.content === config.prefix + 'finished') {
            if(message.member.roles.cache.some(r => r == vendeurTest) ||  message.member.roles.cache.some(r => r == vendeurTest) || message.member.roles.cache.some(r => r == vendeur) || message.member.roles.cache.some(r => r == vendeurConfirme) || message.member.permissions.has('ADMINISTRATOR')) {
                switch (message.channel.parentId) {
                    case emmaCategory.id:
                        message.channel.delete()
                        break;
                    case maximeCategory.id:
                        message.channel.delete()
                        break;
                    case covoxCategory.id:
                        message.channel.delete()
                        break;
                    case jkCategory.id:
                        message.channel.delete()
                        break;
                    case siropCategory.id:
                        message.channel.delete()
                        break;
                    case agoCategory.id:
                        message.channel.delete()
                        break;
                    case blockCategory.id:
                        message.channel.delete()
                        break;
                    case pokeuurCategory.id:
                        message.channel.delete()
                        break;
                    case marseilleCategory.id:
                        message.channel.delete()
                        break;
                    case pokkkkCategory.id:
                        message.channel.delete()
                        break;
                    case tsukoCategory.id:
                        message.channel.delete()
                        break;
                    case '986698470498918470':
                        message.channel.delete()
                        break;
                    default:
                        message.channel.send('Tu ne peux pas supprimer ce salon :x:').then(message.delete())
                        break;
                }
            } else {
                return message.channel.send('Tu n\'as pas la permissions d\'effectuer cette commande')
            }
        }
    
    // Command to take order

    if(message.content === prefix + 'claim') {
        if(message.member.roles.cache.some(r => r == vendeurTest) ||  message.member.roles.cache.some(r => r == vendeurTest) || message.member.roles.cache.some(r => r == vendeur) || message.member.roles.cache.some(r => r == vendeurConfirme)) {
            console.log('ici')
            if(message.channel.parentId === '986698470498918470') {
                const orderChannMove = message.channel

                // await message.guild.members.fetch({force:true})
                // const  = message.channel.members.find(m => {
                //     return m.roles.cache.has(clientRole.id) && !m.roles.cache.has(vendeurTest.id) && !m.roles.cache.has(vendeur.id) && !m.roles.cache.has(vendeurConfirme.id);
                // })
                
                // if (typeof() == "undefined") return;
                
                const permissionsFunction = () => {
                    orderChannMove.permissionOverwrites.edit(message.author, {
                        VIEW_CHANNEL: true
                    })
                    orderChannMove.permissionOverwrites.edit(vendeurTest, {
                        VIEW_CHANNEL: false
                    })
                    orderChannMove.permissionOverwrites.edit(vendeur, {
                        VIEW_CHANNEL: false
                    })
                    orderChannMove.permissionOverwrites.edit(vendeurConfirme, {
                        VIEW_CHANNEL: false
                    })
                }
                
                function claim() {
                    switch (message.author.id) {
                        case emmaId:
                            orderChannMove.setParent(emmaCategory)
                            permissionsFunction()
                            break;
                        case maximeId:
                            orderChannMove.setParent(maximeCategory)
                            permissionsFunction()
                            break;
                        case covoxId:
                            orderChannMove.setParent(covoxCategory)
                            permissionsFunction()
                            break;
                        case jkId:
                            orderChannMove.setParent(jkCategory)
                            permissionsFunction()
                            break;
                        case siropId:
                            orderChannMove.setParent(siropCategory)
                            permissionsFunction()
                            break;
                        case agoId:
                            orderChannMove.setParent(agoCategory)
                            permissionsFunction()
                            break;
                        case blockId:
                            orderChannMove.setParent(blockCategory)
                            permissionsFunction()
                            break;
                        case lapinouId:
                            orderChannMove.setParent(lapinouCategory)
                            permissionsFunction()
                            break;
                        case pokeuurId:
                            orderChannMove.setParent(pokeuurCategory)
                            permissionsFunction()
                            break;
                        case marseilleId:
                            orderChannMove.setParent(marseilleCategory)
                            permissionsFunction()
                            break;
                        case pokkkkId:
                            orderChannMove.setParent(pokkkkCategory)
                            permissionsFunction()
                            break;
                        case tsukoId:
                            orderChannMove.setParent(tsukoCategory)
                            permissionsFunction()
                            break;
                        default:
                            message.channel.send("Tu n'as pas encore de catégorie à toi, contactes Emma pour y remédier !")
                    }
                }
                claim()
                
                message.delete()
            } else return;
        } else return;
    } else return;
    }

})

    client.on('messageReactionAdd', async(reaction, user) => {
        if(reaction.message.id == '986709881723707402') {
            // Check if reaction is good
            
            if(reaction.partial) {
                try{
                    await reaction.fetch()
                } catch(error) {
                    console.error(error)
                    return
                }
            }
            // Remove reaction
            try {
                reaction.users.remove(user)
            } catch(error) {
                console.log('ici')
                console.log(error)
            }

            // Create ticket
            const guild = client.guilds.cache.get(('986537290010599444'))
            const userTag = user.tag
            const commandesCategory = guild.channels.cache.get('986698470498918470')
            
            const ticketChannel = await guild.channels.create(`commande-${userTag}`, {
                type: 'GUILD_TEXT',
                parent: commandesCategory,
                permissionOverwrites: [
                    {
                        id: guild.id,
                        deny: [Permissions.FLAGS.VIEW_CHANNEL],
                    },
                    {
                        id: user.id, 
                        allow: [Permissions.FLAGS.VIEW_CHANNEL]
                    }
                ]
            })
            ticketChannel.permissionOverwrites.edit('986669926943178812', { VIEW_CHANNEL: true });
            ticketChannel.permissionOverwrites.edit('986738379414728774', { VIEW_CHANNEL: true });
            ticketChannel.permissionOverwrites.edit('986738490794463303', { VIEW_CHANNEL: true });

            // Order interaction


            // Order embed
            const packageEmote = guild.emojis.cache.get('986589780391391242')
            const orderEmbed = new MessageEmbed()
                .setColor(colors.orange)
                .setAuthor({ name:'Time Less Shop BOT v1.5', iconURL:'https://cdn.discordapp.com/icons/986537290010599444/3604ff1ae352039ce8d22afe4fa3aac1.png?size=4096' })
                .setTitle(`Espace commande ${packageEmote}`)
                .addFields(
                    { name:'\u200B', value:'Merci d\'indiquer séparé d\'un espace à chaque fois. Si l\'article souhaité contient des espaces dans son nom, merci de remplacer les espaces par des tirets du 6 ( - ) sans quoi votre commande sera invalidée !. Voici donc le schéma à suivre :' },
                    { name:'\u200B', value:'\u200B' },
                    { name:'\u200B', value:'- L\'article souhaité (exemple : Kit-Pillage (merci de ne pas mettre d\'espaces))' },
                    { name:'\u200B', value:'- La quantitée souhaité (exemple : 2)' },
                    { name:'\u200B', value:'- Le prix total (exemple : 70.000$ (merci de ne pas mettre d\'espaces))' },
                    { name:'\u200B', value:'- Délai de livraison souhaité (exemple 2jours (merci de ne pas mettre d\'espaces)' },
                    { name:'Exemple du format à respecter __impérativement__', value:'Voici un exemple complet : "Kit-PvP 2 30.000$ 2jours" si vous ne faites pas ça, le bot crash !' },
                    { name:'__**IMPORTANT**__ Si tu as des questions à poser avant de commander merci de mettre ``=`` davant ton message, si non, ou le bot vas crash, ou ta commande sera invalide !', value:'\u200B' }
                )
                .setFooter({ text:'Développé par 𝐸𝑚𝑚𝑎#9999' })
            ticketChannel.send({ embeds:[orderEmbed] })
            
            const collector = ticketChannel.createMessageCollector({ filter: m => m.author.id === user.id && !m.content.startsWith('=') && !m.content.startsWith(config.prefix) && !m.content.split(' ').length !== 4, max: 1 });

            try {
                collector.on('collect', m => {
                    const args = m.content.split(' ')

                    const sellerEmbed = new MessageEmbed()
                        .setColor(colors.orange)
                        .setAuthor({ name:'Time Less Shop BOT v1.5', iconURL:'https://cdn.discordapp.com/icons/986537290010599444/3604ff1ae352039ce8d22afe4fa3aac1.png?size=4096' })
                        .setTitle('Nouvelle commande reçue !')
                        .addFields(
                            { name:'Article souhaité :', value:args[0], inline:false },
                            { name:'Quantité :', value:args[1], inline:false },
                            { name:'Prix :', value:args[2], inline:false },
                            { name:'Délais :', value:args[3], inline:false },
                            { name: 'Lien de la commande:', value:`<#${ticketChannel.id}>` },
                            { name:'\u200B', value:'<@&986669926943178812> <@&986738379414728774> <@&986738490794463303>' }
                        )
                        .setFooter({ text:'Développé par 𝐸𝑚𝑚𝑎#9999' })

                    // Post order
                    const orderReception = guild.channels.cache.get('986742575979429928')
                    orderReception.send({ embeds:[sellerEmbed] })
                    orderReception.send('<@&986669926943178812> <@&986738379414728774> <@&986738490794463303>').then(x => x.delete())


                    // Recap 
                    const recapEmbed = new MessageEmbed()
                    .setColor(colors.orange)
                        .setAuthor({ name:'Time Less Shop BOT v1.5', iconURL:'https://cdn.discordapp.com/icons/986537290010599444/3604ff1ae352039ce8d22afe4fa3aac1.png?size=4096' })
                        .setTitle('Récapitulatif de ta commande :')
                        .addFields(
                            { name :'Merci !', value:'Votre commande a été transmise aux différents vendeurs et vendeuses ! Voici le récapitulatif :' },
                            { name:'Article souhaité :', value:args[0], inline:false },
                            { name:'Quantité :', value:args[1], inline:false },
                            { name:'Prix :', value:args[2], inline:false },
                            { name:'Délais :', value:args[3], inline:false },
                        )
                        .setFooter({ text:'Développé par 𝐸𝑚𝑚𝑎#9999' })
                    ticketChannel.send({ embeds:[recapEmbed] })
                });
    
                collector.on('end', collected => {})
            } catch(error) {
                console.log(error)
            }
            return;
        } else {
            return;
        }
    })