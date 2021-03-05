import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { heightscale, widthScale, CompanyFont } from '../utils/Utils';

export default class CustomTimeComponent extends Component {
    constructor() {
        super();
        this.state = {
            selectedTime: '',
            timeList: [],
            // list: ['rishav','saumya','ujjwal','aruna','bunti','rubi']
        }
    }
    componentWillMount() {

        this.setState({ timeList: this.getTime() });

    }
    getTime() {

        const time = [];

        // time.push({ status: true });
        let data = this.props.data

        for (i = 0; i < this.props.data.length; i++) {
            if (this.props.selectedSlot === data[i].startsAt) {
                time.push({ status: true });
            } else {

                time.push({ status: false });
            }
        }
        return time;
    }

    render() {
        const { timeList } = this.state;
        return (
            <View style={{}}>
                <View style={styles.timeViewContainer}>

                    {
                        this.props.data.length > 0
                            ?

                            this.props.data.map((item, i) =>

                                <View style={{
                                    backgroundColor: this.state.timeList[i].status ? '#FF7A2A' : '#ffffff',
                                    flex: 1, alignItems: 'center', paddingVertical: heightscale(2),

                                    paddingVertical: heightscale(10)
                                    , margin: 2, borderRadius: 20
                                }}>

                                    <TouchableOpacity
                                        activeOpacity={0.75}
                                        onPress={() => {
                                            const newtimeList = timeList.map((item1, j) => {
                                                if (i === j) item1.status = true;
                                                else item1.status = false;
                                                return item1;
                                            })
                                            // console.log('new---', newDateList)
                                            this.props.onViewTimeChange(item.id)
                                            this.setState({ timeList: newtimeList })

                                        }}
                                    >
                                        <Text style={{
                                            color: this.state.timeList[i].status ? '#ffffff' : '#000000',
                                            fontSize: 12, fontFamily: CompanyFont.RobotoMedium,

                                        }}>{item.startsAt.split(':')[0]+':'+item.startsAt.split(':')[1]+' - '+item.endsAt.split(':')[0]+':'+item.endsAt.split(':')[1]}</Text>
                                    </TouchableOpacity>
                                </View>
                            )
                            : null
                    }

                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    timeViewContainer: {
        marginLeft: widthScale(10),
        marginTop: heightscale(10),
        flexDirection: 'row',
        alignItems: 'center',
        height: heightscale(50),
    },

})
