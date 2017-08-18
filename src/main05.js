
Vue.component('coupon', {
  template: `
    <input @blur="onCouponApplied" placeholder="Enter your copon here">
  `,

  methods: {
    onCouponApplied() {
      this.$emit('applied');
    }
  }
});

new Vue({
  el: '#root',

  data: {
    couponApplied: false
  },

  methods: {
    onCouponApplied() {
      this.couponApplied = true;
    }
  }
});
