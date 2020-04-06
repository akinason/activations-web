<template>
	<div class="spinner-container">
		<div class="lds-roller">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
		<p>please wait</p>
	</div>
</template>

<style lang="css" scoped>
.spinner-container {
	position: fixed;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	place-items: center;
	width: 100%;
	height: 100%;
	background-color: rgba(1, 28, 36, 0.774);
}

.spinner-container p {
	margin-top: 1em;
	color: #fff;
	letter-spacing: 0.76px;
	word-spacing: 1px;
	line-height: 1.65;
	text-transform: capitalize;
	user-select: none;
}

.lds-roller {
	position: relative;
	display: inline-block;
	width: 80px;
	height: 80px;
	z-index: 99;
}
.lds-roller div {
	animation: lds-roller 0.98s cubic-bezier(0.5, 0, 0.5, 1) infinite;
	transform-origin: 40px 40px;
}
.lds-roller div:after {
	content: " ";
	display: block;
	position: absolute;
	width: 7px;
	height: 7px;
	border-radius: 50%;
	background: #fff;
	margin: -4px 0 0 -4px;
}
.lds-roller div:nth-child(1) {
	animation-delay: -0.036s;
}
.lds-roller div:nth-child(1):after {
	top: 63px;
	left: 63px;
}
.lds-roller div:nth-child(2) {
	animation-delay: -0.072s;
}
.lds-roller div:nth-child(2):after {
	top: 68px;
	left: 56px;
}
.lds-roller div:nth-child(3) {
	animation-delay: -0.108s;
}
.lds-roller div:nth-child(3):after {
	top: 71px;
	left: 48px;
}
.lds-roller div:nth-child(4) {
	animation-delay: -0.144s;
}
.lds-roller div:nth-child(4):after {
	top: 72px;
	left: 40px;
}
.lds-roller div:nth-child(5) {
	animation-delay: -0.18s;
}
.lds-roller div:nth-child(5):after {
	top: 71px;
	left: 32px;
}
.lds-roller div:nth-child(6) {
	animation-delay: -0.216s;
}
.lds-roller div:nth-child(6):after {
	top: 68px;
	left: 24px;
}
.lds-roller div:nth-child(7) {
	animation-delay: -0.252s;
}
.lds-roller div:nth-child(7):after {
	top: 63px;
	left: 17px;
}
.lds-roller div:nth-child(8) {
	animation-delay: -0.288s;
}
.lds-roller div:nth-child(8):after {
	top: 56px;
	left: 12px;
}
@keyframes lds-roller {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
</style>
