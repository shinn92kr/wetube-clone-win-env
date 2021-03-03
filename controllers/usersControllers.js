import routes from "../routes";

// GLOBAL ROUTER PART
export const getJoin = (req, res) => {
    res.render("join", { pageTitle: "Join" });
};
export const postJoin = (req, res) => {
    const {
        body: { name, email, password, password2 },
    } = req;
    if (password !== password2) {
        res.status(400);
        res.render("join", { pageTitle: "Join" });
    } else {
        // TO DO : Register User
        // TO DO : Log User In
        res.redirect(routes.home);
    }
};

export const getLogin = (req, res) => {
    res.render("login", { pageTitle: "Log In" });
};
export const postLogin = (req, res) => {
    res.redirect(routes.home);
};

export const logout = (req, res) => {
    //TO DO : Process Log Out
    res.redirect(routes.home);
};

// USER ROUTER PART
// export const users = (req, res) => res.render("users", { pageTitle: "Users" });
export const editProfile = (req, res) => res.render("editProfile", { pageTitle: "Edit Profile" });
export const changePassword = (req, res) => res.render("changePassword", { pageTitle: "Change Password" });
export const userDetail = (req, res) => res.render("userDetail", { pageTitle: "User Detail" });
