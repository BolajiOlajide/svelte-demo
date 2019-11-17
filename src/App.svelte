<script>
	import { fade, fly, slide } from 'svelte/transition';
	import { randomStore } from './store';
	import Child from './Child.svelte';

	let data = {
		userId: 123456,
		name: 'Jeff Delaney',
		email: 'coop@prot.on'
	}

	export let name;
	let randomName = '';
	let randomNames = ['Bisi', 'Bimpe', 'Tola', 'Shade'];

	let rando = 0;
	$: result = Math.round(rando * 100);
	function setRando() {
		rando = Math.random();
	}

	function addRandomName() {
		if (randomName !== '') {
			randomNames = [...randomNames, randomName]
			randomName = '';
		}
	}
</script>

<style>
	h1 {
		color: purple;
	}
</style>

<h1>Hello {name}!</h1>

<p>The random number is {rando}</p>
<hr />

<p>{result}</p>
<p>{result}</p>
<p>{result}</p>

<button on:click={setRando}>Randomize!</button>
<br />

{#if result > 75}
	<p transition:fade>Big winner! Top 25% 🎉🎉🎉</p>
{:else if result > 50}
	<p transition:slide>Decent! Top 50% 🌮</p>
{:else}
	<p
		in:fly={{x:1000, duration:500}}
		out:fly={{x:-500, duration:500}}
	>
		Loser! 💩💩💩
	</p>
{/if}


<input bind:value={randomName} type="text" on:keydown={() => console.log('enter')} />
<button on:click={addRandomName}>Add Random Name</button>
<br />

{#each randomNames as val}
	<p>{val}</p>
{/each}


<br />
<!-- This will auto subscribe to the store and we'll have to unsubscribe when we unmount
this component manually -->
<!-- <p>{$randomStore}</p> -->


<!-- <Child userId={data.userId} email={data.email} name={data.name} /> -->
<Child {...data} />
