import Taro from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import {
  AtActionSheet,
  AtActionSheetItem,
  AtActivityIndicator,
  AtMessage,
  AtModal,
  AtModalHeader,
  AtModalContent,
  AtModalAction,
  AtProgress,
  AtSwipeAction,
  AtToast,
} from 'taro-ui'
import DocsHeader from '../components/doc-header'
import './index.scss'

const OPTIONS = [
  {
    text: '删除',
    style: {
      color: '#333',
      backgroundColor: '#F7F7F7'
    }
  },
  {
    text: '确认',
    style: {
      backgroundColor: '#E93B3D'
    }
  }
]
const INIT_STATE = {
  image: '',
  icon: '',
  text: '',
  status: '',
  duration: 3000,
  hasMask: false,
  isOpened: false
}

export default class FeedbackPage extends Taro.Component {
  config = {
    navigationBarTitleText: 'Taro UI'
  }

  constructor () {
    super(...arguments)
    this.state = {
      isActionSheetOpened1: false,
      isActionSheetOpened2: false,
      isActionSheetOpened3: false,
      isModalOpened1: false,
      isModalOpened2: false,
      isModalOpened3: false,
      isModalOpened4: false,
      ...INIT_STATE,
    }
  }

  handleActionSheetClick (type) {
    this.setState({
      [`isActionSheetOpened${type}`]: true
    })
  }

  handleActionSheetCancel = () => {
    this.showToast('点击了取消按钮')
  }

  handleActionSheetClose (name) {
    this.setState({
      [`isActionSheetOpened${name}`]: false
    })
  }

  handleMessageClick (type) {
    Taro.atMessage({
      'message': '消息通知',
      'type': type,
    })
  }

  handleModalClick (type) {
    this.setState({
      [`isModalOpened${type}`]: true
    })
  }

  closeModal (type, msg) {
    this.setState({
      [`isModalOpened${type}`]: false
    })
    this.showToast(msg)
  }

  handleToastClick (text, icon, image, hasMask, status) {
    if (this.state.isOpened) {
      return this.setState(INIT_STATE)
    }
    const state = Object.assign(
      { ...INIT_STATE, isOpened: true },
      { text, icon, image, hasMask, status }
    )

    this.setState(state)
  }

  handleToastClose = () => {
    this.setState({
      isOpened: false
    })
  }

  showToast (name) {
    Taro.showToast({
      icon: 'none',
      title: name
    })
  }

