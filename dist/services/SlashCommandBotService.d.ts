import { Interaction } from "discord.js";
import { HadesBotService } from "hades";
import { SlashCommandService } from "./SlashCommandService/SlashCommandService";
export declare class SlashCommandBotService extends HadesBotService {
    commandService: SlashCommandService;
    onReady(): Promise<void>;
    onInteractionCreate<T extends Interaction>(interaction: T): Promise<void>;
}
//# sourceMappingURL=SlashCommandBotService.d.ts.map