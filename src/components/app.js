import app_header from './app-header'
import member from './member'

export default {
    components: {
        'app-header': app_header,
        'member' : member
    },
    data : function() {
    	return {
			info: {
	    		nick: 'pettro98',
	    		first: 'Петр',
	    		last: 'Толкунов',
	    		group: 'ИУ8-41',
	    		desc: 'студент бомонки'
	    	}
    	};
    },
    render (h) {
        return <div>
            <app-header></app-header>
            <member
                nick={this.info.nick}
                first={this.info.first}
                last={this.info.last}
                group={this.info.group}
                desc={this.info.desc}>
            </member>
        </div>;
    }
};
