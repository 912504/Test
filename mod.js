(function () {
  let old = globalThis.sdk_runtime;
  c2_callFunction("execCode", ["globalThis.sdk_runtime = this.runtime"]);
  let runtime = globalThis.sdk_runtime;
  globalThis.sdk_runtime = old;

  let notify = (text, title = "nah jit trippin", image = "./speedrunner.png") => {
    cr.plugins_.sirg_notifications.prototype.acts.AddSimpleNotification.call(
      runtime.types_by_index.find(
        (type) => type.plugin instanceof cr.plugins_.sirg_notifications
      ).instances[0],
      title,
      text,
      image
    );
  };

  notify(
    "set timescale with qweasdzxcv, t is tas jump, g is jump spam",
    "timescale shortcut mod loaded"
  );
  document.addEventListener("keydown", (event) => {
    if (event.code === "KeyO") {
      ovoTasTools.timescale = 1.1
        notify("Frame Fixed to 1.1");
    }
  });
})();
