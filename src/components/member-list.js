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
                    desc: 'Backend - разработчик. Невропатолог серверной стороны сайтов. Целеустремленный, впитывающий знания программист. Ответственно подхожу к разработке, помогаю проводить Review-кода команды.\n\nStack-технологий = [\n\tBackend => [ Python, Perl, C++ ],\n\tFramework => [ Flask, Vue ],\n\tTechnology => [ Git, Heroku ]\n]',
                    photo: '/static/img/talkytitan5127.jpg',
                    inactive: false
                },
                {
                    nick: 'pettro98',
                    first: 'Петр',
                    last: 'Толкунов',
                    second: 'Алексеевич',
                    group: 'ИУ8-41',
                    desc: 'Волею судьбы занимаюсь дизайном, хотя предпочел бы серверную часть. Иногда интуитивно вставляю костыли, которые непостижимым для меня образом оказываются рабочими. Не люблю Python из-за не-си-подобного синтаксиса.',
                    photo: '/static/img/pettro98.jpg',
                    inactive: false
                },
                {
                    nick: 'h1kk4',
                    first: 'Алексей',
                    last: 'Долматов',
                    second: 'Дмитриевич',
                    group: 'ИУ8-41',
                    desc: 'Прирожденный дизайнер. Могу сверстать вам сайт за 5 минут на коленках в метро в час пик. Из любого тапка c помощью HTML5/CSS3/JS/React.JS/Vue.js сделаю вам шедевр мирового уровня за скромное вознаграждение. Мастер merge конфликтов. Ношу ray ban и пью кофе из старбакса.',
                    photo: '/static/img/h1kk42.jpg',
                    inactive: false
                },
                {
                    nick: 'buglight',
                    first: 'Даниил',
                    last: 'Жуков',
                    second: 'Михайлович',
                    group: 'ИУ7-42',
                    desc: 'Fullstack разработчик. Связующее звено в команде, помогаю собрать самые разные технологии воедино и получить готовый продукт. Перфекционист, и потому особенно ревностно отношусь к codestyle, так что не забывайте оставлять новую строку в конце файла.',
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
