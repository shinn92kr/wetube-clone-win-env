import routes from "../routes";
import Video from "../models/Video";

// GLOBAL ROUTER PART
export const home = async (req, res) => {
    try {
        const videos = await Video.find({});
        // console.log(videos);
        res.render("home", { pageTitle: "Home", videos });
    } catch (error) {
        console.log(error);
        res.render("home", { pageTitle: "Home", videos: [] });
    }
};
export const search = (req, res) => {
    const {
        query: { term: searchingBy },
    } = req;
    res.render("search", { pageTitle: "Search", searchingBy, videos });
};

// VIDEO ROUTER PART
export const getUpload = (req, res) => {
    res.render("upload", { pageTitle: "Upload" });
};
export const postUpload = (req, res) => {
    const {
        body: { file, title, description },
    } = req;
    // TO DO : Upload and Save Video
    res.redirect(routes.videos + routes.videoDetail(324393));
};

export const editVideo = (req, res) => res.render("editVideo", { pageTitle: "Edit Video" });
export const deleteVideo = (req, res) => res.render("deleteVideo", { pageTitle: "Delete Video" });
export const videoDetail = (req, res) => res.render("videoDetail", { pageTitle: "Video Detail" });
