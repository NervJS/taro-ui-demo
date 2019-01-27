import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtCalendar } from 'taro-ui'
import DocsHeader from '../components/doc-header'
import './index.scss'

export default class BasicPage extends Taro.Component {
  config = {
    navigationBarTitleText: 'Taro UI'
  }

  state = {
    multiCurentDate: {
      start: Date.now()
    }
  }

  handleClick (key: string, value: string) {
    this.setState({
      [key]: value
    })
  }

  render () {
    return (
      <View className='page'>
        {/* S Header */}
        <DocsHeader title='Advanced' desc='1 component'></DocsHeader>
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          {/* Calendar */}
          <View className='panel'>
            <View className='panel__title'>Calendar</View>
            <View className='panel__content'>
              {/* 一般案例 */}
              <View className='example-item'>
                <View className='example-item__desc'>一般案例</View>
                <AtCalendar />
              </View>

              {/* 范围选择 */}
              <View className='example-item'>
                <View className='example-item__desc'>范围选择</View>
                <AtCalendar isMultiSelect currentDate={this.state.multiCurentDate} />
              </View>

              <View className='example-item'>
                <View
                  className='demo-btn'
                  onClick={this.handleClick.bind(this, 'multiCurentDate', {
                    start: '2018/10/28',
                    end: '2018/11/11'
                  })}
                >设置选择区间为 2018/10/28 - 2018/11/11</View>
              </View>
            </View>
          </View>
        </View>
        {/* E Body */}
      </View>
    )
  }
}
