import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import { SITE } from '../data';

export default function Terms() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb"><Link to="/">Home</Link><span>/</span><span>Terms &amp; Conditions</span></nav>
          <FadeIn>
            <p className="overline">Legal</p>
            <h1 className="headline-lg" style={{ marginBottom: 10 }}>Terms &amp; Conditions</h1>
            <p className="section-sub">Last updated: June 2026</p>
          </FadeIn>
        </div>
      </section>

      <div className="legal-body">
        <h2>1. Agreement to Terms</h2>
        <p>By accessing and using the website egc-me.com, you accept and agree to be bound by these Terms and Conditions and our Privacy Policy. These terms apply to all visitors, users, and others who access or use the website. If you do not agree with any part of these terms, you may not access the website.</p>

        <h2>2. Use of the Website</h2>
        <p>You may use this website for lawful purposes only. You agree not to use the website in any way that violates applicable local, national, or international law or regulation, or in any way that is harmful, fraudulent, or deceptive.</p>
        <ul>
          <li>Do not attempt to gain unauthorised access to any part of the website or its related systems</li>
          <li>Do not transmit any unsolicited commercial communications</li>
          <li>Do not use the website to collect or harvest personal data without consent</li>
          <li>Do not interfere with the proper working of the website</li>
        </ul>
        <p>We reserve the right to terminate or restrict your access to the website at any time without notice if we believe you have violated these terms.</p>

        <h2>3. Intellectual Property</h2>
        <p>All content on this website — including text, graphics, logos, images, and software — is the property of Engineering Grouping Co. or its content suppliers and is protected under applicable intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content on this site without our express written consent.</p>
        <p>The EGC name, logo, and related marks are trademarks of Engineering Grouping Co. Unauthorised use of these marks is strictly prohibited.</p>

        <h2>4. Disclaimer of Warranties</h2>
        <p>This website is provided on an "as is" and "as available" basis without any warranties of any kind, either express or implied. We do not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components. We make no warranties regarding the accuracy, completeness, or suitability of any information on the website.</p>

        <h2>5. Limitation of Liability</h2>
        <p>To the fullest extent permitted by applicable law, Engineering Grouping Co. shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, this website or its content. Our total liability for any claim arising from your use of the website shall not exceed SAR 1,000.</p>

        <h2>6. Third-Party Links</h2>
        <p>Our website may contain links to third-party websites including our ERP Supplier Portal and social media platforms. These links are provided for your convenience only. We have no control over the content of those sites and accept no responsibility for them or for any loss or damage that may arise from your use of them.</p>

        <h2>7. Privacy</h2>
        <p>Your use of this website is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our <Link to="/privacy-policy" style={{ color: 'var(--blue)', fontWeight: 600 }}>Privacy Policy</Link> to understand our practices.</p>

        <h2>8. Changes to Terms</h2>
        <p>We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website after any changes constitutes your acceptance of the new terms. We encourage you to review these Terms periodically.</p>

        <h2>9. Governing Law</h2>
        <p>These Terms and Conditions are governed by and construed in accordance with the laws of the Kingdom of Saudi Arabia. Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the courts of Riyadh, Kingdom of Saudi Arabia.</p>

        <h2>10. Contact Us</h2>
        <p>If you have any questions about these Terms and Conditions, please contact us:</p>
        <p>
          Engineering Grouping Co. (EGC)<br />
          {SITE.address}<br />
          Email: {SITE.email}<br />
          Phone: {SITE.phone}
        </p>
      </div>
    </>
  );
}
