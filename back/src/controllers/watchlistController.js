import { prisma } from "../config/db.js"

export const addToWatchList = async (req, res) => {
    try {
        const { movieId, status, rating, notes } = req.body

        const movieExist = await prisma.movie.findUnique({
            where: { id: movieId }
        })

        if (!movieExist) {
            return res.status(404).json({
                error: "This movie doesen't exist"
            })
        }

        const movieExistInWatchlist = await prisma.watchlistItem.findUnique({
            where: {
                userId_movieId: {
                    userId: req.user.id,
                    movieId: movieId
                }
            }
        })

        if (movieExistInWatchlist) {
            return res.status(400).json({
                error: "Movie already in the watchlist"
            })
        }

        const watchlistItem = await prisma.watchlistItem.create({
            data: {
                userId: req.user.id,
                movieId,
                status: status || "PLANNED",
                rating,
                notes
            }
        })

        res.status(201).json({
            status: "Success",
            data: {
                watchlistItem
            }
        })
    }

    catch (err) {
        console.error(err)
        return res.status(500).json({
            error: "Internal server error"
        })
    }

}

export const removeWatchlist = async (req, res) => {
    try {
        console.log("method:", req.method)
        console.log("body:", req.body)
        console.log("params:", req.params)

        const { movieId } = req.params

        const movieExistInWatchlist = await prisma.watchlistItem.findUnique({
            where: {
                userId_movieId: {
                    userId: req.user.id,
                    movieId: movieId
                }
            }
        })

        if (!movieExistInWatchlist) {
            return res.status(404).json({
                error: "This movie doesn't exist at this list"
            })
        }

        await prisma.watchlistItem.delete({
            where: {
                userId_movieId: {
                    userId: req.user.id,
                    movieId: movieId
                }
            }
        })

        res.status(200).json({
            status: "success",
            message: "the movie was removed"
        })
    }

    catch (err) {
        console.error(err)
        return res.status(500).json({
            error: "Internal server error"
        })
    }

}

export const updateWatchlist = async (req, res) => {
    try {
        const { movieId } = req.params
        const { status, rating, notes } = req.body
    }

    catch (err) {
        console.error(err)
        return res.status(500).json({
            error: "Internal server error"
        })
    }

}