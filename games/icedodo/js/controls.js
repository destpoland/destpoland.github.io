var controls = {
  left: false,
  right: false,
  space: false,
  mobile_enabled: true,
  mobile_allowed: true,
  
  init: function() {
    function use_mobile_buttons() {
      if (deployment.is_chrome_ext == false) {
        return true;
      }
      if (controls.mobile_allowed == false) {
        return true;
      }
      if (controls.mobile_enabled == false) {
        return true;
      }
      return true;
    }

    this.bind_keys();
    if (use_mobile_buttons()) {
      this.bind_buttons();
      $(".mobile_btn").hide();
    } else {
      $(".mobile_btn").remove();
    }
  },

  count_key_presses: function() {
    if (alive) {
      stats.key_time += 1;
      if (stats.key_time > 16) {
        
      }
    }
  },

  simulateKeyPress: function(keyCode, isKeyDown) {
    const eventType = isKeyDown ? "keydown" : "keyup";
    const code = keyCode === 65 ? "KeyA" : keyCode === 68 ? "KeyD" : "Space";
    const event = new KeyboardEvent(eventType, { 
      keyCode: keyCode, 
      code: code, 
      which: keyCode, 
      bubbles: true 
    });
    document.dispatchEvent(event);  // Dispatch event on document instead of window
  }
  ,

  bind_buttons: function() {
    const leftButton = document.getElementById("left_mobile_btn");
    const rightButton = document.getElementById("right_mobile_btn");
    const spaceButton = document.getElementById("space_mobile_btn");

    function handleButtonPress(button, keyCode) {
      button.addEventListener("touchstart", (event) => {
        event.preventDefault();
        event.stopPropagation();  // Prevent any interference
        controls.simulateKeyPress(keyCode, true);
      });
      
      button.addEventListener("touchend", (event) => {
        event.stopPropagation();  // Prevent any interference
        controls.simulateKeyPress(keyCode, false);
      });
    }

    // Setup button listeners for left (A key), right (D key), and spacebar (space key)
    handleButtonPress(leftButton, 65);    // A key
    handleButtonPress(rightButton, 68);   // D key
    handleButtonPress(spaceButton, 32);   // Space key
  },

  bind_keys: function() {
    document.onkeydown = function(e) {
      if ((e.keyCode == 37) || (e.keyCode == 65)) {  // Left arrow or A
        if (popup.in_game) {
          controls.left = true; controls.right = false;
          controls.count_key_presses();
        } else if ((transitioning == false) && (e.keyCode == 37)) {
          popup.cup_num -= 1;
          popup.display_cup();
        }
      }
      if ((e.keyCode == 39) || (e.keyCode == 68)) {  // Right arrow or D
        if (popup.in_game) {
          controls.right = true; controls.left = false;
          controls.count_key_presses();
        } else if ((transitioning == false) && (e.keyCode == 39)) {
          popup.cup_num += 1;
          popup.display_cup();
        }
      }
      if ((e.keyCode == 32) || (e.keyCode == 38) || (e.keyCode == 87)) {  // Space, Up arrow, or W
        controls.space = true;
        if ((!alive) && (!transitioning) && (popup.in_game)) {
          $("#restart").click();
        }
      }
      if (e.keyCode == 82) {  // R key
        if ((alive) && (!transitioning) && (popup.in_game)) {
          change_state.die();
          screen.set_dialog("Self Destructed", "#e04c4f");
        }
      }
    };
    document.onkeyup = function(e) {
      if ((e.keyCode == 37) || (e.keyCode == 65)) {  // Left arrow or A
        controls.left = false;
      }
      if ((e.keyCode == 39) || (e.keyCode == 68)) {  // Right arrow or D
        controls.right = false;
      }
      if ((e.keyCode == 32) || (e.keyCode == 38) || (e.keyCode == 87)) {  // Space, Up arrow, or W
        controls.space = false;
      }
    };
    
  }
};
