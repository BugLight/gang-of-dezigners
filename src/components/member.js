export default {
	props : ['info', 'inactive'],
    computed: {
        fullname () {
            return this.info.first + ' ' + this.info.last;
        }
    },
    methods: {
        mouseOver () {
            this.$emit('focused');
        },
        mouseLeave () {
            this.$emit('unfocused');
        }
    },
	render (h) {
		return <div onMouseover={this.mouseOver} onMouseleave={this.mouseLeave} class="member">
            <img class="member__photo" src={this.info.photo}/>
            <transition name="fade">
                {this.inactive ? <div class="member__filter"></div> : null}
            </transition>
            <h1 class="member__nick">{this.info.nick}</h1>
		</div>;
	}
}
