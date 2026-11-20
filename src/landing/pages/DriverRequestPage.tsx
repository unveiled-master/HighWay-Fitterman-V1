import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, MapPin, Phone, ShieldCheck, Wrench } from 'lucide-react';
import styles from './DriverRequestPage.module.css';

const problems = ['Flat tyre', 'Battery / jump start', 'Engine trouble', 'Vehicle won’t start', 'Fuel delivery', 'Other'];
const sampleMechanics = [
  { name: 'Kwame Auto Rescue', specialty: 'Tyres • Battery • General roadside', distance: '2.4 km away', eta: 'Estimated 25–40 min', rating: '4.8', jobs: '120+ jobs', initials: 'KA' },
  { name: 'RoadReady Mobile Mechanics', specialty: 'Diagnostics • Engine support', distance: '4.1 km away', eta: 'Estimated 35–55 min', rating: '4.7', jobs: '85+ jobs', initials: 'RR' },
];

export default function DriverRequestPage() {
  const [step, setStep] = useState(0);
  const [problem, setProblem] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [location, setLocation] = useState('');
  const [phone, setPhone] = useState('');
  const [details, setDetails] = useState('');
  const [selected, setSelected] = useState<number | null>(null);
  const steps = ['Problem', 'Vehicle', 'Location', 'Review', 'Mechanics'];
  const next = () => setStep((s) => Math.min(s + 1, 4));
  const back = () => setStep((s) => Math.max(s - 1, 0));
  return <main className={styles.shell}>
    <header className={styles.header}><Link to="/" className={styles.brand}>HIGHWAY <b>FITTERMAN</b></Link><span><ShieldCheck size={16}/> Roadside request</span></header>
    <section className={styles.panel}>
      <Link to="/" className={styles.backHome}><ArrowLeft size={16}/> Back home</Link>
      <div className={styles.progress}><span>STEP {step + 1} OF 5</span><strong>{steps[step]}</strong><div><i style={{width:((step+1)/5)*100+'%'}}/></div></div>
      {step===0 && <><h1>What’s happened to your vehicle?</h1><p className={styles.sub}>Choose the issue you need help with.</p><div className={styles.choices}>{problems.map(p=><button type="button" className={problem===p?styles.active:styles.choice} onClick={()=>setProblem(p)} key={p}><Wrench size={18}/>{p}</button>)}</div><label>Anything else we should know? <textarea value={details} onChange={e=>setDetails(e.target.value)} placeholder="Describe symptoms, hazards, or other details (optional)"/></label><button className={styles.primary} disabled={!problem} onClick={next}>Continue <ArrowRight size={18}/></button></>}
      {step===1 && <><h1>Tell us about your vehicle</h1><p className={styles.sub}>This helps the mechanic prepare before arriving.</p><label>Vehicle make, model and year<input value={vehicle} onChange={e=>setVehicle(e.target.value)} placeholder="e.g. Toyota Corolla, 2012"/></label><label>Contact phone number<input inputMode="tel" value={phone} onChange={e=>setPhone(e.target.value)} placeholder="e.g. 024 123 4567"/></label><div className={styles.actions}><button className={styles.secondary} onClick={back}>Back</button><button className={styles.primary} disabled={!vehicle.trim()||!phone.trim()} onClick={next}>Continue <ArrowRight size={18}/></button></div></>}
      {step===2 && <><h1>Where are you stranded?</h1><p className={styles.sub}>Share a location or enter a nearby landmark in Ghana.</p><label>Location / landmark<input value={location} onChange={e=>setLocation(e.target.value)} placeholder="e.g. Madina Zongo Junction, Accra"/></label><div className={styles.locationHint}><MapPin/><span>Be as specific as possible. GPS location sharing can be added to the live version.</span></div><div className={styles.actions}><button className={styles.secondary} onClick={back}>Back</button><button className={styles.primary} disabled={!location.trim()} onClick={next}>Continue <ArrowRight size={18}/></button></div></>}
      {step===3 && <><h1>Review your request</h1><p className={styles.sub}>Check the details before looking for roadside assistance.</p><div className={styles.summary}><div><small>Problem</small><b>{problem}</b></div><div><small>Vehicle</small><b>{vehicle}</b></div><div><small>Location</small><b>{location}</b></div><div><small>Contact</small><b>{phone}</b></div>{details&&<div><small>Additional details</small><b>{details}</b></div>}</div><div className={styles.actions}><button className={styles.secondary} onClick={back}>Back</button><button className={styles.primary} onClick={next}>Find mechanics <ArrowRight size={18}/></button></div></>}
      {step===4 && <><h1>Mechanics near your request</h1><p className={styles.sub}>Demo results for {location}. These are sample profiles—not live availability.</p><div className={styles.results}>{sampleMechanics.map((m,i)=><article className={styles.mechanic} key={m.name}><div className={styles.avatar}>{m.initials}</div><div className={styles.mInfo}><h3>{m.name}<span className={styles.verified}><ShieldCheck size={13}/> Sample profile</span></h3><p>{m.specialty}</p><small>★ {m.rating} · {m.jobs} · {m.distance}</small><small>{m.eta}</small><button className={styles.primary} onClick={()=>setSelected(i)}>{selected===i?'Request sent (demo)':'Request this mechanic'}</button></div></article>)}</div>{selected!==null&&<div className={styles.confirm}><CheckCircle2/><div><b>Demo request initiated</b><p>Your selection is shown locally for this prototype. No mechanic was contacted and no real request was sent.</p></div></div>}<button className={styles.secondary} onClick={back}>Back to review</button></>}
    </section><footer>Highway Fitterman · Driver assistance prototype</footer>
  </main>;
}
