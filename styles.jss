* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --accent-color: #f5576c;
    --light-bg: #f7f7ff;
    --dark-text: #2d3748;
    --light-text: #718096;
    --white: #ffffff;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: var(--dark-text);
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Navigation Bar */
.navbar {
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    padding: 1rem 0;
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.navbar .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 1.8rem;
    font-weight: bold;
    color: var(--white);
    letter-spacing: 2px;
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-links a {
    color: var(--white);
    text-decoration: none;
    transition: opacity 0.3s;
}

.nav-links a:hover {
    opacity: 0.8;
}

/* Hero Section */
.hero {
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    color: var(--white);
    padding: 100px 20px;
    text-align: center;
}

.hero h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
}

.hero p {
    font-size: 1.3rem;
    margin-bottom: 2rem;
}

.cta-button {
    display: inline-block;
    background: var(--accent-color);
    color: var(--white);
    padding: 12px 30px;
    border-radius: 50px;
    text-decoration: none;
    font-weight: bold;
    transition: transform 0.3s, box-shadow 0.3s;
}

.cta-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(245, 87, 108, 0.4);
}

/* Services Section */
.services {
    padding: 80px 20px;
    background: var(--light-bg);
}

.services h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: var(--dark-text);
}

.service-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.service-card {
    background: var(--white);
    padding: 2rem;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s;
}

.service-card:hover {
    transform: translateY(-5px);
}

.service-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.service-card h3 {
    color: var(--primary-color);
    margin-bottom: 1rem;
}

/* Portfolio Section */
.portfolio {
    padding: 80px 20px;
}

.portfolio h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: var(--dark-text);
}

.portfolio-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.portfolio-item {
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
}

.portfolio-item:hover {
    transform: scale(1.05);
}

.portfolio-image {
    height: 200px;
    width: 100%;
}

.portfolio-item h3 {
    padding: 1.5rem 1rem 0.5rem;
}

.portfolio-item p {
    padding: 0 1rem 1rem;
    color: var(--light-text);
    font-size: 0.9rem;
}

/* Training Section */
.training {
    background: var(--light-bg);
    padding: 80px 20px;
}

.training h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.section-subtitle {
    text-align: center;
    color: var(--light-text);
    margin-bottom: 3rem;
}

.training-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
}

.training-card {
    background: var(--white);
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
    border-left: 4px solid var(--primary-color);
}

.training-card h3 {
    color: var(--primary-color);
    margin-bottom: 1rem;
}

.training-card ul {
    list-style: none;
    margin-bottom: 1rem;
}

.training-card li {
    color: var(--light-text);
    padding: 0.5rem 0;
    padding-left: 1.5rem;
    position: relative;
}

.training-card li::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: var(--accent-color);
    font-weight: bold;
}

.duration {
    background: var(--light-bg);
    padding: 0.75rem;
    border-radius: 5px;
    font-size: 0.9rem;
    color: var(--light-text);
}

/* About Section */
.about {
    padding: 80px 20px;
    text-align: center;
}

.about h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
}

.about p {
    max-width: 800px;
    margin: 0 auto 3rem;
    color: var(--light-text);
    font-size: 1.1rem;
}

.about-stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    max-width: 800px;
    margin: 0 auto;
}

.stat {
    padding: 2rem;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    color: var(--white);
    border-radius: 10px;
}

.stat h3 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
}

/* Contact Section */
.contact {
    background: var(--light-bg);
    padding: 80px 20px;
}

.contact h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.contact > .container > p {
    text-align: center;
    color: var(--light-text);
    margin-bottom: 3rem;
}

.contact-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    max-width: 1000px;
    margin: 0 auto;
}

.contact-info h3 {
    color: var(--primary-color);
    margin-bottom: 1.5rem;
}

.contact-info p {
    margin-bottom: 1rem;
    color: var(--light-text);
}

.contact-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.contact-form input,
.contact-form textarea {
    padding: 1rem;
    border: 1px solid #e2e8f0;
    border-radius: 5px;
    font-family: inherit;
}

.contact-form input:focus,
.contact-form textarea:focus {
    outline: none;
    border-color: var(--primary-color);
}

.submit-button {
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    color: var(--white);
    padding: 1rem;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.3s;
}

.submit-button:hover {
    transform: translateY(-2px);
}

/* Footer */
.footer {
    background: var(--dark-text);
    color: var(--white);
    padding: 2rem;
    text-align: center;
}

.footer a {
    color: var(--primary-color);
    text-decoration: none;
}

@media (max-width: 768px) {
    .hero h1 {
        font-size: 2rem;
    }

    .contact-content {
        grid-template-columns: 1fr;
    }

    .nav-links {
        gap: 1rem;
        font-size: 0.9rem;
    }
}
