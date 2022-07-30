import { Client } from "discord.js";
import { Command } from "../../builtins/Command";
export declare class SlashCommandRegistrationService {
    registerCommands(client: Client): Promise<void>;
    protected getCommandRegistrationMeta(): Command[];
}
//# sourceMappingURL=SlashCommandRegistrationService.d.ts.map