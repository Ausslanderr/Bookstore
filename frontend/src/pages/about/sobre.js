import React from "react";

function Sobre() {
    const customFont = {
        fontFamily: "monospace",
      };
  return (
    <div className="container mt-5 text-center">
      <h3 className="text-center mb-4 "  style={{textDecoration: 'underline', fontFamily:'monospace'}}><strong>Sobre Nós</strong></h3>
      
      <div className="text-center" >
        <div className="text-center" >
          <h5 style={{fontFamily:'monospace'}}><strong>Quem somos ?</strong></h5>
          <p className="text-center"  style={customFont}>
          A MononokeTales é muito mais do que apenas uma loja de mangás; somos uma parte vibrante da comunidade apaixonada por literatura japonesa e cultura do Japão. Decidimos dar um passo adiante e expandir nossos horizontes para o mundo digital, criando um espaço onde os amantes de mangás e tudo relacionado ao Japão podem explorar, descobrir e se conectar a partir de qualquer lugar. Nossa jornada começou com prateleiras repletas de mangás e histórias japonesas que inspiraram e enriqueceram muitas vidas. Agora, trazemos essa mesma paixão para o universo online. Nosso site é um reflexo do nosso compromisso em oferecer uma experiência única, onde a busca por conhecimento sobre o Japão e aventuras literárias japonesas nunca conhece limites.

Cada página, cada clique e cada busca em nosso site é uma oportunidade de compartilhar o amor pela cultura japonesa, pelos mangás e pela literatura do Japão. Continuamos a trazer uma coleção cuidadosamente curada de títulos que abrangem mangás, romances, guias culturais e muito mais. Nossa equipe de entusiastas da cultura japonesa está sempre pronta para ajudar a orientar sua busca e fornecer recomendações personalizadas.

A MononokeTales nasceu da nossa crença de que a cultura japonesa e os mangás têm o poder de unir, educar e enriquecer as vidas. Estamos empolgados em embarcar nesta jornada digital ao seu lado, enquanto continuamos a construir pontes entre amantes da cultura japonesa, das histórias japonesas e o vasto mundo da literatura e do entretenimento japonês.

Bem-vindo à nossa comunidade virtual, onde a cultura japonesa ganha vida, os mangás são uma paixão compartilhada e a busca pelo conhecimento e pela aventura nunca para. </p>
        </div>
        <div className="text-center">
          <h5 style={{fontFamily:'monospace'}}><strong>Uma Vasta Seleção</strong></h5>
          <p  style={customFont} >
          Nossa coleção diversificada de produtos abrange desde mangás clássicos até os lançamentos mais recentes do Japão. Aqui, você encontrará algo para todos os gostos e interesses relacionados à cultura japonesa. Se você é um entusiasta de mangás clássicos, poderá encontrar obras icônicas que definiram o mundo dos mangás. Se busca as histórias mais emocionantes e empolgantes do Japão contemporâneo, nossos lançamentos garantem que você fique atualizado nas tendências literárias e culturais.

Na MononokeTales, nossa missão é proporcionar a você uma experiência enriquecedora e autêntica relacionada à cultura japonesa. Acreditamos que cada mangá e produto relacionado ao Japão têm sua própria história a contar e estamos comprometidos em ajudá-lo a descobrir as maravilhas da cultura japonesa por meio de nossos produtos. Seja você um apaixonado por mangás, um estudante da língua japonesa ou um amante da cultura do Japão, a MononokeTales é o seu destino definitivo. Junte-se a nós nessa jornada pela cultura japonesa, onde cada página é uma porta de entrada para um mundo fascinante.         </p>
        </div>
      </div>
    </div>
  );
}

export default Sobre;

