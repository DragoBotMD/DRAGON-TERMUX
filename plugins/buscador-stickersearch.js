/*import fs from 'fs'
import fetch from 'node-fetch'
import { googleImage } from '@bochilteam/scraper'
let handler = async (m, {text, usedPrefix, command, conn}) => {
if (!text) throw `*${mg}\nπππππππ ππ ππππ½ππ πΏππ ππΌπππππ πππ πΏππππΌ π½πππΎπΌπ*`
try {
const res2 = await googleImage(text)
let sfoto = res2.getRandom()
let json = await fetch(`https://api.lolhuman.xyz/api/stickerwa?apikey=85faf717d0545d14074659ad&query=${text}`)
let jsons = await json.json()
let { stickers } = jsons.result[0]
let res = jsons.result.map((v, index) => `π β’ Resultado: ${1 + index}\n*π± β’ Nombre:* ${v.title}\n*ποΈβ’ Autor:* ${v.author}\n*π β’ Url:* ${v.url}`).join`\n\nβββ\n\n`
await conn.sendFile(m.chat, sfoto, 'error.jpg', res, m)
} catch {
await m.reply('*${fg}\nπππππ πππ ππΌπππ πππππππ πΏπ πππππ*')}}
handler.command = ['stickersearch', 'searchsticker', 'stickerssearch', 'searchstickers']
export default handler*/
