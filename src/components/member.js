export default {
	props : ['nick', 'first', 'last', 'group', 'desc', 'photo'],
    computed: {
        fullname () {
            return this.first + ' ' + this.last;
        }
    },
	render (h) {
		return <div class="member">
            <img class="member__photo" src={this.photo}/>
    		<h1 class="member__nick">{this.nick}</h1>
		</div>;
	}
}
