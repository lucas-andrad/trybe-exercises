import React from 'react';
import states from './states';

class Form extends React.Component {
  render() {
    return (
      <div>
        <form>
          <fieldset>
            <input type='text' maxLength='40' onChange={} value={} required />
            <input type='text' maxLength='50' onChange={} value={} required />
            <input type='text' maxLength='11' onChange={} value={} required />
            <input type='text' maxLength='200' onChange={} value={} required />
            <input type='text' maxLength='28' onChange={} value={} required />
            <select name='' id='state' onChange={} required>
              {states.map((state) => (
                <option value={state}>{state}</option>
              ))}
            </select>
            <input type='radio' name='Casa' id='' value='Casa' onChange={}/>
            <input type='radio' name='Apartamento' id='' value='Apartamento' onChange={}/>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Form;
