import { InteractionReplyOptions } from "discord.js";
import { DiscordService } from "hades";
import { SlashCommandContext } from "./SlashCommandContext";
/**
 * Base slash command class.
 */
export declare abstract class SlashCommand {
    /** information on the current command invocation */
    context: SlashCommandContext;
    /** service for getting data from discord */
    discord: DiscordService;
    /** main command logic handler */
    abstract execute(): Promise<any>;
    get interaction(): import("discord.js").BaseCommandInteraction<import("discord.js").CacheType>;
    reply(content: string, options?: InteractionReplyOptions): Promise<void>;
    followUp(content: string, options?: InteractionReplyOptions): Promise<import("discord-api-types/v9").APIMessage | import("discord.js").Message<boolean>>;
    deferReply(): Promise<void>;
}
//# sourceMappingURL=SlashCommand.d.ts.map