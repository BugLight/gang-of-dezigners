export default {
	props : ['info', 'inactive'],
    methods: {
        mouseOver () {
            this.$emit('focused');
            this.focused = true;
        },
        mouseLeave () {
            this.$emit('unfocused');
            this.focused = false;
        }
    },
    data () {
        return {
            focused: false
        };
    },
	render (h) {
		return <div onMouseover={this.mouseOver} onMouseleave={this.mouseLeave} class="member">
            <img class="member__photo" src={this.info.photo}/>
            <transition name="fade">
                {this.inactive ? <div class="member__filter"></div> : null}
            </transition>
            <transition name="fade">
                {this.focused ? <h1 class="member__nick">{this.info.nick}</h1> : null}
            </transition>
		</div>;
	}
}
