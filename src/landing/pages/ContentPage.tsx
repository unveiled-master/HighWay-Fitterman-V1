import LandingLayout from '../components/LandingLayout';
import styles from './ContentPage.module.css';

const data: Record<string, { title: string; description: string }> = {
  about: { title: 'Roadside help that brings drivers and mechanics together', description: 'Highway Fitterman is a roadside assistance platform designed to make getting help after a vehicle breakdown easier, clearer, and more dependable. Drivers can report what has happened and where they are, while nearby available mechanics can receive, assess, and respond to assistance requests.' },
  'how-it-works': { title: 'From breakdown to help, with less uncertainty', description: 'A driver starts a roadside request, explains the problem, shares their location, and confirms the details. The platform helps route that request to an available mechanic. Once a mechanic accepts, both sides can follow the job, communicate, and stay informed through completion.' },
  drivers: { title: 'A clearer way to get roadside assistance', description: 'When your vehicle stops unexpectedly, you should not have to guess who to call or repeatedly explain where you are. Highway Fitterman gives you one guided place to request help, share your location and vehicle details, see when a mechanic accepts, and get updates as the job progresses.' },
  mechanics: { title: 'Turn your skills into roadside jobs', description: 'Highway Fitterman helps mechanics connect with motorists who need real assistance. Mechanics can build a profile, submit verification details, set availability, receive relevant requests, accept work, contact drivers, and update job progress—helping them spend less time searching for customers.' },
  'become-a-mechanic': { title: 'Grow your roadside service work with Highway Fitterman', description: 'Join a network that brings breakdown requests to mechanics. After submitting your profile and verification information for review, approved mechanics can mark themselves available, receive incoming requests, choose jobs they can handle, and keep drivers updated from acceptance through completion.' },
  'roadside-assistance': { title: 'Practical support for common roadside problems', description: 'Request assistance for situations such as flat tyres, dead batteries, engine trouble, or a vehicle that will not start. Tell us the issue, provide your location and vehicle information, and get connected with a mechanic who can respond. Service availability and arrival estimates depend on location, mechanic availability, and the nature of the problem.' },
  contact: { title: 'We’re here to help', description: 'Questions about requesting assistance, joining as a mechanic, or using Highway Fitterman? Contact our team and share what you need help with. We want the experience to be straightforward for drivers and service professionals alike.' },
};
const driverBenefits = [
  ['Request help in one place', 'A guided request collects the problem, vehicle information, and location without needing to figure out which service to call first.'],
  ['Share your location', 'Send your position so a responding mechanic can find you more easily. If GPS is unavailable, the flow can support a manually entered location.'],
  ['Know what is happening', 'Follow request status—from submitted and mechanic assigned to work in progress and completed—so you have fewer unknowns.'],
  ['Stay in contact', 'Contact the assigned mechanic and get updates as your assistance progresses.'],
];
const mechanicBenefits = [
  ['Find customers who need you', 'Receive roadside requests rather than relying only on word of mouth or waiting for customers to find your shop.'],
  ['Choose suitable jobs', 'Review the problem and request details before accepting, so you can prioritize work you are equipped and available to handle.'],
  ['Build trust and visibility', 'A profile and verification process help establish credibility with motorists looking for help.'],
  ['Manage work clearly', 'Accept requests, contact the driver, update job progress, and mark work complete through a consistent flow.'],
];
export default function ContentPage({ page }: { page: string }) {
  const item = data[page] ?? data.about;
  return (
    <LandingLayout>
      <main className={styles.page}>
        <small>HIGHWAY FITTERMAN</small><h1>{item.title}</h1><p className={styles.intro}>{item.description}</p>
        <section className={styles.section}><h2>How Highway Fitterman works</h2><div className={styles.grid}>
          <article><span>01</span><h3>Driver sends a request</h3><p>They describe the breakdown, add vehicle details, and share where they are.</p></article>
          <article><span>02</span><h3>Mechanic receives the job</h3><p>Available, verified mechanics receive the request and decide whether to take it.</p></article>
          <article><span>03</span><h3>Connect and coordinate</h3><p>After acceptance, driver and mechanic can communicate and coordinate the response.</p></article>
          <article><span>04</span><h3>Work updates and completion</h3><p>The mechanic updates the job as they progress; the driver confirms completion and can leave feedback.</p></article>
        </div></section>
        <section className={styles.section}><h2>Benefits for drivers</h2><p className={styles.sectionLead}>Less stress and more clarity when a vehicle problem disrupts your day.</p><div className={styles.grid}>{driverBenefits.map(([heading, body]) => <article key={heading}><h3>{heading}</h3><p>{body}</p></article>)}</div></section>
        <section className={styles.section}><h2>Benefits for mechanics</h2><p className={styles.sectionLead}>A practical way to reach new customers, manage incoming roadside work, and make your availability count.</p><div className={styles.grid}>{mechanicBenefits.map(([heading, body]) => <article key={heading}><h3>{heading}</h3><p>{body}</p></article>)}</div></section>
        <section className={styles.note}><h2>Better coordination for both sides</h2><p>Drivers get a clearer path to assistance. Mechanics get a channel to discover jobs and communicate with customers. Highway Fitterman brings both sides into one process—from the first request to the job’s completion—while prioritizing transparency, safety, and reliable updates.</p></section>
      </main>
    </LandingLayout>
  );
}