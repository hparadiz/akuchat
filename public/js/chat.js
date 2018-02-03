document.akuchat = {
    setframesize: (e) => {
        document.getElementById('frame').style.height = window.innerHeight + 'px';
    },
    onReady: function() {
        var ctx = document.akuchat;
        ctx.bindPage.call(ctx);
    },
    bindPage: function() {
        $('#editable').keypress(this.messageKeyPress);
        $('#editable').blur(this.messageBlur);
        $('#editable').focus(this.messageFocus);
        $('#editable').click(this.messageClick);
    },
    messageKeyPress: function(e) {
        var ctx = document.akuchat;
        if(e.isTrigger) {
            e.preventDefault();
            console.log('ctrl+enter after trigger');
            document.execCommand("insertHTML", false, '<br>');
            return;
        }
        if(e.which == 13) {
            if(e.ctrlKey == false) {
                ctx.sendMessage.call(ctx);
                e.preventDefault();
                e.stopPropagation();
            }
            else {
                
                e.which = 13;
                e.ctrlKey = true;
                console.log('ctrl+enter before trigger');
                $('#editable').trigger(e);
            }
        }
    },
    messageClick: function(e) {
        
        e.preventDefault();
        $(this).attr('contenteditable', 'true');
        //attrs.$addClass('active');
        $(this).focus();
    },
    messageBlur: function(e) {
        $(this).attr('contenteditable', 'false');
    },
    messageFocus: function(e) {
        // selects all on focus
        /*var range = document.createRange();
        var selection = window.getSelection();
        range.selectNodeContents( this );
        selection.removeAllRanges();
        selection.addRange(range);*/
    },
    sendMessage: function() {
        console.log('Send message');
    }
}

window.onresize = (e) => {
    document.akuchat.setframesize.call(document.akuchat,e);
}

document.akuchat.setframesize.call(document.akuchat);
$(document).ready(document.akuchat.onReady);