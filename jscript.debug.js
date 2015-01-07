/**
 * Created by ryan on 2015/1/6.
 */
if(typeof jscript == 'undefined'){
    jscript = function(){

    }
}

jscript.debug = function() { }

jscript.debug.enumProps = function(inObj){
    for(i in inObj){
        prop += i + " = " + inObj[i] + '\n';
    }

    alert(prop);
}

jscript.debug.DivLogger = function() {
    this.LEVEL_TRACE = 1;
    this.LEVEL_DEBUG = 2;
    this.LEVEL_INFO = 3;
    this.LEVEL_WARN = 4;
    this.LEVEL_ERROR = 5;
    this.LEVEL_FATAL = 6;

    this.LEVEL_TRACE_COLOR = "a0a000";
    this.LEVEL_DEBUG_COLOR = "a0a000";
    this.LEVEL_INFO_COLOR = "a0a000";
    this.LEVEL_WARN_COLOR = "a0a000";
    this.LEVEL_ERROR_COLOR = "a0a000";
    this.LEVEL_FATAL_COLOR = "a0a000";

    this.logLevel = 3;
    this.targetDiv = null;

    this.setLevel = function (inLevel) {
        this.logLevel = inLevel;
    }

    this.setTargetDiv = function (inDiv) {
        this.targetDiv = inDiv;
        this.targetDiv.innerHTML = "";
    }

    this.shouldBeLogged = function (inLevel) {
        if (inLevel >= this.logLevel) {
            return true;
        }
        else {
            return false;
        }
    }


    /**
     * This function logs messages at TRACE level.
     *
     * @param inMessage The message to log.
     */
    this.trace = function (inMessage) {

        if (this.shouldBeLogged(this.LEVEL_TRACE) && this.targetDiv) {
            this.targetDiv.innerHTML +=
                "<div style='color:#" + this.LEVEL_TRACE_COLOR + ";'>" +
                "[TRACE] " + inMessage + "</div>";
        }

    } // End trace().


    /**
     * This function logs messages at DEBUG level.
     *
     * @param inMessage The message to log.
     */
    this.debug = function (inMessage) {

        if (this.shouldBeLogged(this.LEVEL_DEBUG) && this.targetDiv) {
            this.targetDiv.innerHTML +=
                "<div style='color:#" + this.LEVEL_DEBUG_COLOR + ";'>" +
                "[DEBUG] " + inMessage + "</div>";
        }

    } // End debug().


    /**
     * This function logs messages at INFO level.
     *
     * @param inMessage The message to log.
     */
    this.info = function (inMessage) {

        if (this.shouldBeLogged(this.LEVEL_INFO) && this.targetDiv) {
            this.targetDiv.innerHTML +=
                "<div style='color:#" + this.LEVEL_INFO_COLOR + ";'>" +
                "[INFO] " + inMessage + "</div>";
        }

    } // End info().


    /**
     * This function logs messages at WARN level.
     *
     * @param inMessage The message to log.
     */
    this.warn = function (inMessage) {

        if (this.shouldBeLogged(this.LEVEL_WARN) && this.targetDiv) {
            this.targetDiv.innerHTML +=
                "<div style='color:#" + this.LEVEL_WARN_COLOR + ";'>" +
                "[WARN] " + inMessage + "</div>";
        }

    } // End warn().


    /**
     * This function logs messages at ERROR level.
     *
     * @param inMessage The message to log.
     */
    this.error = function (inMessage) {

        if (this.shouldBeLogged(this.LEVEL_ERROR) && this.targetDiv) {
            this.targetDiv.innerHTML +=
                "<div style='color:#" + this.LEVEL_ERROR_COLOR + ";'>" +
                "[ERROR] " + inMessage + "</div>";
        }

    } // End error().


    /**
     * This function logs messages at FATAL level.
     *
     * @param inMessage The message to log.
     */
    this.fatal = function (inMessage) {

        if (this.shouldBeLogged(this.LEVEL_FATAL) && this.targetDiv) {
            this.targetDiv.innerHTML +=
                "<div style='color:#" + this.LEVEL_FATAL_COLOR + ";'>" +
                "[FATAL] " + inMessage + "</div>";
        }


    }
}
