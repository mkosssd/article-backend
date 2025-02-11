import Article from "../models/articleModel.js";

// GET all articles
export async function getAllArticles(req, res) {
    try {
        const articles = await Article.find({});
        res.status(200).json({articles, length: articles.length});
    } catch (error) {
        console.error("Error fetching articles:", error);
        res.status(500).json({ error: "An error occurred while fetching articles" });
    }
}

export async function getArticleById(req, res) {
    const { id } = req.params;
    try {
        const getArticle = await Article.findById(id)
        res.status(200).json(getArticle);
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
}
