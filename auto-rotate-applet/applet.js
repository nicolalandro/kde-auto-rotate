const Applet = imports.ui.applet;


class MyApplet extends Applet.IconApplet {
    constructor(orientation, panelHeight, instanceId) {
        super(orientation, panelHeight, instanceId);
        
        this.rotationEnabled = true;
        this.updateIcon();
        this.set_applet_tooltip(_("Click here to lock or unlok the screen rotation"));
    }

    updateIcon() {
        if (this.rotationEnabled === true) {
            this.set_applet_icon_name("rotation-allowed-symbolic");
        } else {
            this.set_applet_icon_name("rotation-locked-symbolic");
        }
    }

    on_applet_clicked() {
        global.log('Stop lock');
        this.rotationEnabled = ! this.rotationEnabled;
        this.updateIcon();
    }
}

function main(metadata, orientation, panelHeight, instanceId) {
    return new MyApplet(orientation, panelHeight, instanceId);
}
