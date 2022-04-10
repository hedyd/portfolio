<script>
	import Project from './Project/Project.svelte';
	import data from './data';
</script>

<main>
	{#each data as project, index}
		<Project reverse={index % 2 === 1} {...project} />
	{/each}
</main>
