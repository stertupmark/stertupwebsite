
import { getTranslations, Language } from '@/lib/translations';

const PrivacyPage = () => {
  const t = getTranslations('en').privacyPage;

  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="prose lg:prose-xl max-w-4xl mx-auto">
          <h1>{t.title}</h1>
          <p className="text-sm text-muted-foreground">
            <strong>Effective Date:</strong> {t.effectiveDate}
            <br />
            <strong>Last Updated:</strong> {t.lastUpdated}
          </p>

          <h2>1. Introduction</h2>
          <p>{t.introduction.paragraph}</p>
          <h3>Contact Information:</h3>
          <ul>
            <li><strong>Company:</strong> {t.introduction.contact.company}</li>
            <li><strong>Location:</strong> {t.introduction.contact.location}</li>
            <li><strong>Email:</strong> <a href={`mailto:${t.introduction.contact.email}`}>{t.introduction.contact.email}</a></li>
            <li><strong>Phone:</strong> {t.introduction.contact.phone}</li>
          </ul>

          <h2>2. Information We Collect</h2>
          <h3>2.1 Personal Information</h3>
          <p>{t.infoWeCollect.personal.intro}</p>
          <ul>
            {t.infoWeCollect.personal.points.map((item: string) => <li key={item}>{item}</li>)}
          </ul>
          <h3>2.2 Automatically Collected Information</h3>
          <p>{t.infoWeCollect.automated.intro}</p>
          <ul>
            {t.infoWeCollect.automated.points.map((item: string) => <li key={item}>{item}</li>)}
          </ul>
          <h3>2.3 Business Information</h3>
          <p>{t.infoWeCollect.business.intro}</p>
          <ul>
            {t.infoWeCollect.business.points.map((item: string) => <li key={item}>{item}</li>)}
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>{t.howWeUse.intro}</p>
          <h3>3.1 Service Delivery</h3>
          <ul>
            {t.howWeUse.serviceDelivery.map((item: string) => <li key={item}>{item}</li>)}
          </ul>
          <h3>3.2 Business Operations</h3>
          <ul>
            {t.howWeUse.businessOps.map((item: string) => <li key={item}>{item}</li>)}
          </ul>
          <h3>3.3 Analytics and Improvement</h3>
          <ul>
            {t.howWeUse.analytics.map((item: string) => <li key={item}>{item}</li>)}
          </ul>

          <h2>4. Information Sharing and Disclosure</h2>
          <h3>4.1 Service Providers</h3>
          <p>{t.sharing.serviceProviders.intro}</p>
          <ul>
            {t.sharing.serviceProviders.points.map((item: string) => <li key={item}>{item}</li>)}
          </ul>
          <h3>4.2 Business Transfers</h3>
          <p>{t.sharing.businessTransfers}</p>
          <h3>4.3 Legal Requirements</h3>
          <p>{t.sharing.legal}</p>
          <h3>4.4 Consent-Based Sharing</h3>
          <p>{t.sharing.consent}</p>

          <h2>5. Data Security</h2>
          <p>{t.security.intro}</p>
          <ul>
            {t.security.points.map((item: string) => <li key={item}>{item}</li>)}
          </ul>
          <p>{t.security.outro}</p>

          <h2>6. Data Retention</h2>
          <p>{t.retention.intro}</p>
          <ul>
            {t.retention.points.map((item: string) => <li key={item}>{item}</li>)}
          </ul>
          <p>{t.retention.outro}</p>

          <h2>7. Your Rights and Choices</h2>
          <h3>7.1 Access and Correction</h3>
          <p>{t.rights.access.intro}</p>
          <ul>
            {t.rights.access.points.map((item: string) => <li key={item}>{item}</li>)}
          </ul>
          <h3>7.2 Communication Preferences</h3>
          <p>{t.rights.communication.intro}</p>
          <ul>
            {t.rights.communication.points.map((item: string) => <li key={item}>{item}</li>)}
          </ul>
          <h3>7.3 Cookies and Tracking</h3>
          <p>{t.rights.cookies.intro}</p>
          <ul>
            {t.rights.cookies.points.map((item: string) => <li key={item}>{item}</li>)}
          </ul>

          <h2>8. Third-Party Services</h2>
          <p>{t.thirdParty.intro}</p>
          <ul>
            {t.thirdParty.points.map((item: string) => <li key={item}>{item}</li>)}
          </ul>
          <p>{t.thirdParty.outro}</p>

          <h2>9. International Data Transfers</h2>
          <p>{t.international}</p>

          <h2>10. Children's Privacy</h2>
          <p>{t.children}</p>

          <h2>11. California Privacy Rights</h2>
          <p>{t.california.intro}</p>
          <ul>
            {t.california.points.map((item: string) => <li key={item}>{item}</li>)}
          </ul>
          <p>{t.california.outro}</p>

          <h2>12. Changes to this Privacy Policy</h2>
          <p>{t.changes.intro}</p>
          <ul>
            {t.changes.points.map((item: string) => <li key={item}>{item}</li>)}
          </ul>

          <h2>13. Contact Us</h2>
          <p>{t.contact.intro}</p>
          <address className="not-italic">
            Stertup Consulting LLC
            <br />
            Miami, Florida
            <br />
            Email: <a href={`mailto:${t.contact.email}`}>{t.contact.email}</a>
            <br />
            Phone: {t.contact.phone}
          </address>
          <p className="mt-8 text-sm text-muted-foreground">{t.disclaimer}</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
