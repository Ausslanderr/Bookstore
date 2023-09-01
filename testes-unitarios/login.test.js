//const  { logUser }  = require("../api/controllers/user.js")
//const  bcrypt  = require("bcryptjs");
import { logUser } from '../api/controllers/user.js';
import bcrypt from 'bcryptjs';
import axios from 'axios';
jest.mock('axios');
jest.mock('bcryptjs');

describe('Teste de Login', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('deve fazer o login do usuário', async () => {
    const req = {
      body: {
        email: 'admin@gmail.com',
        Senha: 'teste',
      },
      session: {},
    };
    //axios.post.mockResolvedValue({ data: 'Admin Login successful' });

    const response = await axios.post("http://localhost:8800/login", {
        req
      });

    expect(response.data).toBe("Admin Login successful");
  });

});