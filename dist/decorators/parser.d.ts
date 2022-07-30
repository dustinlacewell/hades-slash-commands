import { SlashArgParser } from '../parsers/SlashArgParser';
import { Newable } from 'hades';
export interface ParserDecorator extends ClassDecorator, PropertyDecorator {
}
/**
 * Sets the Parser to use for an argument.
 * @param parserClass The Parser to use.
 */
export declare function parser(parserClass?: Newable<SlashArgParser>): ParserDecorator;
//# sourceMappingURL=parser.d.ts.map