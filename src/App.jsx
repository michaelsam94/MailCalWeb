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
      <h2>Privacy Policy</h2>
      <p>
        MailCal accesses Gmail data only to detect event-related information and
        help users create calendar events.
      </p>
      <ul>
        <li>Data accessed: email metadata and content required for event parsing</li>
        <li>Purpose: extract event date, time, links, and attendees</li>
        <li>Storage: processed data is stored locally on user device</li>
        <li>Sharing: MailCal does not sell Gmail data to third parties</li>
        <li>Control: users can sign out and revoke access anytime</li>
      </ul>
      <p>Last updated: April 30, 2026</p>
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
