<script lang="ts">
	export type NavSection = { id: string; label: string };

	export let sections: NavSection[] = [];
	export let isOpen = false;
	export let onToggle: () => void = () => {};
	export let onNavigate: (id: string) => void = () => {};
	export let openButtonEl: HTMLElement | null = null;
	export let sidebarEl: HTMLElement | null = null;
</script>

<div class="menu-toggle">
	<a
		id="menu-open-link"
		class="menu-open-link toggle no-print"
		href="#"
		role="button"
		aria-label="Otevřít menu"
		aria-expanded={isOpen}
		bind:this={openButtonEl}
		on:click|preventDefault={onToggle}
	>
		<svg class="icon" width="800" height="800" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
			<title>Open or close side menu</title>
			<use href="/icons/burger.svg#burger" />
		</svg>
	</a>
</div>

<aside id="sidebar-wrapper" class:active={isOpen} bind:this={sidebarEl}>
	<nav class="sidebar-nav" role="navigation" aria-label="Hlavní navigace">
		<a
			id="menu-close-link"
			class="menu-close-link toggle"
			href="#"
			aria-label="Zavřít menu"
			on:click|preventDefault={onToggle}
		>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
				<title>Close side menu</title>
				<use href="/icons/close.svg#close" />
			</svg>
		</a>
		<ul>
			{#each sections as section}
				<li>
					<a href={`#${section.id}`} on:click|preventDefault={() => onNavigate(section.id)}>
						{section.label}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</aside>
