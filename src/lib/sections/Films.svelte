<script lang="ts">
	import VideoGrid from './VideoGrid.svelte';
	import type { VideoItem } from '$lib/data/videos';

	export let videos: VideoItem[] = [];
</script>

<section id="films" class="container">
	<article>
		<h1>Naše filmy</h1>
		<p>
			Všechny naše filmy najdete na
			<a class="link-icon" href="https://www.youtube.com/@anideti" target="_blank" rel="noreferrer">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
					<use href="/icons/youtube.svg#youtube" />
				</svg>
				Youtube kanálu Aniděti
			</a>
			.
		</p>
		<h2>Co říkají děti o svých filmech</h2>
		<VideoGrid {videos} />
	</article>
</section>
