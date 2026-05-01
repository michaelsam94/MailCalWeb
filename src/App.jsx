const SOURCE_REPO_URL = 'https://github.com/michaelsam94/MailCal'

const nav = [
  { href: '/', label: 'Home' },
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
]

function Layout({ children }) {
  const current = window.location.pathname
  return (
    <div className="container">
      <header className="header">
        <h1>MailCal</h1>
        <nav>
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={current === item.href ? 'active' : ''}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>
      <main className="content">{children}</main>
      <footer className="footer">
        <p>
          MailCal is open source under the{' '}
          <a
            href="https://opensource.org/licenses/MIT"
            target="_blank"
            rel="noopener noreferrer"
          >
            MIT License
          </a>
          — transparent, inspectable code.{' '}
          <a href={SOURCE_REPO_URL} target="_blank" rel="noopener noreferrer">
            View the repository on GitHub
          </a>
          .
        </p>
        <p>Contact: support@mailcal.site</p>
      </footer>
    </div>
  )
}

function HomePage() {
  return (
    <Layout>
      <h2>Sync email events to your calendar</h2>
      <p>
        MailCal helps users detect meeting details from email and convert them
        into calendar events quickly.
      </p>
      <ul>
        <li>Reads event-related emails from Gmail</li>
        <li>Extracts date, time, meeting links, and attendees</li>
        <li>Lets users review and add events to calendar</li>
      </ul>
      <p>
        MailCal is an open source app released under the MIT License, so how it
        works is transparent and you can review or contribute to the code on{' '}
        <a href={SOURCE_REPO_URL} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        .
      </p>
    </Layout>
  )
}

