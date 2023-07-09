

import Footer from "../../home/footer";
import Navbar from "../../home/navbar";
import NavbarPosLogin from "../../home/navbarPosLogin";
import img1 from '/Users/Davi/Desktop/Projeto Final GCC188/Bookstore/src/frontEnd/assets/images/The_God_Delusion_UK.jpg'
import img2 from '/Users/Davi/Desktop/Projeto Final GCC188/Bookstore/src/frontEnd/assets/images/homo-deus-1.jpg'
import img3 from '/Users/Davi/Desktop/Projeto Final GCC188/Bookstore/src/frontEnd/assets/images/selfishGene.jpg'
function Carrinho () {
    return <div>
        <main className="page">
    <section className="shopping-cart dark">
        <div className="container">
           <div className="block-heading">
             <h2>Carrinho</h2>
             <h3>Carrinho de Compras da Bookstore.</h3>
           </div>
           <div className="content">
                <div className="row">
                    <div className="col-md-12 col-lg-8">
                        <div className="items">
                            <div className="product">
                                <div className="row">
                                    <div className="col-md-3">
                                        <img className="img-fluid mx-auto d-block image" style={{height: '200px', width: '180px'}} src={img1}/>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="info">
                                            <div className="row">
                                                <div className="col-md-5 product-name">
                                                    <div className="product-name">
                                                        <a href="#">Título</a>
                                                        <div className="product-info">
                                                            <div>Autor: <span className="value"></span></div>
                                                            <div>Editora:  <span className="value"></span></div>
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 quantity">
                                                    <label htmlFor="quantity">Quantidade:</label>
                                                    <input id="quantity" type="number" placeholder="1"   className="form-control quantity-input"/>
                                                </div>
                                                <div className="col-md-3 price">
                                                    <span>R$120</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           <br />
                            <div className="product">
                                <div className="row">
                                    <div className="col-md-3">
                                        <img className="img-fluid mx-auto d-block image" style={{height: '200px', width: '180px'}} src={img2}/>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="info">
                                            <div className="row">
                                                <div className="col-md-5 product-name">
                                                    <div className="product-name">
                                                        <a href="#">Título</a>
                                                        <div className="product-info">
                                                           <div>Autor: <span className="value"></span></div>
                                                           <div>Editora:  <span className="value"></span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 quantity">
                                                    <label htmlFor="quantity">Quantidade:</label>
                                                    <input id="quantity" type="number" placeholder="1" className="form-control quantity-input"/>
                                                </div>
                                                <div className="col-md-3 price">
                                                    <span>R$120</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                          <br />
                            <div className="product">
                                <div className="row">
                                    <div className="col-md-3">
                                        <img className="img-fluid mx-auto d-block image" style={{height: '200px', width: '180px'}} src={img3}/>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="info">
                                            <div className="row">
                                                <div className="col-md-5 product-name">
                                                    <div className="product-name">
                                                        <a href="#">Título</a>
                                                        <div className="product-info">
                                                           <div>Autor: <span className="value"></span></div>
                                                           <div>Editora:  <span className="value"></span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 quantity">
                                                    <label htmlFor="quantity">Quantidade:</label>
                                                    <input id="quantity" type="number" placeholder="1" className="form-control quantity-input"/>
                                                </div>
                                                <div className="col-md-3 price">
                                                    <span>R$120</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-4">
                        <div className="summary">
                            <h3>Resumo</h3>
                            <div className="summary-item"><span className="text">Subtotal</span><span className="price">R$360</span></div>
                            <div className="summary-item"><span className="text">Desconto</span><span className="price">R$R0</span></div>
                            <div className="summary-item"><span className="text">...</span><span className="price">R$0</span></div>
                            <div className="summary-item"><span className="text">Total</span><span className="price">R$360</span></div>
                            <button type="button" className="btn btn-primary btn-lg btn-block">Confirmar</button>
                        </div>
                    </div>
                </div> 
            </div>
            <br />
            <br />
            <h3>Itens sugeridos...</h3>
            <br />
            <br />
        </div>
   </section>
</main>

</div>
}
export default Carrinho;