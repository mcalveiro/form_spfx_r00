// Este archivo representa un componente webpart para el registro de eventos.

// Importaciones necesarias
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import './EventRegistrationWpWebPart.module.scss';

// Interfaz de propiedades del componente webpart
export interface IEventRegistrationWpWebPartProps {
  description: string;
}

// Clase principal del componente webpart
export default class EventRegistrationWpWebPart extends BaseClientSideWebPart<IEventRegistrationWpWebPartProps> {

  // Método de renderizado del componente
  public render(): void {
    // Establecer el contenido HTML del componente
    this.domElement.innerHTML = `
      <!-- Aquí va el contenido HTML del componente -->
      <div id="container" class="container">
        <div class="panel">
          <table border="4" class="table">
            <tr>
              <td>Please Enter Registered User ID</td>
              <td><input type="text" id="txtID" class="form-control"></td>
              <td><input type="submit" id="btnSingleItemRead" value="Read Registered User Info" class="btn btn-primary buttons"></td>
            </tr>
            <tr>
              <td>User Name</td>
              <td><input type="text" id="txtUserName" class="form-control"></td>
            </tr> 
            <tr>
              <td>Email</td>
              <td><input type="email" id="txtEmail" class="form-control" ></td>
            </tr> 
            <tr>
              <td>Select Batch</td>
              <td>
                <select name="Batch" id="ddlBatch" class="form-control">
                  <option value="Batch1">Batch 1</option>
                  <option value="Batch2">Batch 2</option>
                  <option value="Batch3">Batch 3</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Select Level Of Knowledge</td>
              <td>
                <select name="LevelOfKnowledge" id="ddlLevelOfKnowledge" class="form-control">
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Expert">Expert</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <input type="submit" value="Create" id="btnCreate" class="btn btn-primary buttons">
                <input type="submit" value="Read" id="btnRead" class="btn btn-primary buttons">
                <input type="submit" value="Update" id="btnUpdate" class="btn btn-primary buttons">
                <input type="submit" value="Delete" id="btnDelete" class="btn btn-primary buttons">
              </td>
            </tr>
          </table>
        </div>
        <div id="divStatus"></div>
        <hr>
        <div id="listItems"></div>
      </div>
    `;
  }
}
