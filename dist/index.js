"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const index_route_1 = __importDefault(require("./src/router/index.route"));
const connectDatabase_1 = require("./src/config/connectDatabase");
const connect_flash_1 = __importDefault(require("connect-flash"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_session_1 = __importDefault(require("express-session"));
const passport_1 = __importDefault(require("passport"));
const PORT = 8080;
const app = (0, express_1.default)();
app.set("view engine", "ejs");
app.set('views', './views');
app.use(express_1.default.static('public'));
app.use((0, express_session_1.default)({
    secret: 'mk',
    resave: false,
    saveUninitialized: false,
}));
app.use(passport_1.default.initialize());
app.use(passport_1.default.authenticate('session'));
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use((0, connect_flash_1.default)());
connectDatabase_1.ConnectDatabase.connect();
(0, index_route_1.default)(app);
app.listen(PORT, () => {
    console.log("App running on port: " + PORT);
});
//# sourceMappingURL=index.js.map