import React, { Component } from "react";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      visibility: "hidden",
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
    let user = await this.getUser(this.state.value); // ждет,когда выполниться промис и придет результат для значения this.state.value
    this.setState({
      id: user.id,
      date: user.created_at,
      imgSrc: user.avatar_url,
      repositorList: user.repos_url,
      visibility: "visible",
    }); //изменяем состояние присваивая значение из user как несколько свойств одного объекта
  }
  render() {
    return (
      <div>
        <h1>Поиск информации о GitHub пользователе</h1>
        <input
          type="text"
          placeholder="Введите GIT"
          onChange={this.handleChange}
        ></input>
        <input type="submit" value="GO!" onClick={this.handleSubmit}></input>
        {/* <div style={this.state.visibility}>ID</div> */}
        <div>ID</div>
        <div>{this.state.id}</div>
        <div>Дата создания</div>
        <div>{this.state.date}</div>
        <div>Список репозиториев</div>
        <a href={this.state.repositorList}>{this.state.repositorList}</a>
        <div>Аватар</div>
        <img src={this.state.imgSrc}></img>
      </div>
    );
  }
}

export default Profile;
