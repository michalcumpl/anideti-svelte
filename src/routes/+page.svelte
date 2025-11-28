<script lang="ts">
	import { onMount } from 'svelte';

	let sidebarEl: HTMLElement | null = null;
	let openBtnEl: HTMLElement | null = null;
	let closeBtnEl: HTMLElement | null = null;

	const scrollToSection = (targetId: string) => {
		const target = document.getElementById(targetId);
		target?.scrollIntoView({ behavior: 'smooth' });
	};

	const toggleMenu = () => {
		sidebarEl?.classList.toggle('active');
	};

	const isMenuOpen = () => sidebarEl?.classList.contains('active') ?? false;

	const handleDocumentClick = (event: MouseEvent) => {
		const target = event.target as HTMLElement;

		if (!sidebarEl || !openBtnEl || !closeBtnEl) return;

		const isOpenBtnClick = openBtnEl.contains(target);
		const isCloseBtnClick = closeBtnEl.contains(target);

		if (isOpenBtnClick || isCloseBtnClick) {
			event.preventDefault();
			toggleMenu();
			return;
		}

		const isSidebarClick = sidebarEl.contains(target);

		if (!isSidebarClick && !isOpenBtnClick && isMenuOpen()) {
			toggleMenu();
			return;
		}

		let current: HTMLElement | null = target;

		while (current) {
			const targetId = current.getAttribute('data-target');
			if (targetId) {
				event.preventDefault();
				scrollToSection(targetId);
				if (isMenuOpen()) toggleMenu();
				break;
			}
			current = current.parentElement;
		}
	};

	onMount(() => {
		const clickHandler = (event: MouseEvent) => handleDocumentClick(event);
		document.addEventListener('click', clickHandler);
		window.scrollTo(0, 0);

		return () => document.removeEventListener('click', clickHandler);
	});
</script>

<a
	id="menu-open-link"
	class="menu-open-link menu-toggle toggle no-print"
	href="#"
	role="button"
	aria-label="Otevřít menu"
	bind:this={openBtnEl}
>
	<svg class="icon" width="800" height="800" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
		<title>Open or close side menu</title>
		<use href="/icons/burger.svg#burger" />
	</svg>
</a>

<aside id="sidebar-wrapper" bind:this={sidebarEl}>
	<nav class="sidebar-nav">
		<a
			id="menu-close-link"
			class="menu-close-link toggle"
			href="#"
			aria-label="Zavřít menu"
			bind:this={closeBtnEl}
		>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
				<title>Close side menu</title>
				<use href="/icons/close.svg#close" />
			</svg>
		</a>
		<ul>
			<li><a href="#top" data-target="top">Úvod</a></li>
			<li><a href="#about" data-target="about">O nás</a></li>
			<li><a href="#teachers" data-target="teachers">Lektorky</a></li>
			<li><a href="#films" data-target="films">Naše filmy</a></li>
			<li><a href="#awards" data-target="awards">Oceněné filmy</a></li>
			<li><a href="#work" data-target="work">Jak pracujeme</a></li>
			<li><a href="#services" data-target="services">Nabídka kroužků</a></li>
			<li><a href="#voucher" data-target="voucher">Animace jako dárek</a></li>
			<li><a href="#support" data-target="support">Podporují nás</a></li>
			<li><a href="#contact" data-target="contact">Kontakt</a></li>
		</ul>
	</nav>
</aside>

<header id="top" class="header">
	<div class="vertical-center">
		<h1 class="headline">Atelier Aniděti</h1>
		<p>
			<mark>Animace &amp; divadlo &amp; výtvarka</mark>
		</p>
		<a class="services-link no-print" href="#services" data-target="services" role="button">
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
		data-target="about"
		aria-label="Více o Atelieru Aniděti"
	>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
			<use href="/icons/chevron-down.svg#chevron-down" />
		</svg>
	</a>
</header>

<section id="about" class="container">
	<article>
		<h1>O nás</h1>
		<p>
			Jsme škola animovaného filmu s&nbsp;přesahem do dalších uměleckých oborů. V&nbsp;našem ateliéru pro děti
			vytváříme prostor, kde se mohou svobodně vyjádřit a uplatnit své nápady. Mohou zde tvořit vlastní krátké
			autorské filmy nebo se podílet na společném větším filmovém projektu. Kromě klasických
			<a href="#services" data-target="services">odpoledních kroužků</a> nabízíme také dopolední kroužky
			<a href="#services" data-target="services">pro děti v domácím vzdělávání</a>. Nyní nově i
			<a href="#services" data-target="services">dramatický kroužek</a> a
			<a href="#services" data-target="services">doučování</a>, včetně tvorby portfolií k&nbsp;přezkoušení.
		</p>

		<blockquote>„Vlastní tvorba je velké dobrodružství a nejefektivnější nástroj učení!“</blockquote>
	</article>
</section>

<aside class="callout callout-room no-print"></aside>

<section id="teachers" class="container">
	<article>
		<h1>Lektorky</h1>
		<h2>Kateřina Knappová</h2>
		<p>
			Studovala na divadelní a filmové fakultě Akademie múzických umění. Pracovala pro Českou televizi jako
			režisérka a scénáristka dokumentárních filmů. Dále jako kurátorka v&nbsp;Leica Gallery Prague a
			v&nbsp;Divadelním ústavu. Po narození svých dvou dětí začala pořádat a lektorovat kroužky animovaného filmu
			pro děti a v&nbsp;roce 2014 založila ateliér Aniděti.
		</p>
		<img
			class="no-print"
			loading="lazy"
			src="/images/katerina-350.webp"
			alt="Kateřina Knappová"
			width="350"
			height="263"
		/>
		<h2>Martina Turková</h2>
		<p>
			Vystudovala francouzskou a latinskou filologii na FF UK a dramatickou výchovu na DAMU. Pracovala jako
			metodička a lektorka zážitkových workshopů v&nbsp;Židovském muzeu v&nbsp;Praze a pro Post Bellum. Vede
			kroužky dramatické výchovy pro děti a od roku 2018 spolupracuje s&nbsp;Kateřinou v&nbsp;ateliéru Aniděti.
			Zkušenosti s&nbsp;domácím vzděláváním má z&nbsp;komunitní školy Zeměkvítek, pro kterou připravovala
			divadelní projekty a kam chodily její děti. Má ráda děti ve věku 0-100 a všechny zábavné formy vzdělávání.
		</p>
		<img
			class="no-print"
			loading="lazy"
			src="/images/martina-350.webp"
			alt="Martina Turková"
			width="350"
			height="234"
		/>
	</article>
