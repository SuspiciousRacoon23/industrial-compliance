export default function Home() {
  return (
    <div className="container" style={{ padding: 'var(--space-12) var(--space-4)' }}>
      <header style={{ marginBottom: 'var(--space-12)', textAlign: 'center' }}>
        <h1 style={{ color: 'var(--brand-primary)', marginBottom: 'var(--space-4)' }}>
          Industrial Compliance & Audit Readiness
        </h1>
        <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.125rem' }}>
          Your centralized command center for all locations, departments, licences, inspections, and compliance obligations.
        </p>
      </header>

      <div className="grid-cols-3">
        <div className="card">
          <h3>Centralized Dashboard</h3>
          <p>Get an immediate overview of which locations are compliant, what licences are expiring, and which inspections are overdue.</p>
          <button className="btn-primary">View Dashboard</button>
        </div>

        <div className="card">
          <h3>Automated Workflows</h3>
          <p>Every compliance obligation converted into structured tasks with clear ownership, due dates, and escalation paths.</p>
          <button className="btn-primary" style={{ backgroundColor: 'var(--status-info)' }}>View Workflows</button>
        </div>

        <div className="card">
          <h3>Audit Readiness</h3>
          <p>Automatically generate structured evidence packs to maintain continuous audit readiness across all your facilities.</p>
          <button className="btn-primary" style={{ backgroundColor: 'var(--status-success)' }}>Prepare Audit</button>
        </div>
      </div>
      
      <div className="glass-panel" style={{ marginTop: 'var(--space-12)', padding: 'var(--space-8)', textAlign: 'center' }}>
        <h2>Ready to secure your compliance?</h2>
        <p>Join the future of industrial regulatory management today.</p>
        <button className="btn-primary" style={{ marginTop: 'var(--space-4)', padding: 'var(--space-4) var(--space-8)' }}>
          Get Started
        </button>
      </div>
    </div>
  );
}
