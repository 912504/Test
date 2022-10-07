(function () {
    //Keystrokes.setKeys(74,75,76,73)
    let old = globalThis.sdk_runtime;
    c2_callFunction("execCode", ["globalThis.sdk_runtime = this.runtime"]);
    let runtime = globalThis.sdk_runtime;
    globalThis.sdk_runtime = old;
    
    trans = "0.7";
    oncolor = "100,100,100";
    offcolor = "150,10,1";
    var keyboardMap = [
        "", // [0]
        "", // [1]
        "", // [2]
        "CANCEL", // [3]
        "", // [4]
        "", // [5]
        "HELP", // [6]
        "", // [7]
        "BACK_SPACE", // [8]
        "TAB", // [9]
        "", // [10]
        "", // [11]
        "CLEAR", // [12]
        "ENTER", // [13]
        "ENTER_SPECIAL", // [14]
        "", // [15]
        "SHIFT", // [16]
        "CONTROL", // [17]
        "ALT", // [18]
        "PAUSE", // [19]
        "CAPS_LOCK", // [20]
        "KANA", // [21]
        "EISU", // [22]
        "JUNJA", // [23]
        "FINAL", // [24]
        "HANJA", // [25]
        "", // [26]
        "ESCAPE", // [27]
        "CONVERT", // [28]
        "NONCONVERT", // [29]
        "ACCEPT", // [30]
        "MODECHANGE", // [31]
        "SPACE", // [32]
        "PAGE_UP", // [33]
        "PAGE_DOWN", // [34]
        "END", // [35]
        "HOME", // [36]
        "←", // [37]
        "↑", // [38]
        "→", // [39]
        "↓", // [40]
        "SELECT", // [41]
        "PRINT", // [42]
        "EXECUTE", // [43]
        "PRINTSCREEN", // [44]
        "INSERT", // [45]
        "DELETE", // [46]
        "", // [47]
        "0", // [48]
        "1", // [49]
        "2", // [50]
        "3", // [51]
        "4", // [52]
        "5", // [53]
        "6", // [54]
        "7", // [55]
        "8", // [56]
        "9", // [57]
        "COLON", // [58]
        "SEMICOLON", // [59]
        "LESS_THAN", // [60]
        "EQUALS", // [61]
        "GREATER_THAN", // [62]
        "QUESTION_MARK", // [63]
        "AT", // [64]
        "A", // [65]
        "B", // [66]
        "C", // [67]
        "D", // [68]
        "E", // [69]
        "F", // [70]
        "G", // [71]
        "H", // [72]
        "I", // [73]
        "J", // [74]
        "K", // [75]
        "L", // [76]
        "M", // [77]
        "N", // [78]
        "O", // [79]
        "P", // [80]
        "Q", // [81]
        "R", // [82]
        "S", // [83]
        "T", // [84]
        "U", // [85]
        "V", // [86]
        "W", // [87]
        "X", // [88]
        "Y", // [89]
        "Z", // [90]
        "OS_KEY", // [91] Windows Key (Windows) or Command Key (Mac)
        "", // [92]
        "CONTEXT_MENU", // [93]
        "", // [94]
        "SLEEP", // [95]
        "NUMPAD0", // [96]
        "NUMPAD1", // [97]
        "NUMPAD2", // [98]
        "NUMPAD3", // [99]
        "NUMPAD4", // [100]
        "NUMPAD5", // [101]
        "NUMPAD6", // [102]
        "NUMPAD7", // [103]
        "NUMPAD8", // [104]
        "NUMPAD9", // [105]
        "MULTIPLY", // [106]
        "ADD", // [107]
        "SEPARATOR", // [108]
        "SUBTRACT", // [109]
        "DECIMAL", // [110]
        "DIVIDE", // [111]
        "F1", // [112]
        "F2", // [113]
        "F3", // [114]
        "F4", // [115]
        "F5", // [116]
        "F6", // [117]
        "F7", // [118]
        "F8", // [119]
        "F9", // [120]
        "F10", // [121]
        "F11", // [122]
        "F12", // [123]
        "F13", // [124]
        "F14", // [125]
        "F15", // [126]
        "F16", // [127]
        "F17", // [128]
        "F18", // [129]
        "F19", // [130]
        "F20", // [131]
        "F21", // [132]
        "F22", // [133]
        "F23", // [134]
        "F24", // [135]
        "", // [136]
        "", // [137]
        "", // [138]
        "", // [139]
        "", // [140]
        "", // [141]
        "", // [142]
        "", // [143]
        "NUM_LOCK", // [144]
        "SCROLL_LOCK", // [145]
        "WIN_OEM_FJ_JISHO", // [146]
        "WIN_OEM_FJ_MASSHOU", // [147]
        "WIN_OEM_FJ_TOUROKU", // [148]
        "WIN_OEM_FJ_LOYA", // [149]
        "WIN_OEM_FJ_ROYA", // [150]
        "", // [151]
        "", // [152]
        "", // [153]
        "", // [154]
        "", // [155]
        "", // [156]
        "", // [157]
        "", // [158]
        "", // [159]
        "CIRCUMFLEX", // [160]
        "EXCLAMATION", // [161]
        "DOUBLE_QUOTE", // [162]
        "HASH", // [163]
        "DOLLAR", // [164]
        "PERCENT", // [165]
        "AMPERSAND", // [166]
        "UNDERSCORE", // [167]
        "OPEN_PAREN", // [168]
        "CLOSE_PAREN", // [169]
        "ASTERISK", // [170]
        "PLUS", // [171]
        "PIPE", // [172]
        "HYPHEN_MINUS", // [173]
        "OPEN_CURLY_BRACKET", // [174]
        "CLOSE_CURLY_BRACKET", // [175]
        "TILDE", // [176]
        "", // [177]
        "", // [178]
        "", // [179]
        "", // [180]
        "VOLUME_MUTE", // [181]
        "VOLUME_DOWN", // [182]
        "VOLUME_UP", // [183]
        "", // [184]
        "", // [185]
        "SEMICOLON", // [186]
        "EQUALS", // [187]
        "COMMA", // [188]
        "MINUS", // [189]
        "PERIOD", // [190]
        "SLASH", // [191]
        "BACK_QUOTE", // [192]
        "", // [193]
        "", // [194]
        "", // [195]
        "", // [196]
        "", // [197]
        "", // [198]
        "", // [199]
        "", // [200]
        "", // [201]
        "", // [202]
        "", // [203]
        "", // [204]
        "", // [205]
        "", // [206]
        "", // [207]
        "", // [208]
        "", // [209]
        "", // [210]
        "", // [211]
        "", // [212]
        "", // [213]
        "", // [214]
        "", // [215]
        "", // [216]
        "", // [217]
        "", // [218]
        "OPEN_BRACKET", // [219]
        "BACK_SLASH", // [220]
        "CLOSE_BRACKET", // [221]
        "QUOTE", // [222]
        "", // [223]
        "META", // [224]
        "ALTGR", // [225]
        "", // [226]
        "WIN_ICO_HELP", // [227]
        "WIN_ICO_00", // [228]
        "", // [229]
        "WIN_ICO_CLEAR", // [230]
        "", // [231]
        "", // [232]
        "WIN_OEM_RESET", // [233]
        "WIN_OEM_JUMP", // [234]
        "WIN_OEM_PA1", // [235]
        "WIN_OEM_PA2", // [236]
        "WIN_OEM_PA3", // [237]
        "WIN_OEM_WSCTRL", // [238]
        "WIN_OEM_CUSEL", // [239]
        "WIN_OEM_ATTN", // [240]
        "WIN_OEM_FINISH", // [241]
        "WIN_OEM_COPY", // [242]
        "WIN_OEM_AUTO", // [243]
        "WIN_OEM_ENLW", // [244]
        "WIN_OEM_BACKTAB", // [245]
        "ATTN", // [246]
        "CRSEL", // [247]
        "EXSEL", // [248]
        "EREOF", // [249]
        "PLAY", // [250]
        "ZOOM", // [251]
        "", // [252]
        "PA1", // [253]
        "WIN_OEM_CLEAR", // [254]
        "" // [255]
      ];
    
      for(let i = 1; i < 5; i++)
      {
          var b = document.createElement("div"),
          c = {
              marginBottom: "100px",
              marginLeft: String(i * 100 + (i-1)*10) + "px",
              background: "transparent",
              width: "100px",
              height: "100px",
              position: "fixed",
              lineHeight: "100px",
              bottom: "0",
              fontSize: "x-large",
              color: "black",
              fontSize: "50pt",
              fontFamily: "Retron2000",
              textAlign: "center",
          };
          Object.keys(c).forEach(function (a) {
              b.style[a] = c[a];
          });
          b.setAttribute("name", String(i))
          document.body.appendChild(b);
      }
      
      document.addEventListener("keydown", function (event) {
          document.getElementById(event.keyCode).style.backgroundColor = "rgba("+oncolor+","+trans+")" 
       });
  
      document.addEventListener("keyup", function (event) {
          document.getElementById(event.keyCode).style.background ="transparent"
      });
      
      function Assign(a,b,c,d)
      {
          document.getElementsByName("1")[0].id = a
          document.getElementsByName("2")[0].id = b
          document.getElementsByName("3")[0].id = c
          document.getElementsByName("4")[0].id = d
      }
      
      g = globalThis.Keystrokes = {
          opacity: function(a)
          {
             trans = a;
          },
          onColor: function(r,g,b)
          {
              oncolor = String(r)+","+String(g)+","+String(b);
          },
          offColor: function(r,g,b)
          {
              offcolor = String(r)+","+String(g)+","+String(b);
          },
          font: function(a)
          {
              document.getElementsByName("1")[0].style.fontFamily = String(a);
              document.getElementsByName("2")[0].style.fontFamily = String(a);
              document.getElementsByName("3")[0].style.fontFamily = String(a);
              document.getElementsByName("4")[0].style.fontFamily = String(a);
          },
          style: function(a,s,o)
          {
          	document.getElementsByName(String(a))[0].style[s] = o;
          },
          move: function(a, x, y)
          {
          	document.getElementsByName(String(a))[0].style.marginLeft = String(x) + "px";
          	document.getElementsByName(String(a))[0].style.marginBottom = String(y) + "px";
          },
          setKeys: function(a,b,c,d)
          {
              Assign(a,b,c,d)
              document.getElementsByName("1")[0].innerText = keyboardMap[a]
              document.getElementsByName("2")[0].innerText = keyboardMap[b]
              document.getElementsByName("3")[0].innerText = keyboardMap[c]
              document.getElementsByName("4")[0].innerText = keyboardMap[d]
          }
      }
      g.move(4,100,100)
      g.move(2,100,0)
      g.move(3,200,0)
      g.move(1,0,0)
      g.font('Acme')
      g.setKeys(74,75,76,73)
})();
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

  let notify = (text, title = "yooooo", image = "./speedrunner.png") => {
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
      ovoTasTools.timescale = 0.2
        notify("timescale set to 0.2");
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
