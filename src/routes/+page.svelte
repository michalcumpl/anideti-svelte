<script lang="ts">
	import { onMount } from 'svelte';

	import { navSections } from '$lib/data/navigation';
	import { videos } from '$lib/data/videos';
	import About from '$lib/sections/About.svelte';
	import Awards from '$lib/sections/Awards.svelte';
	import Contact from '$lib/sections/Contact.svelte';
	import Films from '$lib/sections/Films.svelte';
	import Footer from '$lib/sections/Footer.svelte';
	import Hero from '$lib/sections/Hero.svelte';
	import Services from '$lib/sections/Services.svelte';
	import SideMenu from '$lib/sections/SideMenu.svelte';
	import Support from '$lib/sections/Support.svelte';
	import Teachers from '$lib/sections/Teachers.svelte';
	import Voucher from '$lib/sections/Voucher.svelte';
	import Work from '$lib/sections/Work.svelte';

	let isMenuOpen = false;
	let sidebarEl: HTMLElement | null = null;
	let openButtonEl: HTMLElement | null = null;

	const toggleMenu = () => {
		isMenuOpen = !isMenuOpen;
	};

	const closeMenu = () => {
		isMenuOpen = false;
	};

	const scrollToId = (id: string) => {
		const target = document.getElementById(id);
		target?.scrollIntoView({ behavior: 'smooth' });
		closeMenu();
	};

	const handleWindowClick = (event: MouseEvent) => {
		if (!isMenuOpen) return;
		const target = event.target as Node;
		if (sidebarEl?.contains(target) || openButtonEl?.contains(target)) return;
		closeMenu();
	};

	onMount(() => {
		window.scrollTo(0, 0);
	});
</script>

<svelte:window on:click={handleWindowClick} />

<SideMenu
	sections={navSections}
	{isMenuOpen}
	onToggle={toggleMenu}
	onNavigate={scrollToId}
	bind:sidebarEl
	bind:openButtonEl
/>

<Hero onNavigate={scrollToId} />
<About />
<aside class="callout callout-room no-print"></aside>
<Teachers />
<Films {videos} />
<Awards />
<Work />
<aside class="callout callout-kids no-print"></aside>
<Services />
<Voucher />
<Support />
<Contact />
<Footer />
