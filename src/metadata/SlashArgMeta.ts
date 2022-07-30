import { Constructor, Newable } from "hades";
import { SlashArgParser } from "../parsers/SlashArgParser";

/**
 * Decorator metdata for command arguments.
 */
export class SlashArgMeta {
    name?: string;
    type?: Constructor;
    property?: string;
    description?: string;

    parserType?: Newable<SlashArgParser>;
    // validatorMethods = new Set<string>();
    // validatorInstallers: InstallerFunc[] = [];
}