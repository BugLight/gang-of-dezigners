import app_header from './app-header'
import app_footer from './app-footer'

export default {
    components: {
        'app-header': app_header,
        'app-footer': app_footer
    },
    render (h) {
        return <div>
            <app-header></app-header>
            <app-footer></app-footer>
          </div>;
    }
};
