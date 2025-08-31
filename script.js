 const blogPosts = [
            {
                id: 1,
                title: "The Future of Web Development in 2023",
                category: "Technology",
                date: "June 15, 2023",
                readTime: "5 min read",
                excerpt: "Explore the latest trends and technologies that are shaping the future of web development this year.",
                link: "Posts/Post1(Weather).html",
                icon: "fas fa-laptop-code"
            },
            {
                id: 2,
                title: "10 Mindfulness Practices for Busy Professionals",
                category: "Lifestyle",
                date: "June 12, 2023",
                readTime: "7 min read",
                excerpt: "Discover simple yet effective mindfulness techniques to reduce stress and improve focus in your daily life.",
                link: "#",
                icon: "fas fa-spa"
            },
            {
                id: 3,
                title: "How to Build a Successful Online Business in 2023",
                category: "Business",
                date: "June 8, 2023",
                readTime: "6 min read",
                excerpt: "Learn the strategies and tools that today's most successful online entrepreneurs are using to grow their businesses.",
                link: "#",
                icon: "fas fa-chart-line"
            },
            {
                id: 4,
                title: "The Ultimate Guide to Healthy Eating Habits",
                category: "Health",
                date: "June 5, 2023",
                readTime: "8 min read",
                excerpt: "Transform your diet with these science-backed nutrition tips for a healthier lifestyle.",
                link: "#",
                icon: "fas fa-heart"
            },
            {
                id: 5,
                title: "Top Travel Destinations for Digital Nomads",
                category: "Travel",
                date: "June 3, 2023",
                readTime: "9 min read",
                excerpt: "Discover the best places around the world to work remotely while exploring new cultures.",
                link: "#",
                icon: "fas fa-globe"
            },
            {
                id: 6,
                title: "Artificial Intelligence in Everyday Life",
                category: "Technology",
                date: "May 30, 2023",
                readTime: "6 min read",
                excerpt: "How AI is transforming our daily routines and what to expect in the coming years.",
                link: "#",
                icon: "fas fa-robot"
            },
            {
                id: 7,
                title: "Minimalist Living: Less is More",
                category: "Lifestyle",
                date: "May 28, 2023",
                readTime: "7 min read",
                excerpt: "Embrace minimalism to reduce clutter, save money, and find more joy in everyday life.",
                link: "#",
                icon: "fas fa-home"
            },
            {
                id: 8,
                title: "Investment Strategies for Beginners",
                category: "Business",
                date: "May 25, 2023",
                readTime: "10 min read",
                excerpt: "Start building wealth with these proven investment strategies tailored for newcomers.",
                link: "#",
                icon: "fas fa-chart-pie"
            },
            {
                id: 9,
                title: "Yoga for Stress Relief",
                category: "Health",
                date: "May 22, 2023",
                readTime: "5 min read",
                excerpt: "Simple yoga poses and techniques to reduce stress and improve mental wellbeing.",
                link: "#",
                icon: "fas fa-spa"
            },
            {
                id: 10,
                title: "Hidden Gems of Southeast Asia",
                category: "Travel",
                date: "May 18, 2023",
                readTime: "11 min read",
                excerpt: "Explore off-the-beaten-path destinations in Southeast Asia that will take your breath away.",
                link: "#",
                icon: "fas fa-umbrella-beach"
            },
            {
                id: 11,
                title: "Blockchain Technology Explained",
                category: "Technology",
                date: "May 15, 2023",
                readTime: "8 min read",
                excerpt: "Understanding the fundamentals of blockchain and its potential beyond cryptocurrency.",
                link: "#",
                icon: "fas fa-link"
            },
            {
                id: 12,
                title: "Sustainable Living Practices",
                category: "Lifestyle",
                date: "May 12, 2023",
                readTime: "7 min read",
                excerpt: "Simple changes you can make to reduce your environmental footprint and live more sustainably.",
                link: "#",
                icon: "fas fa-leaf"
            }
        ];

        // Pagination settings
        const postsPerPage = 6;
        let currentPage = 1;

        // Mobile Menu Toggle
        const menuToggle = document.getElementById('menuToggle');
        const nav = document.getElementById('nav');
        
       // Update the existing menu toggle functionality
menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    const icon = menuToggle.querySelector('i');
    if (nav.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

        // Display posts based on current page
        function displayPosts() {
            const postsContainer = document.getElementById('posts-container');
            postsContainer.innerHTML = '';
            
            const startIndex = (currentPage - 1) * postsPerPage;
            const endIndex = startIndex + postsPerPage;
            const paginatedPosts = blogPosts.slice(startIndex, endIndex);
            
            paginatedPosts.forEach(post => {
                const postElement = document.createElement('article');
                postElement.className = 'post-card fade-in';
                postElement.innerHTML = `
                    <div class="post-img">
                        <span class="post-category">${post.category}</span>
                        <i class="${post.icon}"></i>
                    </div>
                    <div class="post-content">
                        <div class="post-meta">
                            <div><i class="far fa-calendar"></i> ${post.date}</div>
                            <div><i class="far fa-clock"></i> ${post.readTime}</div>
                        </div>
                        <h3 class="post-title">${post.title}</h3>
                        <p class="post-excerpt">${post.excerpt}</p>
                        <a href="${post.link}" class="post-read-more">
                            Read more <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                `;
                postsContainer.appendChild(postElement);
            });
            
            // Update pagination
            updatePagination();
        }

        // Create pagination controls
        function updatePagination() {
            const paginationContainer = document.getElementById('pagination');
            paginationContainer.innerHTML = '';
            
            const totalPages = Math.ceil(blogPosts.length / postsPerPage);
            
            // Previous button
            if (currentPage > 1) {
                const prevButton = document.createElement('div');
                prevButton.className = 'pagination-item';
                prevButton.innerHTML = '<i class="fas fa-chevron-left"></i>';
                prevButton.addEventListener('click', () => {
                    currentPage--;
                    displayPosts();
                    window.scrollTo({ top: document.getElementById('FeaturedLink').offsetTop - 100, behavior: 'smooth' });
                });
                paginationContainer.appendChild(prevButton);
            }
            
            // Page numbers
            for (let i = 1; i <= totalPages; i++) {
                const pageButton = document.createElement('div');
                pageButton.className = `pagination-item ${i === currentPage ? 'active' : ''}`;
                pageButton.textContent = i;
                pageButton.addEventListener('click', () => {
                    currentPage = i;
                    displayPosts();
                    window.scrollTo({ top: document.getElementById('FeaturedLink').offsetTop - 100, behavior: 'smooth' });
                });
                paginationContainer.appendChild(pageButton);
            }
            
            // Next button
            if (currentPage < totalPages) {
                const nextButton = document.createElement('div');
                nextButton.className = 'pagination-item';
                nextButton.innerHTML = '<i class="fas fa-chevron-right"></i>';
                nextButton.addEventListener('click', () => {
                    currentPage++;
                    displayPosts();
                    window.scrollTo({ top: document.getElementById('FeaturedLink').offsetTop - 100, behavior: 'smooth' });
                });
                paginationContainer.appendChild(nextButton);
            }
        }

        // Animation on scroll
        const fadeElements = document.querySelectorAll('.fade-in');
        
        const elementInView = (el) => {
            const elementTop = el.getBoundingClientRect().top;
            return elementTop <= (window.innerHeight || document.documentElement.clientHeight) - 100;
        };
        
        const displayScrollElement = (element) => {
            element.classList.add('fade-in');
        };
        
        const handleScrollAnimation = () => {
            fadeElements.forEach((el) => {
                if (elementInView(el)) {
                    displayScrollElement(el);
                }
            });
        };
        
        window.addEventListener('scroll', () => {
            handleScrollAnimation();
        });
        
        // Initial check on page load
        handleScrollAnimation();

        // Initialize the page
        displayPosts();

        // Add newsletter form validation
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const emailInput = this.querySelector('.newsletter-input');
        const email = emailInput.value.trim();
        
        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        // Here you would typically send the data to a server
        alert('Thank you for subscribing!');
        emailInput.value = '';
    });
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}