<script lang="ts">
	import { supporters } from '$lib/data/support';
</script>

<section id="support" class="container">
	<article>
		<h1>Podporují nás</h1>

		{#each supporters as supporter}
			<div class="support-item">
				<img
					id={supporter.id}
					class="no-print"
					loading="lazy"
					src={supporter.img}
					width={supporter.width}
					height={supporter.height}
					alt={supporter.alt}
				/>
				<span>
					<a href={supporter.href} target="_blank" rel="noreferrer">{supporter.label}</a>
				</span>
			</div>
		{/each}
	</article>
</section>
