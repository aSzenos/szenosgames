function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}
function openLink(url, newTab = false) {
    if (newTab) {
        window.open(url, '_blank');
    } else {
        window.location.href = url;
    }
}
function handleNav(event, sectionId) {
    const isIndex =
        window.location.pathname.endsWith('index.html') ||
        window.location.pathname === '/' ||
        window.location.pathname === '';

    if (isIndex) {
        event.preventDefault();
        scrollToSection(sectionId);
    }
    else{
        event.preventDefault();
        window.location.href = `index.html#${sectionId}`;
    }
}