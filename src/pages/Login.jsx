import { useState } from 'react'
import logo from '../assets/logo.png'
import './Login.css'

export default function Login(){
  const [showPassword,setShowPassword]=useState(false)
  const [captcha,setCaptcha]=useState('43552')
  const [code,setCode]=useState('')
  const [message,setMessage]=useState('')
  const [connecting,setConnecting]=useState(false)
  const refresh=()=>{setCaptcha(String(Math.floor(10000+Math.random()*90000)));setCode('')}
  const submit=(e)=>{e.preventDefault();if(connecting)return;setConnecting(true);window.setTimeout(()=>window.location.replace('/initializing'),2000)}
  return <main className="login-page">
    <header className="login-top"><a href="/" aria-label="CampusCode home"><img src={logo} alt="CampusCode" /></a><a href="/">← BACK TO HOME</a></header>
    <div className="login-grid" />
    <svg className="login-paths" viewBox="0 0 1600 760" preserveAspectRatio="none" aria-hidden="true"><path d="M60 160 C300 310 420 90 650 270 S900 500 1120 250 S1400 90 1580 150"/><path d="M0 650 C180 450 400 650 600 480 S860 170 1050 300 S1330 650 1600 420"/><circle cx="560" cy="260" r="4"/><circle cx="900" cy="420" r="4"/><circle cx="1220" cy="185" r="4"/></svg>
    <section className="login-layout">
      <div className="login-intro"><p className="login-eyebrow"><i/> CAMPUSCODE / AUTHENTICATION</p><div className="login-meta"><span>ACCESS</span><span>01 / 02</span></div><h1>ENTER<br/>THE<br/><em>ARENA.</em></h1><p className="login-description">Sign in to continue building, collaborating and competing with the<br className="desktop-break"/> CampusCode community.</p><div className="login-steps"><div><small>01</small><b>BUILD</b></div><div><small>02</small><b>COMPETE</b></div><div><small>03</small><b>SHIP</b></div></div><div className="login-footmeta"><span><i/> AUTHENTICATION READY</span><span>SECURE ACCESS</span><span>2026</span></div></div>
      <div className="login-form-wrap"><form className="login-card" onSubmit={submit}><div className="login-card-top"><div><small>EXISTING ACCOUNT</small><h2>LOGIN</h2><p>Access your CampusCode account.</p></div><span>CC<br/>01</span></div><label>EMAIL ADDRESS<div className="login-input"><span>@</span><input type="email" autoComplete="email" /></div></label><label>PASSWORD<div className="login-input"><span>•</span><input type={showPassword?'text':'password'} autoComplete="current-password"/><button type="button" onClick={()=>setShowPassword(!showPassword)}>◦ {showPassword?'HIDE':'SHOW'}</button></div></label><label>CAPTCHA<div className="captcha-line"><span className="captcha-art">{captcha}</span><button type="button" onClick={refresh}>↻ NEW</button></div><input className="captcha-input" placeholder="Enter the code above" value={code} onChange={e=>setCode(e.target.value)}/></label><div className={`login-status login-bus-status${connecting?' is-connecting':''}`} aria-live="polite"><div className="login-bus"><span><i/><i/><i/></span><i className="login-bus-wheel wheel-a"/><i className="login-bus-wheel wheel-b"/></div><span className="login-bus-zzz">Zzz</span><span className="login-bus-dots"><i/><i/><i/></span><b className="login-bus-ready">READY</b><b className="login-bus-connecting">CONNECTING</b><i className="login-bus-stop"/></div><button className="login-submit" type="submit" disabled={connecting}>{connecting?'CONNECTING':'LOGIN'} <span>↗</span></button>{message&&<p className="login-message" role="status">{message}</p>}<a className="forgot" href="#forgot">FORGOT PASSWORD?</a><div className="login-create"><span>DON&apos;T HAVE AN ACCOUNT?</span><a href="#create">CREATE ACCOUNT →</a></div></form><div className="login-card-meta"><span>AUTH / 2026</span><span><i/> SECURE LOGIN</span></div></div>
    </section>
  </main>
}
