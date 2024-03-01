import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './sobre-nosotros.css'

const SobreNosotros = (props) => {
  return (
    <div className="sobre-nosotros-container">
      <Helmet>
        <title>Sobre-nosotros - Dulces Alicia Maracaibo</title>
        <meta
          property="og:title"
          content="Sobre-nosotros - Dulces Alicia Maracaibo"
        />
      </Helmet>
      <Header></Header>
      <div className="sobre-nosotros-hero">
        <div className="sobre-nosotros-container01">
          <h1 className="sobre-nosotros-text">Sobre Nosotros</h1>
          <span className="sobre-nosotros-text01">
            Continuamos la legendaria tradición familiar de crear delicias
            exquisitas que deleitan a nuestros clientes.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <button className="sobre-nosotros-button button">Ver menú</button>
        </div>
      </div>
      <div className="sobre-nosotros-features">
        <div className="sobre-nosotros-container02">
          <div className="sobre-nosotros-container03">
            <div className="sobre-nosotros-container04">
              <div className="sobre-nosotros-container05">
                <h2 className="sobre-nosotros-text02">Nuestra Historia</h2>
                <div className="sobre-nosotros-separator"></div>
                <span className="sobre-nosotros-text03">
                  <span>
                    Dulces Alicia Maracaibo es un negocio familiar que continúa
                    la tradición del legendario Dulces de Alicia, el cual fue
                    inaugurado hace 48 años en Maracaibo.
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    Hace tres años, hemos dado vida a esta nueva versión de esta
                    icónica marca, manteniendo nuestro compromiso con la
                    excelencia y la calidad que ha sido nuestra distintiva desde
                    el principio.
                  </span>
                </span>
              </div>
            </div>
          </div>
          <img
            alt="Dulces de Alicia"
            src="/external/dulces-alicia-maracaibo-500h.jpg"
            className="sobre-nosotros-image"
          />
        </div>
      </div>
      <div className="sobre-nosotros-hero1">
        <img
          alt="image"
          src="/external/antiguo-los-dulces-de-alicia-1500w.jpg"
          className="sobre-nosotros-image1"
        />
        <div className="sobre-nosotros-container06">
          <h3 className="sobre-nosotros-text08">Nuestro Legado</h3>
          <span className="sobre-nosotros-text09">
            La historia de Dulces Alicia Maracaibo se remonta a la pasión por la
            repostería de nuestra fundadora, Alicia, quien comenzó elaborando
            sus deliciosos dulces en su hogar. Con el tiempo, su dedicación y
            habilidades culinarias la llevaron a abrir su propia tienda,
            convirtiéndola en un nombre reconocido en toda la región.
          </span>
        </div>
      </div>
      <div className="sobre-nosotros-hero2">
        <div className="sobre-nosotros-container07">
          <h4 className="sobre-nosotros-text10">Nuestra Filosofía</h4>
          <span className="sobre-nosotros-text11">
            En Dulces Alicia Maracaibo, nos esforzamos por honrar la herencia de
            nuestra fundadora, manteniendo viva su pasión por crear dulces
            exquisitos que deleiten a nuestros clientes. Cada dulce que
            producimos incorpora recetas tradicionales, ingredientes de la más
            alta calidad y un toque de creatividad que nos distingue en el
            mercado actual.
          </span>
          <div className="sobre-nosotros-btn-group">
            <button className="sobre-nosotros-button1 button">contacto</button>
          </div>
        </div>
        <img
          alt="image"
          src="/external/pasteleria-dulces-alicia-maracaibo-1500h.jpg"
          className="sobre-nosotros-image2"
        />
      </div>
      <div className="sobre-nosotros-hero3">
        <img
          alt="image"
          src="/external/postres-dulces-alicia-maracaibo-1500h.png"
          className="sobre-nosotros-image3"
        />
        <div className="sobre-nosotros-container08">
          <h1 className="sobre-nosotros-text12">Nuestra Misión</h1>
          <span className="sobre-nosotros-text13">
            Nuestra misión es simple: deleitar a nuestros clientes con productos
            de confitería excepcionales, mantener viva la herencia de Dulces de
            Alicia y ser reconocidos como un referente de calidad y sabor en la
            industria de la repostería.
          </span>
        </div>
      </div>
      <div className="sobre-nosotros-hero4">
        <div className="sobre-nosotros-container09">
          <h1 className="sobre-nosotros-text14">Nuestro Compromiso</h1>
          <span className="sobre-nosotros-text15">
            En Dulces Alicia Maracaibo, estamos comprometidos con la excelencia
            en cada paso de nuestro proceso de producción. Desde la selección de
            ingredientes hasta el empaque final, cada detalle se cuida
            minuciosamente para asegurar que nuestros dulces no solo sean
            deliciosos, sino que también reflejen la pasión y el cuidado que
            ponemos en cada creación.
          </span>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default SobreNosotros
