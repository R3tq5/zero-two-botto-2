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
				caption: `๐ฎ แดแดแดแดสแดแดแดส๊ฑ\n
โฐโข สแดสแด สแดแดแด๊ฑส
๐๐ ๐ฌ๐ซ๐ฑ๐๐ ๐ฑ: wa.me/918584966545?text=๐๐๐ก๐ก๐ค+แดแดสส
โโโโโโโโโโโโโโโโโโ
๐๐๐ฟ๐ฟ๐พ๐๐ ๐ถ๐๐พ๐๐ฟ                                        
๐ แดสแดแด !sแดแดแดแดสแด แดษดแด สแดแด แดกษชสส sแดษดแด sแดแดแดแดสแด ษขสแดแดแด สษชษดแด ษชษด สแดแดส แดแด!!!
โขโโโ โฝ โข โฝ โโโโข`,
			}
		);
	};
}
