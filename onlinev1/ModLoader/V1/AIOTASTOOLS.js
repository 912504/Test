(function () {
  let old = globalThis.sdk_runtime;
  c2_callFunction("execCode", ["globalThis.sdk_runtime = this.runtime"]);
  let runtime = globalThis.sdk_runtime;
  globalThis.sdk_runtime = old;

  //Get all valid players on the layout
  // Ghosts don't count as valid players, and replays don't count either

  let notify = (text, title = "Save state", image = "./speedrunner.png") => {
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
    "Save state with Shift+S, load with S, reset with R, reset sate with Shift+R, skip level with Shift+N",
    "Mod loaded"
  );

  let getPlayer = () =>
    runtime.types_by_index
      .filter(
        (x) =>
          !!x.animations &&
          x.animations[0].frames[0].texture_file.includes("collider")
      )[0]
      .instances.filter(
        (x) => x.instance_vars[17] === "" && x.behavior_insts[0].enabled
      )[0];
  let getFlag = () =>
    runtime.types_by_index.find(
      (x) =>
        x.name === "EndFlag" ||
        (x.plugin instanceof cr.plugins_.Sprite &&
          x.all_frames &&
          x.all_frames[0].texture_file.includes("endflag"))
    ).instances[0];
  let curState = null;
  let curLayout = null;
  let saveState = () => {
    notify("Saved player state", "State Saved");
    return runtime.saveInstanceToJSON(getPlayer(), true);
  };
  let loadState = (state) => {
    notify("Loaded player state", "State Loaded");
    runtime.loadInstanceFromJSON(getPlayer(), state, true);
  };
  document.addEventListener("keydown", (event) => {
    if (!getFlag()) {
      return;
    }
    if (event.code === "KeyS") {
      if (event.shiftKey) {
        curState = saveState();
      } else if (curState != null) {
        loadState(curState);
      }
    }
    if (event.code === "KeyR") {
      if (event.ctrlKey) {
        notify("State reset by hard level reset (Ctrl + R)", "State Reset");
        curState = null;
      } else if (event.shiftKey) {
        curState = null;
        runtime.changeLayout = runtime.runningLayout;
        notify("State reset by soft level reset (Shift + R)", "State Reset");
      }
    }
    if (event.code === "KeyN") {
      if (event.shiftKey) {
        let player = getPlayer();
        let flag = getFlag();
        player.x = flag.x;
        player.y = flag.y;
        player.set_bbox_changed();
        setTimeout(() => {
          notify("Going to next level (Shift + N)", "Next Level");
        }, 300);
      }
    }
  });

  Object.values(runtime.layouts).forEach((layout) => {
    let oldFn = layout.startRunning.bind(layout);
    layout.startRunning = () => {
      oldFn();
      if (!getFlag()) {
        curLayout = layout.name;
        curState = null;
      } else {
        if (curState && curLayout === layout.name) loadState(curState);
        else curState = null;
        curLayout = layout.name;
      }
    };
  });
})();
(function () {
  let old = globalThis.sdk_runtime;
  c2_callFunction("execCode", ["globalThis.sdk_runtime = this.runtime"]);
  let runtime = globalThis.sdk_runtime;
  globalThis.sdk_runtime = old;

  go = false;
  held = [false, false, false, false];
  let xSpeed = 10;
  let ySpeed = 10;
  let ba = {
    tick() {
      if (go) {
      	try{
        moveX = held[2] - held[0];
        moveY = held[3] - held[1];
        let playerInstances = runtime.types_by_index
          .filter(
            (x) =>
              !!x.animations &&
              x.animations[0].frames[0].texture_file.includes("collider")
          )[0]
          .instances.filter(
            (x) => x.instance_vars[17] === "" && x.behavior_insts[0].enabled
          );
        let player = playerInstances[0];
        console.log(moveX, moveY);
        player.x += moveX * xSpeed;
        player.y += moveY * ySpeed;
      }catch(err){}
  }
    },
  };

  g = globalThis.FlyMod = {
    xSpeed: function(a)
    {
      xSpeed = a;
    },

    ySpeed: function(a)
    {
      ySpeed = a;
    },
  }

  runtime.tickMe(ba);


  document.addEventListener("keydown", function (event) {
    if (event.keyCode >= 37 && event.keyCode <= 40) {
      held[event.keyCode - 37] = true;
    }
    if (event.keyCode == 16) {
      go = true;
    }
  });

  document.addEventListener("keyup", function (event) {
    if (event.keyCode >= 37 && event.keyCode <= 40) {
      held[event.keyCode - 37] = false;
    }
    if (event.keyCode == 16) {
      go = false;
    }
  });
})();
(function() {
    let old = globalThis.sdk_runtime;
    c2_callFunction("execCode", ["globalThis.sdk_runtime = this.runtime"]);
    let runtime = globalThis.sdk_runtime;
    globalThis.sdk_runtime = old;
  
    let getPlayer = () => {
        return runtime.types_by_index
            .filter(
                (x) =>
                !!x.animations &&
                x.animations[0].frames[0].texture_file.includes("collider")
            )[0]
            .instances.filter(
                (x) => x.instance_vars[17] === "" && x.behavior_insts[0].enabled
            )[0];
    }
    
    let notify = (title, text, image = "./speedrunner.png") => {
        cr.plugins_.sirg_notifications.prototype.acts.AddSimpleNotification.call(
            runtime.types_by_index.find(
                (type) => type.plugin instanceof cr.plugins_.sirg_notifications
            ).instances[0],
            title,
            text,
            image
        );
    };
    
    let flyMod = {
        init() {
            this.movementKeys = [false, false, false, false];
            this.activatorKeyHeld = false;
            this.activated = false;
            this.speed = {x: 10, y: 10};
            this.stored = [1500, true];
            this.override = false;
            
            document.addEventListener("keydown", (event) => {this.keyDown(event)});
            document.addEventListener("keyup", (event) => {this.keyUp(event)});
          
            runtime.tickMe(this);
          
            globalThis.ovoFlyMod = this;
            //notify("Mod Loaded", "Fly mod loaded");
        },
      
        keyDown(event) {
            let key = event.key.toLowerCase();
          
            if (key == "control" && !this.override) {
                this.activatorKeyHeld = true;
            } else if (event.keyCode >= 37 && event.keyCode <= 40 && this.activatorKeyHeld) {
                if (!this.activated) {
                    this.startActivation();
                    this.activated = true;
                }
              
                this.movementKeys[event.keyCode - 37] = true;
            }
        },
      
        keyUp(event) {
            let key = event.key.toLowerCase();
          
            if (key == "control" && this.activatorKeyHeld) {
                this.activatorKeyHeld = false;
              
                if (this.activated) {
                    this.movementKeys = [false, false, false, false];
                    this.activated = false;
                    this.endActivation();
                }
            } else if (event.keyCode >= 37 && event.keyCode <= 40 && this.activatorKeyHeld) {
                this.movementKeys[event.keyCode - 37] = false;
            }
        },
      
        startActivation() {
            let player = getPlayer();
          
            if (player) {
                this.stored = [player.behavior_insts[0].g, player.collisionsEnabled];
            } else {
                this.stored = [1500, true];
            }
          
            //notify("Fly Mod", "Fly Enabled");
        },
      
        endActivation() {
            let player = getPlayer();
          
            if (player) {
                player.behavior_insts[0].g = this.stored[0];
                player.collisionsEnabled = this.stored[1];
            }
          
            //notify("Fly Mod", "Fly Disabled");
        },
      
        speedX(speed) {
            this.speed.x = speed;
        },
      
        speedY(speed) {
            this.speed.y = speed;
        },
      
        setSpeed(speed) {
            this.speed.x = speed;
            this.speed.y = speed;
        },
      
        setOverride(value) {
            this.override = !!value;
        },
      
        tick() {
            if (this.activated) {
                let player = getPlayer();
              
                if (player) {
                    if (!!player.behavior_insts[0].g || player.collisionsEnabled) {
                        player.behavior_insts[0].g = 0;
                        player.collisionsEnabled = false
                    }
                  
                    let moveX = this.movementKeys[2] - this.movementKeys[0];
                    let moveY = this.movementKeys[3] - this.movementKeys[1];
                    player.x += moveX * this.speed.x;
                    player.y += moveY * this.speed.y;
                }
            }
        }
    };
  
    flyMod.init();
})();
(function () {
  /**
   * OVO TAS TOOLS
   * version: 3
   *
   * This is a piece of code designed to run on OvO 1.4 and up and gives some simple TAS tools
   *
   * author: Ossama 'skymen' Jouini (developer of OvO)
   */
  let timescale = 1;
  let oldTimescale = 1;
  let intervalId = null;
  let runtime = null;
  const version = 3;
  let inputs = [];
  let log = (...args) => {
    console.group("OvO TAS Tools Log:");
    console.log(...args);
    console.groupEnd();
  };
  const ovoTasTools = (globalThis.ovoTasTools = {
    init() {
      if (window.cr_getC2Runtime)
        runtime = ovoTasTools.runtime = cr_getC2Runtime();
      if (runtime) {
        ovoTasTools.startUpdate();
        log("OvO TAS Tools Initialised!");
      } else alert("this is code only works on OvO!");
    },
    get version() {
      return version;
    },
    get timescale() {
      return timescale;
    },
    set timescale(val) {
      if (val === timescale) return;
      oldTimescale = timescale;
      timescale = val;
    },
    isInLevel() {
      return runtime.running_layout.name.startsWith("Level");
    },
    isPaused() {
      if (!ovoTasTools.isInLevel()) return;
      let pauseLayer = runtime.running_layout.layers.find(
        (x) => x.name === "Pause"
      );
      return pauseLayer.visible;
    },
    loadInputs(arr) {
      inputs = arr;
    },
    get loadedInputs() {
      return inputs;
    },
    playInputs() {
      ovoTasTools.timescale = 1;
      let time = 0;
      let tickCounter = {
        tick() {
          let dt = runtime.dt;
          time += dt;
          console.log(time, dt, inputs.length);
          while (time >= 1 / 60 && inputs.length > 0) {
            time -= 1 / 60;
            let inputsForThisFrame = inputs.shift();
            inputsForThisFrame.forEach((input) => {
              if (input === "Restart") c2_callFunction("Menu > Replay");
              else if (input === "Jump")
                c2_callFunction("Controls > Buffer", ["Jump"]);
              else c2_callFunction("Controls > " + input);
            });
          }
          if (inputs.length === 0) {
            runtime.untickMe(tickCounter);
          }
        },
      };
      runtime.tickMe(tickCounter);
    },
    isInEndCard() {
      if (!ovoTasTools.isInLevel()) return;
      let endGameLayer = runtime.running_layout.layers.find(
        (x) => x.name === "End Game"
      );
      let endCardLayer = runtime.running_layout.layers.find(
        (x) => x.name === "End Card"
      );
      return endGameLayer.visible || endCardLayer.visible;
    },
    pause() {
      ovoTasTools.timescale = 0;
    },
    undoTimescale() {
      ovoTasTools.timescale = oldTimescale;
    },
    step() {
      let temp = runtime.timescale;
      //   timescale = 1;
      //   setTimeout(() => {
      //     timescale = temp;
      //   }, 10);
      runtime.timescale = 1;
      runtime.tick(true, null, null);
      runtime.timescale = temp;
    },
    startUpdate() {
      intervalId = setInterval(ovoTasTools.update, 10);
    },
    stopUpdate() {
      clearInterval(intervalId);
      intervalId = null;
    },
    update() {
      let realtimescale = runtime.timescale;
      let curtimescale = ovoTasTools.timescale;
      if (
        curtimescale != realtimescale &&
        ovoTasTools.isInLevel() &&
        !ovoTasTools.isPaused() &&
        !ovoTasTools.isInEndCard()
      ) {
        log("Updating timescale");
        runtime.timescale = curtimescale;
      }
    },
  });

  ovoTasTools.init();
})();



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
    if (event.code === "KeyA") {
      ovoTasTools.timescale = 1.003
        notify("Frame Fixed to 1.003");
    }
        if (event.code === "KeyM") {
      ovoTasTools.timescale = 1.002
        notify("Frame Fixed to 1.002");
    }
        if (event.code === "KeyN") {
      ovoTasTools.timescale = 1.004
        notify("Frame Fixed to 1.004");
    }
    if (event.code === "KeyS") {
      ovoTasTools.timescale = 0.05
        notify("timescale set to 0.05");
    }
    if (event.code === "KeyD") {
      ovoTasTools.timescale = 0.02
        notify("timescale set to 0.02");
    }
    if (event.code === "KeyQ") {
      ovoTasTools.timescale = 1
        notify("timescale set to 1");
    }
    if (event.code === "KeyW") {
      ovoTasTools.timescale = 0.1
        notify("timescale set to 0.1");
    }
    if (event.code === "KeyE") {
      ovoTasTools.timescale = 0.01
        notify("timescale set to 0.01");
    }
    if (event.code === "KeyZ") {
      ovoTasTools.timescale = 2
        notify("timescale set to 2");
    }
    if (event.code === "KeyX") {
      ovoTasTools.timescale = 0.001
        notify("timescale set to 0.001");
    }
    if (event.code === "KeyC") {
      ovoTasTools.timescale = 0.00001
        notify("timescale set to 0.00001");
    }
    if (event.code === "KeyV") {
      ovoTasTools.timescale = 4.5
        notify("timescale set to 4.5");
    }
    if (event.code === "KeyB") {
      ovoTasTools.timescale = 0
        notify("timescale set to 0");
    }
    if (event.shiftKey) {
        if (event.code === "KeyK") {
        ovoTasTools.timescale = 1
        notify("timescale down moment");
        }
    }
    if (event.code === "KeyG") {
        ovoTasTools.loadInputs([["Jump"],["Jump"],["Jump"],["Jump"],["Jump"],])
        ovoTasTools.playInputs()
        notify("auto mj inputed");
    }
  });
})();
(function () {
  let old = globalThis.sdk_runtime;
  c2_callFunction("execCode", ["globalThis.sdk_runtime = this.runtime"]);
  let runtime = globalThis.sdk_runtime;
  globalThis.sdk_runtime = old;
  targetY = null;
  let showPosition = {
    tick() {
      let playerInstances = runtime.types_by_index
        .filter(
          (x) =>
            !!x.animations &&
            x.animations[0].frames[0].texture_file.includes("collider")
        )[0]
        .instances.filter(
          (x) => x.instance_vars[17] === "" && x.behavior_insts[0].enabled
        );
      let player = playerInstances[0];
      try {
        document.getElementById("69").innerHTML =
          player.x.toString() +
          "\n" +
          player.y.toString();
      } catch (err) {}
    },
  };

  let fly = {
    tick() {
      let playerInstances = runtime.types_by_index
        .filter(
          (x) =>
            !!x.animations &&
            x.animations[0].frames[0].texture_file.includes("collider")
        )[0]
        .instances.filter(
          (x) => x.instance_vars[17] === "" && x.behavior_insts[0].enabled
        );
      let player = playerInstances[0];
      try {
        player.y = targetY;
      } catch (err) {}
    },
  };

  var b = document.createElement("div"),
    c = {
      backgroundColor: "rgba(150,10,1,0.7)",
      width: "300px",
      height: "60px",
      position: "absolute",
      top: "100px",
      left: "100px",
      fontSize: "x-large",
    };
  Object.keys(c).forEach(function (a) {
    b.style[a] = c[a];
  });
  b.id = 69;
  const newContent = document.createTextNode("poggers");

  // add the text node to the newly created div
  b.appendChild(newContent);

  document.body.appendChild(b);

  g = globalThis.ovoExplorer = {
    init: function () {
      runtime.tickMe(showPosition);
    },

    trackOvO: function (a) {
      a ? runtime.tickMe(showPosition) : runtime.untickMe(showPosition);
    },

    warp: function (x, y) {
      targetY = y;
      let playerInstances = runtime.types_by_index
        .filter(
          (x) =>
            !!x.animations &&
            x.animations[0].frames[0].texture_file.includes("collider")
        )[0]
        .instances.filter(
          (x) => x.instance_vars[17] === "" && x.behavior_insts[0].enabled
        );
      let player = playerInstances[0];
      player.x = x;
      player.y = y;
    },

    levitate: function (a) {
      let playerInstances = runtime.types_by_index
        .filter(
          (x) =>
            !!x.animations &&
            x.animations[0].frames[0].texture_file.includes("collider")
        )[0]
        .instances.filter(
          (x) => x.instance_vars[17] === "" && x.behavior_insts[0].enabled
        );
      let player = playerInstances[0];
      targetY = player.y;
      a ? runtime.tickMe(fly) : runtime.untickMe(fly);
    },
  };
  g.init();
})();
