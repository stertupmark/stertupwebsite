
import { getTranslations, Language } from '@/lib/translations';

const TermsPage = () => {
  const t = getTranslations('en').termsPage;

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

          <h2>1. Acceptance of Terms</h2>
          <p>{t.acceptance}</p>
          
          <h2>2. Services Provided</h2>
          <p>{t.servicesProvided.intro}</p>
          <h3>2.1 Technology Consulting</h3>
          <ul>
            {t.servicesProvided.techConsulting.map((item: string) => <li key={item}>{item}</li>)}
          </ul>
          <h3>2.2 Google Workspace Services</h3>
          <ul>
            {t.servicesProvided.googleWorkspace.map((item: string) => <li key={item}>{item}</li>)}
          </ul>
          <h3>2.3 Office 365 to Google Migration</h3>
          <ul>
            {t.servicesProvided.office365Migration.map((item: string) => <li key={item}>{item}</li>)}
          </ul>
          <h3>2.4 Social Media Services</h3>
          <ul>
            {t.servicesProvided.socialMedia.map((item: string) => <li key={item}>{item}</li>)}
          </ul>
          <h3>2.5 Virtual Assistant Services</h3>
          <ul>
            {t.servicesProvided.virtualAssistant.map((item: string) => <li key={item}>{item}</li>)}
          </ul>

          <h2>3. Service Agreements</h2>
          <h3>3.1 Scope of Work</h3>
          <p>{t.serviceAgreements.scopeOfWork.intro}</p>
          <ul>
            {t.serviceAgreements.scopeOfWork.points.map((item: string) => <li key={item}>{item}</li>)}
          </ul>
          <h3>3.2 Service Standards</h3>
          <p>{t.serviceAgreements.serviceStandards}</p>

          <h2>4. Client Responsibilities</h2>
          <h3>4.1 Information and Access</h3>
          <p>{t.clientResponsibilities.infoAndAccess.intro}</p>
          <ul>
            {t.clientResponsibilities.infoAndAccess.points.map((item: string) => <li key={item}>{item}</li>)}
          </ul>
          <h3>4.2 Compliance</h3>
          <p>{t.clientResponsibilities.compliance.intro}</p>
          <ul>
            {t.clientResponsibilities.compliance.points.map((item: string) => <li key={item}>{item}</li>)}
          </ul>
          <h3>4.3 Security</h3>
          <p>{t.clientResponsibilities.security.intro}</p>
          <ul>
            {t.clientResponsibilities.security.points.map((item: string) => <li key={item}>{item}</li>)}
          </ul>

          <h2>5. Payment Terms</h2>
          <h3>5.1 Fees and Payment</h3>
          <ul>
            {t.paymentTerms.feesAndPayment.map((item: string) => <li key={item}>{item}</li>)}
          </ul>
          <h3>5.2 Expenses</h3>
          <p>{t.paymentTerms.expenses}</p>
          <h3>5.3 Disputed Charges</h3>
          <p>{t.paymentTerms.disputedCharges}</p>

          <h2>6. Intellectual Property</h2>
          <h3>6.1 Client Data and Content</h3>
          <ul>
            {t.intellectualProperty.clientData.map((item: string) => <li key={item}>{item}</li>)}
          </ul>
          <h3>6.2 Company Materials</h3>
          <ul>
            {t.intellectualProperty.companyMaterials.map((item: string) => <li key={item}>{item}</li>)}
          </ul>
          <h3>6.3 Third-Party Services</h3>
          <ul>
            {t.intellectualProperty.thirdParty.map((item: string) => <li key={item}>{item}</li>)}
          </ul>

          <h2>7. Confidentiality</h2>
          <h3>7.1 Mutual Confidentiality</h3>
          <p>{t.confidentiality.mutual}</p>
          <h3>7.2 Data Protection</h3>
          <p>{t.confidentiality.dataProtection}</p>
          <h3>7.3 Third-Party Services</h3>
          <p>{t.confidentiality.thirdParty}</p>

          <h2>8. Liability and Warranties</h2>
          <h3>8.1 Service Warranty</h3>
          <p>{t.liability.serviceWarranty}</p>
          <h3>8.2 Limitation of Liability</h3>
          <p>{t.liability.limitationIntro}</p>
          <ul>
            {t.liability.limitations.map((item: string) => <li key={item}>{item}</li>)}
          </ul>
          <h3>8.3 Disclaimer</h3>
          <p>{t.liability.disclaimer}</p>

          <h2>9. Indemnification</h2>
          <p>{t.indemnification.intro}</p>
          <ul>
            {t.indemnification.points.map((item: string) => <li key={item}>{item}</li>)}
          </ul>

          <h2>10. Termination</h2>
          <h3>10.1 Termination Rights</h3>
          <p>{t.termination.rights}</p>
          <h3>10.2 Effect of Termination</h3>
          <p>{t.termination.effect.intro}</p>
          <ul>
            {t.termination.effect.points.map((item: string) => <li key={item}>{item}</li>)}
          </ul>

          <h2>11. Force Majeure</h2>
          <p>{t.forceMajeure}</p>

          <h2>12. Dispute Resolution</h2>
          <h3>12.1 Governing Law</h3>
          <p>{t.disputeResolution.governingLaw}</p>
          <h3>12.2 Dispute Process</h3>
          <ul>
            {t.disputeResolution.process.map((item: string) => <li key={item}>{item}</li>)}
          </ul>

          <h2>13. General Provisions</h2>
          <h3>13.1 Entire Agreement</h3>
          <p>{t.generalProvisions.entireAgreement}</p>
          <h3>13.2 Modifications</h3>
          <p>{t.generalProvisions.modifications}</p>
          <h3>13.3 Severability</h3>
          <p>{t.generalProvisions.severability}</p>
          <h3>13.4 Assignment</h3>
          <p>{t.generalProvisions.assignment}</p>

          <h2>14. Compliance and Regulatory</h2>
          <h3>14.1 Industry Compliance</h3>
          <p>{t.compliance.industry}</p>
          <h3>14.2 Data Protection</h3>
          <p>{t.compliance.dataProtection}</p>
          <h3>14.3 Professional Standards</h3>
          <p>{t.compliance.professionalStandards}</p>

          <h2>15. Contact Information</h2>
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

          <p className="mt-8">{t.acknowledgement}</p>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
