import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import GalleryCard3 from '../components/gallery-card3'
import FeatureCard from '../components/feature-card'
import Question from '../components/question'
import './inicio.css'

const Inicio = (props) => {
  return (
    <div className="inicio-container">
      <Helmet>
        <title>Dulces Alicia Maracaibo</title>
        <meta property="og:title" content="Dulces Alicia Maracaibo" />
      </Helmet>
      <div className="inicio-header transparent">
        <header data-thq="thq-navbar" className="inicio-navbar-interactive">
          <a
            href="https://wa.link/rkkcv8"
            target="_blank"
            rel="noreferrer noopener"
            className="inicio-link"
          >
            <img
              alt="image"
              src="/external/logo-optimizado-200h.png"
              className="inicio-image"
            />
          </a>
          <div data-thq="thq-navbar-nav" className="inicio-desktop-menu">
            <nav className="inicio-links">
              <Link to="/">INICIO</Link>
              <Link to="/sobre-nosotros" className="inicio-nav2">
                SOBRE NOSOTROS
              </Link>
              <span className="inicio-nav3">Menú</span>
              <span className="inicio-nav4">CONTACTO</span>
            </nav>
            <div className="inicio-buttons">
              <button className="inicio-login button">INICIAR SESIÓN</button>
              <button className="inicio-register button">REGISTRAR</button>
            </div>
          </div>
          <div data-thq="thq-burger-menu" className="inicio-burger-menu">
            <svg viewBox="0 0 1024 1024" className="inicio-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="inicio-mobile-menu">
            <div className="inicio-nav">
              <div className="inicio-top">
                <span className="inicio-logo">DULCES ALICIA MARACAIBO</span>
                <div data-thq="thq-close-menu" className="inicio-close-menu">
                  <svg viewBox="0 0 1024 1024" className="inicio-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="inicio-links1">
                <span className="inicio-nav11">Home</span>
                <span className="inicio-nav21">About</span>
                <span className="inicio-nav31">Menu</span>
                <span className="inicio-nav41">Contact</span>
                <span className="inicio-nav5">Blog</span>
              </nav>
              <div className="inicio-buttons1">
                <button className="inicio-login1 button">Login</button>
                <button className="inicio-register1 button">Register</button>
              </div>
            </div>
            <div>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="inicio-icon04"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="inicio-icon06"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="inicio-icon08"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <div className="inicio-hero">
        <div className="inicio-hero1">
          <div className="inicio-container01">
            <h1 className="inicio-hero-heading heading1">
              Deliciosos Postres Venezolanos
            </h1>
            <span className="inicio-hero-sub-heading">
              Dulces Alicia Maracaibo
            </span>
            <div className="inicio-btn-group">
              <button className="inicio-hero-button1 button">Ver menú</button>
              <button className="inicio-hero-button2 button">
                Learn More →
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="inicio-gallery">
        <div className="inicio-gallery1">
          <h1 className="inicio-gallery-heading heading2">
            Deliciosos Postres Tradicionales
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </h1>
          <span className="inicio-gallery-sub-heading">
            Explora las exquisitas delicias que ofrece Dulces Alicia Maracaibo
          </span>
          <div className="inicio-container02">
            <GalleryCard3
              imageAlt="Torta fria tres leches dulces alicia maracaibo"
              imageSrc="/external/torta-fria-dulces-alicia-maracaibo-1500w.jpg"
              rootClassName="rootClassName"
            ></GalleryCard3>
            <GalleryCard3
              imageAlt="Polvorosas Dulces Alicia Maracaibo"
              imageSrc="/external/polvorosas-dulces-alicia-maracaibo1-1500w.jpg"
              rootClassName="rootClassName1"
            ></GalleryCard3>
            <GalleryCard3
              imageAlt="CONSERVA DE CONCHA DE NARANJA DULCES ALICIA MARACAIBO"
              imageSrc="/external/conserva-de-cascara-de-naranja-dulces-de-alicia-1500w.jpg"
              rootClassName="rootClassName3"
            ></GalleryCard3>
            <GalleryCard3
              imageAlt="BESITOS DE COCO DULCES ALICIA MARACAIBO"
              imageSrc="/external/besitos-de-coco-dulces-de-alicia-1500w.jpg"
              rootClassName="rootClassName2"
            ></GalleryCard3>
            <GalleryCard3
              imageAlt="Conserva de coco con leche dulces alicia maracaibo"
              imageSrc="/external/conserva-de-coco-con-leche-dulces-alicia-maracaibo-1500w.jpg"
              rootClassName="rootClassName4"
            ></GalleryCard3>
            <GalleryCard3
              imageAlt="Torta choco prestigio dulces alicia maracaibo"
              imageSrc="/external/torta-choco-prestigio-dulces-alicia-maracaibo-1500w.jpg"
              rootClassName="rootClassName5"
            ></GalleryCard3>
            <GalleryCard3
              imageAlt="Torta de chocolate dulces alicia maracaibo"
              imageSrc="/external/torta-de-chocolate-dulces-alicia-maracaibo-1500w.jpg"
              rootClassName="rootClassName6"
            ></GalleryCard3>
            <GalleryCard3
              imageAlt="Conserva de Platano Dulces Alicia Maracaibo"
              imageSrc="/external/conserva-de-platano-dulces-alicia-maracaibo-1500w.jpg"
              rootClassName="rootClassName7"
            ></GalleryCard3>
            <GalleryCard3
              imageAlt="Turron Dulces Alicia Maracaibo"
              imageSrc="/external/turron-dulces-alicia-maracaibo-1500w.jpg"
              rootClassName="rootClassName8"
            ></GalleryCard3>
            <GalleryCard3
              imageAlt="Torta de Piña Caramelada Dulces Alicia Maracaibo"
              imageSrc="/external/torta-de-pi%C3%A3%C2%91a-acaramelada-dulces-alicia-maracaibo-1500w.jpg"
              rootClassName="rootClassName9"
            ></GalleryCard3>
            <GalleryCard3
              imageAlt="Pie de Limón Dulces Alicia Maracaibo"
              imageSrc="/external/pie-de-limon-dulces-de-alicia-1500w.jpg"
              rootClassName="rootClassName10"
            ></GalleryCard3>
            <GalleryCard3
              imageAlt="Conserva de Piña Dulces Alicia Maracaibo"
              imageSrc="/external/conserva-de-pi%C3%A3%C2%91a-dulces-de-alicia-1500w.jpg"
              rootClassName="rootClassName11"
            ></GalleryCard3>
          </div>
        </div>
      </div>
      <div className="inicio-details">
        <div className="inicio-details1">
          <div className="inicio-container03">
            <span className="inicio-text sectionTitle">
              <span>Detalles</span>
              <br></br>
            </span>
            <h2 className="inicio-details-heading heading2">
              Experimenta los Sabores de Maracaibo
            </h2>
            <span className="inicio-details-sub-heading">
              En Dulces Alicia Maracaibo te traemos una tienda virtual llena de
              la mejor selección de postres tradicionales venezolanos. Desde
              nuestro famoso quesillo hasta la irresistible conserva de coco con
              leche, cada postre se elabora artesanalmente utilizando recetas
              auténticas transmitidas de generación en generación. Con cada
              bocado, serás transportado a las vibrantes calles de Maracaibo,
              donde se originaron estos dulces manjares. Ordene ahora y disfrute
              del sabor de Venezuela.
            </span>
          </div>
          <img
            alt="CONSERVA DE COCO CON LECHE DULCES ALICIA MARACAIBO"
            src="/external/conserva-de-coco-con-leche-dulces-de-alicia-optimizado-500w.jpg"
            className="inicio-details-image"
          />
        </div>
      </div>
      <div className="inicio-features">
        <div className="inicio-features-container">
          <div className="inicio-features1">
            <div className="inicio-container04">
              <span className="inicio-text03 sectionTitle">
                <span>Características</span>
                <br></br>
              </span>
              <h2 className="inicio-features-heading heading2">
                Postres Tradicionales del Zulia
              </h2>
              <span className="inicio-features-sub-heading">
                Deléitate con los sabores de Venezuela
              </span>
            </div>
            <div className="inicio-container05">
              <FeatureCard
                heading="Amplia variedad de postres tradicionales venezolanos"
                subHeading="Explore una amplia gama de deliciosos postres tradicionales venezolanos, que incluyen tortas frias, quesillo y conservas."
              ></FeatureCard>
              <FeatureCard
                heading="Sabores auténticos de Maracaibo"
                subHeading="Experimente los auténticos sabores de Maracaibo con nuestros postres tradicionales elaborados con ingredientes locales."
              ></FeatureCard>
              <FeatureCard
                heading="Cómodo pedido en línea"
                subHeading="Ordene sus postres venezolanos favoritos desde la comodidad de su hogar y recíbalos en la puerta de su casa."
              ></FeatureCard>
              <FeatureCard
                heading="Opciones de postres personalizables"
                subHeading="Personalice su pedido de postres eligiendo entre varios ingredientes, rellenos y tamaños que se adapten a sus preferencias."
              ></FeatureCard>
            </div>
          </div>
        </div>
      </div>
      <div className="inicio-banner">
        <div className="inicio-banner1">
          <h1 className="inicio-banner-heading heading2">
            Descubre la Dulzura de Venezuela
          </h1>
          <span className="inicio-banner-sub-heading">
            Deléitese con nuestros auténticos y deliciosos postres tradicionales
            venezolanos, elaborados con amor y pasión.
          </span>
          <button className="inicio-banner-button button">Ver menú</button>
        </div>
      </div>
      <div className="inicio-faq">
        <div className="inicio-faq-container">
          <div className="inicio-faq1">
            <div className="inicio-container06">
              <span className="inicio-text06 sectionTitle">
                <span>FAQ</span>
                <br></br>
              </span>
              <h2 className="inicio-text09 heading2">Preguntas comunes</h2>
              <span className="inicio-text10">
                Estas son algunas de las preguntas más comunes que recibimos.
              </span>
            </div>
            <div className="inicio-container07">
              <Question
                answer="Dulces Alicia Maracaibo ofrece una amplia variedad de postres tradicionales venezolanos, incluido el quesillo, torta negra, tortas frias, conserva de leche, coco con leche, calabazate, conserva de piña, conserva de platano, conserva de cascara de naranja, dulce en frasco y mini dulces."
                question="¿Qué tipos de postres tradicionales venezolanos ofrece Dulces Alicia Maracaibo?"
              ></Question>
              <Question
                answer="Dulces Alicia Maracaibo está ubicado en Maracaibo, Venezuela."
                question="¿Donde está ubicado Dulces Alicia Maracaibo?"
              ></Question>
              <Question
                answer="Si, Dulces Alicia Maracaibo ofrece servicio de delivery solo en Maracaibo. El costo del envío varía según la distancia de entrega."
                question="¿Dulces Alicia Maracaibo ofrece servicio de delivery?"
              ></Question>
              <Question
                answer="Sí, puedes realizar un pedido online a través de nuestra tienda virtual. Simplemente navegue por nuestro menú, seleccione los postres que desee y proceda al pago."
                question="¿Puedo realizar un pedido en línea?"
              ></Question>
              <Question
                answer="Dulces Alicia Maracaibo Acepta efectivo y métodos de pago en línea como pago movil o transferencia bancaria directa."
                question="¿Qué métodos de pago acepta Dulces Alicia Maracaibo?"
              ></Question>
            </div>
          </div>
        </div>
      </div>
      <div className="inicio-footer">
        <footer className="inicio-footer1">
          <div className="inicio-container08">
            <Link to="/" className="inicio-logo1">
              DULCES ALICIA MARACAIBO
            </Link>
            <nav className="inicio-nav1 inicio-nav1">
              <span className="inicio-nav12">Inicio</span>
              <span className="inicio-nav22">Sobre nosotros</span>
              <span className="inicio-nav32">Menú</span>
              <span className="inicio-nav42">Contacto</span>
            </nav>
          </div>
          <div className="inicio-separator"></div>
          <div className="inicio-container09">
            <span className="inicio-text11">
              Dulces Alicia Maracaibo © 2023. Todos los derechos reservados.
            </span>
            <div className="inicio-icon-group1">
              <a
                href="https://www.instagram.com/dulcesdealicia_maracaibo/"
                target="_blank"
                rel="noreferrer noopener"
                className="inicio-link1"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="inicio-icon10"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/dulcesdealiciamaracaibo/"
                target="_blank"
                rel="noreferrer noopener"
                className="inicio-link2"
              >
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="inicio-icon12"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Inicio
