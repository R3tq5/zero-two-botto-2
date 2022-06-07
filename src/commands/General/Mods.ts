/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "mods",
			description: "Generally used to check if bot is Up",
			category: "general",
            usage: `${client.config.prefix}mods`,
            dm: true,
            aliases: ['moderators', 'mod', 'owner'],
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const zerotwo =
			"https://c.tenor.com/8s8KUJnQUsEAAAPo/riko-saikawa.mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: zerotwo },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `🏮 ᴍᴏᴅᴇʀᴀᴛᴏʀꜱ\n
╰• ʟᴏʀᴅ ʀᴀᴋᴇꜱʜ
🎗𝔠𝔬𝔫𝔱𝔞𝔠𝔱: wa.me/918584966545?text=𝙝𝙚𝙡𝙡𝙤+ᴄᴀʀʟ
──────────────────
🅂🅄🄿🄿🄾🅁🅃 🄶🅁🄾🅄🄿                                        
🎗 ᴛʏᴘᴇ !sᴜᴘᴘᴏʀᴛ ᴀɴᴅ ʙᴏᴛ ᴡɪʟʟ sᴇɴᴅ sᴜᴘᴘᴏʀᴛ ɢʀᴏᴜᴘ ʟɪɴᴋ ɪɴ ʏᴏᴜʀ ᴅᴍ!!!
•━━━ ✽ • ✽ ━━━•`,
			}
		);
	};
}
