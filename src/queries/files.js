import qs from 'qs'
import { query } from '../helpers/query'

export const requestFilesGallery = () =>
	query({
		uri: `/api/v1/files/gallery`,
		auth: false
	})
