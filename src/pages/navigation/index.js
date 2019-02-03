import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import {
  AtNavBar,
  AtTabBar,
  AtTabs,
  AtTabsPane,
  AtSegmentedControl,
  AtPagination,
  AtDrawer,
} from 'taro-ui'
import DocsHeader from '../components/doc-header'
import NavigatorBtn from '../components/navigator-btn'
import './index.scss'

export default class NavigationPage extends Taro.Component {
  config = {
    navigationBarTitleText: 'Taro UI'
  }

  constructor () {
    super(...arguments)
    this.state = {
      tabbarCurrent: 0,
      tabsListValue: 0,
      tabsListValue2: 0,
      segmentedValue: 0,
      leftDrawerShow: false,
    }
  }

  leftDrawerClick () {
    this.setState({
      leftDrawerShow: !this.state.leftDrawerShow,
    })
  }

  onDrawerClose () {
    this.setState({
      leftDrawerShow: !this.state.leftDrawerShow,
    })
  }

  handleTabBarClick (value) {
    this.setState({
      tabbarCurrent: value
    })
  }

  handleTabsClick (stateName, value) {
    this.setState({
      [stateName]: value
    })
  }

  handleSegmenentedClick (value) {
    this.setState({
      segmentedValue: value
    })
  }

  render () {
    const { tabsListValue, tabsListValue2, segmentedValue } = this.state
    const tabbarList = [{ title: '待办事项', iconType: 'bullet-list', text: 'new' }, { title: '拍照', iconType: 'camera' }, { title: '文件夹', iconType: 'folder', text: '100', max: '99' }]
    const tabList = [
      { title: '标签页1' },
      { title: '标签页2' },
      { title: '标签页3' },
      { title: '标签页4' },
      { title: '标签页5' },
      { title: '标签页6' }
    ]
    const segmentedList = ['标签页1', '标签页2', '标签页3']

    return (
      <View className='page'>
        {/* S Header */}
        <DocsHeader title='导航' desc='7 个组件'></DocsHeader>
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          {/* NavBar */}
          <View className='panel'>
            <View className='panel__title'>NavBar 导航栏</View>
            <View className='panel__content no-padding'>
              <View className='example-item'>
                <AtNavBar
                  title='NavBar 导航栏示例'
                  leftIconType='chevron-left'
                  rightFirstIconType='bullet-list'
                  rightSecondIconType='user'
                />
              </View>
            </View>
          </View>

          {/* TabBar */}
          <View className='panel'>
            <View className='panel__title'>TabBar 标签栏</View>
            <View className='panel__content no-padding'>
              <View className='example-item'>
                <AtTabBar tabList={tabbarList} onClick={this.handleTabBarClick.bind(this)} current={this.state.tabbarCurrent} />
              </View>
            </View>
          </View>

          {/* Tabs */}
          <View className='panel'>
            <View className='panel__title'>Tabs 标签页</View>
            <View className='panel__content'>
              <View className='example-item'>
                <View className='example-item__desc'>水平标签页</View>
                <AtTabs swipeable={false} scroll current={tabsListValue} tabList={tabList} onClick={this.handleTabsClick.bind(this, 'tabsListValue')}>
                  <AtTabsPane current={tabsListValue} index={0}>
                    <View className='tab-content'>标签页一的内容</View>
                  </AtTabsPane>
                  <AtTabsPane current={tabsListValue} index={1}>
                    <View className='tab-content'>标签页二的内容</View>
                  </AtTabsPane>
                  <AtTabsPane current={tabsListValue} index={2}>
                    <View className='tab-content'>标签页三的内容</View>
                  </AtTabsPane>
                  <AtTabsPane current={tabsListValue} index={3}>
                    <View className='tab-content'>标签页四的内容</View>
                  </AtTabsPane>
                  <AtTabsPane current={tabsListValue} index={4}>
                    <View className='tab-content'>标签页五的内容</View>
                  </AtTabsPane>
                  <AtTabsPane current={tabsListValue} index={5}>
                    <View className='tab-content'>标签页六的内容</View>
                  </AtTabsPane>
                </AtTabs>
              </View>

              <View className='example-item'>
                <View className='example-item__desc'>垂直标签页</View>
                <AtTabs height='200px' scroll tabDirection='vertical' current={tabsListValue2} tabList={tabList} onClick={this.handleTabsClick.bind(this, 'tabsListValue2')}>
                  <AtTabsPane tabDirection='vertical' current={tabsListValue2} index={0}>
                    <View className='tab-content--vertical'>标签页一的内容</View>
                  </AtTabsPane>
                  <AtTabsPane tabDirection='vertical' current={tabsListValue2} index={1}>
                    <View className='tab-content--vertical'>标签页二的内容</View>
                  </AtTabsPane>
                  <AtTabsPane tabDirection='vertical' current={tabsListValue2} index={2}>
                    <View className='tab-content--vertical'>标签页三的内容</View>
                  </AtTabsPane>
                  <AtTabsPane tabDirection='vertical' current={tabsListValue2} index={3}>
                    <View className='tab-content--vertical'>标签页四的内容</View>
                  </AtTabsPane>
                  <AtTabsPane tabDirection='vertical' current={tabsListValue2} index={4}>
                    <View className='tab-content--vertical'>标签页五的内容</View>
                  </AtTabsPane>
                  <AtTabsPane tabDirection='vertical' current={tabsListValue2} index={5}>
                    <View className='tab-content--vertical'>标签页六的内容</View>
                  </AtTabsPane>
                </AtTabs>
              </View>
            </View>
          </View>

          {/* SegmentedControl */}
          <View className='panel'>
            <View className='panel__title'>SegmentedControl 分段器</View>
            <View className='panel__content'>
              <View className='example-item'>
                <AtSegmentedControl onClick={this.handleSegmenentedClick.bind(this)} current={segmentedValue} values={segmentedList} />
                <View className='tab-content'>标签 {segmentedValue + 1} 的内容</View>
              </View>
            </View>
          </View>

          {/* Pagination */}
          <View className='panel'>
            <View className='panel__title'>Pagination 分页器</View>
            <View className='panel__content no-padding'>
              <View className='example-item'>
                <View className='example-item__desc'>基础</View>
                <AtPagination total={50} pageSize={10} current={1}></AtPagination>
              </View>

              <View className='example-item'>
                <View className='example-item__desc'>图标</View>
                <AtPagination icon total={50} pageSize={10} current={1}></AtPagination>
              </View>
            </View>
          </View>

          {/* Drawer */}
          <View className='panel'>
            <View className='panel__title'>Drawer 抽屉</View>
            <View className='panel__content'>
              <View className='example-item'>
                <View className='demo-btn' onClick={this.leftDrawerClick.bind(this)}>左边滑出</View>
                <AtDrawer show={this.state.leftDrawerShow} mask onClose={this.onDrawerClose.bind(this)} items={['菜单1', '菜单2']}>
                </AtDrawer>
              </View>
            </View>
          </View>

          {/* Indexes */}
          <View className='panel'>
            <View className='panel__title'>Indexes 索引选择器</View>
            <View className='panel__content'>
              <View className='example-item'>
                <NavigatorBtn parent='navigation' name='indexes'></NavigatorBtn>
              </View>
            </View>
          </View>

        </View>
        {/* E Body */}
      </View>
    )
  }
}
