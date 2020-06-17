<svelte:head>
	<title>Max Korsunov's personal blog | vanished</title>
</svelte:head>

<header>
	<figure class="flex-center">
		<img src="/me.jpeg" alt="me">
	</figure>

	<h3>Max Korsunov</h3>
	<p>The lover of the new</p>

	<nav class="flex-center">
		<a class="flex-center" href="https://github.com/VanishMax" target="_blank" rel="noreferrer nofollow">
			<img src="/github.png" alt="GitHub icon">
		</a>
		<a class="flex-center" href="https://t.me/vanishmax" target="_blank" rel="noreferrer nofollow">
			<img src="/telegram.png" alt="Telegram icon">
		</a>
		<a class="flex-center" href="https://twitter.com/vanish_max" target="_blank" rel="noreferrer nofollow">
			<img src="/twitter.png" alt="Twitter icon">
		</a>
	</nav>
</header>

<style>
	header {
		position: relative;
		margin: 5rem auto 0;
		border-radius: 50px;
		background: linear-gradient(145deg, #d1d1d1, #f8f8f8);
		box-shadow: 7px 7px 14px #c7c8cd, -7px -7px 14px #ffffff;
		width: 300px;
		padding: 100px 30px 30px;
	}

	figure {
		position: absolute;
		top: 0;
		left: 30px;
		width: 150px;
		height: 150px;
		border-radius: 50%;
		transform: translateY(-50%);
		background: linear-gradient(145deg, #d9d9d9, #fafafa);
		box-shadow: inset 2px 2px 5px #c7c8cd, inset -3px -3px 6px #ffffff;
	}

	figure img {
		width: 130px;
		height: 130px;
		border-radius: 50%;
	}

	nav {
		justify-content: space-between;
	}

	nav a {
		width: 45px;
		height: 45px;
		border-radius: 50%;
		background: linear-gradient(145deg, #d9d9d9, #fafafa);
		box-shadow: inset 2px 2px 5px #c7c8cd, inset -3px -3px 6px #ffffff;
	}

	nav img {
		width: 30px;
		height: 30px;
	}
</style>
