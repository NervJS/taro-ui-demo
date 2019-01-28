import Taro from '@tarojs/taro'
import { View, Image, Swiper, SwiperItem } from '@tarojs/components'
import {
  AtAvatar,
  AtBadge,
  AtButton,
  AtCountdown,
  AtCurtain,
  AtDivider,
  AtLoadMore,
  AtNoticebar,
  AtSteps,
  AtTag,
  AtTimeline,
} from 'taro-ui'
import DocsHeader from '../components/doc-header'
import NavigatorBtn from '../components/navigator-btn'
import './index.scss'

import curtainPng from '../../assets/images/curtain.png'

export default class ViewPage extends Taro.Component {
  config = {
    navigationBarTitleText: 'Taro UI'
  }

  constructor () {
    super(...arguments)
    this.state = {
      isCurtainOpened: false,
      loadMoreStatus: 'more',
      stepsCurrent1: 0,
      stepsCurrent2: 0,
      stepsCurrent3: 0,
      stepsCurrent4: 1,
      imgUrls: [
        'https://img10.360buyimg.com/babel/s700x360_jfs/t25855/203/725883724/96703/5a598a0f/5b7a22e1Nfd6ba344.jpg!q90!cc_350x180',
        'https://img11.360buyimg.com/babel/s700x360_jfs/t1/4776/39/2280/143162/5b9642a5E83bcda10/d93064343eb12276.jpg!q90!cc_350x180',
        'https://img14.360buyimg.com/babel/s700x360_jfs/t1/4099/12/2578/101668/5b971b4bE65ae279d/89dd1764797acfd9.jpg!q90!cc_350x180'
      ],
      hollowTagList: [
        { name: '标签1', active: false },
        { name: '标签2', active: false },
        { name: '标签3', active: true },
        { name: '标签4', active: true }
      ],
      solidTagList: [
        { name: '标签1', active: false },
        { name: '标签2', active: false },
        { name: '标签3', active: true },
        { name: '标签4', active: true }
      ],
      hollowTagList2: [
        { name: '标签1', active: false },
        { name: '标签2', active: false },
        { name: '标签3', active: true },
        { name: '标签4', active: true }
      ],
      solidTagList2: [
        { name: '标签1', active: false },
        { name: '标签2', active: false },
        { name: '标签3', active: true },
        { name: '标签4', active: true }
      ],
    }
  }

  handleCurtainClick (flag) {
    this.setState({
      isCurtainOpened: flag,
    })
  }

  handleLoadMoreClick () {
    this.setState({
      loadMoreStatus: 'loading'
    })
    setTimeout(() => {
      this.setState({
        loadMoreStatus: 'noMore'
      })
    }, 2000)
  }

  handleStepsChange (stateName, current) {
    this.setState({
      [stateName]: current
    })
  }

  handleHollowClick (data) {
    const { hollowTagList } = this.state
    const findIndex = hollowTagList.findIndex(item => item.name === data.name)

    hollowTagList[findIndex].active = !hollowTagList[findIndex].active
    this.setState({ hollowTagList })
  }

  handleSolidClick (data) {
    const { solidTagList } = this.state
    const findIndex = solidTagList.findIndex(item => item.name === data.name)

    solidTagList[findIndex].active = !solidTagList[findIndex].active
    this.setState({ solidTagList })
  }

  handleHollowSmallClick (data) {
    const { hollowTagList2 } = this.state
    const findIndex = hollowTagList2.findIndex(item => item.name === data.name)

    hollowTagList2[findIndex].active = !hollowTagList2[findIndex].active
    this.setState({ hollowTagList2 })
  }

  handleSolidSmallClick (data) {
    const { solidTagList2 } = this.state
    const findIndex = solidTagList2.findIndex(item => item.name === data.name)

    solidTagList2[findIndex].active = !solidTagList2[findIndex].active
    this.setState({ solidTagList2 })
  }

