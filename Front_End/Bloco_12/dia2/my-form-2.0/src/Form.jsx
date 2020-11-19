import React from 'react';
import states from './states';
import './Form.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleCPF = this.handleCPF.bind(this);
    this.handleAdress = this.handleAdress.bind(this);
    this.handleCity = this.handleCity.bind(this);
    this.handleState = this.handleState.bind(this);
    this.handleTypeHome = this.handleTypeHome.bind(this);
    this.state = {
      name: '',
      email: '',
      cpf: '',
      adress: '',
      city: '',
      state: '',
      typeHome: '',
    };
  }

  handleName({ target }) {
    this.setState({ name: target.value });
    console.log(this.state);
  }

  handleEmail({ target }) {
    this.setState({ email: target.value });
  }

  handleCPF({ target }) {
    this.setState({ cpf: target.value });
  }

  handleAdress({ target }) {
    this.setState({ adress: target.value });
  }

  handleCity({ target }) {
    this.setState({ city: target.value });
  }

  handleState({ target }) {
    this.setState({ state: target.value });
  }

  handleTypeHome({ target }) {
    this.setState({ typeHome: target.value });
  }
  render() {
    const { name, email, cpf, adress, city, state } = this.state;
    return (
      <div>
        <div>
          <form>
            <fieldset className='MyForm'>
              <label htmlFor='name'>Nome</label>
              <input
                type='text'
                id='name'
                maxLength='40'
                onChange={this.handleName}
                value={name}
                required
              />
              <label htmlFor='email'>Email</label>

              <input
                type='text'
                id='email'
                maxLength='50'
                onChange={this.handleEmail}
                value={email}
                required
              />
              <label htmlFor='cpf'>CPF</label>

              <input
                type='text'
                id='cpf'
                maxLength='11'
                onChange={this.handleCPF}
                value={cpf}
                required
              />
              <label htmlFor='adress'>Endereço</label>
              <input
                type='text'
                id='adress'
                maxLength='200'
                onChange={this.handleAdress}
                value={adress}
                required
              />
              <label htmlFor='city'>Cidade</label>

              <input
                type='text'
                id='city'
                maxLength='28'
                onChange={this.handleCity}
                value={city}
                required
              />
              <label htmlFor='state'>Nome</label>

              <select
                name=''
                id='state'
                onChange={this.handleState}
                value={state}
                required>
                {states.map((state) => (
                  <option value={state}>{state}</option>
                ))}
              </select>
              <div className='radio'>
                <label htmlFor='Casa'>Casa</label>
                <input
                  type='radio'
                  name='TipoCasa'
                  id=''
                  value='Casa'
                  onClick={this.handleTypeHome}
                />
                <label htmlFor='Apartamento'>Apartamento</label>
                <input
                  type='radio'
                  name='TipoCasa'
                  id=''
                  value='Apartamento'
                  onClick={this.handleTypeHome}
                />
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
