const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "254746549130" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254746549130";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_01_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDExOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDU4LFxuICAgICAgICA4MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTgwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTg5LFxuICAgICAgICAxNTksXG4gICAgICAgIDUyLFxuICAgICAgICAwLFxuICAgICAgICA2MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDYwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTMzLFxuICAgICAgICA1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNyxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMSxcbiAgICAgICAgMjE0LFxuICAgICAgICA5NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDcxLFxuICAgICAgICA2NixcbiAgICAgICAgNzYsXG4gICAgICAgIDIsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDAsXG4gICAgICAgIDUwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDk2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDYyLFxuICAgICAgICA0MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTk0LFxuICAgICAgICA2NSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxODAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjIyLFxuICAgICAgICA5NixcbiAgICAgICAgMjMzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDM3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDgsXG4gICAgICAgIDYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTE1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDQ2LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTM4LFxuICAgICAgICA1MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDY1LFxuICAgICAgICA4NixcbiAgICAgICAgMTUzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDQzLFxuICAgICAgICAxMDksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTksXG4gICAgICAgIDI4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDM4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDc5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTk3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3LFxuICAgICAgICA2OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDgzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTkyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDAsXG4gICAgICAgIDUsXG4gICAgICAgIDQ1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTUyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTIyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTUyLFxuICAgICAgICAwLFxuICAgICAgICA1MyxcbiAgICAgICAgMjE5LFxuICAgICAgICA3MyxcbiAgICAgICAgMjQyLFxuICAgICAgICA2NSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDYwLFxuICAgICAgICAzMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDcxLFxuICAgICAgICAxLFxuICAgICAgICAxNjksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA1MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDM4LFxuICAgICAgICAyMTksXG4gICAgICAgIDEwMyxcbiAgICAgICAgNixcbiAgICAgICAgNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjI3LFxuICAgICAgICA5MCxcbiAgICAgICAgOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIzLFxuICAgICAgICAyMSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDExLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEsXG4gICAgICAgIDgxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDY3LFxuICAgICAgICAxODUsXG4gICAgICAgIDE0M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJrQndaem9qaG9BNy91RW1jeEF0UWVyQm9zKy91cEszWTRTNGRsMkV0dkhrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDc0NjU0OTEzMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQzY5NjJEOTFGN0JFOUZCNDdGRkZDM0U1QTRFRjM0ODZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwNTU4ODYzXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIi1HT2phMEoyVGR5QUduWVZFQ3RPTVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzIwMzEzYTktNWFiMS00ODBmLTgwNWEtODhhNTZhZTJmZTg5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyMSxcbiAgICAgIDY4LFxuICAgICAgMjQ0LFxuICAgICAgMTcwLFxuICAgICAgMTU4LFxuICAgICAgODAsXG4gICAgICA1OCxcbiAgICAgIDE1NixcbiAgICAgIDE3NixcbiAgICAgIDE4NSxcbiAgICAgIDIxMyxcbiAgICAgIDIwNSxcbiAgICAgIDIwNyxcbiAgICAgIDI0NixcbiAgICAgIDIzMyxcbiAgICAgIDE2LFxuICAgICAgMTE0LFxuICAgICAgNDQsXG4gICAgICAxOTUsXG4gICAgICAxMzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTUwLFxuICAgICAgNzIsXG4gICAgICAxOTYsXG4gICAgICAxNzAsXG4gICAgICAxMjUsXG4gICAgICAyNDAsXG4gICAgICAzOSxcbiAgICAgIDIxMyxcbiAgICAgIDMzLFxuICAgICAgMTk5LFxuICAgICAgMTk3LFxuICAgICAgMjA4LFxuICAgICAgMTYwLFxuICAgICAgNyxcbiAgICAgIDQzLFxuICAgICAgMTAxLFxuICAgICAgNjEsXG4gICAgICAxMzUsXG4gICAgICAxNDMsXG4gICAgICAyNDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOUpBS1g2RUFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc0NjU0OTEzMDo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI0NTU2OTg3MTQ2MjQ2NDo1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01POHJhZ0ZFSVRLdHJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidmVXTDJseWlPVG42bmhHRGNGTmV4K0lCVXJSWkpCTFRtcUI4SzRVcU96VT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJCNFRiME1Ia1RKYnFoNGowOC9ISXExbWRPNWhtZFRmM0tHNm9vTmxRZW1zaE4yWStnMXVBUnBXaThoR3cyeTBrR2NvUi95Vm1nNVRiN1lCeWRBZG9CUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJrMUJFNXhNRjNnVk1mUkdCWjdLU3pHTERWeXlOQmRmOVMvN2Npb2hYN1h0TVV3M2xab0pTa3VyeE5UVis3dHZZZndWWE1rQmMzTUN2MjI4SFBISFJpUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3NDY1NDkxMzA6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA1M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNTU4ODU2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQThUXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBOFQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIvR010LzFiS1VJVlR0SEd2TjdsVWRTU081L1FLQkpsbEtGVTRnc2R0SGg4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0MjY4MDgzODYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA1NTgwMzk3MjhcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "bennah",
  ownername:process.env.OWNER_NAME|| "manzi ya bennah🤭",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
