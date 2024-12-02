"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      username: "Scott",
      tel: ["13312345678", "18612345678"],
      age: 20,
      address: ""
    };
  },
  methods: {
    signUp: function() {
      common_vendor.index.showToast({
        title: "点击了报名按钮"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.t($data.username),
    b: common_vendor.f($data.tel, (one, k0, i0) => {
      return {
        a: common_vendor.t(one)
      };
    }),
    c: $data.age >= 18
  }, $data.age >= 18 ? {
    d: common_vendor.o(($event) => $options.signUp())
  } : {}, {
    e: $data.address,
    f: common_vendor.o(($event) => $data.address = $event.detail.value),
    g: common_vendor.t($data.address)
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
