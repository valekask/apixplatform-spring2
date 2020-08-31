const sameHeights = () => {
    const titles = document.body.querySelectorAll('.category h3');
    const titlesHeight = Array.from(titles, e => e.offsetHeight).sort((a, b) => b - a);

    mainContainer.style.setProperty('--new-height', `${titlesHeight[0]}px`);
}

const setActiveTab = (filter) => {
    const tabs = document.querySelector(`.other-tab a[data-filter="${filter}"]`);
    
    return tabs.parentElement.classList.add('uk-active');
}

const showCategory = (e) => {
    const category = (typeof e === 'string') ? e : e.currentTarget.dataset.filter;

    if (category === 'all') return categories.forEach((e) => e.classList.add('show'));

    const selected = Array.from(categories).filter((e) => e.dataset.category.includes(category));

    categories.forEach((e) => e.classList.remove('show'));
    selected.forEach((e) => e.classList.add('show'));
}

const mainContainer = document.body.querySelector('.monitor-category-grid');
const categories = document.body.querySelectorAll('.category');
const filters = document.body.querySelectorAll('.filter-monitors a[data-filter]');
const url = new URL(document.location);
const urlFilter = url.searchParams.get('f') ?? 'all';

filters.forEach(e => e.addEventListener('click', showCategory));
window.addEventListener('load', sameHeights);
window.addEventListener('resize', sameHeights);

showCategory(urlFilter);
setActiveTab(urlFilter);
