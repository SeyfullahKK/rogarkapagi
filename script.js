document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    
    mobileMenuToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
        
        const spans = this.querySelectorAll('span');
        if (!mobileMenu.classList.contains('hidden')) {
            spans[0].style.transform = 'rotate(45deg) translateY(8px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
    
    const navLinks = document.querySelectorAll('#navMenu a, #mobileMenu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                if (!mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                    const spans = mobileMenuToggle.querySelectorAll('span');
                    spans[0].style.transform = 'none';
                    spans[1].style.opacity = '1';
                    spans[2].style.transform = 'none';
                }
            }
        });
    });
    
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.classList.add('shadow-2xl');
            header.classList.remove('shadow-lg');
        } else {
            header.classList.add('shadow-lg');
            header.classList.remove('shadow-2xl');
        }
    });
    
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                entry.target.style.opacity = '1';
            }
        });
    }, observerOptions);
    
    const animateElements = document.querySelectorAll('.group');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
    
    // Hero Slider with Background Images
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    
    // Initialize first slide
    if (slides.length > 0) {
        slides.forEach((slide, index) => {
            const bgImage = slide.getAttribute('data-bg');
            if (bgImage) {
                slide.style.backgroundImage = `url('${bgImage}')`;
            }
            if (index === 0) {
                slide.classList.add('active');
            }
        });
    }
    
    // Auto slide
    function nextSlide() {
        if (slides.length > 1) {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }
    }
    
    // Start auto sliding
    if (slides.length > 1) {
        setInterval(nextSlide, 5000);
    }
});

const productDetails = {
    'desenli-parke': {
        title: 'Desenli Parke Taşı',
        description: 'Bahçenize estetik ve şık bir görünüm kazandıran desenli parke taşlarımız, yüksek kaliteli malzemelerden üretilmektedir.',
        features: [
            'Farklı renk seçenekleri',
            'Dayanıklı ve uzun ömürlü',
            'Kolay temizlik ve bakım',
            'Donma-çözülme direnci',
            'Kaymaz yüzey'
        ],
        contact: 'Güncel stok ve m² fiyatları için: +90 542 650 67 64'
    },
    'altigen-karo': {
        title: 'Altıgen Karo Taşı',
        description: 'Pres makinasından tek tek çıkan, el emeği ile üretilen altıgen karo taşlarımız, mekanlarınıza özgün bir görünüm katar.',
        features: [
            'El emeği üretim',
            'Özel tasarım',
            'Yüksek dayanım',
            'Estetik görünüm',
            'Çevre dostu üretim'
        ],
        contact: 'Güncel m² fiyatı için: +90 542 650 67 64'
    },
    'bordur': {
        title: 'Belediye Tipi Bordür',
        description: 'Standart ölçülerde üretilen belediye tipi bordürlerimiz, yol ve kaldırım uygulamalarında güvenle kullanılabilir.',
        features: [
            'TSE standartlarına uygun',
            'Yüksek mukavemet',
            'Hava şartlarına dayanıklı',
            'Standart ve özel ölçüler',
            'Toplu sipariş imkanı'
        ],
        contact: 'Fiyat bilgisi için: +90 542 650 67 64'
    },
    'dekoratif': {
        title: 'Dekoratif Yürüyüş Yolu',
        description: 'Sulu döküm tekniği ile üretilen dekoratif taşlar, çim taşları ve bordürler ile mekanlarınızı güzelleştirin.',
        features: [
            'Sulu döküm teknolojisi',
            'Çeşitli desen alternatifleri',
            'Çim taşı uygulamaları',
            'Yürüyüş yolu tasarımları',
            'Peyzaj uyumlu ürünler'
        ],
        contact: 'Stok ve nakliye bilgisi: +90 542 650 67 64'
    },
    'rogar': {
        title: 'Rögar Sistemleri',
        description: 'Çok yönlü rögar tabanları, yükseltmeler ve kapaklar. Her ebatta rögar imalatı yapmaktayız.',
        features: [
            '5-50 cm yükseltme seçenekleri',
            'T tipi ve düz geçişler',
            'Sağ-sol dönüş aparatları',
            'Kapak dahil komple sistem',
            'Özel ebat üretim imkanı'
        ],
        contact: 'Stok ve fiyat bilgisi: +90 542 650 67 64'
    },
    'saksi': {
        title: 'Renkli Beton Saksılar',
        description: 'Wash beton tekniği ile üretilen renkli saksılar ve dekoratif ürünler.',
        features: [
            'Çeşitli renk alternatifleri',
            'Wash beton teknolojisi',
            'Dayanıklı ve estetik',
            'İç ve dış mekan kullanımı',
            'Özel tasarım imkanı'
        ],
        contact: 'Stok ve fiyat bilgisi: +90 542 650 67 64'
    }
};

function openModal(productId) {
    const modal = document.getElementById('productModal');
    const modalContent = document.getElementById('modalContent');
    const product = productDetails[productId];
    
    if (product) {
        modalContent.innerHTML = `
            <h2 class="text-3xl font-bold text-white mb-4">${product.title}</h2>
            <p class="text-gray-300 leading-relaxed mb-6">${product.description}</p>
            <h3 class="text-xl font-semibold text-gold mb-3">Özellikler:</h3>
            <ul class="list-disc list-inside space-y-2 mb-6">
                ${product.features.map(feature => `<li class="text-gray-300">${feature}</li>`).join('')}
            </ul>
            <div class="bg-dark-bg border border-gold/30 p-4 rounded-lg mb-6">
                <p class="text-gold font-semibold">${product.contact}</p>
            </div>
            <div class="flex gap-4">
                <a href="tel:+905426506764" class="bg-golden-gradient hover:shadow-golden text-black px-6 py-3 rounded-lg font-semibold transition-colors inline-block">
                    📞 Hemen Ara
                </a>
                <a href="https://wa.me/+905426506764" target="_blank" class="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block">
                    WhatsApp
                </a>
            </div>
        `;
        modal.classList.remove('hidden');
    }
}

function closeModal() {
    const modal = document.getElementById('productModal');
    modal.classList.add('hidden');
}

window.onclick = function(event) {
    const modal = document.getElementById('productModal');
    if (event.target == modal) {
        modal.classList.add('hidden');
    }
}