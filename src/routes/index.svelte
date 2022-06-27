<script lang="ts">
	import { MaterialApp, Button, Icon, Snackbar, Alert } from 'svelte-materialify';
	import { mdiPlay, mdiPause, mdiCheck, mdiAlert } from '@mdi/js';

	let success = true;
	let message = '';
	let showSnackbar = false;
	$: severity = success ? 'success' : 'error';
	$: iconPath = success ? mdiCheck : mdiAlert;

	async function setPause(pause: boolean) {
		const endpoint = pause ? '/pause' : '/play';
		const response = await fetch(endpoint);
		if (response.status === 200) {
			const json = await response.json();
			if (json.status == 'Ok') {
				message = `${pause ? 'Paused' : 'Resumed'} the server`;
				success = true;
			}
		} else {
			message = 'Something went wrong';
			success = false;
		}
		showSnackbar = true;
	}
</script>

<div class="container">
	<MaterialApp class="material-app" theme="dark">
		<div class="d-flex justify-center align-center" style="height: 100vh;">
			<Button on:click={() => setPause(false)} size="x-large">
				<Icon path={mdiPlay} />
				Play
			</Button>
			<Button on:click={() => setPause(true)} size="x-large">
				<Icon path={mdiPause} />
				Pause
			</Button>
		</div>

		<Snackbar bind:active={showSnackbar} top center timeout={2000}>
			<div style="width: 100%;">
				<Alert class="alert {severity}-color">
					<div slot="icon">
						<Icon path={iconPath} />
					</div>
					{message}
				</Alert>
			</div>
		</Snackbar>
	</MaterialApp>
</div>

<style>
	.container {
		width: 100vw;
		height: 100vh;
	}
</style>
