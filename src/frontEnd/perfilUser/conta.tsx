
import deathStrandingBanner from '../assets/images/deathstranding.jpg';
import mariobros from '../assets/images/mariobros.jpg';
import redDead from '../assets/images/redDead.jpg';
import skyrim from '../assets/images/skyrim.jpg';
function Conta() {
  const nome = "<<Davi Siqueira>>";
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-8">
          <div className="d-flex flex-column justify-content-center align-items-center vh-100">
            <div className="text-center">
              <h1>Olá {nome}</h1>
              <p className="mb-3">Seu email é davi.siqueira@estudante.ufla.br</p>
              <p className="mb-3">Seu cpf é 123.456.789.00</p>
              <button className="btn btn-primary">Alterar Dados</button>
              <br />
              <br />
              <button className="btn btn-danger">Excluir Conta</button>
              <br />
              <br />
              <button className="btn btn-secondary">Tela do Admin</button>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div
            className="container-fluid"
            style={{ height: '610px', background: '#282828' }}
          >
            <div className="row">
              <div className="col-6">
                <div className="card m-3" style={{ width: '180px', height: '250px' }}>
                  <img src={deathStrandingBanner} className="card-img-top" alt="" style={{ height: '150px' }} />
                  <div className="card-body">
                    <h5 className="card-title">Death Stranding</h5>
                    <p className="card-text">Preço: $59.99</p>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="card m-3" style={{ width: '180px', height: '250px' }}>
                  <img src={redDead} className="card-img-top" alt="" style={{ height: '150px' }} />
                  <div className="card-body">
                    <h5 className="card-title">Red Dead Redemption 2</h5>
                    <p className="card-text">Preço: $49.99</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="card m-3" style={{ width: '180px', height: '250px' }}>
                  <img src={mariobros} className="card-img-top" alt="" style={{ height: '150px' }} />
                  <div className="card-body">
                    <h5 className="card-title">Super Mario Bros</h5>
                    <p className="card-text">Preço: $29.99</p>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="card m-3" style={{ width: '180px', height: '250px' }}>
                  <img src={skyrim} className="card-img-top" alt="" style={{ height: '150px' }} />
                  <div className="card-body">
                    <h5 className="card-title">The Elder Scrolls V: Skyrim</h5>
                    <p className="card-text">Preço: $39.99</p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
export default Conta;

