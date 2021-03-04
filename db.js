import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/we-tube", {
    useNewUrlParser: true,
    useFindAndModify: false,
});

const db = mongoose.connection;

const handleOpen = () => console.log("▶ Connected to DB");
const handleError = () => console.log("❌ Error on DB Connenction");
db.once("open", handleOpen);
db.on("error", handleError);
// export const videos = [
//     {
//         id: 123456,
//         title: "Video Awesome",
//         description: "This is something I love",
//         views: 12,
//         videoFile: "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
//         creator: {
//             id: 121212,
//             name: "Nicolas",
//             email: "nico@as.cd",
//         },
//     },
//     {
//         id: 123457,
//         title: "Video Super",
//         description: "This is something I love",
//         views: 12,
//         videoFile: "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
//         creator: {
//             id: 121212,
//             name: "Nicolas",
//             email: "nico@as.cd",
//         },
//     },
//     {
//         id: 123458,
//         title: "Video Nice",
//         description: "This is something I love",
//         views: 12,
//         videoFile: "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
//         creator: {
//             id: 121212,
//             name: "Nicolas",
//             email: "nico@as.cd",
//         },
//     },
//     {
//         id: 123459,
//         title: "Video Perfect",
//         description: "This is something I love",
//         views: 12,
//         videoFile: "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
//         creator: {
//             id: 121212,
//             name: "Nicolas",
//             email: "nico@as.cd",
//         },
//     },
// ];
