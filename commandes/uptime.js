const { zokou } = require("../framework/zokou");
const moment = require("moment-timezone");
const { getBuffer } = require("../framework/dl/Function");
const { default: axios } = require('axios');
const speed = require("performance-now");


const runtime = function (seconds) { 
 seconds = Number(seconds); 
 var d = Math.floor(seconds / (3600 * 24)); 
 var h = Math.floor((seconds % (3600 * 24)) / 3600); 
 var m = Math.floor((seconds % 3600) / 60); 
 var s = Math.floor(seconds % 60); 
 var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " d, ") : ""; 
 var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " h, ") : ""; 
 var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " m, ") : ""; 
 var sDisplay = s > 0 ? s + (s == 1 ? " second" : " s") : ""; 
 return dDisplay + hDisplay + mDisplay + sDisplay; 
 } 
let timestamp = speed() 
let flashspeed = (speed() - timestamp).toFixed(4)
zokou({ nomCom: 'ping',
    desc: 'To check ping',
    Categorie: 'General',
    reaction: '♻️', 
    fromMe: 'true', 


  },

async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre} = commandeOptions;



await repondre(`𝚂𝙲𝙴𝙽𝙴-𝙼𝙳 𝙱𝚈 𝙱𝙴𝙻𝚃𝙰𝙷\n\n> 𝙿𝚘𝚗𝚐 𝚕𝚊𝚝𝚎𝚗𝚌𝚢 *_${flashspeed}_* 𝚖𝚜`);

}
);


/*king({ nomCom: 'active',
    desc: 'To check ping',
    Categorie: 'General',
    reaction: '👀', 
    fromMe: 'true', 


  },

async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre, } = commandeOptions;



await zk.sendMessage(dest, { video: { url: 'https://telegra.ph/file/4bbcfdf0a62d8a53165ee.mp4' }, caption: `Hello ${m.pushName}, 𝐑𝐀𝐈𝐃𝐄𝐑 is alive since  ${runtime(process.uptime())}`, { quoted: m }); 
}

}
);*/

zokou({ nomCom: 'uptime',
    desc: 'To check runtime',    
    Categorie: 'General',
    reaction: '👁️', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`𝚂𝙲𝙴𝙽𝙴-𝙼𝙳 𝙱𝚈 𝙱𝙴𝙻𝚃𝙰𝙷\n\n> 𝚄𝙿𝚃𝙸𝙼𝙴 𝚄𝙿𝚃𝙾 : *${runtime(process.uptime())}* 𝚂𝙸𝙽𝙲𝙴 𝙻𝙰𝚂𝚃 𝙰𝙲𝚃𝙸𝚅𝙴♻️`) 

   


  }
);

zokou({ nomCom: 'runtime',
    desc: 'To check runtime',    
    Categorie: 'General',
    reaction: '⚡', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`*𝚂𝙲𝙴𝙽𝙴-𝙼𝙳 𝙱𝚈 𝙱𝙴𝙻𝚃𝙰𝙷 𝙸𝚂 𝙰𝙲𝚃𝙸𝚅𝙴* \n\n> 𝙱𝙾𝚃 𝚒𝚜 𝚌𝚞𝚛𝚛𝚎𝚗𝚝𝚕𝚢 𝚠𝚘𝚛𝚔𝚒𝚗𝚐 𝚘𝚗 𝚊 𝚐𝚘𝚘𝚍 𝚑𝚎𝚊𝚕𝚝𝚑𝚢 𝚜𝚝𝚊𝚝𝚞𝚜 𝚊𝚗𝚍 𝚑𝚊𝚜 𝚋𝚎𝚎𝚗 𝚛𝚞𝚗𝚗𝚒𝚗𝚐 𝚎𝚗𝚍𝚕𝚎𝚜𝚜𝚕𝚢 𝚏𝚘𝚛 *_${runtime(process.uptime())}_* `)

   


  }
);


zokou({ nomCom: 'ss',
    desc: 'screenshots website',
    Categorie: 'General',
    reaction: '🎥', 
    fromMe: 'true', 

},
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

    if (!arg || arg.length === 0) return repondre("provide a link...");

         const linkk = arg.join(' ');



let linkkk = `https://api.maher-zubair.tech/misc/sstab?url=${linkk}&dimension=720x720`;

let res = await getBuffer(linkkk);
   let caption = '*Powered by SCENE-MD*' 

await zk.sendMessage(dest, { image: res }, { caption: caption }, { quoted: ms });


}
);
