<script>
	import ProfileCard from './_components/profile-card.svelte';
</script>

<svelte:head>
	<title>Max Korsunov's personal blog | vanished</title>
</svelte:head>


<section>
	<ProfileCard />
	<main>

	</main>
</section>


<style>
	section {
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		margin-top: 75px;
	}

	main {
		margin: 20px 20px 0;
		width: 100%;
	}

	@media screen and (min-width: 1024px) {
		section {
			flex-direction: row;
		}
	}
</style>
