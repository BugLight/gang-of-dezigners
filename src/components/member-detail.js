export default {
    props: ['info'],
    computed: {
        fullname () {
            return this.info.last + '  ' + this.info.first + '  ' +  this.info.second;
        }
    },
    methods: {
        back () {
            this.$emit('return');
        }
    },
    render (h) {
        return <div class="member-detail">
            <h1 class="member-detail__name">{this.fullname}</h1>
            <h2 class="member-detail__group">Группа: {this.info.group}</h2>
            <p class="member-detail__group">Немного о себе:</p>
            <p class="member-detail__desc">{this.info.desc}</p>
            <a onClick={this.back} class="home_button">
                <img
                    src="/static/img/home-button.png"
                    alt="Home:"
                    height="64"
                    width="64"/>
            </a>
        </div>;
    }
};
