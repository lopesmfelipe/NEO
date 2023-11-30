function expandSidebar() {
    document.querySelector('.sidebar').style.width = '200px';
    document.querySelector('.content').style.marginRight = '220px';
}

function collapseSidebar() {
    document.querySelector('.sidebar').style.width = '60px';
    document.querySelector('.content').style.marginRight = '80px';
}