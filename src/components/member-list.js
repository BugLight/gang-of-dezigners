import member from './member'

export default {
    components: {
        'member': member
    },
    data () {
        return {
            activeMember: null,
            members: [
                {
                    nick: 'talkytitan5127',
                    first: 'Павел',
                    last: '',
                    group: '',
                    desc: '',
                    photo: '/static/img/talkytitan5127.jpg'
                },
                {
                    nick: 'pettro98',
                    first: 'Петр',
                    last: '',
                    group: '',
                    desc: '',
                    photo: '/static/img/pettro98.jpg'
                },
                {
                    nick: 'h1kk4',
                    first: 'Алексей',
                    last: '',
                    group: '',
                    desc: '',
                    photo: '/static/img/h1kk42.jpg'
                },
                {
                    nick: 'buglight',
                    first: 'Даниил',
                    last: 'Жуков',
                    group: '',
                    desc: '',
                    photo: '/static/img/buglight.png'
                }
            ]
        };
    },
    methods: {
        setActive (member) {
            this.activeMember = member;
        }
    },
    render (h) {
        return <transition name="member-list" mode="out-in">
            {!this.activeMember ? <ul class="member-list">
                {this.members.map(m => <li key={m.nick}><member nativeOnClick={() => {this.setActive(m)}} info={m}></member></li>)}
            </ul> : null}
            {this.activeMember ? <div class="member-wrapper">
                <member info={this.activeMember}></member>
            </div> : null}
        </transition>;
    }
};
