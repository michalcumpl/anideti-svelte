<script lang="ts">
	import ScheduleTable from './ScheduleTable.svelte';
	import { artSchedule, homeschoolersSchedule, schoolersSchedule } from '$lib/data/schedules';
</script>

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
				<ScheduleTable headers={['den', 'čas', '', 'místo']} rows={homeschoolersSchedule} />
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
				<ScheduleTable headers={['den', 'čas', '', 'místo']} rows={schoolersSchedule} />
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
				<ScheduleTable headers={['den', 'čas', 'místo']} rows={artSchedule} />
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
