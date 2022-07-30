import { Container } from "inversify";
import { Installer } from "hades";
import { TypePair } from "./installDefaultMappedTypes";
export { defaultMappedTypes, TypePair } from "./installDefaultMappedTypes";
/**
 * Installs slash command support in HadesContainer.
 */
export declare class SlashCommandsInstaller extends Installer {
    private readonly mappedTypes;
    constructor(mappedTypes?: TypePair[]);
    install(container: Container): Promise<void>;
}
//# sourceMappingURL=index.d.ts.map