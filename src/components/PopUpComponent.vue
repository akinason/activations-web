<template>
	<div class="popup-container">
		<div :class="data.success ? 'container success' : 'container error'">
			<div class="popup-wrapper">
				<p :class="data.success ? 'success' : 'error'">{{ data.msg }}</p>
				<button class="close" @click="closePopup">x</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Error",
	props: ["data"],
	methods: {
		closePopup: function(e) {
			e.target.parentElement.parentElement.parentElement.style.opacity = "0";
			setTimeout(() => {
				e.target.parentElement.parentElement.parentElement.style.display =
					"none";
			}, 500);
		}
	}
};
</script>

<style lang="scss">
.popup-container {
	position: fixed;
	width: 100%;
	height: 100vh;
	z-index: 1;
	display: flex;
	justify-content: center;
	align-items: center;
}

.container {
	background-color: #fff;
	padding: 20px 20px 20px 10px;
	min-width: 160px;
	border-radius: 3px;
	user-select: none;
	transition: all 150ms;

	.popup-wrapper {
		position: relative;

		p {
			letter-spacing: 0.67px;
			word-spacing: 1px;
			font-weight: 500;
			font-stretch: normal;
			font-style: normal;
		}
		button {
			position: absolute;
			top: -3px;
			right: -16.5px;
			border: none;
			background: none;
			padding: 2px;
			cursor: pointer;
			font-size: 15px;
			font-weight: 600;
			color: rgb(167, 21, 21);

			&:active {
				color: #342874;
			}
		}
	}
}

.container.success {
	border: 1.58px solid rgba(106, 243, 93, 0.575);

	p {
		color: rgb(30, 245, 11);
	}
}

.container.error {
	border: 1.58px solid rgba(243, 93, 93, 0.575);

	p {
		color: rgb(243, 26, 26);
	}
}
</style>