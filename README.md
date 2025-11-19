Belle Allure – Part 3 Web Project

Modern Fashion & Styling Website

This project is Part 3 of the Belle Allure web development series. It includes a fully functional, responsive website with enquiry forms, contact forms, navigation, gallery, product search, CTA buttons, and dynamic features powered by JavaScript.

⸻

 Project Overview

Belle Allure is a fashion-focused website built to showcase services, products, and allow customers to contact or make enquiries.
Part 3 mainly focuses on:
	•	Adding enquiry and contact forms with validation
	•	Improving page structure
	•	Adding CTA button functionality
	•	Vertical form design
	•	Navigation structure updates
	•	Lightbox, accordion, search, and tab enhancements

⸻

📂 Folder Structure
Belle-Allure/
│
├── index.html
├── about.html
├── services.html
├── products.html
├── gallery.html
├── enquiry.html
├── contact.html
│
├── style.css
│
└── js/
    └── main.js
    Key Features

1. Fully Responsive Navigation

Pages included:
	•	Home
	•	About
	•	Services
	•	Gallery
	•	Products
	•	Enquiry
	•	Contact

Navigation is consistent across all pages.

⸻

2. Vertical Enquiry Form

The enquiry form includes:
	•	Full Name
	•	Email
	•	Phone
	•	Enquiry Type
	•	Budget
	•	Preferred Date
	•	Detailed Message

Validation includes:
✔ Required fields
✔ Email format check
✔ Message length
✔ Enquiry type required

A success message appears after submission.


3. Contact Form

Includes:
	•	Name
	•	Email
	•	Type
	•	Message

Also includes JavaScript validation and a success message.


4. CTA Buttons (Call To Action)

CTA buttons work using:
document.querySelectorAll('.cta-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-target');
        if (target) window.location.href = target;
    });
});
7. Dynamic Services Section

If the services container is empty, it auto-loads services like:
	•	Custom Tailoring
	•	Exclusive Collections
	•	Personal Styling
	•	Wardrobe Consultations

⸻

8. Auto Year Update

The footer year updates automatically using JavaScript:
document.getElementById('year').textContent = new Date().getFullYear();

⸻

⚙ How to Use

1. Open the Website

Open index.html in your browser.

2. Edit Content

You can customize:
	•	Brand name
	•	Services
	•	Products
	•	Contact details
	•	Gallery images

3. Update Sitemap

When new pages are created, add them manually to your sitemap XML.

⸻

🔧 JavaScript Functions

main.js handles:
	•	Form validation
	•	Lightbox opening/closing
	•	Search filters
	•	Accordion system
	•	Tabs
	•	CTA button click actions
	•	Year auto update

⸻

🎨 Styling (CSS)

style.css controls layout and design:
	•	Navigation bar
	•	Typography
	•	Page layout
	•	Buttons
	•	Vertical form design
	•	Responsive scaling for mobile
	•	Spacing and colors

Vertical form example:
.fancy-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
}
