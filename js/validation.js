document.addEventListener('DOMContentLoaded', function() {

    // FOOTER YEAR
    const yearElement = document.getElementById('year');
    if (yearElement) yearElement.textContent = new Date().getFullYear();

    // ACCORDION
    document.querySelectorAll('.accordion-item').forEach(item => {
        const header = item.querySelector('.accordion-header');
        if (header) header.addEventListener('click', () => {
            document.querySelectorAll('.accordion-item').forEach(i => { if(i!==item)i.classList.remove('active'); });
            item.classList.toggle('active');
        });
    });

    // TABS
    document.querySelectorAll('.tab-header').forEach(header => {
        header.addEventListener('click', function() {
            const tabId = this.dataset.tab;
            if (!tabId) return;
            document.querySelectorAll('.tab-header').forEach(h => h.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            document.getElementById(tabId)?.classList.add('active');
        });
    });

    // LIGHTBOX
    const lightbox = document.querySelector('.lightbox');
    if (lightbox) {
        const lightboxImg = lightbox.querySelector('img');
        const closeBtn = lightbox.querySelector('.lightbox-close');

        document.querySelectorAll('.gallery-item img, .product img').forEach(img => {
            img.addEventListener('click', () => {
                if (lightboxImg) {
                    lightboxImg.src = img.src;
                    lightboxImg.alt = img.alt;
                    lightbox.classList.add('active');
                }
            });
        });

        if (closeBtn) closeBtn.addEventListener('click', () => lightbox.classList.remove('active'));
        lightbox.addEventListener('click', e => { if(e.target===lightbox) lightbox.classList.remove('active'); });
    }

    // SEARCH
    const gallerySearch = document.querySelector('.search-box');
    if (gallerySearch) {
        gallerySearch.addEventListener('input', function() {
            const term = this.value.toLowerCase();
            document.querySelectorAll('.gallery-item').forEach(item => {
                const alt = item.querySelector('img')?.alt.toLowerCase() || '';
                item.style.display = alt.includes(term) ? 'block' : 'none';
            });
        });
    }

    const productsSearch = document.getElementById('searchBar');
    if (productsSearch) {
        productsSearch.addEventListener('input', function() {
            const term = this.value.toLowerCase();
            document.querySelectorAll('.product').forEach(p => {
                const title = p.dataset.title?.toLowerCase() || '';
                const text = p.textContent.toLowerCase();
                p.style.display = (title.includes(term) || text.includes(term)) ? 'block' : 'none';
            });
        });
    }

    // DYNAMIC SERVICES
    const servicesList = document.querySelector('.services-list');
    if (servicesList && servicesList.children.length === 0) {
        const services = [
            {name:'Custom Tailored Fashion',description:'Personalized garments to fit your style.'},
            {name:'Exclusive Collections',description:'Limited edition pieces.'},
            {name:'Personal Styling',description:'One-on-one style guidance.'},
            {name:'Wardrobe Consultation',description:'Professional wardrobe assessment.'}
        ];
        services.forEach(s => {
            const div = document.createElement('div');
            div.className='service-item';
            div.innerHTML=`<h3>${s.name}</h3><p>${s.description}</p>`;
            servicesList.appendChild(div);
        });
    }

    // FORM SUBMISSION HANDLER
    function handleFormSubmission(e){
        e.preventDefault();
        const form = e.target;
        form.querySelectorAll('.error-message').forEach(err=>err.style.display='none');

        const name = form.querySelector('input[name="name"]')?.value.trim() || '';
        const email = form.querySelector('input[name="email"]')?.value.trim() || '';
        const type = form.querySelector('select[name="type"]')?.value || '';
        const message = form.querySelector('textarea[name="message"]')?.value.trim() || '';

        let valid = true;
        if(name===''){form.querySelector('.name-error')?.style.display='block'; valid=false;}
        if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){form.querySelector('.email-error')?.style.display='block'; valid=false;}
        if(form.querySelector('select[name="type"]') && type===''){form.querySelector('.type-error')?.style.display='block'; valid=false;}
        if(message===''){form.querySelector('.message-error')?.style.display='block'; valid=false;}

        if(valid){
            const success=form.querySelector('.success-message');
            if(success){
                success.style.display='block';
                setTimeout(()=>{form.reset(); success.style.display='none';},3000);
            }
        }
    }

    const contactForm = document.getElementById('contact-form');
    if(contactForm) contactForm.addEventListener('submit', handleFormSubmission);

    const enquiryForm = document.getElementById('enquiry-form');
    if(enquiryForm) enquiryForm.addEventListener('submit', handleFormSubmission);

    // CTA BUTTONS
    document.querySelectorAll('.cta-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.dataset.target;
            if(target) window.location.href = target;
        });
    });

});