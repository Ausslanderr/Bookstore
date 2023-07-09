/* eslint-disable no-mixed-spaces-and-tabs */
/*
import Footer from '../../home/footer';
import Navbar from '../../home/navbar';
function Conta() {
  const nome = "<<Davi Siqueira>>";
  return <div>
	
	<Navbar/>
    <section className="py-5 my-5">
		<div className="container">
			<h1 className="mb-5">Configurações da Conta</h1>
			<div className="bg-white shadow rounded-lg d-block d-sm-flex">
				<div className="profile-tab-nav border-right">
					<div className="p-4">
						<div className="img-circle text-center mb-3">
							<img src="img/user.png" alt="Image" className="shadow"/>
						</div>
						<h4 className="text-center">Usuário</h4>
					</div>
					<div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
						<a className="nav-link active" id="account-tab" data-toggle="pill" href="#account" role="tab" aria-controls="account" aria-selected="true">
							<i className="fa fa-home text-center mr-1"></i> 
							Conta
						</a>
						<a className="nav-link" id="password-tab" data-toggle="pill" href="#password" role="tab" aria-controls="password" aria-selected="false">
							<i className="fa fa-key text-center mr-1"></i> 
							Senha
						</a>
						<a className="nav-link" id="security-tab" data-toggle="pill" href="#security" role="tab" aria-controls="security" aria-selected="false">
							<i className="fa fa-user text-center mr-1"></i> 
							Segurança
						</a>
						<a className="nav-link" id="application-tab" data-toggle="pill" href="#application" role="tab" aria-controls="application" aria-selected="false">
							<i className="fa fa-tv text-center mr-1"></i> 
							Aplicação
						</a>
						<a className="nav-link" id="notification-tab" data-toggle="pill" href="#notification" role="tab" aria-controls="notification" aria-selected="false">
							<i className="fa fa-bell text-center mr-1"></i> 
							Notificação
						</a>
					</div>
				</div>
				<div className="tab-content p-4 p-md-5" id="v-pills-tabContent">
					<div className="tab-pane fade show active" id="account" role="tabpanel" aria-labelledby="account-tab">
						<h3 className="mb-4">Informações da Conta</h3>
						<div className="row">
							<div className="col-md-6">
								<div className="form-group">
								  	<label>Primeiro Nome</label>
								  	<input type="text" className="form-control" value=""/>
								</div>
							</div>
							<div className="col-md-6">
								<div className="form-group">
								  	<label>último Nome</label>
								  	<input type="text" className="form-control" value=""/>
								</div>
							</div>
							<div className="col-md-6">
								<div className="form-group">
								  	<label>Email</label>
								  	<input type="text" className="form-control" value=""/>
								</div>
							</div>
							<div className="col-md-6">
								<div className="form-group">
								  	<label>Telefone</label>
								  	<input type="text" className="form-control" value=""/>
								</div>
							</div>
							
							<div className="col-md-6">
								<div className="form-group">
								  	<label>Designação</label>
								  	<input type="text" className="form-control" value="Cliente"/>
								</div>
							</div>
							<div className="col-md-12">
								<div className="form-group">
								  	<label>Bio</label>
									<textarea className="form-control"  >Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore vero enim error similique quia numquam ullam corporis officia odio repellendus aperiam consequatur laudantium porro voluptatibus, itaque laboriosam veritatis voluptatum distinctio!</textarea>
								</div>
							</div>
						</div>
						<div>
							<button className="btn btn-primary">Update</button>
							<button className="btn btn-light">Cancel</button>
						</div>
					</div>
					<div className="tab-pane fade" id="password" role="tabpanel" aria-labelledby="password-tab">
						<h3 className="mb-4">Password Settings</h3>
						<div className="row">
							<div className="col-md-6">
								<div className="form-group">
								  	<label>Old password</label>
								  	<input type="password" className="form-control"/>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-6">
								<div className="form-group">
								  	<label>New password</label>
								  	<input type="password" className="form-control"/>
								</div>
							</div>
							<div className="col-md-6">
								<div className="form-group">
								  	<label>Confirm new password</label>
								  	<input type="password" className="form-control"/>
								</div>
							</div>
						</div>
						<div>
							<button className="btn btn-primary">Update</button>
							<button className="btn btn-light">Cancel</button>
						</div>
					</div>
					<div className="tab-pane fade" id="security" role="tabpanel" aria-labelledby="security-tab">
						<h3 className="mb-4">Security Settings</h3>
						<div className="row">
							<div className="col-md-6">
								<div className="form-group">
								  	<label>Login</label>
								  	<input type="text" className="form-control"/>
								</div>
							</div>
							<div className="col-md-6">
								<div className="form-group">
								  	<label>Two-factor auth</label>
								  	<input type="text" className="form-control"/>
								</div>
							</div>
							<div className="col-md-6">
								<div className="form-group">
									<div className="form-check">
										<input className="form-check-input" type="checkbox" value="" id="recovery"/>
										<label className="form-check-label" htmlFor="recovery">
										Recovery
										</label>
									</div>
								</div>
							</div>
						</div>
						<div>
							<button className="btn btn-primary">Update</button>
							<button className="btn btn-light">Cancel</button>
						</div>
					</div>
					<div className="tab-pane fade" id="application" role="tabpanel" aria-labelledby="application-tab">
						<h3 className="mb-4">Application Settings</h3>
						<div className="row">
							<div className="col-md-6">
								<div className="form-group">
									<div className="form-check">
										<input className="form-check-input" type="checkbox" value="" id="app-check"/>
										<label className="form-check-label" htmlFor="app-check">
										App check
										</label>
									</div>
									<div className="form-check">
										<input className="form-check-input" type="checkbox" value="" id="defaultCheck2" />
										<label className="form-check-label" htmlFor="defaultCheck2">
										Lorem ipsum dolor sit.
										</label>
									</div>
								</div>
							</div>
						</div>
						<div>
							<button className="btn btn-primary">Update</button>
							<button className="btn btn-light">Cancel</button>
						</div>
					</div>
					<div className="tab-pane fade" id="notification" role="tabpanel" aria-labelledby="notification-tab">
						<h3 className="mb-4">Notification Settings</h3>
						<div className="form-group">
							<div className="form-check">
								<input className="form-check-input" type="checkbox" value="" id="notification1"/>
								<label className="form-check-label" htmlFor="notification1">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum accusantium accusamus, neque cupiditate quis
								</label>
							</div>
						</div>
						<div className="form-group">
							<div className="form-check">
								<input className="form-check-input" type="checkbox" value="" id="notification2"/ >
								<label className="form-check-label" htmlFor="notification2">
									hic nesciunt repellat perferendis voluptatum totam porro eligendi.
								</label>
							</div>
						</div>
						<div className="form-group">
							<div className="form-check">
								<input className="form-check-input" type="checkbox" value="" id="notification3" />
								<label className="form-check-label" htmlFor="notification3">
									commodi fugiat molestiae tempora corporis. Sed dignissimos suscipit
								</label>
							</div>
						</div>
						<div>
							<button className="btn btn-primary">Update</button>
							<button className="btn btn-light">Cancel</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>


  <Footer/>
  </div>
  
}
export default Conta;

*/
/*
import React from 'react';
import Footer from '../../home/footer';
import Navbar from '../../home/navbar';

function Conta() {
  const nome = "<<Davi Siqueira>>";
  
  return (
    <div>
      <Navbar />
      <section className="py-5 my-5">
        <div className="container">
          <h1 className="mb-5">Configurações da Conta</h1>
          <div className="bg-white shadow rounded-lg d-block d-sm-flex">
            <div className="profile-tab-nav border-right">
              <div className="p-4">
                <div className="img-circle text-center mb-3">
                  <img src="img/user.png" alt="Image" className="shadow" />
                </div>
                <h4 className="text-center">Usuário</h4>
              </div>
              <div
                className="nav flex-column nav-pills"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <a
                  className="nav-link active"
                  id="account-tab"
                  data-toggle="pill"
                  href="#account"
                  role="tab"
                  aria-controls="account"
                  aria-selected="true"
                >
                  <i className="fa fa-home text-center mr-1"></i>
                  Conta
                </a>
                <a
                  className="nav-link"
                  id="password-tab"
                  data-toggle="pill"
                  href="#password"
                  role="tab"
                  aria-controls="password"
                  aria-selected="false"
                >
                  <i className="fa fa-key text-center mr-1"></i>
                  Senha
                </a>
                <a
                  className="nav-link"
                  id="security-tab"
                  data-toggle="pill"
                  href="#security"
                  role="tab"
                  aria-controls="security"
                  aria-selected="false"
                >
                  <i className="fa fa-user text-center mr-1"></i>
                  Segurança
                </a>
                <a
                  className="nav-link"
                  id="application-tab"
                  data-toggle="pill"
                  href="#application"
                  role="tab"
                  aria-controls="application"
                  aria-selected="false"
                >
                  <i className="fa fa-tv text-center mr-1"></i>
                  Aplicação
                </a>
                <a
                  className="nav-link"
                  id="notification-tab"
                  data-toggle="pill"
                  href="#notification"
                  role="tab"
                  aria-controls="notification"
                  aria-selected="false"
                >
                  <i className="fa fa-bell text-center mr-1"></i>
                  Notificação
                </a>
              </div>
            </div>
            <div className="tab-content p-4 p-md-5" id="v-pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="account"
                role="tabpanel"
                aria-labelledby="account-tab"
              >
                <h3 className="mb-4">Informações da Conta</h3>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Primeiro Nome</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>último Nome</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Email</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Telefone</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Designação</label>
                      <input type="text" className="form-control" value="Cliente" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Bio</label>
                      <textarea className="form-control">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Labore vero enim error similique quia numquam ullam corporis
                        officia odio repellendus aperiam consequatur laudantium
                        porro voluptatibus, itaque laboriosam veritatis
                        voluptatum distinctio!
                      </textarea>
                    </div>
                  </div>
                </div>
                <div>
                  <button className="btn btn-primary">Update</button>
                  <button className="btn btn-light">Cancel</button>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="password"
                role="tabpanel"
                aria-labelledby="password-tab"
              >
                <h3 className="mb-4">Password Settings</h3>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Old password</label>
                      <input type="password" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
```jsx
                    <div className="form-group">
                      <label>New password</label>
                      <input type="password" className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Confirm new password</label>
                      <input type="password" className="form-control" />
                    </div>
                  </div>
                </div>
                <div>
                  <button className="btn btn-primary">Update</button>
                  <button className="btn btn-light">Cancel</button>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="security"
                role="tabpanel"
                aria-labelledby="security-tab"
              >
                <h3 className="mb-4">Security Settings</h3>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Login</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Two-factor auth</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="recovery"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="recovery"
                        >
                          Recovery
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <button className="btn btn-primary">Update</button>
                  <button className="btn btn-light">Cancel</button>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="application"
                role="tabpanel"
                aria-labelledby="application-tab"
              >
                <h3 className="mb-4">Application Settings</h3>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="app-check"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="app-check"
                        >
                          App check
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck2"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck2"
                        >
                          Lorem ipsum dolor sit.
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <button className="btn btn-primary">Update</button>
                  <button className="btn btn-light">Cancel</button>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="notification"
                role="tabpanel"
                aria-labelledby="notification-tab"
              >
                <h3 className="mb-4">Notification Settings</h3>
                <div className="form-group">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="notification1"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="notification1"
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dolorum accusantium accusamus, neque cupiditate quis
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="notification2"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="notification2"
                    >
                      hic nesciunt repellat perferendis voluptatum totam porro
                      eligendi.
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="notification3"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="notification3"
                    >
                      commodi fugiat molestiae tempora corporis. Sed dignissimos
                      suscipit
                    </label>
                  </div>
                </div>
                <div>
                  <button className="btn btn-primary">Update</button>
                  <button className="btn btn-light">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Conta;
*/

