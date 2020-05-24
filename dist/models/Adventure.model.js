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
Object.defineProperty(exports, "__esModule", { value: true });
exports.list = exports.create = exports.Adventure = void 0;
// Libraries
var typeorm_1 = require("typeorm");
var Adventure = /** @class */ (function () {
    function Adventure() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Adventure.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ length: 256 }),
        __metadata("design:type", String)
    ], Adventure.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column({ nullable: true, length: 1024 }),
        __metadata("design:type", String)
    ], Adventure.prototype, "description", void 0);
    __decorate([
        typeorm_1.Column({ default: 0 }),
        __metadata("design:type", Number)
    ], Adventure.prototype, "views", void 0);
    __decorate([
        typeorm_1.Column({ nullable: true }),
        __metadata("design:type", String)
    ], Adventure.prototype, "addressLine1", void 0);
    Adventure = __decorate([
        typeorm_1.Entity()
    ], Adventure);
    return Adventure;
}());
exports.Adventure = Adventure;
function create(adventure) {
    var newAdventure = new Adventure();
    newAdventure.name = adventure.name;
    newAdventure.description = adventure.description;
    newAdventure.addressLine1 = adventure.addressLine1;
    return typeorm_1.getManager().save(newAdventure);
}
exports.create = create;
function list(options) {
    return typeorm_1.getManager().getRepository(Adventure).find(options);
}
exports.list = list;
//# sourceMappingURL=Adventure.model.js.map