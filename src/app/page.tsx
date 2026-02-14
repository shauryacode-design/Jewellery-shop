"use client";
import Image from "next/image";

export default function Home() {
  const openWhatsApp = () => {
    const phoneNumber = "919319649564";
    const message = "Hi, I visited your website and would like to give order of sweets.";

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };
  return (
    <div className="whole">
      <main>
        <div className="hero-section" id="home">
          <div className="container">
            <div className="hero-text">
              <h3>ABC Jewellers Since 1998</h3>
              <h1>Timeless Jewellery
                Crafted for Every Celebration</h1>
              <p>From daily wear to bridal collections,
                trusted by families for over 25 years.</p>
              <div className="hero-buttons">
                <button onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}>📞 Call Now</button>
                <button onClick={openWhatsApp}>💬 WhatsApp Us</button>
              </div>
            </div>
            <div className="hero-img">
              <img src="/images/Hero-image.png" alt="" />
            </div>
          </div>
        </div>
        <div className="second-section" id="collections">
          <div className="second-heading">
            <h1>Explore Our Collections</h1>
            <p>Crafted for every occasion, tradition, and style.</p>
          </div>
          <div className="second-container">
            <div className="second-cards">
              <img src="/images/Gold-jewel.png" alt="" />
              <h3>Gold Jewellery</h3>
              <p>Classic and contemporary gold designs for every celebration.</p>
              <button onClick={openWhatsApp}>Enquire on WhatsApp</button>
            </div>
            <div className="second-cards">

              <img src="/images/Diamond-jewel.png" alt="" />
              <h3>Diamond Jewellery</h3>
              <p>Elegant diamond pieces crafted to shine for a lifetime.</p>
              <button onClick={openWhatsApp}>Enquire on WhatsApp</button>
            </div>
            <div className="second-cards">
              <img src="/images/Bride-jewel.png" alt="" />
              <h3>Bridal Collection</h3>
              <p>Exquisite bridal jewellery for your most unforgettable moments.</p>
              <button onClick={openWhatsApp}>Enquire on WhatsApp</button>
            </div>
            <div className="second-cards">
              <img src="/images/Silver-jewel.png" alt="" />
              <h3>Silver Jewellery</h3>
              <p>Lightweight and stylish designs for everyday elegance.</p>
              <button onClick={openWhatsApp}>Enquire on WhatsApp</button>
            </div>
          </div>
        </div>
        <div className="third-section" id="trust">
          <div className="third-heading">
            <h1>Why Families Trust ABC Jewellery</h1>
            <h5>Trusted craftsmanship, purity you can rely on.</h5>

          </div>
          <div className="third-container">
            <div className="third-left">
              <div className="third-card">
                <h1>BIS Hallmarked Jewellery</h1>
                <p>✔️ 100% certified gold & silver for complete peace of mind.</p>
              </div>
              <div className="third-card">
                <h1>Exquisite Craftsmanship</h1>
                <p>✔️ Handcrafted designs by skilled artisans with fine detailing.</p>
              </div>
              <div className="third-card">
                <h1>Transparent Pricing</h1>
                <p>✔️ Clear pricing with honest weight, purity, and charges.</p>
              </div>
              <div className="third-card">
                <h1>Trusted by Generations</h1>
                <p>✔️ Serving families with trust, quality, and tradition for years.</p>
              </div>
            </div>
            <div className="third-right">
              <div className="third-img">
                <img src="/images/shop-image.png" alt="" />
              </div>
              <a href="#contact" onClick={e => {
                e.preventDefault();
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}>Visit Our Store &#8594; </a>
            </div>
          </div>
        </div>
        <div className="fourth-section" id="story">
          <div className="fourth-heading">
            <h1>Our Legacy / Our Story</h1>
          </div>
          <div className="fourth-container">
            <div className="fourth-left">
              <h1>A Legacy of Trust Since 1998</h1>
              <p>For over 25 years, ABC Jewellery has been a trusted name for families seeking purity, craftsmanship, and timeless designs. From daily wear to wedding collections, every piece reflects our commitment to quality and tradition.</p>
              <div className="fourth-bullet">

                <p>•25+ Years of Excellence</p>
                <p>•10,000+ Happy Families</p>
                <p>•100% BIS Hallmarked Gold</p>
                <p>•Custom Designs Available</p>

              </div>
            </div>
            <div className="fourth-right">
              <img src="/images/Old-shop.png" alt="" />
            </div>
          </div>
        </div>
        <div className="fifth-section" id="contact">
          <div className="contact">
            <h1>Contact Us</h1>
            <div className="flourish-divider_fifth">
              <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                <path d="M 15,30 Q 20,15 30,20 Q 40,25 45,30 Q 40,35 30,40 Q 20,45 15,30 Z"
                  fill="none" stroke="#FAF7F2" strokeWidth="2" />
                <path d="M 30,10 Q 35,25 30,30 Q 25,25 30,10 Z"
                  fill="none" stroke="#FAF7F2" strokeWidth="2" />
                <path d="M 30,50 Q 25,35 30,30 Q 35,35 30,50 Z"
                  fill="none" stroke="#FAF7F2" strokeWidth="2" />
              </svg>
            </div>

            <div className="contact-info">
              <p><span className="contact-span">📞 Call:</span> 91+ 123456789</p>
              <p><span className="contact-span">🕘 Open:</span> 9 AM – 10 PM (All Days)</p>

              <button onClick={openWhatsApp}
                className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition">
                Enquire on WhatsApp
              </button>
            </div>
          </div>

          <div className="location">
            <h1>Visit Our Store</h1>
            <div className="flourish-divider_fifth">
              <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                <path d="M 15,30 Q 20,15 30,20 Q 40,25 45,30 Q 40,35 30,40 Q 20,45 15,30 Z"
                  fill="none" stroke="#FAF7F2" strokeWidth="2" />
                <path d="M 30,10 Q 35,25 30,30 Q 25,25 30,10 Z"
                  fill="none" stroke="#FAF7F2" strokeWidth="2" />
                <path d="M 30,50 Q 25,35 30,30 Q 35,35 30,50 Z"
                  fill="none" stroke="#FAF7F2" strokeWidth="2" />
              </svg>
            </div>

            <div className="map-container">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110204.75443569123!2d77.93473309708199!3d30.325402625617453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929c356c888af%3A0x4c3562c032518799!2sDehradun%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1771080805864!5m2!1sen!2sin" style={{ border: '0' }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              <p className="address">
                <strong>📍 Abc Jewellers</strong><br />
                Main Road, Near City Mall<br />
                Your City – 123456
              </p>
            </div>
          </div>
        </div>
        <footer className="footer">
          <div className="footer-container">

            {/* Brand */}
            <div className="footer-brand">
              <h2>Abc Jewellers</h2>
              <p>
                Trusted by 500+ happy customers in Dehradun
              </p>
            </div>

            {/* Quick Links */}
            <div className="footer-links">
              <h3>Quick Links</h3>
              <a href="#home">Home</a>
              <a href="#collections">Our Collections</a>
              <a href="#trust">Why Trust Us</a>
              <a href="#story">Our Story</a>
              <a href="#contact">Contact</a>
            </div>

            {/* Contact */}
            <div className="footer-contact">
              <h3>Contact</h3>
              <p>📞 +91 XXXXXXXXXX</p>
              <button
                type="button"
                className="footer-whatsapp"
                onClick={openWhatsApp}
              >
                💬 Enquire on WhatsApp
              </button>
            </div>

          </div>

          <div className="footer-bottom">
            © 2026 Abc Jewellers. All rights reserved.
          </div>
        </footer>
      </main>
    </div>
  );
}
