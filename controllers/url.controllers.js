import {generateShortId} from "ssid"
import { url } from "../models/url.model.js"


const handleGeneratorShhortUrl = async (req, res) => {
    const body = req.body;
    if (!body.url) {
        res.status(400).json("url is required");
    }
    const shortUrl = generateShortId(8, false);   
     await url.create({
        shortUrl: shortUrl,
        redirecturl: body.url,
        visitHistory: []
    })

    return res.json({ newurl: shortUrl });
}

const handleRedirection = async (req, res) => {
    const shortUrl = req.params.shortUrl;
    const entry = await url.findOneAndUpdate(
        {
            shortUrl,
        },
        {
            $push: {
                visitHistory:
                {
                    timestamps: Date.now()
                }

            }
        }
    )

    if (!entry) {
        res.status(404).json("Short URL not found");
    } else {
        res.redirect(`${entry.redirecturl}`);
    }
}

export {
    handleGeneratorShhortUrl,
    handleRedirection
};