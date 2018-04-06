import app_header from './app-header'
import member_list from './member-list'
import member from './member'
import app_footer from './app-footer'

export default {
    components: {
        'app-header': app_header,
        'member-list': member_list,
        'app-footer': app_footer
    },
    render (h) {
        return <div>
            <app-header></app-header>
            <member-list></member-list>
            <app-footer></app-footer>
        </div>;
    }
};
