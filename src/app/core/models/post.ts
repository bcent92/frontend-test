/**
 * Post class
 */
export class Post {

	/**
	 * Id
	 */
	id: string;

	/**
	 * Title
	 */
	title: string;

	/**
	 * Content
	 */
	content: string;

	/**
	 * Latitude
	 */
	lat: string;

	/**
	 * Longitude
	 */
	long: string;

	/**
	 * Image url
	 */
	imageUrl: string;

	/**
	 * Created at date
	 */
	createdAt: Date;

	/**
	 * Updated at date
	 */
	updatedAt: Date;

	/**
	 * Constructor
	 * 
	 * @param id Id
	 * @param title Title
	 * @param content Content
	 * @param lat Latitude
	 * @param long Longitude
	 * @param imageUrl Image url
	 * @param createdAt Created at date
	 * @param updatedAt Updated at date
	 */
	constructor(
		id: string,
		title: string,
		content: string,
		lat: string,
		long: string,
		imageUrl: string,
		createdAt: Date,
		updatedAt: Date) {
			
		this.id = id;
		this.title = title;
		this.content = content;
		this.lat = lat;
		this.long = long;
		this.imageUrl = imageUrl;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}
}