</section>

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
		<div class="video-container">
			<div class="video-item">
				<iframe
					class="video-player"
					loading="lazy"
					src="https://www.youtube.com/embed/Q3oxSiM1hrY?si=QTrTpr5qKvkD5JOV"
					title="Trable se strašidlem"
					frameborder="0"
					allow="accelerometer; autoplay; encrypted-media; gyroscope;"
					allowfullscreen
				></iframe>
				<p>O radostech i starostech při natáčení našeho filmu "Trable se strašidlem".</p>
			</div>
			<div class="video-item">
				<iframe
					class="video-player"
					loading="lazy"
					src="https://www.youtube.com/embed/iLmT45vOIpY?si=X8-UZslq2oPbbd10"
					title="Potrestaný zloděj"
					frameborder="0"
					allow="accelerometer; autoplay; encrypted-media; gyroscope;"
					allowfullscreen
				></iframe>
				<p>O tom, jak jsme natáčeli pražskou legendu "Potrestaný zloděj".</p>
			</div>
			<div class="video-item">
				<iframe
					class="video-player"
					loading="lazy"
					src="https://www.youtube.com/embed/NwpzAjj-HCw?si=0SYLfF8gB0H2g6ct"
					title="Jednorožčí příběh"
					frameborder="0"
					allow="accelerometer; autoplay; encrypted-media; gyroscope;"
					allowfullscreen
				></iframe>
				<p>O tom, jak vznikl náš film "Jednorožčí příběh".</p>
			</div>
			<div class="video-item">
				<iframe
					class="video-player"
					loading="lazy"
					src="https://www.youtube.com/embed/DWyapvQOFNQ?si=o2OFF7TGbNM0emSU"
					title="Ma bisteren"
					frameborder="0"
					allow="accelerometer; autoplay; encrypted-media; gyroscope;"
					allowfullscreen
				></iframe>
				<p>O našem filmovém týmu, který pracoval na animovaném dokumentu "Ma bisteren".</p>
			</div>
		</div>
	</article>
</section>

