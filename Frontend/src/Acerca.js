import React from 'react';
import './Acerca.css'; // Importa los estilos CSS

const Acerca = () => {
  return (
    <div className="fondo-acerca" style={{ background: 'linear-gradient(to right, #93FAF6, #FFB1FF)' }}>
      <section>
        <h2>Nuestra Historia</h2>
        <p>En un día soleado de primavera en Madrid, un grupo de amigos se reunió en un parque local. Mientras observaban a los niños jugando y riendo, una conversación casual llevó a un dato sorprendente: "En Madrid hay más perros que niños". Esta tendencia sociológica no solo era una estadística, sino una realidad palpable en las calles de la ciudad. La idea de que las mascotas estaban cada vez más integradas en la vida cotidiana de las familias madrileñas comenzó a resonar en las mentes de aquellos amigos. Se dieron cuenta de que las mascotas ya no eran solo animales domésticos, sino verdaderos miembros de la familia, compañeros de aventuras y fieles amigos.</p>
        <p>Este cambio en la dinámica familiar conllevó una transformación en la forma en que la gente pasaba su tiempo libre. Los parques ya no solo estaban llenos de niños jugando, sino también de perros correteando y disfrutando del aire libre. Esta nueva realidad abrió un mundo de posibilidades en el ámbito del ocio. Fue entonces cuando nació la idea de crear un portal que facilitara a los establecimientos publicitar su disposición a acoger mascotas. El objetivo era proporcionar a los madrileños y a sus fieles compañeros peludos una forma práctica de encontrar lugares de ocio que no solo los aceptaran, sino que los recibieran con los brazos abiertos. Con ese propósito en mente, nuestro equipo se puso manos a la obra. Después de meses de arduo trabajo y dedicación, nació nuestro portal, un lugar donde los amantes de los animales pueden descubrir una amplia variedad de establecimientos que no solo les permiten traer a sus mascotas, sino que también ofrecen servicios y productos específicos para ellas.</p>
        <p>Hoy, estamos orgullosos de haber creado una comunidad que une a personas y mascotas en la búsqueda de experiencias de ocio inolvidables. Estamos emocionados por el futuro y comprometidos a seguir mejorando y creciendo, para que cada vez más personas y sus queridos compañeros peludos puedan disfrutar juntos de todo lo que Madrid tiene para ofrecer.</p>
      </section>
      <section>
        <h2>Nuestra Misión</h2>
        <p>¡Bienvenidos a nuestro mundo peludo! En nuestro rincón digital, nos dedicamos apasionadamente a conectar a los amantes de las mascotas con experiencias de ocio que no solo las aceptan, ¡sino que las celebran!
          Nuestra misión es simple: queremos ser ese portal donde todos los amantes de las mascotas encuentren ese lugar perfecto para pasar un tiempo maravilloso junto a sus peludos amigos. ¿Qué buscamos? Lugares donde tanto humanos como mascotas se sientan bienvenidos, mimados y parte de algo especial.
          Nos esforzamos por promover la inclusión de las mascotas en la vida cotidiana. Creemos firmemente que la presencia de nuestras queridas mascotas solo puede mejorar nuestros días y nuestras experiencias. ¡Por eso queremos que cada salida sea una aventura inolvidable para todos! Así que únete a nosotros en este viaje hacia un mundo más acogedor y divertido para todos, humanos y mascotas por igual. ¡Juntos, vamos a hacer que cada momento cuente! </p>
        <p><b>¡Gracias por ser parte de nuestra comunidad peluda!</b></p>
      </section>
      <section>
      <h2>Nuestro Equipo</h2>
      <div className="team">
        <div className="member">
          <img src="mujer.png" alt="Irene" />
          <p>Irene</p>
        </div>
        <div className="member">
          <img src="hombre.png" alt="Julio" />
          <p>Julio</p>
        </div>
        <div className="member">
          <img src="mujer.png" alt="Ruth" />
          <p>Ruth</p>
        </div>
        <div className="member">
          <img src="hombre.png" alt="Freddy" />
          <p>Freddy</p>
        </div>
        <div className="member">
          <img src="hombre.png" alt="Javier" />
          <p>Javier</p>
        </div>
      </div>
    </section>

    </div>
  );
};

export default Acerca;