  render () {
    const { isCurtainOpened, loadMoreStatus } = this.state
    const avatarImg = 'http://storage.360buyimg.com/mtd/home/32443566_635798770100444_2113947400891531264_n1533825816008.jpg'
    const dot = '···'

    return (
      <View className='page'>
        {/* S Header */}
        <DocsHeader title='视图' desc='8 个组件'></DocsHeader>
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          {/* Article */}
          <View className='panel'>
            <View className='panel__title'>Article 文章</View>
            <View className='panel__content'>
              <View className='example-item'>
                <NavigatorBtn parent='view' name='article'></NavigatorBtn>
              </View>
            </View>
          </View>

          {/* Avatar */}
          <View className='panel'>
            <View className='panel__title'>Avatar 头像</View>
            <View className='panel__content'>
              {/* 圆形头像 */}
              <View className='example-item'>
                <View className='subitem'>
                  <AtAvatar circle size='small' image={avatarImg}></AtAvatar>
                </View>
                <View className='subitem'>
                  <AtAvatar circle image={avatarImg}></AtAvatar>
                </View>
                <View className='subitem'>
                  <AtAvatar circle size='large' image={avatarImg}></AtAvatar>
                </View>
              </View>
              {/* 圆角矩形头像 */}
              <View className='example-item'>
                <View className='subitem'>
                  <AtAvatar size='small' image={avatarImg}></AtAvatar>
                </View>
                <View className='subitem'>
                  <AtAvatar image={avatarImg}></AtAvatar>
                </View>
                <View className='subitem'>
                  <AtAvatar size='large' image={avatarImg}></AtAvatar>
                </View>
              </View>
              {/* 圆形头像（支持文本） */}
              <View className='example-item'>
                <View className='subitem'>
                  <AtAvatar circle size='small' text='凹'></AtAvatar>
                </View>
                <View className='subitem'>
                  <AtAvatar circle text='凹'></AtAvatar>
                </View>
                <View className='subitem'>
                  <AtAvatar circle size='large' text='凹'></AtAvatar>
                </View>
              </View>
            </View>
          </View>

          {/* Badge */}
          <View className='panel'>
            <View className='panel__title'>Badge 徽标</View>
            <View className='panel__content'>
              {/* 数字 + 小红点 */}
              <View className='example-item'>
                <View className='subitem subitem--badge'>
                  <AtBadge value='10' maxValue={99}>
                    <AtButton size='small' circle>按钮</AtButton>
                  </AtBadge>
                </View>
                <View className='subitem subitem--badge'>
                  <AtBadge value='100' maxValue={99}>
                    <AtButton size='small'>按钮</AtButton>
                  </AtBadge>
                </View>
                <View className='subitem subitem--badge'>
                  <AtBadge dot>
                    <AtButton size='small' circle>按钮</AtButton>
                  </AtBadge>
                </View>
                <View className='subitem subitem--badge'>
                  <AtBadge dot>
                    <AtButton size='small'>按钮</AtButton>
                  </AtBadge>
                </View>
              </View>

              {/* 文本 + 省略号 */}
              <View className='example-item'>
                <View className='subitem subitem--badge'>
                  <AtBadge value='NEW'>
                    <AtButton size='small' circle>按钮</AtButton>
                  </AtBadge>
                </View>
                <View className='subitem subitem--badge'>
                  <AtBadge value='NEW'>
                    <AtButton size='small'>按钮</AtButton>
                  </AtBadge>
                </View>
                <View className='subitem subitem--badge'>
                  <AtBadge value={dot}>
                    <AtButton size='small' circle>按钮</AtButton>
                  </AtBadge>
                </View>
                <View className='subitem subitem--badge'>
                  <AtBadge value={dot}>
                    <AtButton size='small'>按钮</AtButton>
                  </AtBadge>
                </View>
              </View>
            </View>
          </View>

          {/* Tag */}
          <View className='panel'>
            <View className='panel__title'>Tag 标签</View>
            <View className='panel__content'>
              {/* 空心标签 */}
              <View className='example-item'>
                {this.state.hollowTagList.map((item, index) => (
                  <View className='subitem' key={index}>
                    <AtTag
                      name={item.name}
                      active={item.active}
                      circle={index % 2 === 0}
                      onClick={this.handleHollowClick.bind(this)}
                    >标签</AtTag>
                  </View>
                ))}
              </View>

              {/* 实心标签 */}
              <View className='example-item'>
                {this.state.solidTagList.map((item, index) => (
                  <View className='subitem' key={index}>
                    <AtTag
                      type='primary'
                      name={item.name}
                      active={item.active}
                      circle={index % 2 === 0}
                      onClick={this.handleSolidClick.bind(this)}
                    >标签</AtTag>
                  </View>
                ))}
              </View>

              {/* 不可点击态 */}
              <View className='example-item'>
                <View className='subitem'>
                  <AtTag type='primary' circle disabled>标签</AtTag>
                </View>
                <View className='subitem'>
                  <AtTag type='primary' disabled>标签</AtTag>
                </View>
              </View>

              {/* 空心标签（小） */}
              <View className='example-item'>
                {this.state.hollowTagList2.map((item, index) => (
                  <View className='subitem' key={index}>
                    <AtTag
                      size='small'
                      name={item.name}
                      active={item.active}
                      circle={index % 2 === 0}
                      onClick={this.handleHollowSmallClick.bind(this)}
                    >标签</AtTag>
                  </View>
                ))}
              </View>

              {/* 实心标签（小） */}
              <View className='example-item'>
                {this.state.solidTagList2.map((item, index) => (
                  <View className='subitem' key={index}>
                    <AtTag
                      size='small'
                      type='primary'
                      name={item.name}
                      active={item.active}
                      circle={index % 2 === 0}
                      onClick={this.handleSolidSmallClick.bind(this)}
                    >标签</AtTag>
                  </View>
                ))}
              </View>

              {/* 不可点击态（小） */}
              <View className='example-item'>
                <View className='subitem'>
                  <AtTag size='small' type='primary' circle disabled>标签</AtTag>
                </View>
                <View className='subitem'>
                  <AtTag size='small' type='primary' disabled>标签</AtTag>
                </View>
              </View>
            </View>
          </View>

          {/* Countdown */}
          <View className='panel'>
            <View className='panel__title'>Countdown 倒计时</View>
            <View className='panel__content'>
              {/* 一般用法 */}
              <View className='example-item'>
                <AtCountdown minutes={5} seconds={10} />
              </View>
              <View className='example-item'>
                <AtCountdown isShowDay hours={1} minutes={5} seconds={10} />
              </View>

              {/* 自定义格式 */}
              <View className='example-item'>
                <AtCountdown
                  format={{ hours: ':', minutes: ':', seconds: '' }}
                  minutes={5}
                  seconds={10}
                />
              </View>

              {/* 卡片式 */}
              <View className='example-item'>
                <AtCountdown
                  isCard
                  isShowDay
                  day={1}
                  minutes={5}
                  seconds={10}
                  format={{ day: '天', hours: ':', minutes: ':', seconds: '' }}
                />
              </View>
            </View>
          </View>

          {/* Curtain */}
          <View className='panel'>
            <View className='panel__title'>Curtain 幕帘</View>
            <View className='panel__content'>
              {/* 一般用法 */}
              <View className='example-item'>
                <View
                  className='demo-btn'
                  onClick={this.handleCurtainClick.bind(this, true)}
                >显示幕帘</View>
              </View>
            </View>
          </View>

          {/* Noticebar */}
          <View className='panel'>
            <View className='panel__title'>Noticebar 通告栏</View>
            <View className='panel__content'>
              {/* 一般用法 */}
              <View className='example-item'>
                <AtNoticebar single>[单行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏</AtNoticebar>
              </View>
              <View className='example-item'>
                <AtNoticebar icon='volume-plus' single>[单行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏</AtNoticebar>
              </View>
              <View className='example-item'>
                <AtNoticebar>[多行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏</AtNoticebar>
              </View>

              {/* 跑马灯 */}
              <View className='example-item'>
                <AtNoticebar marquee>[纯文字]这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏[结束]</AtNoticebar>
              </View>
              <View className='example-item'>
                <AtNoticebar marquee icon='volume-plus'>[带icon]这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏[结束]</AtNoticebar>
              </View>

              {/* 查看更多 */}
              <View className='example-item'>
                <AtNoticebar showMore single>[单行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏</AtNoticebar>
              </View>

              {/* 关闭按钮 */}
              <View className='example-item'>
                <AtNoticebar close single>[单行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏</AtNoticebar>
              </View>
              <View className='example-item'>
                <AtNoticebar close>[多行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏</AtNoticebar>
              </View>
            </View>
          </View>

          {/* Steps */}
          <View className='panel'>
            <View className='panel__title'>Steps 步骤条</View>
            <View className='panel__content'>
              {/* 一般用法 */}
              <View className='example-item example-item--steps'>
                <AtSteps
                  items={[
                    { 'title': '步骤一' },
                    { 'title': '步骤二' }
                  ]}
                  current={this.state.stepsCurrent1}
                  onChange={this.handleStepsChange.bind(this, 'stepsCurrent1')}
                />
              </View>

              {/* 带附加信息 */}
              <View className='example-item example-item--steps'>
                <AtSteps
                  items={[
                    { 'title': '步骤一', 'desc': '这里是额外的信息，最多两行' },
                    { 'title': '步骤二', 'desc': '这里是额外的信息，最多两行' },
                    { 'title': '步骤三', 'desc': '这里是额外的信息，最多两行' }
                  ]}
                  current={this.state.stepsCurrent2}
                  onChange={this.handleStepsChange.bind(this, 'stepsCurrent2')}
                />
              </View>

              {/* 自定义图标 */}
              <View className='example-item example-item--steps'>
                <AtSteps
                  items={[
                    {
                      'title': '步骤一',
                      'desc': '这里是额外的信息，最多两行',
                      'icon': {
                        value: 'sound',
                        activeColor: '#fff',
                        inactiveColor: '#78A4FA',
                        size: '14',
                      }
                    },
                    {
                      'title': '步骤二',
                      'desc': '这里是额外的信息，最多两行',
                      'icon': {
                        value: 'shopping-cart',
                        activeColor: '#fff',
                        inactiveColor: '#78A4FA',
                        size: '14',
                      }
                    },
                    {
                      'title': '步骤三',
                      'desc': '这里是额外的信息，最多两行',
                      'icon': {
                        value: 'camera',
                        activeColor: '#fff',
                        inactiveColor: '#78A4FA',
                        size: '14',
                      }
                    }
                  ]}
                  current={this.state.stepsCurrent3}
                  onChange={this.handleStepsChange.bind(this, 'stepsCurrent3')}
                />
              </View>

              {/* 状态步骤条 */}
              <View className='example-item example-item--steps'>
                <AtSteps
                  items={[
                    {
                      title: '步骤一',
                      desc: '这里是额外的信息，最多两行',
                      status: 'success'
                    },
                    {
                      title: '步骤二',
                      desc: '这里是额外的信息，最多两行'
                    },
                    {
                      title: '步骤三',
                      desc: '这里是额外的信息，最多两行',
                      status: 'error'
                    }
                  ]}
                  current={this.state.stepsCurrent4}
                  onChange={this.handleStepsChange.bind(this, 'stepsCurrent4')}
                />
              </View>

            </View>
          </View>

          {/* Swiper */}
          <View className='panel'>
            <View className='panel__title'>Swiper 滑块视图容器</View>
            <View className='panel__content'>
              {/* 一般用法 */}
              <View className='example-item'>
                <Swiper
                  indicatorColor='#999'
                  indicatorActiveColor='#333'
                  current={1}
                  duration={500}
                  interval={5000}
                  circular
                  autoplay
                  indicatorDots
                  preMargin='20'
                >
                  {
                    this.state.imgUrls.map((item, idx) => (
                      <SwiperItem key={idx}>
                        <Image mode='widthFix' src={item} className='slide-image' width='355' height='150' />
                      </SwiperItem>
                    ))
                  }
                </Swiper>
              </View>
            </View>
          </View>

          {/* Timeline */}
          <View className='panel'>
            <View className='panel__title'>Timeline 时间轴</View>
            <View className='panel__content'>
              {/* 一般用法 */}
              <View className='example-item'>
                <View className='example-item__desc'>一般用法</View>
                <AtTimeline
                  items={[
                    { title: '刷牙洗脸' },
                    { title: '吃早餐' },
                    { title: '上班' },
                    { title: '睡觉' }
                  ]}
                ></AtTimeline>
              </View>

              {/* 自定义图标 */}
              <View className='example-item'>
                <View className='example-item__desc'>自定义图标</View>
                <AtTimeline
                  items={[
                    { title: '刷牙洗脸', icon: 'check-circle' },
                    { title: '吃早餐', icon: 'clock' },
                    { title: '上班', icon: 'clock' },
                    { title: '睡觉', icon: 'clock' }
                  ]}
                ></AtTimeline>
              </View>

              {/* 幽灵节点 */}
              <View className='example-item'>
                <View className='example-item__desc'>幽灵节点</View>
                <AtTimeline
                  pending
                  items={[
                    { title: '刷牙洗脸' },
                    { title: '吃早餐' },
                    { title: '上班' },
                    { title: '睡觉' }
                  ]}
                ></AtTimeline>
              </View>

              {/* 丰富内容 */}
              <View className='example-item'>
                <View className='example-item__desc'>丰富内容</View>
                <AtTimeline
                  pending
                  items={[
                    { title: '刷牙洗脸', content: ['大概8:00'], icon: 'check-circle' },
                    { title: '吃早餐', content: ['牛奶+面包', '餐后记得吃药'], icon: 'clock' },
                    { title: '上班', content: ['查看邮件', '写PPT', '发送PPT给领导'], icon: 'clock' },
                    { title: '睡觉', content: ['不超过23:00'], icon: 'clock' }
                  ]}
                ></AtTimeline>
              </View>
            </View>

            {/* Divider */}
            <View className='panel'>
              <View className='panel__title'>Divider 分隔线</View>
              <View className='panel__content'>
                {/* 一般用法 */}
                <View className='example-item'>
                  <AtDivider content='没有更多了' />
                </View>
              </View>
            </View>

            {/* LoadMore */}
            <View className='panel'>
              <View className='panel__title'>Load More 页面提示</View>
              <View className='panel__content no-padding'>
                {/* 一般用法 */}
                <View className='example-item'>
                  <AtLoadMore onClick={this.handleLoadMoreClick.bind(this)} status={loadMoreStatus} />
                </View>
              </View>
            </View>

          </View>

        </View>
        {/* E Body */}

        <AtCurtain
          isOpened={isCurtainOpened}
          closeBtnPosition='bottom'
          onClose={this.handleCurtainClick.bind(this, false)}
        >
          <Image
            style='width:100%'
            mode='widthFix'
            src={curtainPng}
          />
        </AtCurtain>
      </View>
    )
  }
}
