import express from "express"
import {handleGeneratorShhortUrl,handleRedirection} from "../controllers/url.controllers.js"
const router = express.Router()

router.route("/").post(handleGeneratorShhortUrl);

router.route("/:shortUrl").get(handleRedirection);

export default router;


