import { Client } from "discord.js";
import { singleton } from "hades";
import { Command } from "../../builtins/Command";
import { getSlashCommandMetas } from "../../metadata/api";

@singleton(SlashCommandRegistrationService)
export class SlashCommandRegistrationService {
  async registerCommands(client: Client) {
    const metas = this.getCommandRegistrationMeta();
    await client.application.commands.set(metas);
  }

  protected getCommandRegistrationMeta(): Command[] {
    return getSlashCommandMetas().map((meta) => meta.registrationDetails);
  }
}
