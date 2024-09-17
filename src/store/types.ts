export type Media = {
    id: number,
    likes_count: number,
    comments_count: number,
    urls:{
        mp4: string,
        mov: string,
        hls: {
            playlist: string,
            files: string[]
        },

    }
}