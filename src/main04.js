Vue.component('tabs', {
  template: `
    <div>

      <div class="tabs">
        <ul>
          <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive}">
            <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
          </li>
        </ul>
      </div>

      <div class="tabs-details">
        <slot></slot>
      </div>

    </div>
  `,

  data() {
    return { tabs: [] };
  },

  methods: {
      selectTab(selectedTab) {
        this.tabs.forEach(tab => {
          tab.isActive = (tab.href == selectedTab.href);
        });
      }
  },

  created() {
    //console.log(this.$children)
    this.tabs = this.$children;
  }
});

Vue.component('tab', {
  props: {
    name: {required: true},
    selected: {default: false}
  },

  template: `
    <div v-show="isActive"><slot></slot></div>
  `,

  data () {
    return {isActive: false}
  },
  computed: {
    href() {
      return '#' + this.name.toLowerCase().replace(/ /g, '-');
    }
  },

  mounted() {
    this.isActive = this.selected;
  }

});

new Vue({
  el: '#root',
})
