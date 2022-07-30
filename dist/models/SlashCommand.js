"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlashCommand = void 0;
const inversify_1 = require("inversify");
const hades_1 = require("hades");
const SlashCommandContext_1 = require("./SlashCommandContext");
/**
 * Base slash command class.
 */
let SlashCommand = class SlashCommand {
    get interaction() {
        return this.context.interaction;
    }
    reply(content, options) {
        return this.interaction.reply(Object.assign(Object.assign({}, options), { content }));
    }
    followUp(content, options) {
        return this.interaction.followUp(Object.assign(Object.assign({}, options), { content }));
    }
    deferReply() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.interaction.deferReply();
        });
    }
};
__decorate([
    (0, inversify_1.inject)("SlashCommandContext"),
    __metadata("design:type", SlashCommandContext_1.SlashCommandContext)
], SlashCommand.prototype, "context", void 0);
__decorate([
    (0, inversify_1.inject)(hades_1.DiscordService),
    __metadata("design:type", hades_1.DiscordService)
], SlashCommand.prototype, "discord", void 0);
SlashCommand = __decorate([
    (0, inversify_1.injectable)()
], SlashCommand);
exports.SlashCommand = SlashCommand;
//# sourceMappingURL=SlashCommand.js.map