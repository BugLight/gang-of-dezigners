import member from './member'

export default {
    components: {
        'member': member
    },
    data () {
        return {
            members: [
                {
                    nick: 'buglight',
                    first: 'Даниил',
                    last: 'Жуков',
                    group: '',
                    desc: '',
                    photo: '/static/maket.jpg'
                },
                {
                    nick: 'talkytitan5127',
                    first: 'Павел',
                    last: '',
                    group: '',
                    desc: '',
                    photo: '/static/maket.jpg'
                },
                {
                    nick: 'pettro98',
                    first: 'Петр',
                    last: '',
                    group: '',
                    desc: '',
                    photo: '/static/maket.jpg'
                },
                {
                    nick: 'h1kk4',
                    first: 'Алексей',
                    last: '',
                    group: '',
                    desc: '',
                    photo: '/static/maket.jpg'
                }
            ]
        };
    },
    render (h) {
        return <ul class="member-list">
            {this.members.map(m => <li><member info={m}></member></li>)}
        </ul>;
    }
};
