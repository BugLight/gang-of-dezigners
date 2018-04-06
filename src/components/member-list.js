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
    render (h) {
        return <ul class="member-list">
            {this.members.map(m => <li><member info={m}></member></li>)}
        </ul>;
    }
};
