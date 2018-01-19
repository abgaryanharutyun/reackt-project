import React from 'react';
import {StyleSheet, View} from 'react-native';
import CounterView from './counter_view';
import Button from './buttons'
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this._increment = this._increment.bind(this);
        this._decrement = this._decrement.bind(this);
    }

    render() {
        return (
            <View style={styles.container}>
                <Button callback={this._increment} text="Up"/>
                <CounterView count={this.state.count}/>
                <Button callback={this._decrement} text="Down"/>
            </View>
        );
    }

    _increment() {
        this.setState({
            count: this.state.count + 1
        });
    }

    _decrement() {
        this.setState({
            count: this.state.count - 1
        });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
