const Applet = imports.ui.applet;
const Util = imports.misc.util;

function MyApplet(orientation, panel_height, instance_id) {
    this._init(orientation, panel_height, instance_id);
}

MyApplet.prototype = {
    __proto__: Applet.IconApplet.prototype,

    _init: function(orientation, panel_height, instance_id) {
        Applet.IconApplet.prototype._init.call(this, orientation, panel_height, instance_id);
        
        //this.rotation_enabled = true;
        this.set_applet_icon_name("rotation-allowed-symbolik");
        this.set_applet_tooltip(_("Click here to lock/unlok the screen rotation"));
    },

    on_applet_clicked: () => {
        this.rotation_enabled = ! this.rotation_enabled;
        if this.rotation_enabled === true {
            this.set_applet_icon_name("rotation-allowed-symbolik");
        } else {
            this.set_applet_icon_name("rotation-locked-symbolik");
        }
    }
};

function main(metadata, orientation, panel_height, instance_id) {
    return new MyApplet(orientation, panel_height, instance_id);
}

