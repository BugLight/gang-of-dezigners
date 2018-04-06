import member from './member'

export default {
    components: {
        'member': member
    },
    data () {
        return {
            members: [
                {
                    nick: 'talkytitan5127',
                    first: 'Павел',
                    last: '',
                    group: '',
                    desc: '',
                    photo: '/static/img/talkytitan5127.jpg',
                    inactive: false
                },
                {
                    nick: 'pettro98',
                    first: 'Петр',
                    last: '',
                    group: '',
                    desc: '',
                    photo: '/static/img/pettro98.jpg',
                    inactive: false
                },
                {
                    nick: 'h1kk4',
                    first: 'Алексей',
                    last: '',
                    group: '',
                    desc: '',
                    photo: '/static/img/h1kk42.jpg',
                    inactive: false
                },
                {
                    nick: 'buglight',
                    first: 'Даниил',
                    last: 'Жуков',
                    group: '',
                    desc: '',
                    photo: '/static/img/buglight.png',
                    inactive: false
                }
            ],
        };
    },
    methods: {
        focus (member) {
            this.members.forEach(m => {
                if (m !== member)
                    m.inactive = true;
            });
        },
        unfocus () {
            this.members.forEach(m => {
                m.inactive = false;
            });
        }
    },
    render (h) {
        return <ul class="member-list">
            {this.members.map(m => <li>
                <member onFocused={() => this.focus(m)} onUnfocused={this.unfocus} info={m} inactive={m.inactive}></member>
            </li>)}
        </ul>;
    }
};
