export default {
	props : ['info'],
    computed: {
        fullname () {
            return this.info.first + ' ' + this.info.last;
        }
    },
	render (h) {
		return <div class="member">
    		<h1 class="member__nick">{this.info.nick}</h1>
    		<h2 class="member__name">{this.fullname}</h2>
    		<h2 class="member__group">{this.info.group}</h2>
    		<p class="member__desc">{this.info.desc}</p>
		</div>;
	}
}
