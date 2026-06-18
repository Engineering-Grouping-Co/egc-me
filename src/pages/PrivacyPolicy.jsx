import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import { SITE } from '../data';

export default function PrivacyPolicy() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb"><Link to="/">Home</Link><span>/</span><span>Privacy Policy</span></nav>
          <FadeIn>
            <p className="overline">Legal</p>
            <h1 className="headline-lg" style={{ marginBottom: 10 }}>Privacy Policy</h1>
            <p className="section-sub">Last updated: June 2026</p>
          </FadeIn>
        </div>
      </section>

      <div className="legal-body">
        <h2>1. Introduction</h2>
        <p>Engineering Grouping Co. ("EGC", "we", "our", or "us") is committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website egc-me.com or contact us directly.</p>
        <p>Please read this policy carefully. If you disagree with its terms, please discontinue use of our website. By accessing our site, you consent to the collection and use of information as described here.</p>

        <h2>2. Information We Collect</h2>
        <p>We may collect information you voluntarily provide to us when you complete our contact form, including your name, company, email address, phone number, and project details. We do not collect sensitive personal data such as financial information, government IDs, or health data through this website.</p>
        <p>We may also collect non-personal information automatically through cookies and analytics tools, including browser type, device type, pages visited, time spent on pages, and referring URLs.</p>

        <h2>3. How We Use Your Information</h2>
        <p>We use the information we collect to respond to your enquiries, provide information about our services, follow up on project or supplier discussions, and improve our website and communications. We do not use your information for automated decision-making or profiling.</p>
        <ul>
          <li>Respond to contact form submissions and enquiries</li>
          <li>Provide information about EGC's services and divisions</li>
          <li>Process supplier or vendor registration enquiries</li>
          <li>Send follow-up communications relevant to your enquiry</li>
          <li>Improve website performance and user experience</li>
        </ul>

        <h2>4. Cookies</h2>
        <p>Our website may use cookies — small data files stored on your device — to improve your browsing experience and understand how visitors use the site. You can control cookie settings through your browser preferences. Disabling cookies may affect certain website functionality.</p>
        <p>We use analytics cookies to understand aggregate traffic patterns. We do not use cookies for advertising or cross-site tracking.</p>

        <h2>5. Third-Party Services</h2>
        <p>Our website may contain links to third-party platforms including our ERP Supplier Portal (erp.egc-me.com) and LinkedIn. Each of these platforms has its own privacy policy, and we encourage you to review them. We are not responsible for the content or privacy practices of third-party sites.</p>

        <h2>6. Data Retention</h2>
        <p>We retain personal information submitted through contact forms for as long as is necessary to respond to your enquiry and for legitimate business purposes, unless a longer retention period is required by law. Supplier registration data submitted through the ERP portal is governed by the portal's own data policy.</p>

        <h2>7. Your Rights</h2>
        <p>Depending on your location and applicable law, you may have the right to access, correct, or delete personal information we hold about you. To exercise any of these rights, please contact us using the details below.</p>

        <h2>8. Data Security</h2>
        <p>We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>

        <h2>9. Contact Us</h2>
        <p>If you have questions or concerns about this Privacy Policy or how we handle your personal information, please contact us:</p>
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
