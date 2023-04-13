<script>
	import { fly } from "svelte/transition";
	import { onMount } from "svelte";
	import { clickOutside } from "$lib/actions";
	import { myUser, token, userRatingObject } from "./stores";

	function setUserRatingObject() {
		$myUser.user.ratings.forEach((rating) => {
			console.log(rating);
			if (rating.books[0].id) {
				// 	console.log(rating.half_stars);
				$userRatingObject[rating.books[0].id] = {
					rating_id: rating.id,
					userRating: rating.half_stars,
				};
				console.log(
					`${$myUser.user.username} has rated ${rating.books[0].title} with ${
						$userRatingObject[rating.books[0].id].userRating
					}`
				);
			} else {
				console.log("uh what");
			}
		});
	}

	onMount(async () => {
		if ($token) {
			let res = await fetch(
				"http://127.0.0.1:1337/api/users/me?populate[ratings][populate][0]=books",
				{
					headers: {
						Authorization: `Bearer ${$token}`,
					},
				}
			);
			let data = await res.json();
			console.log(data);
			$myUser.user = data;
		}
		setUserRatingObject();
	});

	let showLogin;
	let error = false;
	let inputUsername;
	let inputPassword;

	let mode = "login";

	let registerUsername;
	let registerPassword;
	let registerEmail;

	let showLoginPopup = false;

	let successfullyRegistered = false;

	// set from actual functions instead
	// $: {
	//   if (myUser.hasOwnProperty("user")) {
	//     showLoginPopup = true;
	//     setTimeout(() => {
	//       showLoginPopup = false;
	//     }, 1500);
	//   }
	// }
	function nicefyError(string) {
		return `${string[0].toUpperCase()}${string.slice(1)}.`;
	}

	async function login() {
		try {
			console.log("test");
			let res = await fetch("http://127.0.0.1:1337/api/auth/local", {
				method: "POST",
				body: JSON.stringify({ identifier: inputUsername, password: inputPassword }),
				headers: {
					"Content-type": "application/json",
				},
			});
			if (res.status === 400) {
				let data = await res.json();
				console.log(JSON.stringify(data.error));
				error = data.error.message;
				error = nicefyError(error);
				throw new Error(error);
			}
			let data = await res.json();

			// session storage

			$myUser = data;
			$token = data.jwt;

			console.log(data);

			console.log(data.jwt);
			error = false;
			return data;
		} catch (e) {
			inputPassword = "";
			throw e;
		}
	}

	async function register() {
		try {
			let res = await fetch("http://127.0.0.1:1337/api/auth/local/register", {
				method: "POST",
				body: JSON.stringify({
					username: registerUsername,
					password: registerPassword,
					email: registerEmail,
				}),
				headers: {
					"Content-type": "application/json",
				},
			});
			if (res.status === 400) {
				let data = await res.json();
				error = data.error.message;
				console.log(error);
				error = nicefyError(error);
				inputPassword = "";
				// throw error;
				throw new Error(error);
			}
			let data = await res.json();
			error = false;
			$myUser = data;
			$token = data.jwt;
			return data;
		} catch (e) {
			throw e;
		}
	}
</script>

{#if !Object.keys($myUser).length}
	<button on:click={() => (showLogin = true)} class="rounded-md bg-blue-500 p-2 hover:bg-blue-400"
		>Login</button>
{:else}
	<button
		on:click={() => {
			$token = null;
			location.reload();
		}}
		class="rounded bg-blue-400 p-2 hover:bg-blue-300">Log out</button>
{/if}

{#if showLogin}
	{#if !Object.keys($myUser).length || error}
		<div
			use:clickOutside={() => {
				showLogin = false;
			}}
			class="z-100 absolute flex flex-col items-center pt-48">
			<button
				on:click={() => (mode === "login" ? (mode = "register") : (mode = "login"))}
				class="mb-4 rounded-md bg-blue-500 p-2 hover:bg-blue-400"
				>Switch to {mode === "login" ? "register" : "login"}</button>
			<form action="">
				<div class="rounded-lg bg-slate-300 p-6 [&>*]:m-2 [&>*]:p-2">
					<h1 class="text-3xl">{mode === "login" ? "Login" : "Register"}</h1>

					{#if mode === "login"}
						<input
							bind:value={inputUsername}
							placeholder="Username or email"
							id="username"
							class="rounded border p-2"
							type="text" />
						<input
							bind:value={inputPassword}
							on:input={() => (error = false)}
							placeholder="Password"
							id="password"
							class="rounded border p-2"
							type="password" />
						<button
							on:click={async () => {
								await login();
								showLoginPopup = true;
								setTimeout(() => {
									showLoginPopup = false;
								}, 2000);
							}}
							disabled={!inputUsername || !inputPassword}
							class="disabled:hover-bg-blue-400 mt-4 rounded bg-blue-400 p-2 hover:bg-blue-300 disabled:opacity-25"
							>Log in</button>
					{:else if mode === "register"}
						<input
							bind:value={registerEmail}
							placeholder="Email"
							id="email"
							class="rounded border p-2"
							type="email" />
						<input
							bind:value={registerUsername}
							placeholder="Username"
							id="username"
							class="rounded border p-2"
							type="text" />

						<input
							bind:value={registerPassword}
							placeholder="Password"
							id="password"
							class="rounded border p-2"
							type="password" />
						<button
							on:click={async () => {
								try {
									await register();
									successfullyRegistered = true;
									setTimeout(() => {
										successfullyRegistered = false;
									}, 2000);
								} catch (error) {
									console.log(error);
								}
							}}
							disabled={!registerUsername || !registerEmail || !registerPassword}
							class="disabled:hover-bg-blue-400 mt-4 rounded bg-blue-400 p-2 hover:bg-blue-300 disabled:opacity-25"
							>Register</button>
					{/if}
				</div>
			</form>
			{#if error}
				<div class="absolute top-[424px] mt-4 rounded-lg bg-red-500 p-4" transition:fly={{ y: 20 }}>
					{#if typeof error === "string"}
						<p class="">{error}</p>
						<p class="">Please try again.</p>
					{:else}
						{#each Object.values(error) as errorObject}
							{#each errorObject as errorMessage}
								<p class="">{errorMessage.message}</p>
							{/each}
						{/each}
						<p class="">Please try again.</p>
					{/if}
				</div>
			{/if}
		</div>
	{/if}
	{#if successfullyRegistered}
		<div
			class="z-100 absolute left-[50%] top-0 mt-4 translate-x-[-50%] rounded-lg bg-green-500 p-4"
			transition:fly={{ y: 20 }}>
			<p class="">Successfully registered new user {registerUsername}!</p>
		</div>
	{/if}
	{#if showLoginPopup}
		<div
			id="login-popup"
			class="z-100 absolute left-[50%] top-0 mt-4 translate-x-[-50%] rounded-lg bg-green-500 p-4"
			transition:fly={{ y: 20 }}>
			<p>Successfully logged in as {$myUser.user?.username}!</p>
		</div>
	{/if}
{/if}

<style>
</style>
