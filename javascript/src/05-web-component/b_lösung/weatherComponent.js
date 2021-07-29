import { html, LitElement } from "lit";

export class WeatherComponent extends LitElement {
  static get properties() {
    return {
      city: { type: String },
      data: { attribute: false },
    };
  }

  render() {
    return html`
      Stadt: <input value="${this.city}" @input="${this.changeCity}" />
      <br />
      <button @click="${this.getWeather}">Suchen</button><br />

      ${this.data
        ? html`Temp: <span>${this.data?.main.temp}</span><br />
            Name: <span>${this.data?.name}</span><br />`
        : ``}
    `;
  }

  changeCity(event) {
    const input = event.target;
    this.city = input.value;
  }

  getWeather() {
    const baseUrl = "http://api.openweathermap.org/data/2.5/weather";
    const params = `?q=${this.city}&appid=f3a44fe9aaf8d153e7e1a56870852478&units=metric`;

    fetch(baseUrl + params)
      .then((response) => response.json())
      .then((data) => {
        this.data = data;
      });
  }
}

customElements.define("weather-component", WeatherComponent);
