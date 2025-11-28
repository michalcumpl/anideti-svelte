<script lang="ts">
	export let headers: string[] = [];
	export let rows: string[][] = [];
</script>

<table role="grid">
	<thead>
		<tr>
			{#each headers as header}
				<th scope="col">{header}</th>
			{/each}
		</tr>
	</thead>
	<tbody>
		{#each rows as row}
			<tr>
				{#each row as cell}
					<td>{cell}</td>
				{/each}
			</tr>
		{/each}
	</tbody>
</table>
