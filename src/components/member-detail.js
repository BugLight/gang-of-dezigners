export default {
    props: ['info'],
    computed: {
        fullname () {
            return this.info.first + '  ' + this.info.last + '  ' + this.info.second;
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
            <p class="member-detail__desc">Немного о себе:
            <br/>{this.info.desc}</p>
        </div>;
    }
};
