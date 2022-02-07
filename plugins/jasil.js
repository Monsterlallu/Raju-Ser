const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://i.imgur.com/CtaexU3.jpeg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*Bᴏᴛ Nᴀᴍᴇ 🇷 🇦 🇯 🇺  🇸 🇪 🇷  🇧 🇴 🇹 *

*Cʀᴇᴀᴛᴇʀ number : wa.me/12019955965?text=Hi%20𝘙𝘢𝘫𝘶%20bro.%20*


 *Rᴀᴊᴜ sᴇʀ Cʜᴀɴᴀʟ : https://youtube.com/channel/UC1vRccmkHNiYuXLbzocZwuA😁*
     
 *Iɴsᴛᴀɢʀᴀᴍ ɪᴅ: https://instagram.com/monster_lallu_*

 *Rᴀᴊᴜ sᴇʀ Bᴏᴛ Gʀᴏᴜᴘ: https://chat.whatsapp.com/DnHJu25Ccss7zn72nPhL8z*

 *Gɪᴛ Lɪɴᴋ : https://github.com/Monsterlallu/Raju-Ser*

 *Rᴀᴊᴜ-sᴇʀ-ʙᴏᴛꫂ⁩..♡︎*
`}) 

}));
