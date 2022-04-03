import { SafeResourceUrl } from "@angular/platform-browser";

export interface DiscoverCard {
	id: number
	title: string
	srcPreview: SafeResourceUrl
	year: string
	small: boolean
}