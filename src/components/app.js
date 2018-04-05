import app_header from './app-header'
import member from './member'

export default {
    components: {
        'app-header': app_header,
        'member' : member
    },
    data : function() {
    	return {
    			info : {
	    		"nick" : "pettro98",
	    		"first" : "Петр",
	    		"second" : "Толкунов",
	    		"group" : "ИУ8-41",
	    		"desc" : "студент бомонки"
	    	}
    	}
    },
    render (h) {
        return <div>
            <app-header></app-header>
            <member v-bind="info"></member>
        </div>;
    }
};
