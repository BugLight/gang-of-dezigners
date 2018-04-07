import member from './member'
import member_detail from './member-detail'

export default {
    components: {
        'member': member,
        'member-detail': member_detail
    },
    data () {
        return {
            activeMember: null,
            members: [
                {
                    nick: 'talkytitan5127',
                    first: 'Павел',
                    last: 'Горбунов',
                    second: 'Алексеевич',
                    group: 'ИУ8-41',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    photo: '/static/img/talkytitan5127.jpg',
                    inactive: false
                },
                {
                    nick: 'pettro98',
                    first: 'Петр',
                    last: 'Толкунов',
                    second: 'Алексеевич',
                    group: 'ИУ8-41',
                    desc: '',
                    photo: '/static/img/pettro98.jpg',
                    inactive: false
                },
                {
                    nick: 'h1kk4',
                    first: 'Алексей',
                    last: 'Долматов',
                    second: 'Дмитриевич',
                    group: 'ИУ8-41',
                    desc: '',
                    photo: '/static/img/h1kk42.jpg',
                    inactive: false
                },
                {
                    nick: 'buglight',
                    first: 'Даниил',
                    last: 'Жуков',
                    second: 'Михайлович',
                    group: 'ИУ7-42',
                    desc: '',
                    photo: '/static/img/buglight.png',
                    inactive: false
                }
            ],
        };
    },
    methods: {
        setActive (member) {
            this.activeMember = member;
        },
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
        },
        unsetActive () {
            this.activeMember = null;
        }

    },
    render (h) {
        return <transition name="slide" mode="out-in">
            {!this.activeMember ? <ul class="member-list">
                {this.members.map(m => <li key={m.nick}>
                    <member
                        nativeOnClick={() => {this.setActive(m)}}
                        onFocused={() => this.focus(m)}
                        onUnfocused={this.unfocus}
                        info={m}
                        inactive={m.inactive}>
                    </member>
                </li>)}
            </ul> : null}
            {this.activeMember ? <div class="member-list_active">
                <div class="member-wrapper">
                    <member info={this.activeMember}></member>
                </div>
                <div class="member-detail-wrapper">
                    <member-detail onReturn={this.unsetActive} info={this.activeMember}></member-detail>
                </div>
            </div> : null}
        </transition>;
    }
};
