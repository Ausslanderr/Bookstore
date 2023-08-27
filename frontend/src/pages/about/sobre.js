import React from "react";

function Sobre() {
    const customFont = {
        fontFamily: "system-ui",
      };
  return (
    <div className="container mt-5 text-center">
      <h3 className="text-center mb-4 "  style={{textDecoration: 'underline'}}><strong>Sobre Nós</strong></h3>
      
      <div className="text-center" >
        <div className="text-center" >
          <h5><strong>Quem somos ?</strong></h5>
          <p className="text-center"  style={customFont}>
          A Bookstore é muito mais do que apenas uma livraria; somos uma parte vibrante da comunidade apaixonada por literatura. Decidimos dar um passo adiante e expandir nossos horizontes para o mundo digital, criando um espaço onde os amantes de livros podem explorar, descobrir e se conectar a partir de qualquer lugar.

Nossa jornada começou com prateleiras repletas de histórias que inspiraram e enriqueceram muitas vidas. Agora, trazemos essa mesma paixão para o universo online. Nosso site é um reflexo do nosso compromisso em oferecer uma experiência única, onde a busca por conhecimento e aventura literária nunca conhece limites.

Cada página, cada clique e cada busca em nosso site é uma oportunidade de compartilhar o amor pela leitura e pela descoberta. Continuamos a trazer uma coleção cuidadosamente curada de títulos que abrangem gêneros, épocas e estilos diversos. Nossa equipe de entusiastas de livros está sempre pronta para ajudar a orientar sua busca e fornecer recomendações personalizadas.

A Bookstore nasceu da nossa crença de que os livros têm o poder de unir, educar e enriquecer as vidas. Estamos empolgados em embarcar nesta jornada digital ao seu lado, enquanto continuamos a construir pontes entre leitores, histórias e o vasto mundo da literatura. Bem-vindo à nossa comunidade virtual, onde as palavras ganham vida e a busca pelo conhecimento nunca para.
          </p>
        </div>
        <div className="text-center">
          <h5><strong>Uma Vasta Seleção</strong></h5>
          <p  style={customFont} >
          Nossa coleção diversificada de livros abrange desde clássicos intemporais até os lançamentos mais recentes. Aqui, você encontrará algo para todos os gostos e interesses. Se você é um entusiasta de literatura clássica, poderá encontrar obras de renomados autores que moldaram a história da escrita. Se busca as histórias mais emocionantes e empolgantes, nossos lançamentos recentes garantem que você fique atualizado nas tendências literárias. Na Bookstore, nossa missão é proporcionar a você uma experiência de leitura enriquecedora. Acreditamos que cada livro é uma jornada única e estamos comprometidos em ajudá-lo a encontrar a próxima história que tocará seu coração e expandirá seus horizontes          </p>
        </div>
      </div>
    </div>
  );
}

export default Sobre;

