import '../styles/styles.css';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';

new RevealOnScroll(document.querySelectorAll(".feature-item"), 75);
new RevealOnScroll(document.querySelectorAll(".testimonial-item"), 65);
new MobileMenu();
new StickyHeader();
let modal;

document.querySelectorAll(".open-modal").forEach(elem => elem.addEventListener("click", e => {
    e.preventDefault();
    if (typeof modal == "undefined") {
        import(/* webpackChunkName: "modal" */ './modules/Modal').then(x => {
            modal = new x.default();
        }).catch(() => console.log("There was a problem during import of Modal.js."));
        setTimeout(() => modal.openTheModal(), 40);
    } else {
        modal.openTheModal();
    }
}))    

if (module.hot) {
    module.hot.accept();
}