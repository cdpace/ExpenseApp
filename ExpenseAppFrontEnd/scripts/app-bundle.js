define('app',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
            this.message = "Hello, World" + new Date();
        }
        App.prototype.configureRouter = function (config, router) {
            config.title = "Expense Manager Application";
            config.map([
                { route: '', moduleId: 'home-page', title: "Exspense App - Main Page", name: 'home' },
                { route: 'home', moduleId: 'home-page', title: "Exspense App - Main Page", name: 'homeexplicit' },
                { route: 'addExpense', moduleId: './components/add-expense', title: 'Add Expense', name: 'addExpense' }
            ]);
            this.router = router;
        };
        return App;
    }());
    exports.App = App;
});

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Promise.config({
        warnings: {
            wForgottenReturn: false
        }
    });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

define('mainPage',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MainPage = (function () {
        function MainPage() {
            this.message = "Hello, World";
        }
        return MainPage;
    }());
    exports.MainPage = MainPage;
});

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});

define('homePage',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var HomePage = (function () {
        function HomePage() {
            this.message = "Hello, World";
        }
        return HomePage;
    }());
    exports.HomePage = HomePage;
});

define('home-page',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var HomePage = (function () {
        function HomePage() {
            this.welcomeMessage = "Hello, World";
        }
        return HomePage;
    }());
    exports.HomePage = HomePage;
});

define('components/add-expense',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AddExpense = (function () {
        function AddExpense() {
            this.AddExpenseMessage = "Hello From Add Expense Page";
        }
        return AddExpense;
    }());
    exports.AddExpense = AddExpense;
});

define('text!app.html', ['module'], function(module) { module.exports = "<template><p>${message}</p><router-view></router-view></template>"; });
define('text!mainPage.html', ['module'], function(module) { module.exports = "<template>${messsage}</template>"; });
define('text!homePage.html', ['module'], function(module) { module.exports = "<template>${messsage}</template>"; });
define('text!home-page.html', ['module'], function(module) { module.exports = "<template>${welcomeMessage}</template>"; });
define('text!components/add-expense.html', ['module'], function(module) { module.exports = "<template><p>${AddExpenseMessage}</p></template>"; });
//# sourceMappingURL=app-bundle.js.map