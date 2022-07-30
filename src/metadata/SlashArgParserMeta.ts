import { SlashArgParser as SlashParser } from "../parsers";
import { Newable } from "hades";


export class SlashArgParserMeta {
    type: Newable<SlashParser>;
    description?: string;
}