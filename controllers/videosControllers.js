// GLOBAL ROUTER PART
export const home = (req, res) => res.render("home");
export const search = (req, res) => res.render("search");

// VIDEO ROUTER PART
export const videos = (req, res) => res.render("videos");
export const upload = (req, res) => res.render("upload");
export const editVideo = (req, res) => res.render("editVideo");
export const deleteVideo = (req, res) => res.render("deleteVideo");
export const videoDetail = (req, res) => res.render("videoDetail");
