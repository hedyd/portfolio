<script lang="ts">
	import { onMount } from "svelte";
	export let title: string;
	export let job: string;
	export let summary: string;
	export let responsibilities: string[];
	export let skills: string[];
	export let image: string;
	export let reverse: boolean;
	export let video: string;
	export let once = false;
	let box;
	let observing = false;

	function intersecting() {
    const rootMargin = `0px 0px 0px 0px`;
    const observer = new IntersectionObserver(
      (entries) => {
        observing = entries[0].isIntersecting;
        if (observing && once) {
          observer.unobserve(box);
        }
      },
      {
        rootMargin,
				threshold: .35,
      }
    );
    observer.observe(box);
    return () => observer.unobserve(box);
  }

	onMount(() => {
    if (IntersectionObserver) {
      return intersecting();
    }
  });
</script>

<section class={`project${reverse ? ' reverse' : ''}`} bind:this={box}>
	<div class="col-1">
		<div class={`box${` fade${observing ? 'In' : 'Out'}${reverse ? 'Right' : 'Left'}`}`}>
			{#if video}
				<div class="video">
					<iframe title="vimeo-player" src={video} width="640" height="360" frameborder="0" allowfullscreen></iframe>
				</div>
			{/if}
			<div class="image">
				<img src={`./images/${image}`} alt="" />
			</div>
		</div>
		<div class={`skills${` fade${observing ? 'In' : 'Out'}${reverse ? 'Right' : 'Left'}`}`}>
			{skills.join(', ')}
		</div>
	</div>
	<div class="col-2">
		<div class={`content${` fade${observing ? 'In' : 'Out'}${reverse ? 'Left' : 'Right'}`}`}>
			<div class="job">{job}</div>
			<h2 class="title">{title}</h2>
			<div class="summary">{summary}</div>
			<ul class="responsibilities">
				{#each responsibilities as responsibility}
					<li class="responsibility">{responsibility}</li>
				{/each}
			</ul>
		</div>
	</div>
</section>

<style lang="scss">
	@import "./Project.scss";
</style>
