import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import {List} from 'antd-mobile'

const Item = List.Item;

export default class OrgList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orgList:[]
        };
    }
    componentWillMount() {
        let inspect = global.inspect;
        this.setState({
            orgList:inspect.TeamList[global.currentUser["i"]].DepartmentList,
        })
    }
    beginCheck=(org)=>{
        const {navigate} = this.props.navigation;
        // 存点位Id
        global.department=org;
        navigate("PointTypeList", { org: org.Name })
    }
    render() {
        return (
            <View>
                <List className="my-list">
                    {this.state.orgList.map((val,index)=>{
                        return(<Item key={"orgitem"+index} arrow="horizontal" multipleLine onClick={this.beginCheck.bind(this,val)}>{val.Name}</Item>)
                    })}
                </List>
            </View>
        )
    }
}

const styles = StyleSheet.create({
});