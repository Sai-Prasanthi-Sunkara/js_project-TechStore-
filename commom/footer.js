function createFooter(){
    return`
   <footer class="footer">

    <div class="footer-container">

        <!-- Brand -->
        <div class="footer-brand">
            <img src="../images/nexora-logo.png" alt="Nexora TechStore">

            <p>
                Your trusted destination for laptops,
                accessories and modern technology.
            </p>

            <div class="footer-social">
                <a href="#"><i class="fa-brands fa-instagram"></i></a>
                <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                <a href="#"><i class="fa-brands fa-github"></i></a>
            </div>
        </div>


        <!-- Shop -->
        <div class="footer-column">
            <h3>Shop</h3>

            <a href="../products/products.html">Laptops</a>
            <a href="../products/products.html?category=accessories">Accessories</a>
            <a href="../products/products.html?category=deals">Deals</a>
        </div>


        <!-- Company -->
        <div class="footer-column">
            <h3>Company</h3>

            <a href="../home/home.html">Home</a>
            <a href="../about/about.html">About Us</a>
            <a href="../contact/contact.html">Contact</a>
        </div>


        <!-- Support -->
        <div class="footer-column">
            <h3>Support</h3>

            <a href="#">FAQ</a>
            <a href="#">Shipping & Delivery</a>
            <a href="#">Returns</a>
            <a href="#">Privacy Policy</a>
        </div>


        <!-- Contact -->
        <div class="footer-column footer-contact">
            <h3>Get in Touch</h3>

            <p><i class="fa-solid fa-location-dot"></i> Hyderabad, India</p>
            <p><i class="fa-solid fa-envelope"></i> support@nexora.com</p>
            <p><i class="fa-solid fa-phone"></i> +91 XXXXX XXXXX</p>
        </div>

    </div>


    <!-- Bottom -->
    <div class="footer-bottom">

        <p>© 2026 Nexora TechStore. All rights reserved.</p>

        <div>
            <span>Made with</span>
            <span>❤️</span>
            <span>for tech lovers</span>
        </div>

    </div>

</footer>`;
}
document.body.insertAdjacentHTML("beforeend",createFooter());