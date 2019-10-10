export default {
    FETCH_IMAGE : {
        url(pageNumber){
            return `https://api.unsplash.com/photos/?client_id=b46f9704323729de3deb9d512b39c03920580420e32a18aed596664ffddfce58&&per_page=8&&page=${pageNumber}`
        },
    },

}