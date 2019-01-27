import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import logoImg from '../../assets/images/logo_taro.png'
import './index.scss'

export default class Index extends Taro.Component {
  config = {
    navigationBarTitleText: 'Taro UI'
  }

  constructor () {
    super(...arguments)

    this.state = {
      list: [
        {
          id: 'Basic',
          title: 'Basic',
          content: '1 component',
        },
        {
          id: 'View',
          title: 'View',
          content: '8 components',
        },
        {
          id: 'Feedback',
          title: 'Feedback',
          content: '7 components',
        },
        {
          id: 'Data-entry',
          title: 'Data Entry',
          content: '13 components',
        },
        {
          id: 'Layout',
          title: 'Layout',
          content: '6 components',
        },
        {
          id: 'Navigation',
          title: 'Navigation',
          content: '7 components',
        }, {
          id: 'Advanced',
          title: 'Advanced',
          content: '1 components',
        }
      ]
    }
  }

  onShareAppMessage () {
    return {
      title: 'Taro UI',
      path: '/pages/index/index',
      imageUrl: 'http://storage.360buyimg.com/mtd/home/share1535013100318.jpg'
    }
  }

  gotoPanel = e => {
    const { id } = e.currentTarget.dataset
    Taro.navigateTo({
      // url: `/pages/panel/index?id=${id.toLowerCase()}`
      url: `/pages/${id.toLowerCase()}/index`
    })
  }

  render () {
    const { list } = this.state

    return (
      <View className='page page-index'>
        <View className='logo'>
          <Image src={logoImg} className='img' mode='widthFix' />
        </View>
        <View className='page-title'>Taro UI</View>
        <View className='module-list'>
          {list.map((item, index) => (
            <View
              className='module-list__item'
              key={index}
              data-id={item.id}
              data-name={item.title}
              data-list={item.subpages}
              onClick={this.gotoPanel}
            >
              <View className='module-list__item-title'>{item.title}</View>
              <View className='module-list__item-content'>{item.content}</View>
            </View>
          ))}
        </View>
      </View>
    )
  }
}
