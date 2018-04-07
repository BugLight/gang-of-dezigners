export default {
    props: ['info'],
    computed: {
        fullname () {
            return this.info.first + ' ' + this.info.last;
        }
    },
    render (h) {
        return <div class="member-detail">
            <h1 class="member-detail__name">{this.fullname}</h1>
            <h2 class="member-detail__group">{this.info.group}</h2>
            <p class="member-detail__desc">{this.info.desc}</p>
        </div>;
    }
};
