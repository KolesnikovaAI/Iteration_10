import "./App.css";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    //функция,получающая значение из инпута
    this.setState({ value: event.target.value }); //меняем состояние value, получая значение из инпута
  }

  getUser(login) {
    //функция, возвращающая промис с объектом пользователя
    return fetch(`https://api.github.com/users/${login}`).then((response) =>
      response.json()
    );
  }

  async handleSubmit(event) {
    //async -функция асинхронная
    event.preventDefault(); //отменяет действия по умолчанию
    let user = await this.getUser(this.state.value); // ждет,когда выполниться промис и придет результат для значения this.state.value
    this.setState({ id: user.id }); //изменяем состояние присваивая значение из user
    this.setState({ imgSrc: user.avatar_url });
  }
  render() {
    return (
      <div>
        <h1>Поиск информации о GitHub пользователе</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Введите GIT"
            onChange={this.handleChange}
          ></input>
          <input type="submit" value="GO!"></input>
        </form>
        <div>{this.state.id}</div>
        <img src={this.state.imgSrc}></img>
      </div>
    );
  }
}

export default App;
