export default {
	props : ['nick', 'first', 'second', 'group', 'desc'],
	render(h) {
		return <member class="member">
		<h1>{{ nick }}</h1>
		<h2>{{first}}  {{second}}</h2>
		<h2>{{ group }}</h2>
		<p>{{ desc }}</p>
		</member>
	}
}
