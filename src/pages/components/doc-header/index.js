import Taro, { Component } from '@tarojs/taro'
import PropTypes from 'prop-types'
import { View } from '@tarojs/components'

import './index.scss'

export default class DocsHeader extends Component {
  render () {
    const { title, desc } = this.props

    return (
      <View className='doc-header'>
        <View className='doc-header__title'>{title}</View>
        <View className='doc-header__desc'>{desc}</View>
      </View>
    )
  }
}

DocsHeader.defaultProps = {
  title: '标题',
  desc: '',
}

DocsHeader.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
}