<section id="awards" class="container">
	<article>
		<h1>Oceněné filmy</h1>
		<p>
			Naše filmy posíláme na soutěžní festival
			<a href="https://www.youtube.com/@tocsvetem" target="_blank" rel="noreferrer">Pražský filmový kufr</a>, odkud
			pak některé oceněné filmy putují celonárodní přehlídku mladého filmu
			<a href="https://www.youtube.com/@ceskevize2151" target="_blank" rel="noreferrer">České vize</a>. Naše filmy
			byly oceněny také na mezinárodním filmovém festivalu
			<a href="https://www.afilmteensfest.com/cz/" target="_blank" rel="noreferrer">A-FilmTeenFest</a>.
		</p>

		<p>
			<img class="no-print" loading="lazy" src="/images/oceneni.webp" width="800" height="600" alt="Naše diplomy" />
		</p>
		<h2>Získaná ocenění</h2>
		<details>
			<summary>2024</summary>
			<p>
				Film dětí z dětského domova Nová Ves „Ronaldova pouť do středu Země“ získal ocenění na domácích i
				zahraničních festivalech:
			</p>
			<ul>
				<li>
					<a href="https://www.wickedwales.com/" target="_blank" rel="noreferrer">Wicked Wales</a>, Anglie: 3.
					místo v kategorii animované filmy ve věkové kategorii 6-12 let
				</li>
				<li>Čestné uznání na Pražském filmovém kufru v kategorii animované filmy do 14 let</li>
				<li>Užší výběr na prestižní mezinárodní cenu YCN Awards 2024 v kategorii "Filmy z workshopů"</li>
				<li>
					Oficiální výběr na indickém festivalu
					<a href="http://www.siffcy.org" target="_blank" rel="noreferrer">SIFFCY</a>
				</li>
			</ul>
		</details>

		<details>
			<summary>2023</summary>
			<p>
				<a href="https://www.youtube.com/@tocsvetem" target="_blank" rel="noreferrer">Pražský filmový kufr</a>
				udělil hlavní cenu filmu
				<a href="https://www.youtube.com/watch?v=e8Yk_GYnTHc" target="_blank" rel="noreferrer"
					>Jednorožčí příběh</a
				>
				v sekci animovaný film dětí věkové kategorie 1. stupeň ZŠ a mladší, hlavní cenu filmu
				<a href="https://www.youtube.com/watch?v=eYZ_uyrNvGs" target="_blank" rel="noreferrer"
					>Ma bisteren / Nezapomeňte</a
				>
				v sekci dokumentární film dětí věkové kategorie 1. stupeň ZŠ a hlavní cenu filmu
				<a href="https://www.youtube.com/watch?v=Gjr3xJ9BG_o" target="_blank" rel="noreferrer">Stará Vodárna</a>
				v sekci dokumentárního filmu dětí věkové kategorie 2. stupeň ZŠ. Filmy
				<a href="https://www.youtube.com/watch?v=kcd9SFNdJiQ" target="_blank" rel="noreferrer"
					>Trable se strašidlem</a
				>
				a <a href="https://www.youtube.com/watch?v=5mMYDUegqRs" target="_blank" rel="noreferrer">Potrestaný zloděj</a>
				získaly cenu poroty za výtvarné zpracování.
			</p>
			<p>
				Na Mezinárodním filmovým festivalu
				<a href="https://www.afilmteensfest.com/cz/" target="_blank" rel="noreferrer">A-FilmTeenFest</a>
				získal film
				<a href="https://www.youtube.com/watch?v=GIN7sl9hRvg" target="_blank" rel="noreferrer">Viktoria</a>
				1. cenu v kategorii "Documentaries" 11-14 let a film
				<a href="https://www.youtube.com/watch?v=wNdrFte2T4w&t=23s" target="_blank" rel="noreferrer"
					>Medvídku, vypravuj!</a
				>
				získal 1. cenu v kategorii "Under 10 Years Across Genres" a cenu dětské poroty.
			</p>
		</details>

		<details>
			<summary>2022</summary>
			<p>
				Celostátní přehlídka filmové tvorby
				<a href="https://www.youtube.com/@ceskevize2151" target="_blank" rel="noreferrer">Malé Vize</a> ocenila
				film
				<a href="https://www.youtube.com/watch?v=biR6leSJ-So&t=4s" target="_blank" rel="noreferrer"
					>Demokracie mýma očima</a
				>
				za originální zpracování témat demokracie a svobody.
			</p>
			<p>
				Mezinárodní festival dětské a studentské multimediální tvorby
				<a href="https://www.youtube.com/@trikfilm3148" target="_blank" rel="noreferrer">Trikfilm</a> ocenil film
				<a href="https://www.youtube.com/watch?v=wNdrFte2T4w&t=23s" target="_blank" rel="noreferrer"
					>Medvídku, vypravuj!</a
				>
				v kategorii animovaných filmů dětí do 11 let.
			</p>
			<p>
				<a href="https://www.youtube.com/@tocsvetem" target="_blank" rel="noreferrer">Pražský filmový kufr</a>
				udělil čestné uznání poroty filmu Cesta do školy za poselství svobody.
			</p>
		</details>
		<details>
			<summary>2021</summary>
			<p>
				<a href="https://www.youtube.com/@tocsvetem" target="_blank" rel="noreferrer">Pražský filmový kufr</a>
				ocenil film
				<a href="https://www.youtube.com/watch?v=biR6leSJ-So&t=4s" target="_blank" rel="noreferrer"
					>Demokracie mýma očima</a
				>
				za námět, scénář, výtvarné zpracování, střih a zvuk filmu a udělil cenu za nejlepší animovaný film v sekci
				Moje místo.
			</p>
		</details>
		<details>
			<summary>2020</summary>
			<p>
				Celostátní přehlídka filmové tvorby
				<a href="https://www.youtube.com/@ceskevize2151" target="_blank" rel="noreferrer">Malé Vize</a> udělila
				cenu filmu
				<a href="https://www.youtube.com/watch?v=wNdrFte2T4w&t=23s" target="_blank" rel="noreferrer"
					>Medvídku, vypravuj!</a
				>
				za tvůrčí zpracování životního příběhu.
			</p>
		</details>
		<details>
			<summary>2019</summary>
			<p>
				<a href="https://www.youtube.com/@tocsvetem" target="_blank" rel="noreferrer">Pražský filmový kufr</a>
				udělil cenu krajského školského koordinátora prevence filmu
				<a href="https://www.youtube.com/watch?v=wNdrFte2T4w&t=23s" target="_blank" rel="noreferrer"
					>Medvídku, vypravuj!</a
				>
				za hledání pravdy a naděje. Film
				<a href="https://www.youtube.com/watch?v=ipf-jF5sBxU" target="_blank" rel="noreferrer">Semínko</a> získal
				vítězné ocenění v sekci Zeleným objektivem.
			</p>
		</details>
		<details>
			<summary>2018</summary>
			<p>
				<a href="https://www.youtube.com/@tocsvetem" target="_blank" rel="noreferrer">Pražský filmový kufr</a>
				udělil hlavní cenu filmu
				<a href="https://www.youtube.com/watch?v=wMo9hUqVV_M" target="_blank" rel="noreferrer"
					>Jak se žije skřítkům</a
				>
				v sekci animovaný film dětí do 10 let. Film
				<a href="https://www.youtube.com/watch?v=7KneFPB76Ms" target="_blank" rel="noreferrer"
					>Zprávy všeho druhu</a
				>
				získal čestné uznání poroty za výtvarné zpracování. Film
				<a href="https://www.youtube.com/watch?v=QNyZ4A_IrwE" target="_blank" rel="noreferrer">Vepřík Pepřík</a>
				získal cenu poroty za námět a výtvarné zpracování.
			</p>
		</details>
	</article>
</section>