function PrivacyPage() {
  return (
    <Layout>
      <article className="legal-doc">
        <h2>Privacy Policy</h2>
        <p className="legal-meta">
          <strong>MailCal</strong> — Last updated: May 1, 2026
        </p>
        <p>
          This Privacy Policy describes how <strong>MailCal</strong> (&quot;the
          application,&quot; &quot;we,&quot; &quot;us&quot;) accesses, uses,
          stores, and shares Google user data when you use our application.
          MailCal is developed by <strong>Michael Sam</strong> and is open
          source; the code is available on{' '}
          <a href={SOURCE_REPO_URL} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          . For questions about this policy or your data, contact{' '}
          <a href="mailto:support@mailcal.site">support@mailcal.site</a>.
        </p>

        <h3>1. Google user data we collect or access</h3>
        <p>
          With your consent and only as needed to operate MailCal, we access the
          following categories of <strong>Google user data</strong>:
        </p>
        <ul>
          <li>
            <strong>Account and profile information</strong> from Google Sign-In,
            such as your Google account identifier, email address, and display
            name, so we can identify your session and show who is signed in.
          </li>
          <li>
            <strong>Gmail content and metadata</strong> using the permission scope{' '}
            <code>https://www.googleapis.com/auth/gmail.readonly</code>. This
            includes message identifiers, headers (for example, subject, senders,
            dates), message bodies, and attachments or parts of messages when
            needed to detect calendar-related information (for example, ICS
            files or invitation text).
          </li>
        </ul>
        <p>
          MailCal does not request permission to send, modify, or delete your
          Gmail messages; access is read-only for the features described below.
        </p>

        <h3>2. How we use Google user data</h3>
        <p>
          We use Google user data <strong>only</strong> to provide and improve
          user-facing features of MailCal, specifically to:
        </p>
        <ul>
          <li>
            Sync and read messages from your Gmail mailbox so the app can find
            emails that may contain meetings or events.
          </li>
          <li>
            Parse those messages to extract event details (such as date, time,
            title, location, meeting links, and attendee hints) and present them
            for your review.
          </li>
          <li>
            Let you add extracted events to calendars on your device, when you
            choose to do so.
          </li>
        </ul>
        <p>
          We <strong>do not</strong> use Google user data for: targeted
          advertising, personalized or interest-based advertising, retargeting,
          user advertisements, selling data to data brokers, providing data to
          information resellers, credit-worthiness or lending decisions, building
          standalone marketing databases, or <strong>training artificial
          intelligence or machine learning models</strong> on Google user data.
          On-device processing used solely to power features you see in the app
          (for example, extraction helpers) is part of providing the
          application&apos;s functionality, not model training for unrelated
          purposes.
        </p>

        <h3>3. Storage and hosting</h3>
        <p>
          MailCal is designed to work <strong>on your device</strong>. Gmail
          data and parsed event information used by the app are stored locally
          (for example, in app storage on your phone or tablet) so you can
          review items offline. We do not operate a MailCal service that uploads
          your Gmail contents to our servers for processing.
        </p>

        <h3>4. Sharing, transfer, and disclosure</h3>
        <p>
          We <strong>do not sell</strong> Google user data to anyone. We do not
          transfer Google user data to third parties for targeted advertising,
          selling to data brokers, providing to information resellers,
          credit-worthiness or lending purposes, or the advertising uses listed
          above.
        </p>
        <p>
          Google processes OAuth sign-in and API requests according to{' '}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google&apos;s privacy policies
          </a>
          ; data necessarily flows between your device and Google&apos;s systems
          when you use Gmail through your authorized account. We do not disclose
          your Gmail content to unrelated third parties for their own purposes.
          If we ever relied on subprocessors strictly to operate essential
          infrastructure (for example, if we introduced optional cloud backup in
          the future), we would describe that here and limit use to providing or
          improving the application&apos;s functionality.
        </p>

        <h3>5. Security</h3>
        <p>
          We implement reasonable safeguards appropriate to an on-device app,
          including storing credentials and local data using platform security
          features where available, requiring Google authentication for API
          access, and honoring read-only Gmail access. No method of storage or
          transmission is perfectly secure; you should protect your device and use
          Google&apos;s account security tools (such as revoking app access)
          if needed.
        </p>

        <h3>6. Data retention and deletion</h3>
        <p>
          Data retained by MailCal on your device is kept only as long as needed
          for the app to function—for example, until you clear app data,
          uninstall the application, or delete locally stored messages and parsed
          events within the app where supported.
        </p>
        <p>
          You may <strong>disconnect MailCal from your Google account</strong> at
          any time by signing out in the app and by removing MailCal&apos;s
          access under your Google Account&apos;s security settings for
          third-party access. After access is revoked, MailCal will not fetch new
          Gmail data. Locally stored data may remain until you remove it or
          uninstall the app.
        </p>
        <p>
          To request help deleting information or to exercise privacy rights,
          contact <a href="mailto:support@mailcal.site">support@mailcal.site</a>.
        </p>

        <h3>7. Changes to this policy</h3>
        <p>
          We may update this Privacy Policy when our practices or Google&apos;s
          requirements change. If we materially change how MailCal uses Google
          user data, we will update this page and revise the &quot;Last
          updated&quot; date. For OAuth consent, ensure the privacy policy URL on
          your Google Cloud OAuth consent screen matches this page. Continued use
          of the app after changes means you acknowledge the updated policy where
          applicable.
        </p>

        <h3>8. Contact</h3>
        <p>
          <strong>MailCal</strong> — Developer: Michael Sam —{' '}
          <a href="mailto:support@mailcal.site">support@mailcal.site</a>
        </p>
      </article>
    </Layout>
  )
}

function TermsPage() {
  return (
    <Layout>
      <h2>Terms of Service</h2>
      <p>
        By using MailCal, you agree to use the app lawfully and understand it
        is provided on an &quot;as-is&quot; basis.
      </p>
      <ul>
        <li>You are responsible for your account and data permissions</li>
        <li>MailCal may update features and terms over time</li>
        <li>Service availability is not guaranteed at all times</li>
        <li>Liability is limited to the extent permitted by law</li>
      </ul>
      <p>For questions, contact: support@mailcal.site</p>
    </Layout>
  )
}

function App() {
  const path = window.location.pathname
  if (path === '/privacy') return <PrivacyPage />
  if (path === '/terms') return <TermsPage />
  return <HomePage />
}

export default App
