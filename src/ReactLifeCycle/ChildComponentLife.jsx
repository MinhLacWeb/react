import React, { Component } from 'react'


/*PureComponent giống component tuy nhiên không có lifecycles shouldComponentUpdate mà purecomponent sẽ tự
nhận biết giá trị props sau mỗi lần render có thay đổi hay không (nhận viết theo shallow compare - chỉ nhận biết được primitive value)
(kiểu dữ liệu cơ sở : number , string , boolean...)
*/
export default class ChildComponent extends Component {
    constructor(props){
        super(props);
        console.log('constructor Child');
        
    }

    static getDerivedStateFromProps(newProps,currentState){
        //trả về trước khi render
        console.log('getDerivedStateFromProps Child');
        return currentState;
    }

    shouldComponentUpdate(newProps,newState){
      console.log('newProps',newProps);
      console.log('this props',this.props);
      console.log('shouldComponentUpdate');

      if(newProps.number === this.props.number){
          return false
      }
      return true;
  }

  render() {
      console.log("render child");
    return (
      <div className='bg-dark text-white font-weight-bold'>
          <h3 className='p-5'>Child</h3>
          <p>{this.props.objectNum.number}</p>
         
      </div>
    )
  }

  componentDidMount(){
      console.log('componentDidMount Child');
  }
}
