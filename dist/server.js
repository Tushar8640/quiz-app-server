"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const index_1 = __importDefault(require("./config/index"));
const port = index_1.default.port || 5000;
let server;
//uncaught exception handle
process.on("uncaughtException", (err) => {
    console.log("uncaught exception", err);
    process.exit(1);
});
//database connection
const db = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        server = app_1.default.listen(port, () => {
            console.log(` App listening on port ${port}`);
        });
    }
    catch (err) {
        console.log(err);
    }
    //unhandled rejection handle
    process.on("unhandledRejection", (error) => {
        if (server) {
            server.close(() => {
                console.log("unhandled rejection", error);
                process.exit(1);
            });
        }
        else {
            process.exit(1);
        }
    });
});
db();
