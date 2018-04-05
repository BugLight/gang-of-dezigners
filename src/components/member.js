export default {
	props : ['nick', 'first', 'last', 'group', 'desc'],
    computed: {
        fullname () {
            return this.first + ' ' + this.last;
        }
    },
	render (h) {
		return <div class="member">
    		<h1 class="member__nick">{this.nick}</h1>
    		<h2 class="member__name">{this.fullname}</h2>
    		<h2 class="member__group">{this.group}</h2>
    		<p class="member__desc">{this.desc}</p>
		</div>;
	}
}
