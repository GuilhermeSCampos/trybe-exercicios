import React from "react";

class PersonalData extends React.Component {
    render () {
        return (
            <form>
            <fieldset>
              <label>Nome:
                <input type="text" maxLength="40" required name="name"/>
              </label>
              <label>Email:
                <input maxLength='50' required name="email"/>
              </label>
              <label>CPF:
                <input maxLength='11' required name="cpf"/>
              </label>
              <label>Endereço:
                <input maxLength='200' required name="endereco"/>
              </label>
              <label>Cidade:
                <input maxLength='28' required name="Cidade" onBlur={() => {}}/>
              </label>
            </fieldset>
          </form>
        )
    }
}