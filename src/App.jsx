import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalView, setModalView] = useState('social')
  const [isHeaderFixed, setIsHeaderFixed] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY
      const headerTextEl = document.querySelector('.header-text')
      const headerEl = document.querySelector('header')
      if (headerTextEl && headerEl) setIsHeaderFixed(scroll >= headerTextEl.offsetHeight - headerEl.offsetHeight)

      const scrollPos = window.scrollY
      document.querySelectorAll('.nav a').forEach(link => {
        const href = link.getAttribute('href')
        if (href && href.startsWith('#')) {
          const refElement = document.querySelector(href)
          if (refElement) {
            const top = refElement.offsetTop
            const height = refElement.offsetHeight
            if (top <= scrollPos && top + height > scrollPos) {
              document.querySelectorAll('.nav ul li a').forEach(a => a.classList.remove('active'))
              link.classList.add('active')
            }
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (e, targetId) => {
    e.preventDefault()
    const target = document.querySelector(targetId)
    if (target) {
      if (window.innerWidth < 991) setIsMobileMenuOpen(false)
      window.scrollTo({ top: target.offsetTop + 1, behavior: 'smooth' })
    }
  }

  const openModal = e => { e.preventDefault(); setIsModalOpen(true); setModalView('social') }
  const closeModal = () => { setIsModalOpen(false); setModalView('social') }
  const handleTestimonialClick = index => {
    setActiveTestimonial(index)
    const listItems = document.querySelectorAll('.naccs ul li')
    const ul = document.querySelector('.naccs ul')
    if (listItems[index] && ul) ul.style.height = listItems[index].offsetHeight + 'px'
  }

  useEffect(() => {
    const firstItem = document.querySelector('.naccs ul li.active')
    const ul = document.querySelector('.naccs ul')
    if (firstItem && ul) ul.style.height = firstItem.offsetHeight + 'px'
  }, [])

  const services = [
    { title: 'App Maintenance', desc: 'You are not allowed to redistribute this template ZIP file on any other website.', cls: 'first-service' },
    { title: 'Rocket Speed of App', desc: 'You are allowed to use the Chain App Dev HTML template. Feel free to modify or edit this layout.', cls: 'second-service' },
    { title: 'Multi Workflow Idea', desc: 'If this template is beneficial for your work, please support us via PayPal. Thank you.', cls: 'third-service' },
    { title: '24/7 Help & Support', desc: 'Lorem ipsum dolor consectetur adipiscing elit sedder williamsburg photo booth quinoa and fashion axe.', cls: 'fourth-service' }
  ]

  const pricing = [
    { price: '$12', plan: 'Standard Plan App', features: ['Lorem Ipsum Dolores','20 TB of Storage'], nonFunc: ['Life-time Support','Premium Add-Ons','Fastest Network','More Options'] },
    { price: '$25', plan: 'Business Plan App', features: ['Lorem Ipsum Dolores','50 TB of Storage','Life-time Support','Premium Add-Ons'], nonFunc: ['Fastest Network','More Options'] },
    { price: '$66', plan: 'Premium Plan App', features: ['Lorem Ipsum Dolores','120 TB of Storage','Life-time Support','Premium Add-Ons','Fastest Network','More Options'], nonFunc: [] }
  ]

  const testimonials = [
    { name: 'David Martino', role: 'CEO of David Company', date: '30 November 2021', category: 'Financial Apps', rating: 4.8, content: 'Lorem ipsum dolor sit amet...', img: 'assets/images/client-image.jpg' },
    { name: 'Jake H. Nyo', role: 'CTO of Digital Company', date: '29 November 2021', category: 'Digital Business', rating: 4.5, content: 'CTO, Lorem ipsum dolor sit amet...', img: 'assets/images/client-image.jpg' },
    { name: 'May C.', role: 'Founder of Catherina Co.', date: '27 November 2021', category: 'Business & Economics', rating: 4.7, content: 'May, Lorem ipsum dolor sit amet...', img: 'assets/images/client-image.jpg' },
    { name: 'Random Staff', role: 'Manager, Digital Company', date: '24 November 2021', category: 'New App Ecosystem', rating: 3.9, content: 'Lorem ipsum dolor sit amet...', img: 'assets/images/client-image.jpg' },
    { name: 'Mark Am', role: 'CTO, Amber Do Company', date: '21 November 2021', category: 'Web Development', rating: 4.3, content: 'Mark, Lorem ipsum dolor sit amet...', img: 'assets/images/client-image.jpg' }
  ]

  return (
    <>
      <header className={`header-area header-sticky wow slideInDown ${isHeaderFixed ? 'background-header' : ''}`}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <a href="index.html" className="logo"><img src="assets/images/logo.png" alt="Chain App Dev" /></a>
                <ul className="nav" style={{ display: isMobileMenuOpen ? 'block' : '' }}>
                  {['#top','services','about','pricing','newsletter'].map((id,i)=>(
                    <li key={i} className="scroll-to-section">
                      <a href={`#${id}`} className={i===0?'active':''} onClick={e=>scrollToSection(e, `#${id}`)}>
                        {['Home','Services','About','Pricing','Newsletter'][i]}
                      </a>
                    </li>
                  ))}
                  <li>
                    <div className="gradient-button">
                      <a href="#modal" onClick={openModal}><i className="fa fa-sign-in-alt" /> Sign In Now</a>
                    </div>
                  </li>
                </ul>
                <a className={`menu-trigger ${isMobileMenuOpen?'active':''}`} onClick={()=>setIsMobileMenuOpen(!isMobileMenuOpen)}><span>Menu</span></a>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {isModalOpen && <div className="modal-overlay" onClick={closeModal} />}
      <div id="modal" className="popupContainer" style={{ display: isModalOpen ? "block" : "none", zIndex: 99999, position: 'fixed' }}>
        <div className="popupHeader">
          <span className="header_title">{modalView==='register'?'Register':'Login'}</span>
          <span className="modal_close" onClick={closeModal}><i className="fa fa-times" /></span>
        </div>
        <section className="popupBody">
          <div className="social_login" style={{ display: modalView==='social'?'block':'none' }}>
            <div>
              <a href="#" className="social_box fb"><span className="icon"><i className="fab fa-facebook" /></span><span className="icon_title">Connect with Facebook</span></a>
              <a href="#" className="social_box google"><span className="icon"><i className="fab fa-google-plus" /></span><span className="icon_title">Connect with Google</span></a>
            </div>
            <div className="centeredText"><span>Or use your Email address</span></div>
            <div className="action_btns">
              <div className="one_half"><a href="#" className="btn" onClick={e=>{e.preventDefault(); setModalView('login')}}>Login</a></div>
              <div className="one_half last"><a href="#" className="btn" onClick={e=>{e.preventDefault(); setModalView('register')}}>Sign up</a></div>
            </div>
          </div>
          {/* Login and Register sections here unchanged */}
        </section>
      </div>

      <div className="main-banner wow fadeIn" id="top">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="left-content show-up header-text wow fadeInLeft">
                <h2>Get The Latest App From App Stores</h2>
                <p>Chain App Dev is an app landing page HTML5 template based on Bootstrap v5.1.3 CSS layout.</p>
              </div>
            </div>
            <div className="col-lg-6"><div className="right-image wow fadeInRight"><img src="assets/images/slider-dec.png" alt="" /></div></div>
          </div>
        </div>
      </div>

      <div id="services" className="services section">
        <div className="container">
          <div className="row">
            {services.map((s,i)=>(
              <div key={i} className="col-lg-3">
                <div className={`service-item ${s.cls}`}>
                  <div className="icon" />
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                  <div className="text-button"><a href="#">Read More <i className="fa fa-arrow-right" /></a></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="pricing" className="pricing-tables section">
        <div className="container">
          <div className="row">
            {pricing.map((p,i)=>(
              <div key={i} className="col-lg-4">
                <div className="pricing-item">
                  <div className="price">{p.price}</div>
                  <div className="plan">{p.plan}</div>
                  <ul>
                    {p.features.map((f,j)=><li key={j}>{f}</li>)}
                    {p.nonFunc.map((f,j)=><li key={j} className="non-func">{f}</li>)}
                  </ul>
                  <div className="main-button"><a href="#">Sign Up Now</a></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="testimonials" className="testimonials section">
        <div className="container">
          <ul className="naccs">
            {testimonials.map((t,i)=>(
              <li key={i} className={i===activeTestimonial?'active':''} onClick={()=>handleTestimonialClick(i)}>
                <div className="testimonial-item">
                  <p>{t.content}</p>
                  <h4>{t.name}<span>, {t.role}</span></h4>
                  <div className="date">{t.date} - {t.category} ({t.rating} ⭐)</div>
                  <img src={t.img} alt={t.name} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
