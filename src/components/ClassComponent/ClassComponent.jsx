import React from 'react';
import style from './ClassComponent.module.css';
import PropTypes from 'prop-types';

export class ClassComponent extends React.Component {
  state = {
    result: 'Результат',
    userNumber: '',
    randomNumber:
      Math.floor(Math.random() * this.props.max - this.props.min) +
      this.props.min,
    count: 0,
    isHide: true,
  };


  handleSubmit = e => {
    e.preventDefault();

    this.setState(state => ({
      count: state.count + 1,
    }));

    this.setState(state => {
      if (!state.userNumber) {
        return {result: 'Введите число'};
      }

      if (state.userNumber > state.randomNumber) {
        return {
          result: `${state.userNumber} больше загаданного`,
          userNumber: '',
        };
      }

      if (state.userNumber < state.randomNumber) {
        return {
          result: `${state.userNumber} меньше загаданного`,
          userNumber: '',
        };
      }

      return {
        isHide: false,

        result: `Вы угадали загаданное число ${state.userNumber}
        попыток ${state.count}`,
        userNumber: '',
      };
    });
  };

  handleChange = e => {
    this.setState((state, props) => ({
      userNumber: e.target.value,
    }), () => {
      console.log(this.state);
    });
  };

  render() {
    console.log('this.state.count: ', this.state.count);
    const isHide = this.state.isHide;
    console.log('isHide: ', isHide);

    let button;
    if (!isHide) {
      <button className={style.btn}></button>;
    }

    return (
      <div className={style.game}>
        <p className={style.result}>{this.state.result}</p>
        <form className={style.form} onSubmit= {this.handleSubmit}>
          <label className={style.label} htmlFor='user_number'>
            Угадай число
          </label>
          <input className={style.input} type='number' id='user_number'
            onChange={this.handleChange} value={this.state.userNumber}/>
          <button className={style.btn}>Угадать</button>
          {button}
        </form>
      </div>
    );
  }
}

ClassComponent.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
};
