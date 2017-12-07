import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,Image
} from 'react-native';
import {Grid, List, Checkbox,Button, TextareaItem} from 'antd-mobile';

const CheckboxItem = Checkbox.CheckboxItem;
const Item = List.Item;
const Brief = Item.Brief;

const data = [
    {value: 0, label: '设置位置不符合要求'},
    {value: 1, label: '面积达不到要求 '},
];

export default class ProblemDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photoData: [{icon: '../../images/img.png'}],
            remark:'我是问题备注',
            problem:[]
        };
    }

    onReset = () => {
        //返回

    }

    render() {

        let dataArr = this.state.photoData;

        return (
            <View>
                <Grid data={dataArr}
                      columnNum={3}
                      renderItem={(dataItem, index) => {
                              return (<View style={{padding: 12.5}}>
                                  <Image source={require('../../images/img.png')} style={{width: 75, height: 75}}/>
                              </View>)
                      }}

                />
                <List renderHeader={() => '存在问题'}>
                    {data.map(i => (
                        <CheckboxItem disabled key={i.value}>
                            {i.label}
                        </CheckboxItem>
                    ))}
                </List>
                <List renderHeader={() => '问题备注'}>
                    <Item>
                        <Brief>{this.state.remark}</Brief>
                    </Item>
                </List>
                <List>
                    <Item>
                    <Button inline onClick={this.onReset}>返回</Button>
                    </Item>
                </List>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});