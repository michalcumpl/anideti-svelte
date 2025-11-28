<script lang="ts">
	import type { VideoItem } from '$lib/data/videos';

	export let videos: VideoItem[] = [];
</script>

<div class="video-container">
	{#each videos as video}
		<div class="video-item">
			<iframe
				class="video-player"
				loading="lazy"
				src={video.src}
				title={video.title}
				frameborder="0"
				allow="accelerometer; autoplay; encrypted-media; gyroscope;"
				allowfullscreen
			></iframe>
			<p>{video.description}</p>
		</div>
	{/each}
</div>
