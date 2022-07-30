import { Constructor, Newable } from "hades";
import { SlashArgParser } from "../parsers/SlashArgParser";
/**
 * Decorator metdata for command arguments.
 */
export declare class SlashArgMeta {
    name?: string;
    type?: Constructor;
    property?: string;
    description?: string;
    parserType?: Newable<SlashArgParser>;
}
//# sourceMappingURL=SlashArgMeta.d.ts.map