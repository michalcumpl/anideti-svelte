<script lang="ts">
	export let onNavigate: (id: string) => void = () => {};
</script>

<header id="top" class="header">
	<div class="vertical-center">
		<h1 class="headline">Atelier Aniděti</h1>
		<p>
			<mark>Animace &amp; divadlo &amp; výtvarka</mark>
		</p>
		<a class="services-link no-print" href="#services" role="button" on:click|preventDefault={() => onNavigate('services')}>
			<span class="flex-center">
				Nabídka kroužků&nbsp;
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
					<use href="/icons/arrow-right.svg#arrow-right" />
				</svg>
			</span>
		</a>
	</div>
	<a
		class="about-link no-print"
		href="#about"
		aria-label="Více o Atelieru Aniděti"
		on:click|preventDefault={() => onNavigate('about')}
	>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
			<use href="/icons/chevron-down.svg#chevron-down" />
		</svg>
	</a>
</header>
