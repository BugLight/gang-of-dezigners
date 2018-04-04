import app_header from './app-header'

export default {
    components: {
        'app-header': app_header
    },
    render (h) {
        return <div>
            <app-header></app-header>
        </div>;
    }
};