<section id="work" class="container">
	<article>
		<h1>Jak pracujeme</h1>
		<p>
			Spolupracujeme na projektech s&nbsp;neziskovými organizacemi. Vznikají tak filmy, které pak žijí dalším
			životem. Jedním z nejlepších počinů je film
			<a href="https://www.youtube.com/watch?v=biR6leSJ-So&t=4s" target="_blank" rel="noreferrer"
				>Demokracie mýma očima</a
			>
			, který vznikl pro neziskovou organizaci <a href="https://inbaze.cz/" target="_blank" rel="noreferrer">InBáze</a
			>. Film, ve kterém 12 dětí původem z Ukrajiny, Nepálu, Vietnamu, Filipín, ale i z Čech ztvárnilo, co pro ně
			znamená slovo „demokracie“. Tyto filmy jsou umístěny na webových stránkách neziskových organizací.
		</p>
		<p>
			<img
				class="no-print"
				loading="lazy"
				src="/images/events/jak-pracujeme-0.webp"
				alt="Spolupráce s neziskovými oragaznizacemi"
				width="800"
				height="450"
			/>
		</p>
		<p>
			Zveme si hosty se zajímavými životními příběhy a natáčíme pak o nich animované dokumenty. Tímto způsobem
			vznikly filmy:
		</p>
		<a href="https://www.youtube.com/watch?v=wNdrFte2T4w&t=23s" target="_blank" rel="noreferrer">Medvídku, vypravuj!</a>
		<p>
			Příběh Doris Grozdanovičové, která jako náctiletá přežila pobyt v koncentračním táboře Terezín.
		</p>

		<a href="https://www.youtube.com/watch?v=GIN7sl9hRvg" target="_blank" rel="noreferrer">Viktoria</a>
		<p>
			Příběh ukrajinské ženy, která v roce 2011 přišla do Česka za prací. Cílem filmu bylo ukázat, kdo vlastně jsou
			ony nenápadné ženy, které nám doma uklízí.
		</p>
		<a href="https://www.youtube.com/watch?v=eYZ_uyrNvGs" target="_blank" rel="noreferrer">Ma bisteren, nezapomeňte!</a>
		<p>
			Příběh pana Čeňka Růžičky, jehož rodina patří mezi tradiční české Romy, za II. světové války byla zasažena
			holocaustem a v 50. letech stíhána komunisty pro kočovný život.
		</p>
		<p>
			<img
				class="no-print"
				loading="lazy"
				src="/images/events/jak-pracujeme-1.webp"
				alt="Spolupráce s neziskovými oragaznizacemi"
				width="800"
				height="532"
			/>
		</p>
		<p>
			Baví nás město, ve kterém žijeme, a tak chodíme jednou za čas na komentovanou procházku Prahou s pražským
			průvodcem Liborem Peprným. V úzké spolupráci s tímto neúnavným milovníkem Prahy pak zpracováváme vybrané
			pražské legendy. Na kontě máme již mnoho filmů:
		</p>
		<ul>
			<li>
				<a href="https://www.youtube.com/watch?v=5mMYDUegqRs" target="_blank" rel="noreferrer">Pověsti ze Starého města</a>
			</li>
			<li>
				<a href="https://www.youtube.com/watch?v=NbLiyKjQZqs" target="_blank" rel="noreferrer">Pověsti z Malé strany</a>
			</li>
			<li>
				<a href="https://www.youtube.com/watch?v=B_9BGVli1U4" target="_blank" rel="noreferrer">Legenda o Johánkovi</a>
			</li>
			<li>
				<a href="https://www.youtube.com/watch?v=9p_CU9I5hKc" target="_blank" rel="noreferrer">Prezidentská pohádka</a>
			</li>
			<li>
				<a href="https://www.youtube.com/watch?v=WMpkqDv4HWw" target="_blank" rel="noreferrer">Letopočty jinak</a>
			</li>
		</ul>
		<p>
			<img
				class="no-print"
				loading="lazy"
				src="/images/events/jak-pracujeme-3.webp"
				alt="Procházky Prahou"
				width="800"
				height="600"
			/>
		</p>
		<p>
			Velmi si vážíme, že můžeme být součástí projektu OKNA DO SVĚTA, který pořádá filmové a mediální dílny pro
			dětské domovy. S dětmi z dětského domova Nová Ves u Chotěboře jsme natočili animovaný ekothriller
			<a href="https://youtu.be/WfJ7YAKV-xQ" target="_blank" rel="noreferrer">Ronaldova pouť do středu Země</a> a
			následně i <a href="https://youtu.be/ke9XkNfouiQ" target="_blank" rel="noreferrer">Film o filmu</a>, ve
			kterém je vidět celý tvůrčí proces a práce dětí na tomto filmu.
		</p>
		<p>
			<img
				class="no-print"
				loading="lazy"
				src="/images/events/detsky-domov-12.webp"
				alt="Děti z dětského domova Nová Ves u Chotěboře"
				width="800"
				height="451"
			/>
		</p>

		<p>
			Hotové filmy veřejně promítáme na konci roku na slavnostní premiéře v kině
			<a href="https://www.youtube.com/@biooko" target="_blank" rel="noreferrer">Bio Oko</a>. Děti tak mají možnost
			prezentovat své filmy na velkém plátně pro širokou veřejnost a zakusit tak zasloužený pocit hrdosti.
		</p>
		<p>
			<img
				class="no-print"
				loading="lazy"
				src="/images/events/jak-pracujeme-4.webp?v=1"
				alt="Veřejné promítání"
				width="800"
				height="600"
			/>
		</p>
		<p>
			Každoročně promítáme pásmo našich filmů na netradičním filmovém festivalu „Krátký film v dlouhé vesnici“,
			který se koná ve stodole na kozí farmě v Merbolticích.
		</p>
		<p>
			<img
				class="no-print"
				loading="lazy"
				src="/images/events/jak-pracujeme-5.webp"
				alt="Filmové festivaly"
				width="800"
				height="530"
			/>
		</p>
		<p>
			Posíláme naše filmy na soutěžní festival
			<a href="https://www.youtube.com/@tocsvetem" target="_blank" rel="noreferrer">Pražský filmový kufr</a>, odkud
			si již tradičně odnášíme každý rok ceny za nejrůznější disciplíny filmové tvorby (animovaný film, dokument,
			scénář, kamera, výtvarné zpracování apod.).
		</p>
		<p>
			<img
				class="no-print"
				loading="lazy"
				src="/images/events/jak-pracujeme-6.webp"
				alt="Pražský filmový kufr"
				width="800"
				height="600"
			/>
		</p>
		<p>
			Díky úspěchům na
			<a href="https://www.youtube.com/@tocsvetem" target="_blank" rel="noreferrer">Pražském filmovém kufru</a>
			jsme postoupili i do celonárodního kola festivalu
			<a href="https://www.youtube.com/@ceskevize2151" target="_blank" rel="noreferrer">České vize</a> a opět s
			velkým vděkem pravidelně získáváme ocenění za naše animované filmy v sekci „Malé vize“.
		</p>
		<p>
			<img
				class="no-print"
				loading="lazy"
				src="/images/events/jak-pracujeme-7.webp"
				alt="České vize"
				width="800"
				height="600"
			/>
		</p>
		<p>
			Zkoušíme optické hračky, které neodmyslitelně souvisí s historií filmu. Vyrábíme flipbooky, zoetrope, ale i
			cameru obscuru a kinetoskop ... Jó ti naši pradědové, ti se měli ...
		</p>
		<p>
			<img
				class="no-print"
				loading="lazy"
				src="/images/events/jak-pracujeme-9.webp"
				alt="Výstavy"
				width="800"
				height="600"
			/>
		</p>
		<p>
			Chodíme do muzeí souvisejících výhradně s filmem. Zažíváme „film jinak“ na interaktivní výstavě filmového
			muzea NaFilm, která odkrývá podstatu filmu a jeho první podoby nebo v
			<a href="https://www.youtube.com/@KarelZemanMuseum" target="_blank" rel="noreferrer">Muzeu Karla Zemana</a>,
			které odkrývá svět filmových triků.
		</p>
		<p>
			<img
				class="no-print"
				loading="lazy"
				src="/images/events/jak-pracujeme-10.webp"
				alt="Svět filmových triků"
				width="800"
				height="600"
			/>
		</p>
		<p>
			Pořádáme letní tábory s názvem „Dobrodružství animace“ pro malé animátory, na nichž vzniká mnoho zajímavých
			filmů. V Českosaském Švýcarsku máme i příznivce z řad místních obyvatel - rybáře Vláďu. Ve spolupráci s ním
			vznikl seriál „O vodním skřítkovi Čeřínkovi“.
		</p>
		<ul>
			<li>
				<a href="https://www.youtube.com/watch?v=UsXfbkzhbsg" target="_blank" rel="noreferrer"
					>Putování skřítka Čeřínka (1.díl)</a
				>
			</li>
			<li>
				<a href="https://www.youtube.com/watch?v=93IHgFSeOzs" target="_blank" rel="noreferrer">Sokolí dobrodružství (2.díl)</a>
			</li>
			<li>
				<a href="https://www.youtube.com/watch?v=4B113rceLiU" target="_blank" rel="noreferrer">Čeřínek a požár (3.díl)</a>
			</li>
			<li>
				<a href="https://www.youtube.com/watch?v=uYhrRQl9rCw" target="_blank" rel="noreferrer">Čeřínek a povodeň (4.díl)</a>
			</li>
		</ul>
		<p>
			<img
				class="no-print"
				loading="lazy"
				src="/images/events/jak-pracujeme-11.webp"
				alt="Letní tábory"
				width="800"
				height="533"
			/>
		</p>
		<blockquote>
			Další fotografie z kroužků a dílen najdete v
			<a href="https://photos.app.goo.gl/VTodaB5vpkk3kYtH6" target="_blank" rel="noreferrer">našem albu v aplikaci Fotky Google</a
			>.
		</blockquote>
	</article>
