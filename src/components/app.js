import app_header from "./app-header";
import member_list from "./member-list";
import member from "./member";
import app_footer from "./app-footer";

export default {
  components: {
    "app-header": app_header,
    "member-list": member_list,
    "app-footer": app_footer
  },
  render(h) {
    return <div>
        <app-header />
        <member-list />
        <br/>
          <h2 class="about-us">О нас</h2>
          <br />
          <p class="about-us">
            Мы - команда! Мы дружны, и сколько бы проблем и разногласий не
            было между нами, любые дедлайны отступят, когда узреют, с каким
            рвением мы стремимся к победе! Смех продлевает жизнь, а потому
            анекдоты и мемы являюстся неотъемлемой частью нашей команды,
            ведь в жизни самое важное чтобы было где повесить шляпу, которая
            как раз.
          </p>
        <app-footer />
      </div>;
  }
};