import React, { useState } from 'react';
import Footer from '../../home/footer';
import Navbar from '../../home/navbar';
import NavbarPosLogin from '../../home/navbarPosLogin';

function Conta() {
  const nome = "<<Davi Siqueira>>";
  const [activeTab, setActiveTab] = useState('account');

  const handleTabClick = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
  };

  return (
    <div>
      
      <section className="py-5 my-5">
        <div className="container">
          <h1 className="mb-5">Configurações da Conta</h1>
          <div className="bg-white shadow rounded-lg d-block d-sm-flex">
            <div className="profile-tab-nav border-right">
              <div className="p-4">
                <div className="img-circle text-center mb-3">
                  <img src="img/user.png" alt="Image" className="shadow" />
                </div>
                <h4 className="text-center">Usuário</h4>
              </div>
              <div
                className="nav flex-column nav-pills"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <a
                  className={`nav-link ${
                    activeTab === 'account' ? 'active' : ''
                  }`}
                  id="account-tab"
                  data-toggle="pill"
                  href="#account"
                  role="tab"
                  aria-controls="account"
                  aria-selected={activeTab === 'account'}
                  onClick={() => handleTabClick('account')}
                >
                  <i className="fa fa-home text-center mr-1"></i>
                  Conta
                </a>
                <a
                  className={`nav-link ${
                    activeTab === 'password' ? 'active' : ''
                  }`}
                  id="password-tab"
                  data-toggle="pill"
                  href="#password"
                  role="tab"
                  aria-controls="password"
                  aria-selected={activeTab === 'password'}
                  onClick={() => handleTabClick('password')}
                >
                  <i className="fa fa-key text-center mr-1"></i>
                  Senha
                </a>
                <a
                  className={`nav-link ${
                    activeTab === 'security' ? 'active' : ''
                  }`}
                  id="security-tab"
                  data-toggle="pill"
                  href="#security"
                  role="tab"
                  aria-controls="security"
                  aria-selected={activeTab === 'security'}
                  onClick={() => handleTabClick('security')}
                >
                  <i className="fa fa-user text-center mr-1"></i>
                  Segurança
                </a>
                <a
                  className={`nav-link ${
                    activeTab === 'application' ? 'active' : ''
                  }`}
                  id="application-tab"
                  data-toggle="pill"
                  href="#application"
                  role="tab"
                  aria-controls="application"
                  aria-selected={activeTab === 'application'}
                  onClick={() => handleTabClick('application')}
                >
                  <i className="fa fa-tv text-center mr-1"></i>
                  Aplicação
                </a>
                <a
                  className={`nav-link ${
                    activeTab === 'notification' ? 'active' : ''
                  }`}
                  id="notification-tab"
                  data-toggle="pill"
                  href="#notification"
                  role="tab"
                  aria-controls="notification"
                  aria-selected={activeTab === 'notification'}
                  onClick={() => handleTabClick('notification')}
                >
                  <i className="fa fa-bell text-center mr-1"></i>
                  Notificação
                </a>
              </div>
            </div>
            <div className="tab-content p-4 p-md-5" id="v-pills-tabContent">
              <div
                className={`tab-pane fade ${
                  activeTab === 'account' ? 'show active' : ''
                }`}
                id="account"
                role="tabpanel"
                aria-labelledby="account-tab"
              >
                <h3 className="mb-4">Informações da Conta</h3>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Primeiro Nome</label>
                      <input
                        type="text"
                        className="form-control"
                       
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Último Nome</label>
                      <input
                        type="text"
                        className="form-control"
                        
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="text"
                        className="form-control"
                        
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Telefone</label>
                      <input
                        type="text"
                        className="form-control"
                        
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Designação</label>
                      <input
                        type="text"
                        className="form-control"
                        
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Bio</label>
                      <textarea className="form-control" ></textarea>
                    </div>
                  </div>
                </div>
                <div>
                  <button className="btn btn-primary">Update</button>
                  <button className="btn btn-light">Cancel</button>
                </div>
              </div>
              <div
                className={`tab-pane fade ${
                  activeTab === 'password' ? 'show active' : ''
                }`}
                id="password"
                role="tabpanel"
                aria-labelledby="password-tab"
              >
                <h3 className="mb-4">Password Settings</h3>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Old password</label>
                      <input
                        type="password"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>New password</label>
                      <input
                        type="password"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Confirm new password</label>
                      <input
                        type="password"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <button className="btn btn-primary">Update</button>
                  <button className="btn btn-light">Cancel</button>
                </div>
              </div>
              <div
                className={`tab-pane fade ${
                  activeTab === 'security' ? 'show active' : ''
                }`}
                id="security"
                role="tabpanel"
                aria-labelledby="security-tab"
              >
                <h3 className="mb-4">Security Settings</h3>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Login</label>
                      <input
                        type="text"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Two-factor auth</label>
                      <input
                        type="text"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="recovery"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="recovery"
                        >
                          Recovery
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <button className="btn btn-primary">Update</button>
                  <button className="btn btn-light">Cancel</button>
                </div>
              </div>
              <div
                className={`tab-pane fade ${
                  activeTab === 'application' ? 'show active' : ''
                }`}
                id="application"
                role="tabpanel"
                aria-labelledby="application-tab"
              >
                <h3 className="mb-4">Application Settings</h3>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="app-check"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="app-check"
                        >
                          App check
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck2"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck2"
                        >
                          Lorem ipsum dolor sit.
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <button className="btn btn-primary">Update</button>
                  <button className="btn btn-light">Cancel</button>
                </div>
              </div>
              <div
                className={`tab-pane fade ${
                  activeTab === 'notification' ? 'show active' : ''
                }`}
                id="notification"
                role="tabpanel"
                aria-labelledby="notification-tab"
              >
                <h3 className="mb-4">Notification Settings</h3>
                <div className="form-group">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="notification1"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="notification1"
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum accusantium accusamus, neque cupiditate quis
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="notification2"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="notification2"
                    >
                      hic nesciunt repellat perferendis voluptatum totam porro eligendi.
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="notification3"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="notification3"
                    >
                      commodi fugiat molestiae tempora corporis. Sed dignissimos suscipit
                    </label>
                  </div>
                </div>
                <div>
                  <button className="btn btn-primary">Update</button>
                  <button className="btn btn-light">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}

export default Conta;

