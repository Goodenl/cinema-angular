import { SafeResourceUrl } from "@angular/platform-browser";

export interface DiscoverCard {
	title: string,
	srcPreview: SafeResourceUrl,
	year: string,
	small: boolean
}