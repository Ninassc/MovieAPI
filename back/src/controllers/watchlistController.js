import { prisma } from "../config/db.js"

export const addToWatchList = async (req,res) => {
    const {movieId, status, rating, notes} = req.body

    const movieExist = await prisma.movie.findUnique({
        where: {id : movieId}
    })

    if(!movieExist){
        return res.status(404).json({
            error : "This movie doesen't exist"
        })
    }

    const movieExistInWatchlist = await prisma.watchlistItem.findUnique({
        where: {userId_movieId : {
            userId : req.user.id,
            movieId : movieId
        }}
    })

     if(movieExistInWatchlist){
        return res.status(400).json({
            error : "Movie already in the watchlist"
        })
    }

    const watchlistItem = await prisma.watchlistItem.create({
        data : {
            userId : req.user.id, 
            movieId,
            status: status || "PLANNED",
            rating,
            notes
        }
    })

    res.status(201).json({
        status: "Success",
        data : {
            watchlistItem
        }
    })


}