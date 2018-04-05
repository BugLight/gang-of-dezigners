import app_header from './app-header'
import member_list from './member-list'

export default {
    components: {
        'app-header': app_header,
        'member-list': member_list
    },
    render (h) {
        return <div>
            <app-header></app-header>
            <member-list></member-list>
        </div>;
    }
};