</section>

<aside class="callout callout-kids no-print"></aside>

<section id="services" class="container">
	<article>
		<h1>Nabídka kroužků - kroužky začínají 22. září 2025</h1>
		<details>
			<summary>Dopolední kroužky animace pro děti v domácím vzdělávání</summary>
			<p>
				V&nbsp;kroužku si děti osvojují základní techniky klasické stop motion animace a základy filmové řeči. Učí
				se vystavět a vypointovat příběh, nakreslit k&nbsp;němu storyboard, připravit si pozadí a loutky. Své
				filmy sami nebo ve dvojicích animují a podílejí se na postprodukci. Hotové filmy veřejně promítáme na
				konci roku v kině <a href="https://www.youtube.com/@biooko" target="_blank" rel="noreferrer">Bio&nbsp;Oko</a>,
				kde děti společně se svými rodinami a přáteli zažijí slavnostní premiéru svých filmů.
			</p>
			<table>
                <tbody>
				<tr>
					<td><strong>Místo:</strong></td>
					<td>ATELIER Hanspaulka - PRAHA 6</td>
				</tr>
				<tr>
					<td><strong>Cena za pololetí:</strong></td>
					<td>4 000,- Kč / 15 lekcí (sourozenec 3 500,- Kč)</td>
				</tr>
                </tbody>
			</table>
			<p>Rozvrh kroužků:</p>
			<figure>
				<table role="grid">
					<thead>
						<tr>
							<th scope="col">den</th>
							<th scope="col">čas</th>
							<th scope="col"></th>
							<th scope="col">místo</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Pondělí</td>
							<td>9:30-11:00</td>
							<td>Animace pro starší děti</td>
							<td>Ateliér Hanspaulka</td>
						</tr>
						<tr>
							<td>Úterý</td>
							<td>10:30-12:00</td>
							<td>Výtvarná tvorba v&nbsp;souvislosti s&nbsp;animací</td>
							<td>Ateliér Hanspaulka</td>
						</tr>
						<tr>
							<td>Úterý</td>
							<td>12:30-14:00</td>
							<td>Animace – smíšená skupinka</td>
							<td>Ateliér Hanspaulka</td>
						</tr>
						<tr>
							<td>Středa</td>
							<td>9:30-11:00</td>
							<td>Animace – smíšená skupinka</td>
							<td>Ateliér Hanspaulka</td>
						</tr>
						<tr>
							<td>Středa</td>
							<td>11:00-14:00</td>
							<td>Individuální lekce / OBSAZENO</td>
							<td>Ateliér Hanspaulka</td>
						</tr>
						<tr>
							<td>Čtvrtek</td>
							<td>9:30-11:00</td>
							<td>Animace – smíšená skupinka</td>
							<td>Ateliér Hanspaulka</td>
						</tr>
						<tr>
							<td>Čtvrtek</td>
							<td>11:00-12:30</td>
							<td>Animace – smíšená skupinka</td>
							<td>Ateliér Hanspaulka</td>
						</tr>
						<tr>
							<td>Čtvrtek</td>
							<td>12:30-14:00</td>
							<td>Animace – smíšená skupinka</td>
							<td>Ateliér Hanspaulka</td>
						</tr>
						<tr>
							<td>Pátek</td>
							<td>9:30-11:00</td>
							<td>Animace – smíšená skupinka</td>
							<td>Ateliér Hanspaulka</td>
						</tr>
						<tr>
							<td>Pátek</td>
							<td>11:00-12:30</td>
							<td>Animace – smíšená skupinka</td>
							<td>Ateliér Hanspaulka</td>
						</tr>
						<tr>
							<td>Pátek</td>
							<td>12:30-14:00</td>
							<td>Výtvarná tvorba v&nbsp;souvislosti s&nbsp;animací</td>
							<td>Ateliér Hanspaulka</td>
						</tr>
					</tbody>
				</table>
			</figure>

			<blockquote>
				Pozn. starší děti = druhý stupeň (6. - 9. třída) / smíšená skupinka = 4. - 8. třída.
			</blockquote>
		</details>

		<details>
			<summary>Odpolední kroužky animace pro školáky</summary>
			<p>
				V&nbsp;kroužku si děti osvojují základní techniky klasické stop motion animace a základy filmové řeči. Učí
				se vystavět a vypointovat příběh, nakreslit k&nbsp;němu storyboard, připravit si pozadí a loutky. Své
				filmy sami nebo ve dvojicích animují a podílejí se na postprodukci. Hotové filmy veřejně promítáme na
				konci roku v kině <a href="https://www.youtube.com/@biooko" target="_blank" rel="noreferrer">Bio&nbsp;Oko</a>,
				kde děti společně se svými rodinami a přáteli zažijí slavnostní premiéru svých filmů.
			</p>
			<table>
                <tbody>
				<tr>
					<td><strong>Místo:</strong></td>
					<td>ATELIER Hanspaulka - PRAHA 6 nebo ZŠ DLOUHÝ LÁN</td>
				</tr>
				<tr>
					<td><strong>Cena za pololetí:</strong></td>
					<td>4 000,- Kč / 15 lekcí (sourozenec 3 500,- Kč)</td>
				</tr>
                </tbody>
			</table>
			<p>Rozvrh kroužků:</p>
			<figure>
				<table role="grid">
					<thead>
						<tr>
							<th scope="col">den</th>
							<th scope="col">čas</th>
							<th scope="col"></th>
							<th scope="col">místo</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Pondělí</td>
							<td>13:00-14:30</td>
							<td>Filmová tvorba – mladší děti / OBSAZENO</td>
							<td>ZŠ Dlouhý Lán</td>
						</tr>
						<tr>
							<td>Pondělí</td>
							<td>14:30-16:00</td>
							<td>Animace – starší děti</td>
							<td>ZŠ Dlouhý Lán</td>
						</tr>
						<tr>
							<td>Úterý</td>
							<td>14:00-15:30</td>
							<td>Animace – starší děti</td>
							<td>Ateliér Hanspaulka</td>
						</tr>
						<tr>
							<td>Úterý</td>
							<td>16:30-18:00</td>
							<td>Animace – mladší děti</td>
							<td>Ateliér Hanspaulka</td>
						</tr>
						<tr>
							<td>Středa</td>
							<td>14:00-15:30</td>
							<td>Animace – smíšená skupinka</td>
							<td>Ateliér Hanspaulka</td>
						</tr>
						<tr>
							<td>Středa</td>
							<td>15:45-17:15</td>
							<td>Animace – smíšená skupinka</td>
							<td>Ateliér Hanspaulka</td>
						</tr>
						<tr>
							<td>Čtvrtek</td>
							<td>14:30-16:00</td>
							<td>Filmová tvorba loutkové animace - starší děti / OBSAZENO</td>
							<td>Ateliér Hanspaulka</td>
						</tr>
						<tr>
							<td>Čtvrtek</td>
							<td>16:00-17:30</td>
							<td>Animace – smíšená skupinka / OBSAZENO</td>
							<td>Ateliér Hanspaulka</td>
						</tr>
						<tr>
							<td>Čtvrtek</td>
							<td>17:00-18:00</td>
							<td>Figurální kresba (výtvarná tvorba v souvislosti s animací)</td>
							<td>Ateliér Hanspaulka (lektor: Elektra)</td>
						</tr>
						<tr>
							<td>Pátek</td>
							<td>12:30-14:00</td>
							<td>Výtvarná tvorba v&nbsp;souvislosti s&nbsp;animací</td>
							<td>Ateliér Hanspaulka</td>
						</tr>
						<tr>
							<td>Pátek</td>
							<td>14:00-15:30</td>
							<td>Filmová tvorba pro děti na SŠ, VŠ a dospělé</td>
							<td>Ateliér Hanspaulka</td>
						</tr>
					</tbody>
				</table>
			</figure>
			<blockquote>
				Pozn. mladší děti = první stupeň (1. - 5. třída) / starší děti = druhý stupeň (6. - 9. třída) / smíšená
				skupinka = 4. - 8. třída.
			</blockquote>
		</details>

		<details>
			<summary>Dramani - dramatický kroužek s prvky animace</summary>
			<p>
				V&nbsp;tomto kroužku děti rozvíjí prostřednictvím dramatické hry a improvizací své řečové, pohybové a
				herecké dovednosti, vnímání prostoru, smysl pro rytmus. Učí se vnímat sebe i druhé, získávají sebejistotu
				při vystupování před publikem.. Vyzkoušíme si práci s&nbsp;tělem, rekvizitou, loutkou, slovem a textem. A
				ještě to skombinujeme s animační technikou pixilace.
			</p>
			<table>
                <tbody>
				<tr>
					<td><strong>Termín:</strong></td>
					<td>
						po domluvě s lektorkou Martinou, kontakt:
						<a href="mailto:martinasladkova@centrum.cz">martinasladkova@centrum.cz</a> nebo
						<a href="tel:+420732150196">732 150 196</a>
					</td>
				</tr>
				<tr>
					<td><strong>Místo:</strong></td>
					<td>ZŠ DLOUHÝ LÁN</td>
				</tr>
				<tr>
					<td><strong>Cena za pololetí:</strong></td>
					<td>4 000,- Kč / 15 lekcí (sourozenec 3 500,- Kč)</td>
				</tr>
                </tbody>
			</table>
		</details>
		<details>
			<summary>Výtvarka pro 1. stupeň</summary>
			<p>
				Výtvarný kroužek podporuje zálibu dětí ve výtvarných technikách. Převážně je zaměřený na výtvarné
				začátečníky a mírně pokročilé děti 1. stupně. Děti se pomocí tematických zadání seznámí s různými
				výtvarnými technikami, budou kreslit, malovat a vyrábět. Výtvarné úkoly budou rozvíjet fantazii, spontánní
				a estetický projev. V kroužku děti získají základní dovednosti v práci s výtvarnými materiály (tužka,
				vodové barvy, tuš, tempera, uhel, pastel …), vyzkouší si linoryt, enkaustiku, malbu na sklo, výrobu loutek
				a mnoho dalšího.
			</p>
			<table>
                <tbody>
				<tr>
					<td><strong>Místo:</strong></td>
					<td>ATELIER Hanspaulka - PRAHA 6</td>
				</tr>
				<tr>
					<td><strong>Cena za pololetí:</strong></td>
					<td>4 000,- Kč / 15 lekcí (sourozenec 3 500,- Kč)</td>
				</tr>
                </tbody>
			</table>
			<p>Rozvrh kroužků:</p>
			<figure>
				<table role="grid">
					<thead>
						<tr>
							<th scope="col">den</th>
							<th scope="col">čas</th>
							<th scope="col">místo</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Pondělí</td>
							<td>9:30-11:00</td>
							<td>Ateliér Hanspaulka</td>
						</tr>
						<tr>
							<td>Úterý</td>
							<td>10:30-12:00</td>
							<td>Ateliér Hanspaulka</td>
						</tr>
						<tr>
							<td>Úterý</td>
							<td>12:30-14:00</td>
							<td>Ateliér Hanspaulka</td>
						</tr>
						<tr>
							<td>Středa</td>
							<td>9:30-11:00</td>
							<td>Ateliér Hanspaulka</td>
						</tr>
						<tr>
							<td>Čtvrtek</td>
							<td>9:30-11:00</td>
							<td>Ateliér Hanspaulka</td>
						</tr>
						<tr>
							<td>Čtvrtek</td>
							<td>11:00-12:30</td>
							<td>Ateliér Hanspaulka</td>
						</tr>
						<tr>
							<td>Čtvrtek</td>
							<td>12:30-14:00</td>
							<td>Ateliér Hanspaulka</td>
						</tr>
						<tr>
							<td>Pátek</td>
							<td>11:00-12:30</td>
							<td>Ateliér Hanspaulka</td>
						</tr>
						<tr>
							<td>Pátek</td>
							<td>12:30-14:00</td>
							<td>Ateliér Hanspaulka</td>
						</tr>
					</tbody>
				</table>
			</figure>
		</details>

		<details>
			<summary>Doučování hravě, tvořivě a s&nbsp;láskou</summary>
			<p>
				Nabízíme individuální i skupinové doučování v předmětech: čeština, angličtina, matematika (Hejného
				metoda), dějiny umění. Součástí doučování je i tvorba vlastního portofolia.
			</p>
			<table>
                <tbody>
				<tr>
					<td><strong>Termín a místo:</strong></td>
					<td>po domluvě</td>
				</tr>
				<tr>
					<td><strong>Cena:</strong></td>
					<td>250,- Kč / hodina</td>
				</tr>
                </tbody>
			</table>
		</details>
		<details>
			<summary>Víkendové dny animovaného filmu</summary>
			<p>Náš nepravidelný kurz animovaného filmu je určen pro děti jakéhokoliv věku.</p>
			<strong>Jak to funguje?</strong>
			<p>
				Kontaktujte nás a jednou za měsíc Vám přijde pozvánka zúčastnit se víkendového dne animované tvorby.
				Nebo si vyberte konkrétní datum z navrhovaných termínů a napište nám, o který máte zájem. Navštívíte tolik
				kroužků, kolik vám bude vyhovovat nebo čas dovolí. Zaplatíte pouze ten den, na který se přihlásíte.
				Kroužek trvá čtyři hodiny s přestávkou na oběd.
			</p>
			<strong>Program:</strong>
			<p>Děti budou pracovat technikou stop-motion a výsledkem bude jejich vlastní autorský film.</p>
			<p>
				Hotové filmy veřejně promítáme na konci roku v kině Bio Oko, kde děti společně se svými rodinami a
				přáteli zažijí slavnostní premiéru svých filmů.
			</p>
			<table>
                <tbody>
				<tr>
					<td><strong>Čas:</strong></td>
					<td>10:00 - 14:00</td>
				</tr>
				<tr>
					<td><strong>Místo:</strong></td>
					<td>ATELIER Hanspaulka - PRAHA 6</td>
				</tr>
				<tr>
					<td><strong>Termíny:</strong></td>
					<td>
						<table class="m-0" role="grid">
                            <tbody>
							<tr>
								<td>Leden:</td>
								<td>neděle 19. 1., neděle 26. 1.</td>
							</tr>
							<tr>
								<td>Únor:</td>
								<td>sobota 15. 2., neděle 23. 2.</td>
							</tr>
							<tr>
								<td>Březen:</td>
								<td>neděle 2. 3., neděle 9. 3., sobota 15. 3. a neděle 23. 3.</td>
							</tr>
							<tr>
								<td>Duben:</td>
								<td>neděle 6. 4., sobota 12. 4. a neděle 27. 4.</td>
							</tr>
							<tr>
								<td>Květen:</td>
								<td>sobota 3. 5., neděle 18. 5. a neděle 25. 5.</td>
							</tr>
							<tr>
								<td>Červen:</td>
								<td>neděle 1. 6., sobota 7. 6. a sobota 14. 6.</td>
							</tr>
                            </tbody>
						</table>
					</td>
				</tr>
				<tr>
					<td><strong>Cena:</strong></td>
					<td>1 400,- Kč / den (v ceně je společný oběd a postprodukce filmu)</td>
				</tr>
                </tbody>
			</table>
		</details>

		<details>
			<summary>Letní tábory „Dobrodružství animace“</summary>
			<p>
				Pro zapálené animátory, ilustrátory, scénáristy, režiséry a střihače pořádáme naše malé letní filmové
				tábory rodinného typu (pro 20-25 dětí). Každé léto si vybíráme společné téma, společně vymyslíme scénář,
				vyrobíme scénu a loutky a postupně si projdeme celým procesem realizace až do finálního projektu. Na konci
				tábora si objednáme pizzu, zapíchneme brčka do limonády, zaboříme se do spacáků a pustíme si super trháky,
				které jsme natočili! A jako památka na naše dobrodružství vám zůstane vlastní krátký animovaný film!
			</p>
			<blockquote>
				Tábor je určen pro děti mladšího věku (1. - 6. třída). Předešlé zkušenosti s animovanou tvorbou ani
				fotografováním nejsou podmínkou. Technické vybavení je součástí tábora.
			</blockquote>
			<table>
                <tbody>
				<tr>
					<td><strong>Termín:</strong></td>
					<td>6. - 13. 7. 2025</td>
				</tr>
				<tr>
					<td><strong>Místo:</strong></td>
					<td>Terénní základna Buk v Krásné Lípě, Česko-Saské Švýcarsko</td>
				</tr>
				<tr>
					<td><strong>Cena:</strong></td>
					<td>6 500,- Kč (zahrnuje program, ubytování a celodenní stravování/5x denně)</td>
				</tr>
                </tbody>
			</table>
		</details>
	</article>
