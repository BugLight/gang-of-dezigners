export default {
	props : ['info'],
    computed: {
        fullname () {
            return this.info.first + ' ' + this.info.last;
        }
    },
	render (h) {
		return <div class="member">
            <img class="member__photo" src={this.info.photo}/>
            <h1 class="member__nick">{this.info.nick}</h1>
		</div>;
	}
}
