export default {
    data () {
        return {
            members: [
                'first',
                'second',
                'third',
                'forth'
            ]
        };
    },
    render (h) {
        return <ul class="member-list">
            {this.members.map(m => <li>{m}</li>)}
        </ul>;
    }
};
