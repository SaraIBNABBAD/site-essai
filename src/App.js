import React, { Component } from "react";
import "./index.css";
import image1 from "./image.jpg";
class Nav extends Component {
  render() {
    return (
      <div>
        <div className="Nav">
          <ul>
            <a href="#" className="link">
              <li>Home</li>
            </a>
            <a href="#" className="link">
              <li>Service</li>
            </a>
            <a href="#" className="link">
              <li>About US</li>
            </a>
            <a href="#" className="link">
              <li>Contact</li>
            </a>
          </ul>
        </div>
        <div className="img">
          <img src={image1} alt="photo"></img>
        </div>
        <div className="text">
          <p>
            Un texte est une série orale ou écrite de mots perçus comme
            constituant un ensemble cohérent, porteur de sens et utilisant les
            structures propres à une langue (conjugaisons, construction et
            association des phrases…)1. Un texte n'a pas de longueur déterminée
            sauf dans le cas de poèmes à forme fixe comme le sonnet ou le haïku.
            L'étude formelle des textes s'appuie sur la linguistique, qui est
            l'approche scientifique du langage
          </p>
          <p>
            Un texte est une série orale ou écrite de mots perçus comme
            constituant un ensemble cohérent, porteur de sens et utilisant les
            structures propres à une langue (conjugaisons, construction et
            association des phrases…)1. Un texte n'a pas de longueur déterminée
            sauf dans le cas de poèmes à forme fixe comme le sonnet ou le haïku.
            L'étude formelle des textes s'appuie sur la linguistique, qui est
            l'approche scientifique du langage
          </p>
        </div>
        <div>
          <table className="table">
            <tr>
              <th>NOM</th>
              <th>PRENOM</th>
            </tr>
            <tr>
              <td>IBN ABBAD</td>
              <td>Sara</td>
            </tr>
            <tr>
              <td>SAIDI</td>
              <td>Salma</td>
            </tr>
            <tr>
              <td>ELBAIDAK</td>
              <td>Houda</td>
            </tr>
          </table>
        </div>
        <div className="text">
          <p>
            Un texte est une série orale ou écrite de mots perçus comme
            constituant un ensemble cohérent, porteur de sens et utilisant les
            structures propres à une langue (conjugaisons, construction et
            association des phrases…)1. Un texte n'a pas de longueur déterminée
            sauf dans le cas de poèmes à forme fixe comme le sonnet ou le haïku.
            L'étude formelle des textes s'appuie sur la linguistique, qui est
            l'approche scientifique du langage
          </p>
        </div>
        <div className="flex">
        <div>
        <h4>Our Newsletter</h4>
      <p>Tamen quem nulla quae legam multos aute sint culpaagna</p>
        </div>
        <div>
        <p>
        <em>Qui repudiandae et eum dolores alias sed ea. Qui suscipit veniam excepturi quod</em>
      <em>A108 Adam Street NY 535022, USA</em>
      <em>Qui repudiandae et eum dolores alias sed ea. Qui suscipit veniam excepturi quod</em>
        </p>
        </div>
        <div>
        <p><em><strong> Phone:</strong> +1 5589 55488 55
          <strong> Email:</strong> info@example.com</em></p>
        </div>
        </div>
        <div className="copy">
      &copy;&nbsp;&nbsp;Copyright Squadfree. All Rights Reserved
      <p>Designed by Sara IBN ABBAD</p>
    </div>
      </div>
    );
  }
}

export default Nav;


     