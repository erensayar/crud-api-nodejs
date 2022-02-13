module.exports = app => {
    const authController = require("../controllers/AuthController");
    var router = require("express").Router();
    const auth = require("../middleware/Auth");

    router.post("/register", authController.register);
    router.post("/login", authController.login);
    router.post("/authTrial", auth, authController.authTrial);

    app.use("/api/v1", router);
};
