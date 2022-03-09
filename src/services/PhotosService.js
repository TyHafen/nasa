import { AppState } from "../AppState";
import { logger } from "../utils/Logger";
import { nasaApi } from "./AxiosService";

const baseQuery = {
    api_key: '',
    date: ''
}


class PhotosService {
    async getPhoto() {
        const res = await nasaApi.get('')
        const photo = res.data
        logger.log(photo)
        AppState.photo = photo

    }


    async search(query) {
        baseQuery.date = query
        const res = await nasaApi.get('', { params: baseQuery })
        const photo = res.data
        AppState.photo = photo
    }
}



export const photosService = new PhotosService()