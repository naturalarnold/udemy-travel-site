import '../styles/styles.css';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';

new RevealOnScroll(document.querySelectorAll(".feature-item"), 75);
new RevealOnScroll(document.querySelectorAll(".testimonial-item"), 65);

new Modal();

let mobileMenu = new MobileMenu();
let stickyHeader = new StickyHeader();

if (module.hot) {
    module.hot.accept();
}