</section>

<section id="voucher" class="container">
	<article>
		<h1>Animace jako dárek</h1>

		<p>
			Rádi byste darovali svému dítěti, vnoučeti nebo kamarádovi či celé skupině přátel dárek workshopu animovaného
			filmu? Během 4 hodin si vytvoříte vlastní animovaný film podle své fantazie, které se rozhodně meze nekladou.
			<a href="#contact" data-target="contact">Kontaktujte nás</a>, domluvíme se na konkrétním termínu a vystavíme
			Vám dárkový voucher, kterým můžete překvapit své blízké. Workshop je vhodný i pro naprosté začátečníky. Koná
			se v Ateliéru Aniděti na Hanspaulce, Praha 6.
		</p>

		<img class="no-print" loading="lazy" src="/images/voucher.webp" alt="Dárkový poukaz" width="300" height="400" />
	</article>
</section>

<section id="support" class="container">
	<article>
		<h1>Podporují nás</h1>

		<div class="support-item">
			<img
				id="harmonie-logo"
				class="no-print"
				loading="lazy"
				src="/images/harmonie.webp"
				width="78"
				height="51"
				alt="Církevní husitská základní umělecká škola Harmonie"
			/>
			<span>
				<a href="https://www.zusharmonie.cz/" target="_blank" rel="noreferrer"
					>Církevní husitská základní umělecká škola Harmonie</a
				>
			</span>
		</div>
		<div class="support-item">
			<img
				id="praha6-logo"
				class="no-print"
				loading="lazy"
				src="/images/p6.webp"
				width="78"
				height="89"
				alt="Městská část Praha 6"
			/>
			<span>
				<a href="https://praha6.cz/" target="_blank" rel="noreferrer">Městská část Praha 6</a>
			</span>
		</div>
	</article>
</section>

<section id="contact" class="container">
	<article>
		<h1>Kontakt</h1>
		<address>
			<strong>Atelier Aniděti</strong>
			<p>Kateřina Knappová<br />Tylišovská 771/3<br />160 00 - Praha 6</p>
			<div class="link-icon mb-10">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
					<use href="/icons/phone.svg#phone" />
				</svg>
				<a href="tel:+420608172330">608 172 330</a>
			</div>
			<div class="link-icon">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
					<use href="/icons/mail.svg#mail" />
				</svg>
				<a href="mailto:anidetipraha@gmail.com">anidetipraha@gmail.com</a>
			</div>
		</address>
		<div class="google-maps no-print">
			<iframe
				title="Google Maps"
				width="100%"
				height="100%"
				frameborder="0"
				style="border: 0"
				src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAYOITTMUJPop3dtOKlCXgvkrbn7Daq-3s&q=Tylišovská 3, Praha 6"
				allowfullscreen
				loading="lazy"
			></iframe>
		</div>
	</article>
</section>

<footer class="container text-right pt-0">
	<hr />
	<p>
		<small>Copyright &copy; 2023 Atelier Aniděti</small>
	</p>
</footer>
