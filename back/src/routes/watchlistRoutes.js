import express from "express"
import { addToWatchList, removeWatchlist, updateWatchlist } from "../controllers/watchlistController.js"
import { authMiddleware } from "../middleware/authMiddleware.js"

const router = express.Router()

router.use(authMiddleware)

router.post("/", addToWatchList)
router.delete("/:movieId", removeWatchlist)
router.put("/:movieId", updateWatchlist)

export default router