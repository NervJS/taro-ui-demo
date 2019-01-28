import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import {
  AtGrid,
  AtCard,
  AtFloatLayout,
  AtList,
  AtListItem,
  AtAccordion,
} from 'taro-ui'
import DocsHeader from '../components/doc-header'
import './index.scss'

export default class LayoutPage extends Taro.Component {
  config = {
    navigationBarTitleText: 'Taro UI'
  }

  constructor () {
    super(...arguments)
    this.state = {
      data: [
        {
          image:
            'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
          value: '领取中心'
        },
        {
          image:
            'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
          value: '找折扣'
        },
        {
          image:
            'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
          value: '领会员'
        },
        {
          image:
            'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
          value: '新品首发'
        },
        {
          image:
            'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
          value: '领京豆'
        },
        {
          image:
            'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
          value: '手机馆'
        }
      ],
      isFloatLayoutOpened: false,
    }
  }

  handleFloatLayoutChange (flag) {
    this.setState({
      isFloatLayoutOpened: flag
    })
  }

  render () {
    return (
      <View className='page'>
        {/* S Header */}
        <DocsHeader title='布局' desc='6 个组件'></DocsHeader>
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          {/* Flex */}
          <View className='panel'>
            <View className='panel__title'>Flex 弹性布局</View>
            <View className='panel__content'>
              <View className='example-item flex-page'>
                <View className='example-item__desc'>基本案例</View>
                <View className='at-row'>
                  <View className='at-col'>A</View>
                  <View className='at-col'>B</View>
                  <View className='at-col'>C</View>
                </View>
              </View>

              <View className='example-item flex-page'>
                <View className='example-item__desc'>定义长度</View>
                <View className='at-row'>
                  <View className='at-col at-col-3'>A</View>
                  <View className='at-col at-col-6'>B</View>
                  <View className='at-col at-col-2'>C</View>
                  <View className='at-col at-col-1'>D</View>
                </View>
              </View>
            </View>
          </View>

          {/* Grid */}
          <View className='panel'>
            <View className='panel__title'>Grid 栅格</View>
            <View className='panel__content'>
              <View className='example-item'>
                <View className='example-item__desc'>正方形案例</View>
                <AtGrid data={this.state.data} />
              </View>

              <View className='example-item'>
                <View className='example-item__desc'>矩形案例</View>
                <AtGrid mode='rect' data={this.state.data} />
              </View>

              <View className='example-item'>
                <View className='example-item__desc'>没有边框</View>
                <AtGrid hasBorder={false} data={this.state.data} />
              </View>
            </View>
          </View>

          {/* List */}
          <View className='panel'>
            <View className='panel__title'>List</View>
            <View className='panel__content no-padding'>
              <View className='example-item'>
                <AtList>
                  <AtListItem title='标题文字' />
                  <AtListItem title='标题文字' note='描述信息' arrow='right' />
                  <AtListItem
                    arrow='right'
                    note='描述信息'
                    title='标题文字标题文字标题文字标题文字标题文字'
                    extraText='详细信息详细信息详细信息详细信息'
                  />
                  <AtListItem title='禁用状态' disabled extraText='详细信息' />
                </AtList>
              </View>
            </View>
          </View>

          {/* Accordion */}
          <View className='panel'>
            <View className='panel__title'>Accordion 手风琴</View>
            <View className='panel__content no-padding'>
              <View className='example-item'>
                <AtAccordion title='展开列表'>
                  <AtList hasBorder={false}>
                    <AtListItem
                      title='标题文字'
                      thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
                    />
                    <AtListItem
                      title='标题文字'
                      note='描述信息'
                      thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
                    />
                  </AtList>
                </AtAccordion>
              </View>
            </View>
          </View>

          {/* FloatLayout */}
          <View className='panel'>
            <View className='panel__title'>FloatLayout 浮动弹层</View>
            <View className='panel__content'>
              <View className='example-item'>
                <View className='demo-btn' onClick={this.handleFloatLayoutChange.bind(this, true)}>打开 Float Layout</View>
              </View>
            </View>
          </View>

          {/* Card */}
          <View className='panel'>
            <View className='panel__title'>Card 卡片</View>
            <View className='panel__content no-padding'>
              <View className='example-item example-item--card'>
                <View className='example-item__desc'>基础卡片</View>
                <AtCard title='这是个标题'>
                  这也是内容区 可以随意定义功能
                </AtCard>
              </View>

              <View className='example-item example-item--card'>
                <View className='example-item__desc'>带图标的卡片</View>
                <AtCard
                  title='这是个标题'
                  icon={{ value: 'tags', color: '#77a1fd' }}
                >
                  这也是内容区 可以随意定义功能
                </AtCard>
              </View>

              <View className='example-item example-item--card'>
                <View className='example-item__desc'>完整的卡片</View>
                <AtCard
                  note='小Tips'
                  extra='额外信息'
                  title='这是个标题'
                  thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
                >
                  这也是内容区 可以随意定义功能
                </AtCard>
              </View>

              <View className='example-item example-item--card'>
                <View className='example-item__desc'>通栏卡片</View>
                <AtCard
                  isFull
                  note='小Tips'
                  extra='额外信息'
                  title='这是个标题'
                  thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
                >
                  这也是内容区 可以随意定义功能 这也是内容区 可以随意定义功能
                  这也是内容区 可以随意定义功能
                </AtCard>
              </View>
            </View>
          </View>

        </View>
        {/* E Body */}

        <AtFloatLayout
          title='这是个标题'
          isOpened={this.state.isFloatLayoutOpened}
          onClose={this.handleFloatLayoutChange.bind(this, false)}
        >
          <View className='content-wrapper'>
            《诗人继续沉默》收录了耶霍舒亚的十二个中短篇小说。它们以梦境一般的笔法塑造了一个个既敏感又迟钝的角色。故事有时在城市，有时在战场，有时在遥远的山村，有时完全囿于家庭，并总是从司空见惯中生出离奇。每个故事的主线带来不断加剧的紧张感，即使从表面上看，根本没有重要的事情发生：
            封笔的诗人与智力障碍的儿子一起生活；
            绝望的备胎照顾梦中情人与别人的孩子
            外派多年的父亲截取女儿追求者的信件 村民们每日仪式般等候火车经过
            指挥官拒绝命令他的部队上战场 渴睡的工人溜回家休息
            邻居当中有个永生不死的老头 …
            然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
            《诗人继续沉默》收录了耶霍舒亚的十二个中短篇小说。它们以梦境一般的笔法塑造了一个个既敏感又迟钝的角色。故事有时在城市，有时在战场，有时在遥远的山村，有时完全囿于家庭，并总是从司空见惯中生出离奇。每个故事的主线带来不断加剧的紧张感，即使从表面上看，根本没有重要的事情发生：
            封笔的诗人与智力障碍的儿子一起生活；
            绝望的备胎照顾梦中情人与别人的孩子
            外派多年的父亲截取女儿追求者的信件 村民们每日仪式般等候火车经过
            指挥官拒绝命令他的部队上战场 渴睡的工人溜回家休息
            邻居当中有个永生不死的老头 …
            然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
            然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
            然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
            然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
            然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
            然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
            然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
            然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
            然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
          </View>
        </AtFloatLayout>
      </View>
    )
  }
}