  render () {
    return (
      <View className='page'>
        {/* S Header */}
        <DocsHeader title='操作反馈' desc='7 个组件'></DocsHeader>
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          {/* ActionSheet */}
          <View className='panel'>
            <View className='panel__title'>ActionSheet 动作面板</View>
            <View className='panel__content'>
              {/* 无 Title */}
              <View className='example-item'>
                <View className='demo-btn' onClick={this.handleActionSheetClick.bind(this, 1)}>无标题 ActionSheet</View>
              </View>

              {/* 含标题 */}
              <View className='example-item'>
                <View className='demo-btn' onClick={this.handleActionSheetClick.bind(this, 2)}>含标题 ActionSheet</View>
              </View>

              {/* 自定义选项 */}
              <View className='example-item'>
                <View className='demo-btn' onClick={this.handleActionSheetClick.bind(this, 3)}>自定义选项 ActionSheet</View>
              </View>
            </View>
          </View>

          {/* Message */}
          <View className='panel'>
            <View className='panel__title'>Message 消息通知</View>
            <View className='panel__content'>
              <View className='example-item'>
                {/* 普通提示 */}
                <View className='subitem'>
                  <View className='demo-btn' onClick={this.handleMessageClick.bind(this, '')}>普通提示</View>
                </View>
                {/* 成功提示 */}
                <View className='subitem'>
                  <View className='demo-btn' onClick={this.handleMessageClick.bind(this, 'success')}>成功提示</View>
                </View>
                {/* 错误提示 */}
                <View className='subitem'>
                  <View className='demo-btn' onClick={this.handleMessageClick.bind(this, 'error')}>错误提示</View>
                </View>
              </View>
              <View className='example-item'>
                {/* 警告提示 */}
                <View className='subitem'>
                  <View className='demo-btn' onClick={this.handleMessageClick.bind(this, 'warning')}>警告提示</View>
                </View>
                {/* 提示消息 */}
                <View className='subitem'>
                  <View className='demo-btn' onClick={this.handleMessageClick.bind(this, 'info')}>提示消息</View>
                </View>
              </View>
            </View>
          </View>

          {/* Modal */}
          <View className='panel'>
            <View className='panel__title'>Modal 模态框</View>
            <View className='panel__content'>
              {/* 基础模态框 */}
              <View className='example-item'>
                <View className='demo-btn' onClick={this.handleModalClick.bind(this, 1)}>打开基础模态框</View>
              </View>

              {/* 单个按钮 */}
              <View className='example-item'>
                <View className='demo-btn' onClick={this.handleModalClick.bind(this, 2)}>打开单个按钮模态框</View>
              </View>

              {/* 无标题 */}
              <View className='example-item'>
                <View className='demo-btn' onClick={this.handleModalClick.bind(this, 3)}>打开无标题模态框</View>
              </View>

              {/* 简化使用 */}
              <View className='example-item'>
                <View className='demo-btn' onClick={this.handleModalClick.bind(this, 3)}>打开简化使用模态框</View>
              </View>
            </View>
          </View>

          {/* Toast */}
          <View className='panel'>
            <View className='panel__title'>Toast 轻提示</View>
            <View className='panel__content'>
              <View className='example-item'>
                <View className='demo-btn' onClick={this.handleToastClick.bind(this, '文本内容', '', '', false, '')}>文本 Toast</View>
              </View>
              <View className='example-item'>
                <View className='demo-btn' onClick={this.handleToastClick.bind(this, '文本内容', 'analytics', '', false, '')}>文本 + ICON</View>
              </View>
              <View className='example-item'>
                <View className='demo-btn' onClick={this.handleToastClick.bind(this, '凹凸实验室', '', 'http://storage.360buyimg.com/mtd/home/group-21533885306540.png', false, '')}>自定义图片 Toast</View>
              </View>
              <View className='example-item'>
                <View className='demo-btn' onClick={this.handleToastClick.bind(this, '文本内透明遮罩层的作用在于不可点击下面的元素容', '', '', true, '')}>添加遮罩层 Toast</View>
              </View>
              <View className='example-item'>
                <View className='demo-btn' onClick={this.handleToastClick.bind(this, '错误提示', '', '', true, 'error')}>错误提示 Toast</View>
              </View>
              <View className='example-item'>
                <View className='demo-btn' onClick={this.handleToastClick.bind(this, '正确提示', '', '', true, 'success')}>正确提示 Toast</View>
              </View>
              <View className='example-item'>
                <View className='demo-btn' onClick={this.handleToastClick.bind(this, '正在加载…', '', '', true, 'loading')}>加载中 Toast</View>
              </View>
            </View>
          </View>

          {/* Progress */}
          <View className='panel'>
            <View className='panel__title'>Progress 进度条</View>
            {/* 基础进度条 */}
            <View className='panel__content panel__content--progress'>
              <View className='example-item__desc'>基础进度条</View>
              <View className='example-item'>
                <AtProgress percent={25} />
              </View>
              <View className='example-item'>
                <AtProgress percent={50} />
              </View>
              <View className='example-item'>
                <AtProgress percent={75} />
              </View>
            </View>

            {/* 隐藏进度文案 */}
            <View className='panel__content panel__content--progress'>
              <View className='example-item__desc'>隐藏进度文案</View>
              <View className='example-item'>
                <AtProgress percent={25} isHidePercent />
              </View>
              <View className='example-item'>
                <AtProgress percent={75} isHidePercent />
              </View>
            </View>

            {/* 不同的状态 */}
            <View className='panel__content panel__content--progress'>
              <View className='example-item__desc'>不同的状态</View>
              <View className='example-item'>
                <View className='example-item__desc'>暂停</View>
                <AtProgress percent={25} />
              </View>
              <View className='example-item'>
                <View className='example-item__desc'>进行中</View>
                <AtProgress percent={50} status='progress' />
              </View>
              <View className='example-item'>
                <View className='example-item__desc'>错误</View>
                <AtProgress percent={75} status='error' />
              </View>
              <View className='example-item'>
                <View className='example-item__desc'>已完成</View>
                <AtProgress percent={100} status='success' />
              </View>
            </View>
          </View>

          {/* SwipeAction */}
          <View className='panel'>
            <View className='panel__title'>SwipeAction 滑动操作</View>
            <View className='panel__content'>
              <View className='example-item example-item--border'>
                <AtSwipeAction onClick={this.handleSwipeClick} options={OPTIONS}>
                  <View className='normal'>AtSwipeAction 一般使用场景</View>
                </AtSwipeAction>
              </View>
            </View>
          </View>

          {/* Activity Indicator */}
          <View className='panel'>
            <View className='panel__title'>Activity Indicator 活动指示器</View>
            <View className='panel__content'>
              {/* 自定义尺寸 */}
              <View className='example-item'>
                <View className='subitem'>
                  <AtActivityIndicator size={20} ></AtActivityIndicator>
                </View>
                <View className='subitem'>
                  <AtActivityIndicator size={24} />
                </View>
                <View className='subitem'>
                  <AtActivityIndicator size={32} />
                </View>
              </View>

              {/* 自定义颜色 */}
              <View className='example-item'>
                <View className='subitem'>
                  <AtActivityIndicator color='#13CE66' />
                </View>
                <View className='subitem'>
                  <AtActivityIndicator color='#FF4949' />
                </View>
                <View className='subitem'>
                  <AtActivityIndicator color='#C9C9C9' />
                </View>
              </View>

              {/* 垂直水平居中 */}
              <View className='example-item indicator-panel'>
                <AtActivityIndicator mode='center' />
              </View>
              <View className='example-item indicator-panel'>
                <AtActivityIndicator mode='center' content='Loading...' />
              </View>
            </View>
          </View>

        </View>
        {/* E Body */}

        <AtActionSheet
          cancelText='取消'
          isOpened={this.state.isActionSheetOpened1}
          onClose={this.handleActionSheetClose.bind(this, 1)}
        >
          <AtActionSheetItem
            onClick={this.showToast.bind(this, '点击了按钮一')}
          >
            按钮一
          </AtActionSheetItem>
          <AtActionSheetItem
            onClick={this.showToast.bind(this, '点击了按钮二')}
          >
            按钮二
          </AtActionSheetItem>
        </AtActionSheet>

        <AtActionSheet
          cancelText='取消'
          isOpened={this.state.isActionSheetOpened2}
          onClose={this.handleActionSheetClose.bind(this, 2)}
          title='清除位置信息后， 别人将不能查看到你'
        >
          <AtActionSheetItem
            onClick={this.showToast.bind(this, '点击了按钮一')}
          >
            按钮一
          </AtActionSheetItem>
          <AtActionSheetItem
            onClick={this.showToast.bind(this, '点击了按钮二')}
          >
            按钮二
          </AtActionSheetItem>
        </AtActionSheet>

        <AtActionSheet
          cancelText='取消'
          isOpened={this.state.isActionSheetOpened3}
          onCancel={this.handleActionSheetCancel}
          onClose={this.handleActionSheetClose.bind(this, 3)}
          title='清除位置信息后， 别人将不能查看到你'
        >
          <AtActionSheetItem
            onClick={this.showToast.bind(this, '点击了按钮一')}
          >
            按钮一
          </AtActionSheetItem>
          <AtActionSheetItem
            onClick={this.showToast.bind(this, '点击了按钮二')}
          >
            按钮二
          </AtActionSheetItem>
          <AtActionSheetItem
            onClick={this.showToast.bind(this, '成功清除位置')}
          >
            <Text className='danger' style='color: #FF4949;'>清除位置信息并退出</Text>
          </AtActionSheetItem>
        </AtActionSheet>

        <AtMessage />

        {/* 基础模态框 */}
        <AtModal
          isOpened={this.state.isModalOpened1}
          onClose={this.closeModal.bind(this, 1, 'Modal被关闭了')}
        >
          <AtModalHeader>标题</AtModalHeader>
          <AtModalContent>
            <View className='modal-content'>
              这里是正文内容，欢迎加入京东凹凸实验室
              这里是正文内容，欢迎加入京东凹凸实验室
              这里是正文内容，欢迎加入京东凹凸实验室
            </View>
          </AtModalContent>
          <AtModalAction>
            <Button onClick={this.closeModal.bind(this, 1, '点击了取消')}>
              取消
            </Button>
            <Button
              onClick={this.closeModal.bind(this, 1, '点击了确定')}
            >
              确定
            </Button>
          </AtModalAction>
        </AtModal>

        {/* 单个按钮 */}
        <AtModal
          isOpened={this.state.isModalOpened2}
          onClose={this.closeModal.bind(this, 2, 'Modal被关闭了')}
        >
          <AtModalHeader>标题</AtModalHeader>
          <AtModalContent>
            <View className='modal-content'>
              这里是正文内容，欢迎加入京东凹凸实验室
            </View>
          </AtModalContent>
          <AtModalAction>
            <Button onClick={this.closeModal.bind(this, 2, '点击了确定')}>
              确定
            </Button>
          </AtModalAction>
        </AtModal>

        {/* 无标题 */}
        <AtModal
          isOpened={this.state.isModalOpened3}
          onClose={this.closeModal.bind(this, 3, 'Modal被关闭了')}
        >
          <AtModalContent>
            <View className='modal-content'>
              这里是正文内容，欢迎加入京东凹凸实验室
              这里是正文内容，欢迎加入京东凹凸实验室
              这里是正文内容，欢迎加入京东凹凸实验室
            </View>
          </AtModalContent>
          <AtModalAction>
            <Button onClick={this.closeModal.bind(this, 3, '点击了取消')}>
              取消
            </Button>
            <Button
              onClick={this.closeModal.bind(this, 3, '点击了确定')}
            >
              确定
            </Button>
          </AtModalAction>
        </AtModal>

        {/* 简化使用 */}
        <AtModal
          isOpened={this.state.isModalOpened4}
          title='标题'
          cancelText='取消'
          confirmText='确认'
          content='欢迎加入京东凹凸实验室\n\r欢迎加入京东凹凸实验室'
          onClose={this.closeModal.bind(this, 4, 'Modal被关闭了')}
          onCancel={this.closeModal.bind(this, 4, '点击了取消')}
          onConfirm={this.closeModal.bind(this, 4, '点击了确认')}
        />

        <AtToast
          icon={this.state.icon}
          text={this.state.text}
          image={this.state.image}
          status={this.state.status}
          hasMask={this.state.hasMask}
          isOpened={this.state.isOpened}
          duration={this.state.duration}
          onClose={this.handleToastClose}
        />
      </View>
    )
  }
}
