/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

const jokenpoImg = require('./imgs/jokenpo.png');
const pedraImg = require('./imgs/pedra.png');
const papelImg = require('./imgs/papel.png');
const tesouraImg = require('./imgs/tesoura.png');
const blankImg = require('./');

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      escolhaUsuario: '',
      escolhaComputador: '',
      resultado: '',
      txtUsuario: '',
      txtComputador: '',
      imgUsuario: blankImg,
      imgComputador: blankImg
    };
  }

  jokenpo(escolhaUsuario) {
    //Gerar número aleatório
    const numAleatorio = Math.floor(Math.random() * 3);

    const escolhas = ['pedra', 'papel', 'tesoura'];

    const escolhaComputador = escolhas[numAleatorio];

    let resultado = '';

    if (escolhaComputador === 'pedra') {
      switch (escolhaUsuario) {
        case 'pedra':
          resultado = 'Empate!';
          break;
        case 'papel':
          resultado = 'Você ganhou!';
          break;
        case 'tesoura':
          resultado = 'Você perdeu!';
          break;
        default:
          break;
      }
    }

    if (escolhaComputador === 'papel') {
      switch (escolhaUsuario) {
        case 'pedra':
          resultado = 'Você perdeu!';
          break;
        case 'papel':
          resultado = 'Empate!';
          break;
        case 'tesoura':
          resultado = 'Você ganhou!';
          break;
        default:
          break;
      }
    }
    
    if (escolhaComputador === 'tesoura') {
      switch (escolhaUsuario) {
        case 'pedra':
          resultado = 'Você ganhou!';
          break;
        case 'papel':
          resultado = 'Você perdeu!';
          break;
        case 'tesoura':
          resultado = 'Empate!';
          break;
        default:
          break;
      }
    }

    switch (escolhaComputador) {
      case 'pedra':
        this.setState({
          imgComputador: pedraImg
        });
        break;
      case 'papel':
        this.setState({
          imgComputador: papelImg
        });
        break;
      case 'tesoura':
        this.setState({
          imgComputador: tesouraImg
        });
        break;
      default:
        break;
    }

    switch (escolhaUsuario) {
      case 'pedra':
        this.setState({
          imgUsuario: pedraImg
        });
        break;
      case 'papel':
        this.setState({
          imgUsuario: papelImg
        });
        break;
      case 'tesoura':
        this.setState({
          imgUsuario: tesouraImg
        });
        break;
      default:
        break;
    }

    this.setState({
      escolhaUsuario,
      escolhaComputador,
      resultado,
      txtUsuario: 'Você',
      txtComputador: 'Computador',
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerImage}>
          <Image style={styles.TopImage} source={jokenpoImg} />
        </View>
        <View style={styles.containerPanel}>
          <View style={styles.btnEscolha}>
            <Button title='Pedra' onPress={() => { this.jokenpo('pedra'); }} />
          </View>
          <View style={styles.btnEscolha}>
            <Button title='Papel' onPress={() => { this.jokenpo('papel'); }} />
          </View>
          <View style={styles.btnEscolha}>
            <Button title='Tesoura' onPress={() => { this.jokenpo('tesoura'); }} />
          </View>
        </View>
        <View style={styles.containerBottom}>
          <Text style={styles.txtResultado}>{this.state.resultado}</Text>
          <View style={styles.containerJogador}>
            <Text style={styles.txtJogador}>{this.state.txtUsuario}</Text>
            <Image source={this.state.imgUsuario} />
          </View>
          <View style={styles.containerJogador}>
            <Text style={styles.txtJogador}>{this.state.txtComputador}</Text>
            <Image source={this.state.imgComputador} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  containerImage: {
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  TopImage: {
    flex: 1
  },
  btnEscolha: {
    width: 90
  },
  containerPanel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  containerBottom: {
    alignItems: 'center',
    marginTop: 10
  },
  txtResultado: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    height: 60
  },
  containerJogador: {
    marginBottom: 20,
    alignItems: 'center'
  },
  txtJogador: {
    fontSize: 18
  }
});
