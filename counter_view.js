import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class CounterView extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <View style={[styles.container]}>
                <Text style={[styles.countText]}>
                    {this.props.count}
                </Text>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    countText: {
        fontSize: 25
    },
});
