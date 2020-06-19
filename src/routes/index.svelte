<svelte:head>
	<title>Max Korsunov's personal blog | vanished</title>
</svelte:head>

<header>
	<figure class="flex-center">
		<img src="/me.jpeg" alt="me">
	</figure>

	<h3>Max Korsunov</h3>
	<p>The lover of the new. Front-end developer with creative mind.</p>

	<a href="/cv">See the CV</a>

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
		background: linear-gradient(145deg, #dfe1ec, #f8f8f8);
		box-shadow: 7px 7px 14px #c7c8cd, -7px -7px 14px #ffffff;
		width: 350px;
		padding: 100px 50px 40px;
	}

	figure {
		position: absolute;
		top: 0;
		left: 50px;
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

	h3 {
		font-size: 25px;
	}

	p {
		line-height: 20px;
	}

	header > a {
		display: inline-block;
		margin-top: 10px;
		margin-bottom: 30px;
		width: auto;
		text-decoration: none;
		background-color: #e9eaf2;
		color: #424567;
		padding: 8px 15px;
		border-radius: 9px;
		box-shadow: 2px 2px 5px #c7c8cd, -3px -3px 6px #fff;
		transition: box-shadow .2s;
	}

	header > a:hover {
		box-shadow: 2px 3px 5px 2px #c7c8cd, -3px -3px 6px 2px #fff;
		transition: box-shadow .2s;
	}

	header > a:active {
		box-shadow: inset 2px 2px 5px #c7c8cd, inset -3px -3px 6px #ffffff;
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

	nav a:hover {
		box-shadow: 2px 2px 5px #c7c8cd, -3px -3px 6px #fff;
	}

	nav img {
		width: 30px;
		height: 30px;
	}
</style>
