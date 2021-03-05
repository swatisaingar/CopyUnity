import React, { Component } from 'react'
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    Dimensions
} from 'react-native'
import DatePicker from 'react-native-datepicker';
import moment from 'moment'
import { heightscale, widthScale, CompanyFont } from '../utils/Utils';

const { width } = Dimensions.get('window');

export default class DateComponent extends Component {

    constructor() {
        super();
        this.state = {
            selectedDate: '',
            dateList: [],
        }
    }

    componentDidMount() {
        let today = this.props.data
        var currentDate = moment(today).format('DD-MMM-YYYY');
        console.log('dateisherecoming',currentDate+'')
        this.setState({ dateList: this.getCalender('DD ddd', currentDate) });

    }

    getCalender(format, currentDate) {
        // dddd - day name (sunday, monday)
        // ddd - day name (sun, mon)
        // D - date of month (1, 2, 3)
        //Do -date of month (1st , 2nd)
        // MM - month no. (1,2,3)
        // MMM - month no (jan, feb.)
        const cal = [];
        let tomorrow = this.dateToUtc(currentDate);

        let today = moment(tomorrow).format(format);
        let dateInYYYYMMDD = moment(tomorrow).format('YYYY-MM-DD');
        cal.push({ data: today, status: true, dateInYYYYMMDD: dateInYYYYMMDD });

        for (i = 0; i < 5; i++) {
            today = moment(tomorrow).add((i + 1), 'day').format(format);
            dateInYYYYMMDD = moment(tomorrow).add((i + 1), 'day').format('YYYY-MM-DD');
            cal.push({ data: today, status: false, dateInYYYYMMDD: dateInYYYYMMDD });
        }
        return cal;
    }
    dateToUtc(date) {
        let mm = ['Jan', 'Feb', "Mar", 'Apr', 'May', "Jun", 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        const fullDate = date.split('-');
        // console.log('pkp', mm.indexOf(fullDate[1]))
        return Date.UTC(fullDate[2], mm.indexOf(fullDate[1]), fullDate[0], 0, 0, 0);
    }
    changeToYYYYMMDD(date) {
        let mm = ['Jan', 'Feb', "Mar", 'Apr', 'May', "Jun", 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        let _date = date.split('-');
        return '' + _date[2] + '-' + (mm.indexOf(_date[1]) + 1) + '-' + _date[0]
    }
    render() {
        const { dateList } = this.state;
        return (
            <View style={styles.parentContainer}>
                <View style={styles.calenderChildContainer}>
                    {
                        this.state.dateList.length > 0
                            ?
                            this.state.dateList.map((item, i) =>
                                <TouchableOpacity
                                    activeOpacity={0.75}
                                    // onPress={() => {
                                    //     const newDateList = dateList.map((item1, j) => {
                                    //         if (i === j) item1.status = true;
                                    //         else item1.status = false;
                                    //         return item1;
                                    //     })
                                    //     // console.log('new---', newDateList)
                                    //     this.props.onViewDateChange(item.dateInYYYYMMDD)
                                    //     this.setState({ dateList: newDateList })
                                    //     // this.onClickBundle(item.data, item.index, 'date', position)

                                    //     // this.setState({ _selectedItemsTime: this.getSelectedItemsTime() })
                                    //     // this.setState({ showTicketView: false })
                                    // }}
                                    style={{
                                        width: width / 8,
                                        alignItems: 'center',
                                        paddingTop: heightscale(18), paddingBottom: heightscale(18),
                                        borderRadius: 30, marginHorizontal: 3,
                                        backgroundColor: item.status ? '#FF7A2A' : '#ffffff'
                                    }}>
                                    {/* {console.log('itemcal--', item)} */}
                                    <Text style={{
                                        fontFamily: CompanyFont.RobotoMedium,
                                        color: item.status ? '#ffffff' : '#000000',
                                        alignSelf: 'center', fontSize: 12
                                    }}>{item.data.split(' ')[1]}{"\n"}{item.data.split(' ')[0]}</Text>
                                </TouchableOpacity>
                            )
                            : null
                    }
                </View>
                <DatePicker
                    style={{
                        alignSelf: 'center',
                        alignItems: 'flex-start',
                        // height: 50,
                        width: '100%',
                        borderWidth: 0,
                        borderRadius: 0,
                        borderColor: '#ffffff',
                        fontWeight: '200',
                        
                        marginLeft: widthScale(10)
                    }}
                    disabled = {true}
                    mode="date"
                    format="DD-MMM-YYYY"
                    minDate={new Date()}
                    // maxDate={new Date(new Date().getFullYear() + 30, 11, 31)}
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    hideText={true}
                    onDateChange={(date) => {
                        this.setState({
                            // month: date,
                            dateList: this.getCalender('DD ddd', date),
                            // _selectedItems: this.getSelectedItems(),
                            selectedDate: this.changeToYYYYMMDD(date)
                        })
                        // this.setState({ _selectedItemsTime: this.getSelectedItemsTime() })
                        // this.setState({ showTicketView: false })
                        
                    }}
                    onDateChange={this.props.onDateChange}
                />

            </View>
        )
    }
}
const styles = StyleSheet.create({
    parentContainer: {
        flexDirection: 'row',
        height: heightscale(80),
    },
    calenderChildContainer: {
        width: widthScale(310),
        marginLeft: widthScale(5),
        flexDirection: 'row',
        alignItems: 'center'
    },
})