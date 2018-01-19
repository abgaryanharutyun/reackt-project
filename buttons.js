import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default class Button extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <View style={[styles.container]}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.callback()}
                >
                    <Text style={styles.text}> {this.props.text || ''} </Text>
                </TouchableOpacity>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
    },
    button: {
    },
    text: {
        fontSize: 25
    }
});
