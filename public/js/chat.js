document.akuchat = {
    setframesize: (e) => {
        document.getElementById('frame').style.height = window.innerHeight + 'px';
    }
}

window.onresize = (e) => {
    document.akuchat.setframesize.call(document.akuchat,e);
}

document.akuchat.setframesize.call(document.akuchat);